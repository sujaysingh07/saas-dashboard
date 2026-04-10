import { Activity, Shield, AlertTriangle, Server } from "lucide-react";

type ScanStatus = "Completed" | "Scheduled" | "Failed";

type Scan = {
  id: number;
  name: string;
  status: ScanStatus;
  progress: number;
};

export default function DashboardPage() {
  const scans: Scan[] = [
    { id: 1, name: "API Security Scan", status: "Completed", progress: 100 },
    { id: 2, name: "Network Scan", status: "Scheduled", progress: 60 },
    { id: 3, name: "Web Scan", status: "Failed", progress: 30 },
    { id: 4, name: "Cloud Infrastructure Scan", status: "Completed", progress: 100 },
    { id: 5, name: "Database Security Audit", status: "Scheduled", progress: 45 },
    { id: 6, name: "Authentication Scan", status: "Completed", progress: 100 },
    { id: 7, name: "Internal Network Scan", status: "Failed", progress: 20 },
    { id: 8, name: "External Attack Surface Scan", status: "Scheduled", progress: 70 },
    { id: 9, name: "Container Security Scan", status: "Completed", progress: 100 },
    { id: 10, name: "Dependency Vulnerability Scan", status: "Completed", progress: 100 },
    { id: 11, name: "Endpoint Security Scan", status: "Scheduled", progress: 55 },
    { id: 12, name: "Firewall Configuration Scan", status: "Failed", progress: 10 },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground p-6 space-y-6">

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Dashboard</h1>

        <button className="px-4 py-2 rounded-md border border-border bg-card hover:bg-muted transition text-sm">
          Refresh
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Scans" value="1,240" icon={<Activity size={16} />} />
        <StatCard title="Active Assets" value="320" icon={<Server size={16} />} />
        <StatCard title="Vulnerabilities" value="86" icon={<AlertTriangle size={16} />} />
        <StatCard title="Protected" value="98%" icon={<Shield size={16} />} />
      </div>

      {/* Table Section */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-border flex justify-between items-center">
          <h2 className="font-medium">Recent Scans</h2>

          <button className="text-sm text-muted-foreground hover:text-foreground transition">
            View All
          </button>
        </div>

        <table className="w-full text-sm">
          <thead className="text-muted-foreground border-b border-border">
            <tr>
              <th className="text-left p-3">Scan</th>
              <th className="text-left p-3">Status</th>
              <th className="text-left p-3">Progress</th>
              <th className="text-left p-3">Last Run</th>
            </tr>
          </thead>

          <tbody>
            {scans.map((scan) => (
              <TableRow key={scan.id} {...scan} />
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}


function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-card border border-border rounded-lg p-4 flex items-center justify-between">
      <div>
        <p className="text-sm text-muted-foreground">{title}</p>
        <h3 className="text-xl font-semibold">{value}</h3>
      </div>

      <div className="text-muted-foreground">{icon}</div>
    </div>
  );
}

function TableRow({ name, status, progress }: Scan) {
  const statusStyles: Record<ScanStatus, string> = {
    Completed: "bg-success/20 text-success",
    Scheduled: "bg-info/20 text-info",
    Failed: "bg-destructive/20 text-destructive",
  };

  const progressStyles: Record<ScanStatus, string> = {
    Completed: "bg-primary",
    Scheduled: "bg-info",
    Failed: "bg-destructive",
  };

  return (
    <tr className="border-t border-border hover:bg-muted/40 transition">
      <td className="p-3 font-medium">{name}</td>

      <td className="p-3">
        <span className={`px-2 py-1 rounded-md text-xs font-medium ${statusStyles[status]}`}>
          {status}
        </span>
      </td>

      <td className="p-3">
        <div className="flex items-center gap-3">
          <div className="w-28 bg-muted h-2 rounded-full overflow-hidden">
            <div
              className={`h-2 rounded-full ${progressStyles[status]}`}
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs text-muted-foreground">{progress}%</span>
        </div>
      </td>

      <td className="p-3 text-muted-foreground">2 mins ago</td>
    </tr>
  );
}
