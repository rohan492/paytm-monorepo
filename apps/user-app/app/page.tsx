import { PrismaClient } from "@repo/db/client";
import Link from "next/link";
import { Button } from "./components/Button";
const client = new PrismaClient()

export default function Page() {
  console.log(client)
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-2">
      <p className="text-2xl">Hi There, Rohan</p>
      <Button>
        <Link href="balance" className="text-sm px-2 py-1">
          Check your Balance
        </Link>
      </Button>
    </div>
  );
}
