import React from "react";

export const Button = ({
  children,
  otherClasses,
}: {
  children: React.ReactNode;
  otherClasses?: React.ReactNode;
}) => {
  return (
    <div
      className={`text-sm px-2 py-1 border bg-indigo-500 flex justify-center items-center rounded-md text-white hover:scale-110 duration-300 ease-in-out ${otherClasses}`}
    >
      {children}
    </div>
  );
};
