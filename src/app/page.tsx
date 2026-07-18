import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-green-950 text-green-100">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 via-emerald-900/30 to-green-950" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full border border-green-700 bg-green-900/50 px-4 py-1.5 text-sm text-green-300 mb-8">
              <span className="h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse" />
              Build in Public
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-green-50 mb-6 leading-tight">
              Share Your Journey,
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Build Together
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg sm:text-xl text-green-300 mb-10 leading-relaxed">
              Dev Studio is the builder platform where developers create projects, share updates,
              and track progress while their community follows the journey from idea to launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dashboard"
                className="rounded-xl bg-green-600 px-8 py-4 text-base font-semibold text-white hover:bg-green-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-green-900/50 text-center"
              >
                Start Building
              </Link>
              <Link
                href="#discover"
                className="rounded-xl border border-green-700 bg-green-900/30 px-8 py-4 text-base font-semibold text-green-100 hover:bg-green-800/50 transition-all active:scale-95 text-center"
              >
                Explore Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-50 mb-4">Everything You Need to Build in Public</h2>
            <p className="text-lg text-green-400 max-w-2xl mx-auto">
              From project creation to community engagement, Dev Studio provides the tools to share your development journey.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Project Creation",
                description:
                  "Create and manage multiple projects. Track progress from idea to launch with intuitive tools.",
                icon: "📁",
              },
              {
                title: "Live Updates",
                description:
                  "Share real-time updates with your community. Post milestones, code snippets, and progress reports.",
                icon: "📡",
              },
              {
                title: "Progress Tracking",
                description:
                  "Visualize development progress with built-in analytics. See velocity, completion rates, and milestones.",
                icon: "📊",
              },
              {
                title: "Community Following",
                description:
                  "Let your community follow your journey. Get feedback, support, and engagement from fellow builders.",
                icon: "👥",
              },
              {
                title: "Discovery Feed",
                description:
                  "Discover new builders and projects early. Watch applications evolve in real time as they grow.",
                icon: "🔍",
              },
              {
                title: "Public Profiles",
                description:
                  "Build your public developer profile. Showcase your projects, skills, and development history.",
                icon: "👤",
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

      <section id="how-it-works" className="py-16 sm:py-24 border-y border-green-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-50 mb-4">How It Works</h2>
            <p className="text-lg text-green-400 max-w-2xl mx-auto">
              Get started in minutes and begin sharing your development journey with the world.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Create Your Profile",
                description: "Sign up and set up your developer profile. Add your skills, interests, and what you&apos;re building.",
              },
              {
                step: "2",
                title: "Start a Project",
                description: "Create your first project. Add a description, set milestones, and begin tracking your progress.",
              },
              {
                step: "3",
                title: "Share & Grow",
                description: "Post updates, share code snippets, and let the community follow your journey. Get feedback and grow together.",
              },
            ].map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg shadow-green-900/50">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-green-100 mb-3">{step.title}</h3>
                <p className="text-green-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="discover" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-50 mb-4">Discover Builders & Projects</h2>
            <p className="text-lg text-green-400 max-w-2xl mx-auto">
              Explore projects from builders around the world. Watch applications evolve from early ideas to launched products.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Alex Chen",
                project: "AI Code Review Tool",
                status: "In Progress",
                progress: 75,
                followers: "1.2k",
              },
              {
                name: "Sarah Miller",
                project: "Open Source Dashboard",
                status: "Launching Soon",
                progress: 90,
                followers: "856",
              },
              {
                name: "James Wilson",
                project: "Developer Productivity App",
                status: "In Progress",
                progress: 45,
                followers: "2.3k",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="rounded-2xl border border-green-800 bg-green-900/30 p-6 hover:border-green-600 hover:bg-green-900/50 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white font-bold">
                      {project.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-green-100">{project.name}</div>
                      <div className="text-sm text-green-500">{project.followers} followers</div>
                    </div>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-800/50 text-green-300 border border-green-700">
                    {project.status}
                  </span>
                </div>
                <div className="text-lg font-medium text-green-100 mb-3">{project.project}</div>
                <div className="w-full bg-green-900/50 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs text-green-500">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-green-800 bg-gradient-to-br from-green-900/50 to-emerald-900/50 p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-50 mb-4">
              Ready to Build in Public?
            </h2>
            <p className="text-lg text-green-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers sharing their journey. Create projects, share updates, and grow with your community.
            </p>
            <Link
              href="/dashboard"
              className="inline-block rounded-xl bg-green-600 px-10 py-4 text-base font-semibold text-white hover:bg-green-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-green-900/50"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
