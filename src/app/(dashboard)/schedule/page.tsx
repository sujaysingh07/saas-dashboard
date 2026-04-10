import { Clock, Calendar, Repeat } from "lucide-react";

/* -------------------- Types -------------------- */
type ScheduleStatus = "Active" | "Paused" | "Failed";

type Schedule = {
    id: number;
    name: string;
    frequency: "Daily" | "Weekly" | "Monthly";
    lastRun: string;
    nextRun: string;
    status: ScheduleStatus;
};

export default function SchedulePage() {
    const schedules: Schedule[] = [
        { id: 1, name: "API Scan", frequency: "Daily", lastRun: "2 mins ago", nextRun: "Tomorrow 10:00 AM", status: "Active" },
        { id: 2, name: "Network Scan", frequency: "Weekly", lastRun: "1 hour ago", nextRun: "Sunday 2:00 AM", status: "Active" },
        { id: 3, name: "Web Scan", frequency: "Daily", lastRun: "5 mins ago", nextRun: "Tomorrow 9:00 AM", status: "Paused" },
        { id: 4, name: "Cloud Infra Scan", frequency: "Monthly", lastRun: "2 days ago", nextRun: "1 May 3:00 AM", status: "Active" },
        { id: 5, name: "Database Audit", frequency: "Weekly", lastRun: "3 hours ago", nextRun: "Saturday 1:00 AM", status: "Failed" },
        { id: 6, name: "Auth Service Scan", frequency: "Daily", lastRun: "10 mins ago", nextRun: "Tomorrow 11:00 AM", status: "Active" },
        { id: 7, name: "Container Scan", frequency: "Weekly", lastRun: "6 hours ago", nextRun: "Sunday 4:00 AM", status: "Paused" },
        { id: 8, name: "Dependency Scan", frequency: "Daily", lastRun: "15 mins ago", nextRun: "Tomorrow 8:00 AM", status: "Active" },

        // 🔥 Added More Realistic Data
        { id: 9, name: "Endpoint Security Scan", frequency: "Daily", lastRun: "20 mins ago", nextRun: "Tomorrow 7:00 AM", status: "Active" },
        { id: 10, name: "Firewall Audit", frequency: "Weekly", lastRun: "8 hours ago", nextRun: "Saturday 3:00 AM", status: "Failed" },
        { id: 11, name: "Internal Network Scan", frequency: "Monthly", lastRun: "5 days ago", nextRun: "1 May 1:00 AM", status: "Active" },
        { id: 12, name: "External Attack Scan", frequency: "Daily", lastRun: "30 mins ago", nextRun: "Tomorrow 6:00 AM", status: "Active" },
        { id: 13, name: "Kubernetes Cluster Scan", frequency: "Weekly", lastRun: "12 hours ago", nextRun: "Sunday 5:00 AM", status: "Paused" },
        { id: 14, name: "Secrets Detection Scan", frequency: "Daily", lastRun: "40 mins ago", nextRun: "Tomorrow 12:00 PM", status: "Active" },
        { id: 15, name: "Compliance Audit Scan", frequency: "Monthly", lastRun: "10 days ago", nextRun: "1 May 6:00 AM", status: "Active" },
        { id: 16, name: "IAM Policy Scan", frequency: "Weekly", lastRun: "1 day ago", nextRun: "Sunday 9:00 AM", status: "Failed" },
        { id: 17, name: "SSL Certificate Scan", frequency: "Daily", lastRun: "1 hour ago", nextRun: "Tomorrow 5:00 AM", status: "Active" },
        { id: 18, name: "DNS Security Scan", frequency: "Weekly", lastRun: "2 days ago", nextRun: "Saturday 11:00 PM", status: "Paused" },
        { id: 19, name: "Third-party Integration Scan", frequency: "Monthly", lastRun: "7 days ago", nextRun: "1 May 8:00 AM", status: "Active" },
        { id: 20, name: "Backup Configuration Scan", frequency: "Weekly", lastRun: "4 hours ago", nextRun: "Saturday 6:00 AM", status: "Active" },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground p-6 space-y-6">

            {/* Header */}
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Schedules</h1>

                <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm hover:opacity-90 transition">
                    + New Schedule
                </button>
            </div>

            {/* Table */}
            <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-border flex justify-between items-center">
                    <h2 className="font-medium">Scheduled Scans</h2>

                    <button className="text-sm text-muted-foreground hover:text-foreground transition">
                        View All
                    </button>
                </div>

                <table className="w-full text-sm">
                    <thead className="text-muted-foreground border-b border-border">
                        <tr>
                            <th className="text-left p-3">Name</th>
                            <th className="text-left p-3">Frequency</th>
                            <th className="text-left p-3">Last Run</th>
                            <th className="text-left p-3">Next Run</th>
                            <th className="text-left p-3">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {schedules.map((item) => (
                            <ScheduleRow key={item.id} {...item} />
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

/* -------------------- Row Component -------------------- */

function ScheduleRow({
    name,
    frequency,
    lastRun,
    nextRun,
    status,
}: Schedule) {
    const statusStyles: Record<ScheduleStatus, string> = {
        Active: "bg-success/20 text-success",
        Paused: "bg-muted text-muted-foreground",
        Failed: "bg-destructive/20 text-destructive",
    };

    const freqStyles = {
        Daily: "bg-primary/20 text-primary ",
        Weekly: "bg-info/20 text-info",
        Monthly: "bg-warning/20 text-warning",
    };

    return (
        <tr className="border-t border-border hover:bg-muted/40 transition">

            {/* Name */}
            <td className="p-3 font-medium flex items-center gap-2">
                <Clock size={14} className="text-muted-foreground" />
                {name}
            </td>

            {/* Frequency */}
            <td className="p-3">
                <span className={`px-2 py-1 text-xs rounded-md inline-flex ${freqStyles[frequency]}`}>
                    <span className="flex items-center gap-1">
                        <Repeat size={12} />
                        {frequency}
                    </span>
                </span>
            </td>

            {/* Last Run */}
            <td className="p-3 text-muted-foreground">
                {lastRun}
            </td>

            {/* Next Run */}
            <td className="p-3 text-muted-foreground flex items-center gap-2">
                <Calendar size={14} />
                {nextRun}
            </td>

            {/* Status */}
            <td className="p-3">
                <span className={`px-2 py-1 text-xs rounded-md ${statusStyles[status]}`}>
                    {status}
                </span>
            </td>
        </tr>
    );
}
