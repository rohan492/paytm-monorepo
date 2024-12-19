"use client";
import { useBalance } from "@repo/store/useBalance";
import { Button } from "../../components/Button";
import Link from "next/link";

export default function Comp() {
  const balance = useBalance();
  return (
    <div className="text-2xl flex flex-col justify-center items-center h-screen gap-2">
      <p>Hi There Rohan.</p>
      <div className="flex gap-2 items-center">
        <p>Your Balance is:</p>
        <p className="border-b p-2 border-black rounded-md hover:scale-110 duration-300 ease-in-out hover:border-indigo-500 hover:border-b-2">
          {balance}
        </p>
      </div>
      <Button otherClasses={"mt-2"}>
        <Link className="text-sm px-2 py-1" href="/">Go Back Home</Link>
      </Button>
    </div>
  );
}
