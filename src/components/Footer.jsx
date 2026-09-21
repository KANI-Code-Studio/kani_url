import {route} from 'preact-router'

const Footer = () => {
  return (
    <div>
      <footer class="w-full bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant/10">
        <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap flex flex-col md:flex-row justify-between items-start gap-gutter">
          <div class="flex flex-col gap-unit mb-8 md:mb-0">
            <div class="font-headline-sm text-headline-sm text-on-surface font-bold">
              KANI
            </div>
            <div class="font-legal-text text-legal-text text-on-surface-variant mt-4">
              © 2026 KANI. All rights reserved.
            </div>
          </div>
          <div class="flex flex-col gap-4 font-legal-text text-legal-text">
            <button
              class="text-on-surface-variant hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors duration-200"
              
              onClick={()=> route('/terms')}
            >
              Terms of Service
            </button>
            <button
              class="text-on-surface-variant hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors duration-200"
              onClick={e=>route("/privacy")}
            >
              Privacy Policy
            </button>
            <p
              class="text-on-surface-variant hover:text-secondary dark:hover:text-secondary-fixed-dim transition-colors duration-200"
              
            >
              Contact : +91 6296 386 131
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
