import Logo from "../src/components/global/Logo";
import Header from "../src/features/indexia/Header";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full  h-full">
      <div className="w-full h-full flex flex-col items-center justify-start">
        <div className="w-full h-full max-w-(--breakpoint-l-s) flex flex-col items-center justify-start relative">
          <div className="aspect-square w-full max-w-96 bg-surface rounded-full absolute blur-3xl -z-10"></div>

          <Header />

          <div className="flex flex-col items-start justify-between gap-8 p-4 w-full">
            <div className="font-header flex flex-col gap-4  w-full">
              <p className="text-text font-bold text-2xl t:text-3xl l-s:text-4xl">
                Pick the <span className="text-primary">fastest</span> sort.
                <br />
                Stack your credits.
              </p>

              <p className="text-sm text-text/50 font-light l-s:text-base">
                Four algorithms. One shuffled array. Back the one you think
                finishes first — fewer steps wins the pot.
              </p>

              <div className="border border-text/30 w-fit p-1 rounded-md px-2">
                <p className="text-accent font-mono text-xs text-nowrap">
                  Play credits only · no real money
                </p>
              </div>
            </div>

            <div className="w-full t:flex bg-surface p-4 rounded-xl border border-text/10 h-full flex-col items-start justify-between gap-4 text-xs">
              <div className="items-start justify-start gap-2 w-full h-full grid grid-cols-1 ">
                {/* {algorithmCards} */}
              </div>
            </div>
          </div>

          <div></div>
        </div>

        <div className="aspect-square w-full max-w-72 bg-primary/5 rounded-full bottom-0 right-0 absolute blur-3xl -z-10"></div>
      </div>
    </div>
  );
};

export default Page;
