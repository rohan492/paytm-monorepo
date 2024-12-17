"use client"

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./components/Button";
import { Appbar } from "@repo/ui/appbar";

export default function Page() {
  const session = useSession();
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-2">
      <div className="absolute top-0 w-full">
        <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user} />
      </div>
      <p className="text-2xl">Hi There, Rohan</p>
      <Button>
        <Link href="balance" className="text-sm px-2 py-1">
          Check your Balance
        </Link>
      </Button>
    </div>
  );
}
