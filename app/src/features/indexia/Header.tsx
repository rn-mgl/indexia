"use client";

import React from "react";
import Logo from "../../components/global/Logo";
import { useRouter } from "next/navigation";
import { LogoutApiResponse } from "../../interfaces/auth.interface";

const Header = () => {
  const router = useRouter();

  const logout = async () => {
    try {
      const response = await fetch(`/api/auth/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const resolve: LogoutApiResponse = await response.json();

      if (!resolve.success) {
        throw new Error(resolve.data.error);
      }

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex flex-col ">
      <div className="w-full flex flex-row items-center justify-between text-sm p-4 l-s:text-base gap-4">
        <Logo />

        <button className="font-body text-text/50 text-xs" onClick={logout}>
          Sign Out
        </button>
      </div>
      <div className="w-full flex flex-col items-start justify-between text-sm p-4 l-s:text-base gap-4">
        <div className="flex flex-row items-center justify-between gap-4 font-body l-s:text-sm">
          <div className="p-2 rounded-lg border-text/10 border bg-surface text-white flex flex-row gap-2 items-center">
            <p>🔥</p>

            <div className="font-body leading-4">
              <p className="text-text/50 text-[0.6rem] tracking-widest">
                STREAK
              </p>
              <p className="font-bold">4</p>
            </div>
          </div>

          <div className="p-2 rounded-lg border-text/10 border bg-surface text-white flex flex-row gap-2 items-center">
            <p>🪙</p>

            <div className="font-body leading-4">
              <p className="text-text/50 text-[0.6rem] tracking-widest">
                CREDITS
              </p>
              <p className="font-bold">1,006</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
