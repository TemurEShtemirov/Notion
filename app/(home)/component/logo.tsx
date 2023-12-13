import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex text-center gap-x-2">
      <Image
        src={"/logo.svg"}
        alt="Logo"
        width={50}
        height={50}
        className="object-coverr dark:hidden"
      />
      <Image
        src={"/logo-dark.svg"}
        alt="Logo"
        width={50}
        height={50}
        className="object-coverr hidden dark:block"
      />
      <p className="font-semibold text-xl">Notion</p>
    </div>
  );
}
