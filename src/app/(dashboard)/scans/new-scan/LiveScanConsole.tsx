"use client";

import { useState } from "react";

type Finding = {
  id: number;
  severity: "Critical" | "High" | "Medium";
  title: string;
  endpoint: string;
  description: string;
  time: string;
};

export default function LiveScanConsole({
  logs,
  findings,
}: {
  logs: string[];
  findings: Finding[];
}) {
  const [activeTab, setActiveTab] = useState("Activity Log");

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden flex h-125 mt-2">
      <div className="flex-1 flex flex-col border-r border-border">
        <div className="px-6 py-3.5 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="font-medium text-foreground">
              Live Scan Console
            </span>
            <span className="text-xs text-muted-foreground ">Running...</span>
          </div>
        </div>

        <div className="flex gap-6 px-6 border-b border-border text-sm">
          {["Activity Log", "Verification Loops"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 border-b-2 transition ${
                activeTab === tab
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-auto px-6 py-4 font-mono text-xs text-muted-foreground space-y-3">
          {logs.map((log, i) => (
            <pre key={i} className="whitespace-pre-wrap">
              {log}
            </pre>
          ))}
        </div>
      </div>

      <div className="w-[360px] flex flex-col">
        <div className="px-6 py-4 border-b border-border font-medium text-sm">
          Finding Log
        </div>

        <div className="flex-1 overflow-auto p-4 space-y-4">
          {findings.map((finding) => (
            <FindingCard key={finding.id} finding={finding} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FindingCard({ finding }: { finding: Finding }) {
  const severityStyles = {
    Critical: "bg-red-100 text-red-700",
    High: "bg-orange-100 text-orange-700",
    Medium: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className="bg-muted border border-border rounded-lg p-4 space-y-2">
      <div className="flex justify-between items-start">
        <span
          className={`text-xs font-semibold px-2 py-1 rounded ${severityStyles[finding.severity]}`}
        >
          {finding.severity}
        </span>
        <span className="text-xs text-muted-foreground">{finding.time}</span>
      </div>

      <div className="text-sm font-medium text-foreground">{finding.title}</div>

      <div className="text-xs text-primary">{finding.endpoint}</div>

      <div className="text-xs text-muted-foreground">{finding.description}</div>
    </div>
  );
}
