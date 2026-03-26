import MetadataTemplate from "@/lib/MetaDataTemplate";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Terms and Conditions | Al Dhahabih Movers and Packers",
      desc: "Read our terms and conditions for using Al Dhahabih Movers and Packers services in UAE. Clear, simple terms about our moving services, your information, and our policies.",
    },
    image: {
      path: "/Najm-Al-Dhahabih-Movers-In-Dubai.jpg",
      alt: "Al Dhahabih Movers and Packers and Packers in Dubai",
    },
    path: "/terms-and-conditions",
  },
});

export default function TermsAndConditions() {
  return (
    <main className="max-w-4xl mx-auto md:px-6 px-4 py-12 bg-gray-100">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 md:p-12">
        {/* Title */}
        <h1 className="text-3xl! font-bold text-gray-900 mb-2">
          Terms and Conditions
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: January 15, 2026
        </p>

        <p className="text-gray-700 mb-8">
          Please read these terms before using our website or services.
        </p>

        {/* Section: Who We Are */}
        <section className="mb-8">
          <h2 className="text-xl! font-semibold text-gray-900 mb-3">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed">
            When we say &quot;we,&quot; &quot;us,&quot; or &quot;our,&quot;
            we&apos;re talking about Al Dhahabih Movers and Packers. We&apos;re
            based at Al Estiqlal St Abu Shagara, Sharjah, United Arab Emirates.
            When we say &quot;you&quot; or &quot;your,&quot; we mean anyone
            using our website at{" "}
            <a
              href="https://aldhahabihmovers.ae/"
              className="text-blue-600 hover:underline"
            >
              https://aldhahabihmovers.ae/
            </a>
            .
          </p>
        </section>

        {/* Section: The Basics */}
        <section className="mb-8">
          <h2 className="text-xl! font-semibold text-gray-900 mb-3">
            The Basics
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            By using our website, you&apos;re agreeing to these terms. If you
            don&apos;t agree with something here, please don&apos;t use our
            site.
          </p>
          <p className="text-gray-700 leading-relaxed">
            You need to be at least 18 years old to use our services.
          </p>
        </section>

        {/* Section: Your Information */}
        <section className="mb-8">
          <h2 className="text-xl! font-semibold text-gray-900 mb-3">
            Your Information and Our Quote Form
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            When you fill out our quote form, we ask for your name, phone
            number, where you&apos;re moving from, where you&apos;re moving to,
            and any extra details about your move.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Here&apos;s what happens with that information:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>We send it directly to our company email</li>
            <li>Our team uses it to contact you about your move</li>
            <li>We don&apos;t share it with anyone else</li>
            <li>We don&apos;t sell it to third parties</li>
            <li>We don&apos;t give it to other companies</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-3">
            That&apos;s it. We only use your details to help with your move.
          </p>
        </section>

        {/* Section: Links */}
        <section className="mb-8">
          <h2 className="text-xl! font-semibold text-gray-900 mb-3">
            Links to Other Websites
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our website might have links to other sites. We don&apos;t control
            those sites and we&apos;re not responsible for what&apos;s on them.
            If you click a link and leave our site, you&apos;re on your own. We
            recommend reading their terms and privacy policies before using
            them.
          </p>
        </section>

        {/* Section: No Guarantees */}
        <section className="mb-8">
          <h2 className="text-xl! font-semibold text-gray-900 mb-3">
            No Guarantees
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Our website and services are provided &quot;as is.&quot; We work
            hard to keep everything running smoothly, but we can&apos;t promise
            the site will always be available or error-free. Technology
            isn&apos;t perfect.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We don&apos;t guarantee that our website will meet every need you
            have or work perfectly with every device. Sometimes things break or
            don&apos;t work as expected.
          </p>
        </section>

        {/* Section: Liability */}
        <section className="mb-8">
          <h2 className="text-xl! font-semibold text-gray-900 mb-3">
            Our Liability
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            If something goes wrong, our liability is limited to the amount you
            actually paid us for services. If you haven&apos;t paid us anything
            yet, the limit is 100 USD.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            We&apos;re not liable for things like lost profits, lost data,
            business interruptions, or other indirect damages that might come
            from using (or not being able to use) our website.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Some places don&apos;t allow these kinds of limitations, so this
            might not apply to you depending on where you live.
          </p>
        </section>

        {/* Section: Ending Access */}
        <section className="mb-8">
          <h2 className="text-xl! font-semibold text-gray-900 mb-3">
            Ending Access
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We can stop your access to our website at any time if you break
            these terms. We don&apos;t need to warn you first, though we&apos;d
            prefer to work things out.
          </p>
        </section>

        {/* Section: Resolving Problems */}
        <section className="mb-8">
          <h2 className="text-xl! font-semibold text-gray-900 mb-3">
            Resolving Problems
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you have an issue with our service, talk to us first. We&apos;re
            reasonable people and we want to fix problems.
          </p>
        </section>

        {/* Section: Law */}
        <section className="mb-8">
          <h2 className="text-xl! font-semibold text-gray-900 mb-3">
            Law and Jurisdiction
          </h2>
          <p className="text-gray-700 leading-relaxed">
            These terms are governed by the laws of the United Arab Emirates.
          </p>
        </section>

        {/* Section: Changes */}
        <section className="mb-8">
          <h2 className="text-xl! font-semibold text-gray-900 mb-3">
            Changes to These Terms
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            We might update these terms from time to time. If we make big
            changes, we&apos;ll try to give you at least 30 days notice. What
            counts as a &quot;big change&quot; is up to us to decide.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you keep using our website after we update the terms, that means
            you accept the new terms. If you don&apos;t like the updates, stop
            using the site.
          </p>
        </section>

        {/* Section: Unenforceable */}
        <section className="mb-8">
          <h2 className="text-xl! font-semibold text-gray-900 mb-3">
            If Something Here Doesn&apos;t Work
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If part of these terms turns out to be unenforceable, we&apos;ll
            adjust that part to make it work as intended. The rest of the terms
            stay in effect.
          </p>
        </section>

        {/* Section: EU Users */}
        <section className="mb-8">
          <h2 className="text-xl! font-semibold text-gray-900 mb-3">
            For EU Users
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you&apos;re in the European Union, you&apos;re protected by the
            mandatory consumer laws in your country.
          </p>
        </section>

        {/* Section: Contact */}
        <section className="mb-8">
          <h2 className="text-xl! font-semibold text-gray-900 mb-3">
            Get in Touch
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Questions about these terms? Here&apos;s how to reach us:
          </p>
          <div className="space-y-2 text-gray-700">
            <p>
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:nadfurniture.movers.llc@gmail.com"
                className="text-blue-600 hover:underline"
              >
                nadfurniture.movers.llc@gmail.com
              </a>
            </p>
            <p>
              <span className="font-medium">Phone:</span>{" "}
              <a
                href="tel:+971554495331"
                className="text-blue-600 hover:underline"
              >
                +971 55 449 5331
              </a>
            </p>
            <p>
              <span className="font-medium">Website:</span>{" "}
              <a
                href="https://aldhahabihmovers.ae/contact-us"
                className="text-blue-600 hover:underline"
              >
                https://aldhahabihmovers.ae/contact-us
              </a>
            </p>
          </div>
        </section>

        {/* Footer Note */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 italic">
            These terms were last updated on March 26, 2026.
          </p>
        </div>
      </div>
    </main>
  );
}
