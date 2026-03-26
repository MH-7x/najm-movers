import MetadataTemplate from "@/lib/MetaDataTemplate";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Privacy Policy | Al Dhahabih Movers and Packers",
      desc: "Your privacy matters. Learn how Al Dhahabih Movers and Packers collects, uses, and protects your information. We don't share your details with anyone.",
    },
    image: {
      path: "/Najm-Al-Dhahabih-Movers-In-Dubai.jpg",
      alt: "Al Dhahabih Movers and Packers in Dubai",
    },
    path: "/privacy-policy",
  },
});

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto md:px-6 px-4 py-12 bg-gray-100">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 md:p-12">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: January 15, 2026
        </p>

        <p className="text-gray-700 mb-8">
          We care about your privacy. This policy explains what information we
          collect and how we use it.
        </p>

        {/* Section: Who We Are */}
        <section className="mb-8">
          <h2 className="text-xl! font-semibold text-gray-900 mb-3">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We&apos;re Al Dhahabih Movers and Packers, a moving company based in
            Sharjah, United Arab Emirates. Our address is Al Estiqlal St Abu
            Shagara, Sharjah. You can reach us at{" "}
            <a
              href="mailto:nadfurniture.movers.llc@gmail.com"
              className="text-blue-600 hover:underline"
            >
              nadfurniture.movers.llc@gmail.com
            </a>{" "}
            or call us at{" "}
            <a
              href="tel:+971554495331"
              className="text-blue-600 hover:underline"
            >
              +971 55 449 5331
            </a>
            .
          </p>
        </section>

        {/* Section: What We Collect */}
        <section className="mb-8">
          <h2 className="text-xl! font-semibold text-gray-900 mb-3">
            What Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            When you use our website, we collect some basic information.
            Here&apos;s exactly what we ask for:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-3">
            <p className="font-medium text-gray-900 mb-2">
              Quote Form Information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Your name</li>
              <li>Your phone number</li>
              <li>Where you&apos;re moving from</li>
              <li>Where you&apos;re moving to</li>
              <li>Any extra details about your move</li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed">
            That&apos;s it. We don&apos;t collect credit card details,
            passwords, or any other sensitive information through our website.
          </p>
        </section>

        {/* Section: How We Use Your Information */}
        <section className="mb-8">
          <h2 className="text-xl! font-semibold text-gray-900 mb-3">
            How We Use Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            We use your information for one simple purpose: to help you with
            your move. Here&apos;s what happens:
          </p>
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>You fill out our quote form</li>
            <li>The information goes directly to our company email</li>
            <li>Our team reviews your request</li>
            <li>We call you to discuss your move and provide a quote</li>
          </ol>
          <p className="text-gray-700 leading-relaxed mt-3">
            We don&apos;t use your information for marketing emails,
            newsletters, or anything else unless you specifically ask us to.
          </p>
        </section>

        {/* Section: Who We Share With */}
        <section className="mb-8">
          <h2 className="text-xl! font-semibold text-gray-900 mb-3">
            Who We Share Your Information With
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3 font-medium">
            Short answer: Nobody.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            We don&apos;t share, sell, or rent your personal information to
            anyone. Your details stay with us. We don&apos;t:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Sell your information to third parties</li>
            <li>Share it with marketing companies</li>
            <li>Give it to other businesses</li>
            <li>Use it for anything other than helping with your move</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-3">
            The only exception would be if we&apos;re legally required to share
            information, like if a court orders us to.
          </p>
        </section>

        {/* Section: How We Protect Your Information */}
        <section className="mb-8">
          <h2 className="text-xl! font-semibold text-gray-900 mb-3">
            How We Protect Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            We take basic security measures to protect your information. Your
            form submissions are sent securely to our company email, and only
            our team has access to them.
          </p>
          <p className="text-gray-700 leading-relaxed">
            That said, no system is 100% secure. We do our best, but we
            can&apos;t guarantee absolute security. If you&apos;re concerned
            about sharing information online, you can always call us directly.
          </p>
        </section>

        {/* Section: How Long We Keep Your Information */}
        <section className="mb-8">
          <h2 className="text-xl! font-semibold text-gray-900 mb-3">
            How Long We Keep Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We keep your information for as long as we need it to provide our
            services and for our business records. If you want us to delete your
            information, just ask. We&apos;ll remove it unless we&apos;re
            legally required to keep it.
          </p>
        </section>

        {/* Section: Cookies */}
        <section className="mb-8">
          <h2 className="text-xl! font-semibold text-gray-900 mb-3">
            Cookies and Tracking
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our website might use basic cookies to help it function properly. We
            don&apos;t use tracking cookies or third-party advertising cookies.
            We&apos;re not following you around the internet.
          </p>
        </section>

        {/* Section: Your Rights */}
        <section className="mb-8">
          <h2 className="text-xl! font-semibold text-gray-900 mb-3">
            Your Rights
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            You have rights when it comes to your personal information:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <span className="font-medium">Access:</span> You can ask to see
              what information we have about you
            </li>
            <li>
              <span className="font-medium">Correction:</span> If something is
              wrong, we&apos;ll fix it
            </li>
            <li>
              <span className="font-medium">Deletion:</span> You can ask us to
              delete your information
            </li>
            <li>
              <span className="font-medium">Object:</span> You can tell us to
              stop using your information
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-3">
            To use any of these rights, just contact us. We&apos;ll respond as
            quickly as we can.
          </p>
        </section>

        {/* Section: Third-Party Links */}
        <section className="mb-8">
          <h2 className="text-xl! font-semibold text-gray-900 mb-3">
            Links to Other Websites
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our website might link to other sites. We don&apos;t control those
            sites and this privacy policy doesn&apos;t apply to them. If you
            click on a link and leave our site, check their privacy policy.
          </p>
        </section>

        {/* Section: Children&apos;s Privacy */}
        <section className="mb-8">
          <h2 className="text-xl! font-semibold text-gray-900 mb-3">
            Children&apos;s Privacy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our services are for adults. We don&apos;t knowingly collect
            information from anyone under 18. If you&apos;re a parent and think
            we&apos;ve collected information about your child, let us know and
            we&apos;ll delete it.
          </p>
        </section>

        {/* Section: Changes */}
        <section className="mb-8">
          <h2 className="text-xl! font-semibold text-gray-900 mb-3">
            Changes to This Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We might update this policy occasionally. If we make significant
            changes, we&apos;ll let you know by updating the date at the top of
            this page. If you keep using our website after we update the policy,
            that means you accept the changes.
          </p>
        </section>

        {/* Section: International Users */}
        <section className="mb-8">
          <h2 className="text-xl! font-semibold text-gray-900 mb-3">
            For International Users
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We operate in the United Arab Emirates. If you&apos;re using our
            website from another country, your information will be processed
            according to UAE laws.
          </p>
        </section>

        {/* Section: Contact */}
        <section className="mb-8">
          <h2 className="text-xl! font-semibold text-gray-900 mb-3">
            Questions About Privacy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have questions about this privacy policy or how we handle
            your information, reach out to us:
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2 text-gray-700">
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
            <p>
              <span className="font-medium">Address:</span> Al Estiqlal St Abu
              Shagara, Sharjah, United Arab Emirates
            </p>
          </div>
        </section>

        {/* Footer Note */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 italic">
            This privacy policy was last updated on March 26, 2026.
          </p>
        </div>
      </div>
    </main>
  );
}
