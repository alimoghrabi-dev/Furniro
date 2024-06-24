"use client";

import { useClerk } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";

const SignOutButtonComp = () => {
  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <button onClick={() => signOut(() => router.push("/"))}>Log Out</button>
  );
};

export default SignOutButtonComp;
