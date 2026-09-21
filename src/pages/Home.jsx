import { useSEO } from "../hooks";

const Home = () => {
  useSEO({
    title: "KANI | Something Big is Brewing",
    description:
      "KANI is building innovative business solutions. Join our waitlist for updates on our upcoming launch. Under development.",
  });
  return (
    <div>
      <main class="flex-grow pt-20 relative overflow-hidden">
        <div class="absolute inset-0 grid-overlay z-0 pointer-events-none"></div>

        <header class="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-[80px] md:pt-section-gap pb-section-gap flex flex-col items-center justify-center text-center">
          <div class="dev-badge px-4 py-2 rounded-full mb-8 inline-flex items-center gap-2">
            <span
              class="material-symbols-outlined text-secondary text-[16px]"
              style="font-variation-settings: 'FILL' 0;"
            >
              build
            </span>
            <span class="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
              Development in Progress
            </span>
          </div>
          <h1 class="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface mb-6 max-w-4xl px-4 md:px-0">
            Something Big is{" "}
            <span class="text-primary-fixed-dim block md:inline mt-2 md:mt-0">
              Brewing at KANI
            </span>
          </h1>
          <p class="font-body-lg text-body-lg text-on-surface-variant mb-10 md:mb-12 max-w-2xl px-4 md:px-0">
            We are architecting the next generation of innovative business
            solutions. Our framework is being meticulously crafted to deliver
            unparalleled performance and professional polish.
          </p>
        </header>
        <section class="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-section-gap">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <article class="glass-card rounded-xl p-8 md:col-span-8 flex flex-col justify-end min-h-[300px] relative overflow-hidden group">
              <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0"></div>
              <div class="relative z-10">
                <h2 class="font-headline-md text-headline-md text-on-surface mb-2">
                  Structural Integrity
                </h2>
                <p class="font-body-md text-body-md text-on-surface-variant max-w-lg">
                  Building on a rock-solid foundation for enterprise
                  scalability.
                </p>
              </div>
              <span class="material-symbols-outlined absolute top-8 right-8 text-primary-container text-opacity-20 text-[120px] group-hover:scale-110 transition-transform duration-500 ease-out z-0">
                architecture
              </span>
            </article>
            <article class="glass-card rounded-xl p-8 md:col-span-4 flex flex-col justify-end min-h-[300px] relative overflow-hidden group">
              <div class="absolute inset-0 bg-gradient-to-tr from-secondary/5 to-transparent z-0"></div>
              <div class="relative z-10">
                <div class="dev-badge px-3 py-1 rounded-full mb-4 inline-flex w-fit">
                  <span class="font-label-caps text-label-caps text-secondary uppercase">
                    Module Beta
                  </span>
                </div>
                <h2 class="font-headline-sm text-headline-sm text-on-surface mb-2">
                  Precision Analytics
                </h2>
                <p class="font-body-md text-body-md text-on-surface-variant">
                  Data clarity redefined.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
