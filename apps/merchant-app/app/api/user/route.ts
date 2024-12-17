import { NextResponse } from "next/server"
import { PrismaClient } from "@repo/db/client";

const client = new PrismaClient();

export const GET = async () => {
    await client.user.create({
        data: {
            number: "123123123",
            password: "123123123"
        }
    })
    return NextResponse.json({
        message: "hi there"
    })
}