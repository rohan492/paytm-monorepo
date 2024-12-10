import { PrismaClient } from "@repo/db/client";
const client = new PrismaClient()

export default function Page() {
  console.log(client)
  return (
    <div className="text-2xl flex justify-center items-center h-screen">
      Hi There, Rohan
    </div>
  );
}
