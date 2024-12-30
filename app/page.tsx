"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Push to the /home page when the component is mounted
    router.push("/home");
  }, [router]);

  return <div className="text-center">Welcome to Mehaserv </div>;
}
