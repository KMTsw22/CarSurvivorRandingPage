import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo & copyright */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/car-super-side.png"
            alt="Car Survivor"
            width={32}
            height={32}
          />
          <div>
            <span className="font-semibold">Car Survivor</span>
            <p className="text-xs text-zinc-500">
              &copy; {new Date().getFullYear()} DashDeploy Studios. All rights reserved.
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-zinc-400">
          <a href="mailto:dashdeploystudio@gmail.com" className="hover:text-orange-400 transition-colors">
            dashdeploystudio@gmail.com
          </a>
          <a href="#features" className="hover:text-orange-400 transition-colors">
            Features
          </a>
          <a href="#technology" className="hover:text-orange-400 transition-colors">
            Technology
          </a>
          <a href="/privacy" className="hover:text-orange-400 transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
