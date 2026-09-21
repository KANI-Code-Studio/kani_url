import { useSEO } from "../hooks";

const Privecy = () => {
  useSEO({
    title: "KANI - Privacy Policy",
    description:
      "KANI is building innovative business solutions. Join our waitlist for updates on our upcoming launch. Under development.",
  });

  return (
    <main class="flex-grow pt-32 pb-16 md:pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
      <header class="mb-12 md:mb-24 text-center md:text-left">
        <h1 class="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary-fixed-dim mb-4">
          Privacy Policy
        </h1>
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto md:mx-0">
          Your privacy is critically important to us. This policy outlines how
          KANI collects, uses, and protects your personal information. Last
          updated: October 2026.
        </p>
      </header>
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
        <aside class="hidden lg:block lg:col-span-3">
          <div class="sticky top-32 glass-panel rounded-xl p-6">
            <h3 class="font-label-caps text-label-caps text-outline mb-4 uppercase">
              Contents
            </h3>
            <nav class="flex flex-col gap-3 font-body-md text-body-md">
              <a
                class="hover:text-primary-fixed-dim transition-colors text-on-surface-variant"
                href="#data-collection"
              >
                1. Data Collection
              </a>
              <a
                class="hover:text-primary-fixed-dim transition-colors text-on-surface-variant"
                href="#use-of-information"
              >
                2. Use of Information
              </a>
              <a
                class="hover:text-primary-fixed-dim transition-colors text-on-surface-variant"
                href="#data-sharing"
              >
                3. Data Sharing
              </a>
              <a
                class="hover:text-primary-fixed-dim transition-colors text-on-surface-variant"
                href="#cookies-tracking"
              >
                4. Cookies &amp; Tracking
              </a>
              <a
                class="hover:text-primary-fixed-dim transition-colors text-on-surface-variant"
                href="#data-security"
              >
                5. Data Security
              </a>
              <a
                class="hover:text-primary-fixed-dim transition-colors text-on-surface-variant"
                href="#your-rights"
              >
                6. Your Rights
              </a>
              <a
                class="hover:text-primary-fixed-dim transition-colors text-on-surface"
                href="#updates"
              >
                7. Updates to Policy
              </a>
            </nav>
          </div>
        </aside>
        <div class="lg:col-span-9 glass-panel rounded-xl p-6 md:p-12 font-legal-text text-legal-text text-on-surface-variant">
          <section class="mb-12" id="data-collection">
            <h2 class="font-headline-md text-headline-md text-tertiary-fixed-dim mb-6 border-b border-outline-variant/20 pb-4">
              1. Data Collection
            </h2>
            <p class="mb-4">
              We collect information to provide better services to all our
              users. The types of personal data we collect include:
            </p>
            <ul class="list-none space-y-2 mb-6 ml-4">
              <li class="flex items-start">
                <span class="text-tertiary-fixed-dim mr-2 mt-1">•</span>
                <span class="">
                  <strong>Account Information:</strong> Name, email address,
                  phone number, and billing details provided during
                  registration.
                </span>
              </li>
              <li class="flex items-start">
                <span class="text-tertiary-fixed-dim mr-2 mt-1">•</span>
                <span class="">
                  <strong>Usage Data:</strong> Information about how you
                  interact with our services, including IP addresses, device
                  identifiers, and browser types.
                </span>
              </li>
              <li class="flex items-start">
                <span class="text-tertiary-fixed-dim mr-2 mt-1">•</span>
                <span class="">
                  <strong>Transaction Data:</strong> Details of payments,
                  services purchased, and historical transaction records.
                </span>
              </li>
            </ul>
          </section>
          <section class="mb-12" id="use-of-information">
            <h2 class="font-headline-md text-headline-md text-secondary-fixed-dim mb-6 border-b border-outline-variant/20 pb-4">
              2. Use of Information
            </h2>
            <p class="mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul class="list-none space-y-2 mb-6 ml-4">
              <li class="flex items-start">
                <span class="text-secondary-fixed-dim mr-2 mt-1">•</span>
                <span class="">
                  To provide, maintain, and improve our services.
                </span>
              </li>
              <li class="flex items-start">
                <span class="text-secondary-fixed-dim mr-2 mt-1">•</span>
                <span class="">
                  To process transactions and send related information,
                  including confirmations and receipts.
                </span>
              </li>
              <li class="flex items-start">
                <span class="text-secondary-fixed-dim mr-2 mt-1">•</span>
                <span class="">
                  To communicate with you about products, services, offers, and
                  provide customer support.
                </span>
              </li>
              <li class="flex items-start">
                <span class="text-secondary-fixed-dim mr-2 mt-1">•</span>
                <span class="">
                  To monitor and analyze trends, usage, and activities to
                  enhance security and user experience.
                </span>
              </li>
            </ul>
          </section>
          <section class="mb-12" id="data-sharing">
            <h2 class="font-headline-md text-headline-md text-primary-fixed-dim mb-6 border-b border-outline-variant/20 pb-4">
              3. Data Sharing
            </h2>
            <p class="mb-4">
              We do not sell your personal data. We may share information under
              the following circumstances:
            </p>
            <p class="mb-4">
              <strong>Service Providers:</strong> We share information with
              third-party vendors, consultants, and other service providers who
              need access to such information to carry out work on our behalf
              (e.g., payment processors like Stripe, cloud hosting providers).
            </p>
            <p class="mb-4">
              <strong>Legal Compliance:</strong> We may disclose your
              information if we believe disclosure is in accordance with, or
              required by, any applicable law, regulation, or legal process.
            </p>
          </section>
          <section class="mb-12" id="cookies-tracking">
            <h2 class="font-headline-md text-headline-md text-tertiary-fixed-dim mb-6 border-b border-outline-variant/20 pb-4">
              4. Cookies &amp; Tracking
            </h2>
            <p class="mb-4">
              We use cookies and similar tracking technologies to track the
              activity on our Service and hold certain information. Cookies are
              files with a small amount of data which may include an anonymous
              unique identifier.
            </p>
            <p class="mb-4">
              You can instruct your browser to refuse all cookies or to indicate
              when a cookie is being sent. However, if you do not accept
              cookies, you may not be able to use some portions of our Service.
            </p>
          </section>
          <section class="mb-12 p-6 rounded-lg glass-panel" id="data-security">
            <h2 class="font-headline-md text-headline-md text-secondary-fixed-dim mb-4">
              5. Data Security
            </h2>
            <p class="mb-4">
              The security of your data is paramount. We implement
              enterprise-grade security measures, including:
            </p>
            <ul class="list-none space-y-2 ml-4">
              <li class="flex items-center">
                <span
                  class="material-symbols-outlined text-secondary-fixed-dim mr-2"
                  style="font-variation-settings: 'FILL' 1;"
                >
                  lock
                </span>
                <span class="">
                  End-to-end encryption for sensitive data in transit and at
                  rest.
                </span>
              </li>
              <li class="flex items-center">
                <span
                  class="material-symbols-outlined text-secondary-fixed-dim mr-2"
                  style="font-variation-settings: 'FILL' 1;"
                >
                  shield
                </span>
                <span class="">
                  Regular third-party security audits and penetration testing.
                </span>
              </li>
              <li class="flex items-center">
                <span
                  class="material-symbols-outlined text-secondary-fixed-dim mr-2"
                  style="font-variation-settings: 'FILL' 1;"
                >
                  verified_user
                </span>
                <span class="">
                  Strict access controls for internal personnel based on the
                  principle of least privilege.
                </span>
              </li>
            </ul>
          </section>
          <section class="mb-12" id="your-rights">
            <h2 class="font-headline-md text-headline-md text-tertiary-fixed-dim mb-6 border-b border-outline-variant/20 pb-4">
              6. Your Rights
            </h2>
            <p class="mb-4">
              Depending on your location, you may have specific rights regarding
              your personal data:
            </p>
            <ul class="list-none space-y-2 mb-6 ml-4">
              <li class="flex items-start">
                <span class="text-tertiary-fixed-dim mr-2 mt-1">•</span>
                <span class="">
                  <strong>Access:</strong> The right to request copies of your
                  personal data.
                </span>
              </li>
              <li class="flex items-start">
                <span class="text-tertiary-fixed-dim mr-2 mt-1">•</span>
                <span class="">
                  <strong>Rectification:</strong> The right to request
                  correction of inaccurate information.
                </span>
              </li>
              <li class="flex items-start">
                <span class="text-tertiary-fixed-dim mr-2 mt-1">•</span>
                <span class="">
                  <strong>Erasure:</strong> The right to request deletion of
                  your personal data under certain conditions.
                </span>
              </li>
            </ul>
            <p class="">
              To exercise these rights, please contact our Data Protection
              Officer at privacy@kani.com.
            </p>
          </section>
          <section class="mb-8" id="updates">
            <h2 class="font-headline-md text-headline-md text-primary-fixed-dim mb-6 border-b border-outline-variant/20 pb-4">
              7. Updates to Policy
            </h2>
            <p class="">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last updated" date. You are advised to
              review this Privacy Policy periodically for any changes.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Privecy;
