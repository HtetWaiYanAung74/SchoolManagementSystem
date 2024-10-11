"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function Home() {
  const router = useRouter();
  const onClickRegister = useCallback((): void => {
    router.push("/register/hwya");
  }, []);
  return (
    <div>
      <div onClick={onClickRegister}>Register A Student</div>
    </div>
  );
}
