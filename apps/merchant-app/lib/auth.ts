import GoogleProvider from "next-auth/providers/google";
import db from "@repo/db/client";
import { AuthOptions, User, Account } from "next-auth";

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
    ],
    callbacks: {
        async signIn({ user, account }: { 
            user: User; 
            account: Account | null 
        }) {
            console.log("hi signin");

            if (!user.email) {
                return false;
            }

            await db.merchant.upsert({
                select: { id: true },
                where: { email: user.email },
                create: {
                    email: user.email,
                    name: user.name ?? "Unknown",
                    auth_type: account?.provider === "google" ? "Google" : "Github",
                },
                update: {
                    name: user.name ?? "Unknown",
                    auth_type: account?.provider === "google" ? "Google" : "Github",
                },
            });

            return true;
        },
    },
    secret: process.env.NEXTAUTH_SECRET || "secret",
};
