import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-green-950 text-green-100">
      <nav className="sticky top-0 z-50 bg-green-950/90 backdrop-blur-md border-b border-green-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                G
              </div>
              <span className="font-bold text-lg text-green-50">GreenApp</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-green-300">
              <Link href="#features" className="hover:text-green-100 transition-colors">
                Features
              </Link>
              <Link href="#about" className="hover:text-green-100 transition-colors">
                About
              </Link>
              <Link href="#contact" className="hover:text-green-100 transition-colors">
                Contact
              </Link>
              <button className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-500 transition-colors active:scale-95">
                Get Started
              </button>
            </div>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-green-900 transition-colors active:scale-95"
              aria-label="Menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/50 to-emerald-900/50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full border border-green-700 bg-green-900/50 px-3 py-1 text-sm text-green-300 mb-6">
              <span className="h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse" />
              Now Available
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-green-50 mb-6">
              Build Faster with
              <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Green Templates
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg sm:text-xl text-green-300 mb-8">
              A beautiful, mobile-first template designed for modern web applications.
              Clean, fast, and ready for production.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="rounded-xl bg-green-600 px-8 py-4 text-base font-semibold text-white hover:bg-green-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-green-900/50">
                Start Building
              </button>
              <button className="rounded-xl border border-green-700 bg-green-900/30 px-8 py-4 text-base font-semibold text-green-100 hover:bg-green-800/50 transition-all active:scale-95">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-50 mb-4">Why Choose Us</h2>
            <p className="text-lg text-green-400 max-w-2xl mx-auto">
              Everything you need to build modern web applications
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Mobile First",
                description:
                  "Optimized for every screen size with responsive design principles.",
                icon: "📱",
              },
              {
                title: "Lightning Fast",
                description:
                  "Built with performance in mind using Next.js and Tailwind CSS.",
                icon: "⚡",
              },
              {
                title: "Easy to Customize",
                description:
                  "Clean code structure that&apos;s easy to modify and extend.",
                icon: "🎨",
              },
              {
                title: "SEO Ready",
                description:
                  "Optimized for search engines with proper meta tags and structure.",
                icon: "🔍",
              },
              {
                title: "Type Safe",
                description:
                  "Built with TypeScript for better developer experience and reliability.",
                icon: "🛡️",
              },
              {
                title: "Modern Stack",
                description: "Uses the latest web technologies and best practices.",
                icon: "🚀",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-green-800 bg-green-900/30 p-6 hover:border-green-600 hover:bg-green-900/50 transition-all hover:scale-[1.02]"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-green-100 mb-2">{feature.title}</h3>
                <p className="text-green-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 border-y border-green-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10K+", label: "Downloads" },
              { value: "99%", label: "Satisfaction" },
              { value: "24/7", label: "Support" },
              { value: "50+", label: "Components" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-green-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-50 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-green-400 mb-8 max-w-2xl mx-auto">
            Join thousands of developers building amazing things with our template.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="rounded-xl bg-green-600 px-8 py-4 text-base font-semibold text-white hover:bg-green-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-green-900/50">
              Download Now
            </button>
            <button className="rounded-xl border border-green-700 bg-green-900/30 px-8 py-4 text-base font-semibold text-green-100 hover:bg-green-800/50 transition-all active:scale-95">
              View Documentation
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-green-800 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                G
              </div>
              <span className="font-bold text-green-100">GreenApp</span>
            </div>
            <p className="text-sm text-green-500">
              Built with Next.js and Tailwind CSS. Green theme for everyone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
