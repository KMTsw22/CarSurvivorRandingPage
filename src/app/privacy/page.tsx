export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-zinc-500 text-sm mb-12">Last updated: April 7, 2026</p>

        <div className="space-y-8 text-zinc-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
            <p>
              DashDeploy Studios (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the Car Survivor
              game and related services. This Privacy Policy explains how we collect,
              use, and protect your information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="text-white font-medium">Usage Data:</span> We may collect
                anonymous usage data such as pages visited, time spent on site, and browser type
                to improve our services.
              </li>
              <li>
                <span className="text-white font-medium">Contact Information:</span> If you
                contact us via email, we collect your email address and message content to respond
                to your inquiry.
              </li>
              <li>
                <span className="text-white font-medium">Cookies:</span> We may use essential
                cookies to ensure the proper functioning of our website.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To operate and maintain our website and services</li>
              <li>To improve user experience and site performance</li>
              <li>To respond to your inquiries and support requests</li>
              <li>To send updates about our game (only if you opt in)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Data Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties.
              We may share anonymous, aggregated data with analytics providers to improve
              our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Third-Party Services</h2>
            <p>
              Our website may use third-party services such as Steam.
              These services have their own privacy policies, and we encourage you to review them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your information.
              However, no method of transmission over the internet is 100% secure,
              and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to children under 13. We do not knowingly
              collect personal information from children under 13. If you believe we have
              collected such information, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be
              posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:{" "}
              <a href="mailto:dashdeploystudio@gmail.com" className="text-orange-400 hover:underline">
                dashdeploystudio@gmail.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <a href="/" className="text-orange-400 hover:underline text-sm">
            &larr; Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
