"use client";

import { useState } from "react";
import Link from "next/link";

type ProjectGroup = {
  id: string;
  name: string;
  description: string;
  apps: string[];
  tokenSymbol?: string;
  tokenLaunched: boolean;
  followers: number;
  createdAt: string;
};

const initialGroups: ProjectGroup[] = [
  {
    id: "1",
    name: "TaskFlow Suite",
    description: "Productivity tools for modern teams",
    apps: ["TaskFlow", "FlowBoard", "TeamSync"],
    tokenSymbol: "TASK",
    tokenLaunched: true,
    followers: 1240,
    createdAt: "2026-06-01",
  },
  {
    id: "2",
    name: "CryptoVerse",
    description: "Blockchain ecosystem tools and services",
    apps: ["CryptoVault", "TokenSwap", "NFT Gallery"],
    tokenSymbol: "CVT",
    tokenLaunched: true,
    followers: 856,
    createdAt: "2026-06-15",
  },
];

export default function ProjectLauncher() {
  const [groups, setGroups] = useState<ProjectGroup[]>(initialGroups);
  const [showCreate, setShowCreate] = useState(false);
  const [newGroup, setNewGroup] = useState({ name: "", description: "", tokenSymbol: "" });
  const [showLaunchToken, setShowLaunchToken] = useState<string | null>(null);

  const handleCreateGroup = () => {
    if (!newGroup.name.trim()) return;
    const group: ProjectGroup = {
      id: Date.now().toString(),
      name: newGroup.name,
      description: newGroup.description || "No description",
      apps: [],
      tokenSymbol: newGroup.tokenSymbol || undefined,
      tokenLaunched: false,
      followers: 0,
      createdAt: new Date().toISOString().split("T")[0],
    };
    setGroups([group, ...groups]);
    setNewGroup({ name: "", description: "", tokenSymbol: "" });
    setShowCreate(false);
  };

  const handleLaunchToken = (groupId: string) => {
    setGroups(
      groups.map((g) =>
        g.id === groupId ? { ...g, tokenLaunched: true } : g
      )
    );
    setShowLaunchToken(null);
  };

  return (
    <div className="min-h-screen bg-green-950 text-green-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-green-50">Project Launcher</h1>
          <p className="text-green-400 mt-1">Create projects, group apps under one brand, and launch tokens</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button
            onClick={() => setShowCreate(!showCreate)}
            className="rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-green-900/50 w-full sm:w-auto"
          >
            + New Project Group
          </button>
        </div>

        {showCreate && (
          <div className="mb-8 rounded-2xl border border-green-800 bg-green-900/30 p-6">
            <h3 className="text-lg font-semibold text-green-100 mb-4">Create Project Group</h3>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-green-300 mb-1">Brand Name</label>
                <input
                  type="text"
                  value={newGroup.name}
                  onChange={(e) => setNewGroup({ ...newGroup, name: e.target.value })}
                  placeholder="MyBrand"
                  className="w-full rounded-lg border border-green-800 bg-green-950/50 px-4 py-2 text-green-100 placeholder-green-600 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-green-300 mb-1">Description</label>
                <textarea
                  value={newGroup.description}
                  onChange={(e) => setNewGroup({ ...newGroup, description: e.target.value })}
                  placeholder="What is this brand about?"
                  rows={3}
                  className="w-full rounded-lg border border-green-800 bg-green-950/50 px-4 py-2 text-green-100 placeholder-green-600 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-green-300 mb-1">Token Symbol (optional)</label>
                <input
                  type="text"
                  value={newGroup.tokenSymbol}
                  onChange={(e) => setNewGroup({ ...newGroup, tokenSymbol: e.target.value })}
                  placeholder="e.g. BRAND"
                  className="w-full rounded-lg border border-green-800 bg-green-950/50 px-4 py-2 text-green-100 placeholder-green-600 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleCreateGroup}
                  className="rounded-lg bg-green-600 px-6 py-2 text-sm font-semibold text-white hover:bg-green-500 transition-colors active:scale-95"
                >
                  Create Group
                </button>
                <button
                  onClick={() => setShowCreate(false)}
                  className="rounded-lg border border-green-700 bg-green-900/30 px-6 py-2 text-sm font-semibold text-green-200 hover:bg-green-800/50 transition-colors active:scale-95"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => (
            <div
              key={group.id}
              className="rounded-2xl border border-green-800 bg-green-900/30 p-5 sm:p-6 hover:border-green-600 hover:bg-green-900/50 transition-all"
            >
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-green-100">{group.name}</h3>
                  {group.tokenSymbol && (
                    <span className="text-xs px-2 py-1 rounded-full bg-yellow-900/30 text-yellow-300 border border-yellow-700">
                      {group.tokenSymbol}
                    </span>
                  )}
                </div>
                <p className="text-sm text-green-400 mb-3">{group.description}</p>
                <div className="text-xs text-green-500">Created {group.createdAt}</div>
              </div>

              <div className="mb-4">
                <div className="text-sm font-medium text-green-300 mb-2">Apps ({group.apps.length})</div>
                <div className="flex flex-wrap gap-2">
                  {group.apps.length > 0 ? (
                    group.apps.map((app, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 rounded-lg bg-green-800/50 text-green-300 border border-green-700"
                      >
                        {app}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-green-500">No apps yet</span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-green-800">
                <div className="text-sm text-green-400">
                  👥 {group.followers.toLocaleString()} followers
                </div>
                <div className="flex gap-2">
                  {!group.tokenLaunched && group.tokenSymbol && (
                    <button
                      onClick={() => setShowLaunchToken(group.id)}
                      className="text-xs px-3 py-1.5 rounded-lg bg-yellow-600 text-white hover:bg-yellow-500 transition-colors active:scale-95"
                    >
                      Launch Token
                    </button>
                  )}
                  {group.tokenLaunched && (
                    <span className="text-xs px-3 py-1.5 rounded-full bg-green-800/50 text-green-300 border border-green-700">
                      Token Active
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-green-800 bg-green-900/30 p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-green-50 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/ai-app-builder"
              className="flex items-center gap-3 rounded-xl border border-green-800 bg-green-950/50 p-4 hover:border-green-600 hover:bg-green-900/30 transition-colors group"
            >
              <div className="text-2xl">🤖</div>
              <div>
                <div className="text-sm font-medium text-green-100 group-hover:text-green-50">Build New App</div>
                <div className="text-xs text-green-500">Use AI App Builder</div>
              </div>
            </Link>
            <Link
              href="/ai-agent-arena"
              className="flex items-center gap-3 rounded-xl border border-green-800 bg-green-950/50 p-4 hover:border-green-600 hover:bg-green-900/30 transition-colors group"
            >
              <div className="text-2xl">🎰</div>
              <div>
                <div className="text-sm font-medium text-green-100 group-hover:text-green-50">Train Agents</div>
                <div className="text-xs text-green-500">AI Agent Arena</div>
              </div>
            </Link>
            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-xl border border-green-800 bg-green-950/50 p-4 hover:border-green-600 hover:bg-green-900/30 transition-colors group"
            >
              <div className="text-2xl">📊</div>
              <div>
                <div className="text-sm font-medium text-green-100 group-hover:text-green-50">View Dashboard</div>
                <div className="text-xs text-green-500">Manage all projects</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
