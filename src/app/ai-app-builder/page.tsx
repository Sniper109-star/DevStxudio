"use client";

import { useState } from "react";
import Link from "next/link";

type AppSpec = {
  id: string;
  name: string;
  description: string;
  status: "generating" | "building" | "deploying" | "live" | "error";
  crypto: boolean;
  community: boolean;
  createdAt: string;
  url?: string;
};

const initialApps: AppSpec[] = [
  {
    id: "1",
    name: "TaskFlow",
    description: "A simple task management app with drag and drop",
    status: "live",
    crypto: false,
    community: true,
    createdAt: "2026-07-15",
    url: "https://taskflow.app",
  },
  {
    id: "2",
    name: "CryptoVault",
    description: "A decentralized wallet with community governance",
    status: "building",
    crypto: true,
    community: true,
    createdAt: "2026-07-17",
  },
  {
    id: "3",
    name: "ChatBridge",
    description: "Real-time chat with token rewards for active users",
    status: "deploying",
    crypto: true,
    community: true,
    createdAt: "2026-07-18",
  },
];

const templates = [
  { name: "Task Manager", description: "Kanban boards, task lists, team collaboration" },
  { name: "Social Feed", description: "Posts, comments, likes, follow system" },
  { name: "Crypto Wallet", description: "Token balances, transfers, staking" },
  { name: "E-commerce", description: "Products, cart, checkout, payments" },
  { name: "Analytics Dashboard", description: "Charts, metrics, real-time data" },
  { name: "Community Forum", description: "Threads, upvotes, user reputation" },
];

export default function AIAppBuilder() {
  const [apps, setApps] = useState<AppSpec[]>(initialApps);
  const [showCreate, setShowCreate] = useState(false);
  const [description, setDescription] = useState("");
  const [appName, setAppName] = useState("");
  const [includeCrypto, setIncludeCrypto] = useState(false);
  const [includeCommunity, setIncludeCommunity] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedSteps, setGeneratedSteps] = useState<string[]>([]);

  const handleGenerate = () => {
    if (!description.trim() || !appName.trim()) return;
    setIsGenerating(true);
    setGeneratedSteps([]);

    const steps = [
      "Analyzing description...",
      "Generating database schema...",
      "Creating API endpoints...",
      "Building UI components...",
      "Configuring crypto features...",
      "Setting up community features...",
      "Deploying application...",
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < steps.length) {
        setGeneratedSteps((prev) => [...prev, steps[i]]);
        i++;
      } else {
        clearInterval(interval);
        const newApp: AppSpec = {
          id: Date.now().toString(),
          name: appName,
          description,
          status: "live",
          crypto: includeCrypto,
          community: includeCommunity,
          createdAt: new Date().toISOString().split("T")[0],
          url: `https://${appName.toLowerCase().replace(/\s+/g, "-")}.app`,
        };
        setApps([newApp, ...apps]);
        setIsGenerating(false);
        setShowCreate(false);
        setDescription("");
        setAppName("");
        setIncludeCrypto(false);
        setIncludeCommunity(false);
        setGeneratedSteps([]);
      }
    }, 800);
  };

  const statusColors: Record<AppSpec["status"], string> = {
    generating: "bg-yellow-900/30 text-yellow-300 border-yellow-700",
    building: "bg-blue-900/30 text-blue-300 border-blue-700",
    deploying: "bg-purple-900/30 text-purple-300 border-purple-700",
    live: "bg-green-900/30 text-green-300 border-green-700",
    error: "bg-red-900/30 text-red-300 border-red-700",
  };

  return (
    <div className="min-h-screen bg-green-950 text-green-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-green-50">AI App Builder</h1>
          <p className="text-green-400 mt-1">Describe your app in plain English and generate it in minutes</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button
            onClick={() => setShowCreate(!showCreate)}
            className="rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-green-900/50 w-full sm:w-auto"
          >
            + New App
          </button>
        </div>

        {showCreate && (
          <div className="mb-8 rounded-2xl border border-green-800 bg-green-900/30 p-6">
            <h3 className="text-lg font-semibold text-green-100 mb-4">Describe Your App</h3>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-green-300 mb-1">App Name</label>
                <input
                  type="text"
                  value={appName}
                  onChange={(e) => setAppName(e.target.value)}
                  placeholder="My Awesome App"
                  className="w-full rounded-lg border border-green-800 bg-green-950/50 px-4 py-2 text-green-100 placeholder-green-600 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-green-300 mb-1">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your app in plain English. e.g., A simple task management app where users can create boards, add tasks, and collaborate with team members."
                  rows={4}
                  className="w-full rounded-lg border border-green-800 bg-green-950/50 px-4 py-2 text-green-100 placeholder-green-600 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 resize-none"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeCrypto}
                    onChange={(e) => setIncludeCrypto(e.target.checked)}
                    className="h-4 w-4 rounded border-green-700 bg-green-950/50 text-green-600 focus:ring-green-500"
                  />
                  <span className="text-sm text-green-300">Include Crypto Features</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeCommunity}
                    onChange={(e) => setIncludeCommunity(e.target.checked)}
                    className="h-4 w-4 rounded border-green-700 bg-green-950/50 text-green-600 focus:ring-green-500"
                  />
                  <span className="text-sm text-green-300">Include Community Features</span>
                </label>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="rounded-lg bg-green-600 px-6 py-2 text-sm font-semibold text-white hover:bg-green-500 transition-colors active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? "Generating..." : "Generate App"}
                </button>
                <button
                  onClick={() => {
                    setShowCreate(false);
                    setGeneratedSteps([]);
                    setIsGenerating(false);
                  }}
                  className="rounded-lg border border-green-700 bg-green-900/30 px-6 py-2 text-sm font-semibold text-green-200 hover:bg-green-800/50 transition-colors active:scale-95"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {isGenerating && generatedSteps.length > 0 && (
          <div className="mb-8 rounded-2xl border border-green-800 bg-green-900/30 p-6">
            <h3 className="text-lg font-semibold text-green-100 mb-4">Generating Your App...</h3>
            <div className="space-y-2">
              {generatedSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-green-300">
                  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  {step}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-green-50 mb-4">Your Apps</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {apps.map((app) => (
              <div
                key={app.id}
                className="rounded-2xl border border-green-800 bg-green-900/30 p-5 sm:p-6 hover:border-green-600 hover:bg-green-900/50 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-green-100 mb-1">{app.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full border ${statusColors[app.status]}`}>
                      {app.status}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-green-400 mb-4 line-clamp-2">{app.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {app.crypto && (
                    <span className="text-xs px-2 py-1 rounded-full bg-yellow-900/30 text-yellow-300 border border-yellow-700">
                      ₿ Crypto
                    </span>
                  )}
                  {app.community && (
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-900/30 text-blue-300 border border-blue-700">
                      👥 Community
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between text-xs text-green-500">
                  <span>{app.createdAt}</span>
                  {app.url && (
                    <Link href={app.url} className="text-green-300 hover:text-green-100 transition-colors">
                      Visit App →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-green-50 mb-4">Templates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template, index) => (
              <div
                key={index}
                className="rounded-2xl border border-green-800 bg-green-900/30 p-5 sm:p-6 hover:border-green-600 hover:bg-green-900/50 transition-all cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-green-100 mb-2">{template.name}</h3>
                <p className="text-sm text-green-400">{template.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
