"use client";

import { VerifyApiResponse } from "@/app/src/interfaces/auth.interface";
import Link from "next/link";
import React from "react";

const VerifyForm = (props: { token: string }) => {
  const [status, setStatus] = React.useState<
    "verifying" | "success" | "failed"
  >("verifying");

  React.useEffect(() => {
    const token = props.token;

    if (!token) return;

    const verify = async () => {
      try {
        const response = await fetch(`/api/auth/verify/${token}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const resolve: VerifyApiResponse = await response.json();

        if (!resolve.success) {
          throw new Error(resolve.data.error);
        }

        setStatus("success");
      } catch (error) {
        console.log(error);

        setStatus("failed");
      }
    };

    verify();
  }, [props.token]);

  return (
    <div className="w-full flex flex-col max-w-(--breakpoint-m-l) z-10 gap-4">
      <div className="flex flex-col gap-4 w-full h-full justify-between">
        <div className="flex flex-col gap-2 w-full">
          <p className="text-text font-bold text-3xl t:text-4xl l-s:text-5xl font-header">
            {status === "verifying"
              ? "Verifying your email..."
              : status === "success"
                ? "Email verified"
                : "This link isn't valid"}
          </p>

          <p className="text-sm text-text/50 font-light l-s:text-base font-body">
            {status === "verifying"
              ? " Hang tight, this only takes a moment."
              : status === "success"
                ? "You can proceed to log in"
                : "It may have been copied incorrectly, or it was already used. Request a fresh link to continue."}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-4 w-full">
        <div className="flex w-full flex-col items-center gap-4 font-body text-sm font-medium">
          {status === "failed" ? (
            <>
              <Link
                href="/auth/sending"
                className="w-full p-2 rounded-lg bg-primary text-background font-bold text-center"
              >
                Send me a new link
              </Link>
              <Link
                href="/auth/register"
                className="w-full text-primary font-bold text-center"
              >
                Use a different email
              </Link>
            </>
          ) : status === "success" ? (
            <>
              <Link
                href="/auth/login"
                className="w-full p-2 rounded-lg bg-primary text-background font-bold text-center"
              >
                Log In
              </Link>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyForm;
