"use client"

import { SvgSpinnersRingResize } from "@/components/icones";
import { useUserStore } from "@/store/states";
import Image from "next/image";
import { redirect } from "next/navigation"

export default function Home() {
  const setToken = useUserStore((state) => state.setToken);
  const setUserInfo = useUserStore((state) => state.setUserInfo);
  if (typeof window !== "undefined") {
    setTimeout(() => {
      // Redirect to the login page if the user is not authenticated
      const token = localStorage.getItem("xool-token");
      if (!token) {
        redirect("/login");
      }

      // Optionally, you can also check if the user data exists
      const user = localStorage.getItem("xool-user");
      if (!user) {
        redirect("/login");
      }

      // if the user is authenticated, log his info into the store
      const userData = JSON.parse(user);

      setUserInfo(userData);
      setToken(token);

      // If the user is authenticated, redirect to the dashboard
      redirect("/dashboard");


    }, 2000);
  }

  return (
    <div className="flex min-h-screen items-center justify-center">

      <div className="flex flex-col items-center justify-center space-y-4">
        <div>
          <Image src="/xool_black.svg" alt="xool logo" width={100} height={100} />
        </div>
        <SvgSpinnersRingResize className="h-6 w-6" />
      </div>
    </div>
  )

}
