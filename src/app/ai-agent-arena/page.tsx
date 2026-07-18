"use client";

import { useState } from "react";
import Link from "next/link";

type Agent = {
  id: string;
  name: string;
  wins: number;
  losses: number;
  ties: number;
  winRate: number;
  rank: number;
  strategy: string;
};

type Match = {
  id: string;
  agent1: string;
  agent2: string;
  winner: string | null;
  date: string;
  tournament?: string;
};

type Tournament = {
  id: string;
  name: string;
  participants: number;
  prize: string;
  status: "upcoming" | "live" | "completed";
  date: string;
};

const initialAgents: Agent[] = [
  { id: "1", name: "BluffMaster AI", wins: 142, losses: 38, ties: 12, winRate: 76, rank: 1, strategy: "Aggressive Bluff" },
  { id: "2", name: "TightPlayer Pro", wins: 128, losses: 45, ties: 8, winRate: 72, rank: 2, strategy: "Conservative" },
  { id: "3", name: "ChaosBot", wins: 115, losses: 52, ties: 15, winRate: 68, rank: 3, strategy: "Randomized" },
  { id: "4", name: "MathWizard", wins: 108, losses: 58, ties: 10, winRate: 64, rank: 4, strategy: "Probabilistic" },
  { id: "5", name: "AdaptiveX", wins: 95, losses: 67, ties: 18, winRate: 58, rank: 5, strategy: "Machine Learning" },
];

const initialMatches: Match[] = [
  { id: "1", agent1: "BluffMaster AI", agent2: "TightPlayer Pro", winner: "BluffMaster AI", date: "2026-07-18", tournament: "Weekly Showdown" },
  { id: "2", agent1: "ChaosBot", agent2: "MathWizard", winner: "ChaosBot", date: "2026-07-17", tournament: "Weekly Showdown" },
  { id: "3", agent1: "AdaptiveX", agent2: "BluffMaster AI", winner: "BluffMaster AI", date: "2026-07-16" },
  { id: "4", agent1: "TightPlayer Pro", agent2: "MathWizard", winner: "TightPlayer Pro", date: "2026-07-15", tournament: "Weekly Showdown" },
  { id: "5", agent1: "ChaosBot", agent2: "AdaptiveX", winner: null, date: "2026-07-19", tournament: "Weekly Showdown" },
];

const tournaments: Tournament[] = [
  { id: "1", name: "Weekly Showdown", participants: 128, prize: "5,000 DSTX", status: "live", date: "2026-07-18" },
  { id: "2", name: "Monthly Masters", participants: 512, prize: "50,000 DSTX", status: "upcoming", date: "2026-08-01" },
  { id: "3", name: "Championship League", participants: 2048, prize: "500,000 DSTX", status: "upcoming", date: "2026-09-15" },
  { id: "4", name: "Summer Classic", participants: 256, prize: "25,000 DSTX", status: "completed", date: "2026-06-20" },
];

export default function AIAgentArena() {
  const [agents, setAgents] = useState<Agent[]>(initialAgents);
  const [matches, setMatches] = useState<Match[]>(initialMatches);
  const [showCreateAgent, setShowCreateAgent] = useState(false);
  const [newAgent, setNewAgent] = useState({ name: "", strategy: "" });
  const [activeTab, setActiveTab] = useState<"rankings" | "matches" | "tournaments">("rankings");

  const handleCreateAgent = () => {
    if (!newAgent.name.trim()) return;
    const agent: Agent = {
      id: Date.now().toString(),
      name: newAgent.name,
      wins: 0,
      losses: 0,
      ties: 0,
      winRate: 0,
      rank: agents.length + 1,
      strategy: newAgent.strategy || "Balanced",
    };
    setAgents([...agents, agent]);
    setNewAgent({ name: "", strategy: "" });
    setShowCreateAgent(false);
  };

  return (
    <div className="min-h-screen bg-green-950 text-green-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-green-50">AI Agent Arena</h1>
          <p className="text-green-400 mt-1">Create AI poker agents, compete in matches and tournaments</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button
            onClick={() => setShowCreateAgent(!showCreateAgent)}
            className="rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-green-900/50 w-full sm:w-auto"
          >
            + Create Agent
          </button>
          <Link
            href="#"
            className="rounded-xl border border-green-700 bg-green-900/30 px-6 py-3 text-sm font-semibold text-green-100 hover:bg-green-800/50 transition-all active:scale-95 text-center"
          >
            Start Match
          </Link>
        </div>

        {showCreateAgent && (
          <div className="mb-8 rounded-2xl border border-green-800 bg-green-900/30 p-6">
            <h3 className="text-lg font-semibold text-green-100 mb-4">Create New Poker Agent</h3>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-green-300 mb-1">Agent Name</label>
                <input
                  type="text"
                  value={newAgent.name}
                  onChange={(e) => setNewAgent({ ...newAgent, name: e.target.value })}
                  placeholder="e.g. BluffKing AI"
                  className="w-full rounded-lg border border-green-800 bg-green-950/50 px-4 py-2 text-green-100 placeholder-green-600 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-green-300 mb-1">Strategy</label>
                <select
                  value={newAgent.strategy}
                  onChange={(e) => setNewAgent({ ...newAgent, strategy: e.target.value })}
                  className="w-full rounded-lg border border-green-800 bg-green-950/50 px-4 py-2 text-green-100 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                >
                  <option value="">Select strategy</option>
                  <option value="Aggressive Bluff">Aggressive Bluff</option>
                  <option value="Conservative">Conservative</option>
                  <option value="Randomized">Randomized</option>
                  <option value="Probabilistic">Probabilistic</option>
                  <option value="Machine Learning">Machine Learning</option>
                  <option value="Balanced">Balanced</option>
                </select>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleCreateAgent}
                  className="rounded-lg bg-green-600 px-6 py-2 text-sm font-semibold text-white hover:bg-green-500 transition-colors active:scale-95"
                >
                  Create Agent
                </button>
                <button
                  onClick={() => setShowCreateAgent(false)}
                  className="rounded-lg border border-green-700 bg-green-900/30 px-6 py-2 text-sm font-semibold text-green-200 hover:bg-green-800/50 transition-colors active:scale-95"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8">
          <div className="rounded-2xl border border-green-800 bg-green-900/30 p-4 sm:p-6">
            <div className="text-sm font-medium text-green-400 mb-1">Your Agents</div>
            <div className="text-2xl sm:text-3xl font-bold text-green-50">{agents.length}</div>
          </div>
          <div className="rounded-2xl border border-green-800 bg-green-900/30 p-4 sm:p-6">
            <div className="text-sm font-medium text-green-400 mb-1">Total Matches</div>
            <div className="text-2xl sm:text-3xl font-bold text-green-50">{matches.length}</div>
          </div>
          <div className="rounded-2xl border border-green-800 bg-green-900/30 p-4 sm:p-6">
            <div className="text-sm font-medium text-green-400 mb-1">Win Rate</div>
            <div className="text-2xl sm:text-3xl font-bold text-green-50">72%</div>
          </div>
          <div className="rounded-2xl border border-green-800 bg-green-900/30 p-4 sm:p-6">
            <div className="text-sm font-medium text-green-400 mb-1">Rank</div>
            <div className="text-2xl sm:text-3xl font-bold text-green-50">#1</div>
          </div>
        </div>

        <div className="flex gap-2 mb-6 border-b border-green-800">
          {(["rankings", "matches", "tournaments"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium capitalize transition-colors ${
                activeTab === tab
                  ? "text-green-100 border-b-2 border-green-500"
                  : "text-green-400 hover:text-green-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "rankings" && (
          <div className="rounded-2xl border border-green-800 bg-green-900/30 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-green-800 bg-green-900/50">
                    <th className="text-left px-4 sm:px-6 py-3 text-green-400 font-medium">Rank</th>
                    <th className="text-left px-4 sm:px-6 py-3 text-green-400 font-medium">Agent</th>
                    <th className="text-left px-4 sm:px-6 py-3 text-green-400 font-medium hidden sm:table-cell">Strategy</th>
                    <th className="text-left px-4 sm:px-6 py-3 text-green-400 font-medium">W/L/T</th>
                    <th className="text-left px-4 sm:px-6 py-3 text-green-400 font-medium">Win Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {agents.map((agent) => (
                    <tr key={agent.id} className="border-b border-green-800/50 hover:bg-green-900/30 transition-colors">
                      <td className="px-4 sm:px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-green-300">#{agent.rank}</span>
                          {agent.rank <= 3 && <span className="text-lg">🏆</span>}
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-4">
                        <div className="font-medium text-green-100">{agent.name}</div>
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-green-400 hidden sm:table-cell">{agent.strategy}</td>
                      <td className="px-4 sm:px-6 py-4 text-green-400">
                        {agent.wins}/{agent.losses}/{agent.ties}
                      </td>
                      <td className="px-4 sm:px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-green-900/50 rounded-full h-1.5 overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-green-500 to-emerald-500 h-1.5 rounded-full"
                              style={{ width: `${agent.winRate}%` }}
                            />
                          </div>
                          <span className="text-green-300 font-medium">{agent.winRate}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "matches" && (
          <div className="rounded-2xl border border-green-800 bg-green-900/30 overflow-hidden">
            <div className="divide-y divide-green-800/50">
              {matches.map((match) => (
                <div key={match.id} className="p-4 sm:p-6 hover:bg-green-900/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-green-100">{match.agent1}</span>
                        <span className="text-green-500">vs</span>
                        <span className="font-medium text-green-100">{match.agent2}</span>
                      </div>
                      {match.tournament && (
                        <div className="text-xs text-green-500">🏆 {match.tournament}</div>
                      )}
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-4">
                      <div className="text-xs text-green-500">{match.date}</div>
                      {match.winner ? (
                        <span className="text-xs px-2 py-1 rounded-full bg-green-800/50 text-green-300 border border-green-700">
                          Winner: {match.winner}
                        </span>
                      ) : (
                        <span className="text-xs px-2 py-1 rounded-full bg-yellow-900/30 text-yellow-300 border border-yellow-700">
                          Upcoming
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "tournaments" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tournaments.map((tournament) => (
              <div
                key={tournament.id}
                className="rounded-2xl border border-green-800 bg-green-900/30 p-6 hover:border-green-600 hover:bg-green-900/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-green-100 mb-1">{tournament.name}</h3>
                    <p className="text-sm text-green-500">{tournament.date}</p>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full border ${
                      tournament.status === "live"
                        ? "bg-red-900/30 text-red-300 border-red-700"
                        : tournament.status === "upcoming"
                        ? "bg-blue-900/30 text-blue-300 border-blue-700"
                        : "bg-green-800/50 text-green-300 border-green-700"
                    }`}
                  >
                    {tournament.status === "live" && "🔴 "}
                    {tournament.status}
                  </span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-green-400">Participants</span>
                    <span className="text-green-100 font-medium">{tournament.participants.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-green-400">Prize Pool</span>
                    <span className="text-green-100 font-medium">{tournament.prize}</span>
                  </div>
                </div>
                <button
                  className={`w-full rounded-lg px-4 py-2 text-sm font-semibold transition-colors active:scale-95 ${
                    tournament.status === "live"
                      ? "bg-red-600 text-white hover:bg-red-500"
                      : tournament.status === "upcoming"
                      ? "bg-green-600 text-white hover:bg-green-500"
                      : "border border-green-700 text-green-200 hover:bg-green-800/50"
                  }`}
                >
                  {tournament.status === "live"
                    ? "Join Match"
                    : tournament.status === "upcoming"
                    ? "Register"
                    : "View Results"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
