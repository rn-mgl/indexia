import Link from "next/link";
import React from "react";
import Logo from "@/components/global/Logo";

const Hero = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <div className="w-full h-full max-w-(--breakpoint-l-s) flex flex-col items-center justify-between relative">
        <div className="aspect-square w-full max-w-96 bg-surface rounded-full absolute blur-3xl -z-10"></div>

        <div className="w-full flex flex-row items-center justify-between text-sm p-4 l-s:text-base">
          <Logo />

          <div className="flex flex-row items-center justify-between gap-4 font-body text-xs l-s:text-sm">
            <Link href="/auth/register" className="text-text/50">
              Sign in
            </Link>
            <Link
              href="/auth/login"
              className="p-2 rounded-lg bg-primary text-background font-medium"
            >
              Sign up
            </Link>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between gap-8 p-4 w-full">
          <div className="font-header flex flex-col gap-4  w-full">
            <p className="text-text font-bold text-3xl t:text-4xl l-s:text-5xl">
              Bet on the code
              <br />
              that <span className="text-primary">runs faster.</span>
            </p>

            <p className="text-sm text-text/50 font-light l-s:text-base">
              Sorting races, Big-O blitz and bug hunts. Wager virtual credits on
              programming algorithms and find out how good your instincts really
              are.
            </p>

            <div className="flex flex-row items-center gap-4 font-body text-sm font-medium t:max-w-(--breakpoint-m-s)">
              <Link
                href="/auth/register"
                className="w-full p-2 rounded-lg bg-primary text-background font-medium text-center"
              >
                Create free account
              </Link>
              <Link
                href="/auth/login"
                className="w-fit text-nowrap text-text/50 border border-text/50 p-2 rounded-lg px-4 text-center"
              >
                Sign In
              </Link>
            </div>

            <p className="text-xs text-text/40 font-light">
              1,000 free credits on signup · no real money, ever
            </p>
          </div>

          <div className="w-full hidden t:flex bg-surface p-4 rounded-xl border border-text/10 h-full flex-col items-start justify-between gap-4 text-xs">
            <div className="flex flex-row items-center justify-between w-full font-header text-primary">
              <div className="flex items-center justify-center gap-4">
                <div className="relative flex flex-col items-center justify-center">
                  <div className="aspect-square w-3 h-3 rounded-full bg-primary animate-ping absolute" />
                  <div className="aspect-square w-2 h-2 rounded-full bg-primary absolute" />
                </div>

                <p className="font-bold">LIVE RACE</p>
              </div>

              <p className="text-text/50 font-mono">#Round 1234</p>
            </div>

            <div className="flex flex-col items-start justify-start gap-4 w-full">
              <div className="bg-background p-8 border-text/30 w-full border rounded-lg"></div>
              <div className="bg-background p-8 border-text/30 w-full border rounded-lg"></div>
              <div className="bg-background p-8 border-text/30 w-full border rounded-lg"></div>
            </div>
          </div>
        </div>

        <div></div>
      </div>

      <div className="w-full p-4 border-t border-t-text/30 flex flex-col gap-4 items-center">
        <div
          className="w-full h-full max-w-(--breakpoint-l-s) flex flex-col items-start 
                        justify-between relative t:justify-start gap-4 t:flex-row t:items-center"
        >
          <div className="flex flex-row items-center justify-between relative t:justify-start t:gap-8 w-full t:w-fit">
            <div className="flex items-start justify-start flex-col text-text">
              <p className="font-mono text-lg">52,901</p>
              <p className="opacity-50 text-xs">rounds played today</p>
            </div>

            <div className="flex items-start justify-start flex-col text-text">
              <p className="font-mono text-lg">4</p>
              <p className="opacity-50 text-xs">game modes</p>
            </div>

            <div className="flex items-start justify-start flex-col text-text">
              <p className="font-mono text-lg">8×</p>
              <p className="opacity-50 text-xs">top payout</p>
            </div>
          </div>

          <div className="border border-text/30 w-fit p-1 rounded-md px-2">
            <p className="text-accent font-mono text-xs text-nowrap">
              Play credits only
            </p>
          </div>
        </div>
      </div>

      <div className="aspect-square w-full max-w-72 bg-primary/5 rounded-full bottom-0 right-0 absolute blur-3xl -z-10"></div>
    </div>
  );
};

export default Hero;
