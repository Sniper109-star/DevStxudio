"use client";

import { useState } from "react";
import Link from "next/link";

type Project = {
  id: string;
  name: string;
  description: string;
  status: "In Progress" | "Planning" | "Launching Soon" | "Launched";
  progress: number;
  followers: number;
  lastUpdate: string;
  updates: number;
};

const initialProjects: Project[] = [
  {
    id: "1",
    name: "AI Code Review Tool",
    description: "An intelligent tool that reviews code and suggests improvements using AI.",
    status: "In Progress",
    progress: 75,
    followers: 1240,
    lastUpdate: "2 hours ago",
    updates: 24,
  },
  {
    id: "2",
    name: "Open Source Dashboard",
    description: "A comprehensive dashboard for monitoring open source project metrics.",
    status: "Launching Soon",
    progress: 90,
    followers: 856,
    lastUpdate: "5 hours ago",
    updates: 18,
  },
  {
    id: "3",
    name: "Developer Productivity App",
    description: "A suite of tools designed to boost developer productivity and workflow.",
    status: "In Progress",
    progress: 45,
    followers: 2340,
    lastUpdate: "1 day ago",
    updates: 12,
  },
  {
    id: "4",
    name: "API Gateway",
    description: "A lightweight API gateway with built-in rate limiting and caching.",
    status: "Planning",
    progress: 15,
    followers: 320,
    lastUpdate: "3 days ago",
    updates: 5,
  },
];

const stats = [
  { label: "Total Projects", value: "4", change: "+1 this month" },
  { label: "Total Followers", value: "4,756", change: "+12% this week" },
  { label: "Updates Posted", value: "59", change: "8 this week" },
  { label: "Days Building", value: "127", change: "Consistent" },
];

const recentActivity = [
  { action: "Posted update", project: "AI Code Review Tool", time: "2 hours ago" },
  { action: "Reached milestone", project: "Open Source Dashboard", time: "5 hours ago" },
  { action: "New follower", project: "Developer Productivity App", time: "8 hours ago" },
  { action: "Posted update", project: "Developer Productivity App", time: "1 day ago" },
  { action: "Project created", project: "API Gateway", time: "3 days ago" },
];

const statusColors: Record<Project["status"], string> = {
  "In Progress": "bg-green-800/50 text-green-300 border-green-700",
  Planning: "bg-yellow-900/30 text-yellow-300 border-yellow-700",
  "Launching Soon": "bg-blue-900/30 text-blue-300 border-blue-700",
  Launched: "bg-emerald-900/30 text-emerald-300 border-emerald-700",
};

export default function Dashboard() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [showNewProject, setShowNewProject] = useState(false);
  const [newProject, setNewProject] = useState({ name: "", description: "" });

  const totalProgress = Math.round(
    projects.reduce((sum, p) => sum + p.progress, 0) / projects.length
  );

  const handleCreateProject = () => {
    if (!newProject.name.trim()) return;
    const project: Project = {
      id: Date.now().toString(),
      name: newProject.name,
      description: newProject.description || "No description",
      status: "Planning",
      progress: 0,
      followers: 0,
      lastUpdate: "Just now",
      updates: 0,
    };
    setProjects([project, ...projects]);
    setNewProject({ name: "", description: "" });
    setShowNewProject(false);
  };

  return (
    <div className="min-h-screen bg-green-950 text-green-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-green-50">Dashboard</h1>
            <p className="text-green-400 mt-1">Welcome back! Here&apos;s your building progress.</p>
          </div>
          <button
            onClick={() => setShowNewProject(!showNewProject)}
            className="rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-green-900/50 w-full sm:w-auto"
          >
            + New Project
          </button>
        </div>

        {showNewProject && (
          <div className="mb-8 rounded-2xl border border-green-800 bg-green-900/30 p-6">
            <h3 className="text-lg font-semibold text-green-100 mb-4">Create New Project</h3>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-green-300 mb-1">Project Name</label>
                <input
                  type="text"
                  value={newProject.name}
                  onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                  placeholder="My Awesome Project"
                  className="w-full rounded-lg border border-green-800 bg-green-950/50 px-4 py-2 text-green-100 placeholder-green-600 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-green-300 mb-1">Description</label>
                <textarea
                  value={newProject.description}
                  onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                  placeholder="What are you building?"
                  rows={3}
                  className="w-full rounded-lg border border-green-800 bg-green-950/50 px-4 py-2 text-green-100 placeholder-green-600 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 resize-none"
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleCreateProject}
                  className="rounded-lg bg-green-600 px-6 py-2 text-sm font-semibold text-white hover:bg-green-500 transition-colors active:scale-95"
                >
                  Create Project
                </button>
                <button
                  onClick={() => setShowNewProject(false)}
                  className="rounded-lg border border-green-700 bg-green-900/30 px-6 py-2 text-sm font-semibold text-green-200 hover:bg-green-800/50 transition-colors active:scale-95"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl border border-green-800 bg-green-900/30 p-4 sm:p-6 hover:border-green-600 transition-colors"
            >
              <div className="text-sm font-medium text-green-400 mb-1">{stat.label}</div>
              <div className="text-2xl sm:text-3xl font-bold text-green-50 mb-1">{stat.value}</div>
              <div className="text-xs text-green-500">{stat.change}</div>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-green-50">Your Projects</h2>
            <div className="text-sm text-green-400">
              Average Progress: <span className="font-semibold text-green-300">{totalProgress}%</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl border border-green-800 bg-green-900/30 p-5 sm:p-6 hover:border-green-600 hover:bg-green-900/50 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-green-100 mb-1">{project.name}</h3>
                    <p className="text-sm text-green-400 line-clamp-2">{project.description}</p>
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full border ${statusColors[project.status]} whitespace-nowrap ml-2`}>
                    {project.status}
                  </span>
                </div>
                <div className="mb-3">
                  <div className="flex justify-between text-xs text-green-500 mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-green-900/50 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-green-500">
                  <div className="flex items-center gap-4">
                    <span>👥 {project.followers.toLocaleString()}</span>
                    <span>📝 {project.updates} updates</span>
                  </div>
                  <span>{project.lastUpdate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="lg:col-span-2 rounded-2xl border border-green-800 bg-green-900/30 p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-green-100 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 pb-4 border-b border-green-800/50 last:border-0 last:pb-0">
                  <div className="h-8 w-8 rounded-full bg-green-800/50 flex items-center justify-center text-green-300 text-sm flex-shrink-0">
                    📌
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-green-100">
                      <span className="font-medium">{activity.action}</span> — {activity.project}
                    </div>
                    <div className="text-xs text-green-500 mt-0.5">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-green-800 bg-green-900/30 p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-green-100 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link
                href="/ai-agent-arena"
                className="flex items-center gap-3 rounded-xl border border-green-800 bg-green-950/50 p-4 hover:border-green-600 hover:bg-green-900/30 transition-colors group"
              >
                <div className="text-xl">🤖</div>
                <div>
                  <div className="text-sm font-medium text-green-100 group-hover:text-green-50">AI Agent Arena</div>
                  <div className="text-xs text-green-500">Compete with poker agents</div>
                </div>
              </Link>
              <Link
                href="/ai-app-builder"
                className="flex items-center gap-3 rounded-xl border border-green-800 bg-green-950/50 p-4 hover:border-green-600 hover:bg-green-900/30 transition-colors group"
              >
                <div className="text-xl">🧠</div>
                <div>
                  <div className="text-sm font-medium text-green-100 group-hover:text-green-50">AI App Builder</div>
                  <div className="text-xs text-green-500">Generate apps from text</div>
                </div>
              </Link>
              <Link
                href="/project-launcher"
                className="flex items-center gap-3 rounded-xl border border-green-800 bg-green-950/50 p-4 hover:border-green-600 hover:bg-green-900/30 transition-colors group"
              >
                <div className="text-xl">🚀</div>
                <div>
                  <div className="text-sm font-medium text-green-100 group-hover:text-green-50">Project Launcher</div>
                  <div className="text-xs text-green-500">Group apps and launch tokens</div>
                </div>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-xl border border-green-800 bg-green-950/50 p-4 hover:border-green-600 hover:bg-green-900/30 transition-colors group"
              >
                <div className="text-xl">📝</div>
                <div>
                  <div className="text-sm font-medium text-green-100 group-hover:text-green-50">Post Update</div>
                  <div className="text-xs text-green-500">Share your progress</div>
                </div>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-xl border border-green-800 bg-green-950/50 p-4 hover:border-green-600 hover:bg-green-900/30 transition-colors group"
              >
                <div className="text-xl">⚙️</div>
                <div>
                  <div className="text-sm font-medium text-green-100 group-hover:text-green-50">Settings</div>
                  <div className="text-xs text-green-500">Manage your profile</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
