// import { h } from 'preact';
import { useRouter, route } from "preact-router";

const Navbar = () => {
  // Get the current router state to track the active URL
  const [{ url }] = useRouter();

  // Helper function to apply active or inactive classes dynamically
  const getNavClass = (path) => {
    const isActive = url === path;
    return isActive
      ? "text-primary dark:text-primary-fixed-dim border-b-2 border-primary pb-1 transition-colors duration-300 ease-in-out"
      : "text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-300 ease-in-out";
  };

  return (
    <header class="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-lg border-b border-outline-variant/10">
      <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between h-20">
        {/* SEO: Changed to an anchor tag. Added aria-label for accessibility. */}

        <a
          href="/"
          aria-label="KANI Home"
          class="flex items-center gap-3 w-fit no-underline group cursor-pointer"
        >
          {/* LOGO ICON */}
          {/* Note: Gave it a specific width (w-8) so the mask has a canvas to render on */}
          <div
            class="h-8 w-8 bg-[#d0c4df] [mask-image:url('./kani_icon_black.svg')] [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat] group-hover:bg-primary transition-colors duration-200"
            aria-hidden="true"
          ></div>

          {/* BRAND TEXT */}
          <span class="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed-dim tracking-tight">
            KANI
          </span>
        </a>

        <nav class="hidden md:flex items-center gap-gutter font-body-md text-body-md">
          {/* SEO: Changed to anchor tags with href attributes */}
          <a
            href="/"
            class={getNavClass("/")}
            aria-current={url === "/" ? "page" : undefined}
          >
            Home
          </a>

          <a
            href="/terms"
            class={getNavClass("/terms")}
            aria-current={url === "/terms" ? "page" : undefined}
          >
            Terms
          </a>

          <a
            href="/privacy"
            class={getNavClass("/privacy")}
            aria-current={url === "/privacy" ? "page" : undefined}
          >
            Privacy
          </a>
        </nav>

        {/* 
          NOTE: If "Contact Us" navigates to a new route (e.g., /contact), 
          change this to an <a> tag as well. If it opens a modal or triggers 
          a JavaScript action, keeping it as a <button> is correct. 
        */}
        <button
          onClick={() => route("/terms#contacts")}
          class="w-full sm:w-auto bg-primary text-on-primary px-6 py-3 min-h-[48px] rounded-lg font-body-md text-body-md hover:bg-primary-fixed transition-colors whitespace-nowrap hidden sm:block"
        >
          Contact Us
        </button>

        {/* Accessibility: Added aria-label to icon buttons for screen readers */}
        <button
          class="md:hidden text-on-surface-variant"
          aria-label="Open mobile menu"
          hidden
        >
          <span class="material-symbols-outlined" aria-hidden="true">
            menu
          </span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
