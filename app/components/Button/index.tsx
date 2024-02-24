"use client";

import { IButton } from "@/app/Interfaces/components/Button";
import Link from "next/link";

export default function Button(props: IButton) {
  const { style, children, onClick = () => {}, pathName } = props;

  const handleClick = () => {
    onClick();
  };
  return (
    <Link href={`${pathName}`}>
      <button style={style} onClick={() => handleClick()}>
        {children}
      </button>
    </Link>
  );
}
