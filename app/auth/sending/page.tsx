import ResendForm from "@/app/src/components/auth/sending/ResendForm";
import Logo from "@/app/src/components/global/Logo";
import Link from "next/link";
import React from "react";

const Sending = () => {
  return (
    <div className="w-full h-full flex flex-row items-center justify-center">
      <div
        className="w-full hidden t:flex p-4 t:p-8 bg-surface border-r 
                    border-text/10 h-full flex-col items-end justify-center gap-4 z-10"
      >
        <div className="w-full h-full max-w-(--breakpoint-t) flex flex-col items-start justify-between">
          <div className="hidden t:flex text-sm">
            <Logo />
          </div>

          <div className="flex flex-col gap-4 w-full">
            <p className="text-text font-bold text-3xl t:text-4xl l-s:text-5xl font-header">
              One quick step <br />{" "}
              <span className="text-primary">Confirm your email.</span>
            </p>

            <div className="w-full flex flex-col items-start gap-2">
              <div className="flex flex-row gap-2 text-sm text-text/50 font-light l-s:text-base font-body items-center justify-start">
                <div className="w-2 h-2 rounded-full bg-primary"></div>{" "}
                <span>Keeps your credits and streak safe</span>
              </div>

              <div className="flex flex-row gap-2 text-sm text-text/50 font-light l-s:text-base font-body items-center justify-start">
                <div className="w-2 h-2 rounded-full bg-primary"></div>{" "}
                <span>Secure token</span>
              </div>

              <div className="flex flex-row gap-2 text-sm text-text/50 font-light l-s:text-base font-body items-center justify-start">
                <div className="w-2 h-2 rounded-full bg-primary"></div>{" "}
                <span>Takes less than a minute</span>
              </div>
            </div>
          </div>

          <div className="bg-background border-text/10 border text-accent font-mono text-xs p-1 rounded-md">
            Play credits only · no real money
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between p-4 w-full h-full relative t:p-8">
        <div className="w-full flex flex-col items-center justify-between gap-8 h-full max-w-(--breakpoint-t)">
          <div className="aspect-square w-full max-w-96 bg-surface rounded-full absolute blur-3xl z-0 top-0 left-0"></div>

          <div className="w-full flex flex-row items-center justify-between text-sm l-s:text-base z-10 relative">
            <div className="t:hidden">
              <Logo />
            </div>

            <div className="hidden t:flex flex-row items-center justify-between gap-4 font-body text-xs l-s:text-sm">
              <Link href="/" className="text-text/50">
                Back
              </Link>
            </div>
          </div>

          <div className="w-full flex flex-col max-w-(--breakpoint-m-l) z-10 gap-4">
            <div className="flex flex-col gap-4 w-full h-full justify-between">
              <div className="flex flex-col gap-2 w-full">
                <p className="text-text font-bold text-3xl t:text-4xl l-s:text-5xl font-header">
                  Check your inbox
                </p>

                <p className="text-sm text-text/50 font-light l-s:text-base font-body">
                  We sent a verification link to you. Click it to activate your
                  account. The link expires in 1 hour.
                </p>
              </div>
            </div>

            <ResendForm />

            <div>
              <p className="text-text/50 font-light font-body text-xs">
                Enter your email to resend
              </p>
            </div>
          </div>

          <div></div>

          <div className="aspect-square w-full max-w-72 bg-primary/5 rounded-full bottom-0 right-0 absolute blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Sending;
