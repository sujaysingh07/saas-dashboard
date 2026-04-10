import { Bell, CheckCircle, AlertTriangle, Info, XCircle } from "lucide-react";

/* -------------------- Types -------------------- */
type NotificationType = "info" | "success" | "warning" | "error";

type Notification = {
    id: number;
    title: string;
    message: string;
    time: string;
    type: NotificationType;
    read: boolean;
};

export default function NotificationPage() {
    const notifications: Notification[] = [
        { id: 1, title: "Scan Completed", message: "API Security Scan completed successfully.", time: "2 mins ago", type: "success", read: false },
        { id: 2, title: "High Vulnerability Detected", message: "Critical issue found in Web Scan.", time: "5 mins ago", type: "error", read: false },
        { id: 3, title: "Scheduled Scan", message: "Network scan scheduled for tonight.", time: "10 mins ago", type: "info", read: true },
        { id: 4, title: "Scan Paused", message: "Container scan has been paused.", time: "15 mins ago", type: "warning", read: true },
        { id: 5, title: "New Project Created", message: "Project 'Cloud Infra' created.", time: "20 mins ago", type: "success", read: true },

        { id: 6, title: "Scan Failed", message: "Database scan failed due to timeout.", time: "25 mins ago", type: "error", read: false },
        { id: 7, title: "Weekly Report Ready", message: "Your weekly report is ready.", time: "30 mins ago", type: "info", read: true },
        { id: 8, title: "Unauthorized Access", message: "Suspicious login detected.", time: "35 mins ago", type: "warning", read: false },
        { id: 9, title: "Scan Completed", message: "Internal network scan completed.", time: "40 mins ago", type: "success", read: true },
        { id: 10, title: "Policy Updated", message: "Security policy updated successfully.", time: "45 mins ago", type: "info", read: true },

        { id: 11, title: "High CPU Usage", message: "Server CPU usage exceeded 90%.", time: "50 mins ago", type: "warning", read: false },
        { id: 12, title: "Scan Scheduled", message: "Firewall scan scheduled.", time: "55 mins ago", type: "info", read: true },
        { id: 13, title: "Scan Completed", message: "Endpoint scan completed.", time: "1 hour ago", type: "success", read: true },
        { id: 14, title: "Critical Issue Found", message: "SQL Injection vulnerability detected.", time: "1 hour ago", type: "error", read: false },
        { id: 15, title: "Backup Completed", message: "System backup completed successfully.", time: "1 hour ago", type: "success", read: true },

        { id: 16, title: "Scan Paused", message: "External scan paused manually.", time: "2 hours ago", type: "warning", read: true },
        { id: 17, title: "New Integration", message: "GitHub integration added.", time: "2 hours ago", type: "info", read: true },
        { id: 18, title: "Scan Failed", message: "Container scan failed.", time: "2 hours ago", type: "error", read: false },
        { id: 19, title: "Scan Completed", message: "Dependency scan completed.", time: "2 hours ago", type: "success", read: true },
        { id: 20, title: "User Added", message: "New user added to project.", time: "3 hours ago", type: "info", read: true },

        { id: 21, title: "High Risk Alert", message: "Multiple vulnerabilities detected.", time: "3 hours ago", type: "error", read: false },
        { id: 22, title: "Scan Scheduled", message: "Weekly scan configured.", time: "3 hours ago", type: "info", read: true },
        { id: 23, title: "Scan Completed", message: "Kubernetes scan completed.", time: "4 hours ago", type: "success", read: true },
        { id: 24, title: "Disk Space Low", message: "Less than 10% disk space remaining.", time: "4 hours ago", type: "warning", read: false },
        { id: 25, title: "Policy Violation", message: "Security policy violated.", time: "4 hours ago", type: "error", read: false },

        { id: 26, title: "Scan Completed", message: "SSL scan completed.", time: "5 hours ago", type: "success", read: true },
        { id: 27, title: "New Alert", message: "New alert generated.", time: "5 hours ago", type: "info", read: true },
        { id: 28, title: "Scan Failed", message: "DNS scan failed.", time: "5 hours ago", type: "error", read: false },
        { id: 29, title: "System Update", message: "System updated successfully.", time: "6 hours ago", type: "success", read: true },
        { id: 30, title: "Warning Issued", message: "Multiple login attempts detected.", time: "6 hours ago", type: "warning", read: false },

        { id: 31, title: "Scan Completed", message: "IAM scan completed.", time: "6 hours ago", type: "success", read: true },
        { id: 32, title: "Scan Scheduled", message: "Monthly audit scheduled.", time: "7 hours ago", type: "info", read: true },
        { id: 33, title: "Critical Alert", message: "Zero-day vulnerability found.", time: "7 hours ago", type: "error", read: false },
        { id: 34, title: "Scan Completed", message: "Backup scan completed.", time: "8 hours ago", type: "success", read: true },
        { id: 35, title: "Service Restarted", message: "Server restarted successfully.", time: "8 hours ago", type: "info", read: true },

        { id: 36, title: "Scan Failed", message: "API scan failed.", time: "9 hours ago", type: "error", read: false },
        { id: 37, title: "New Project", message: "New project created.", time: "9 hours ago", type: "success", read: true },
        { id: 38, title: "Warning", message: "Unusual traffic detected.", time: "10 hours ago", type: "warning", read: false },
        { id: 39, title: "Scan Completed", message: "Infra scan completed.", time: "10 hours ago", type: "success", read: true },
        { id: 40, title: "Alert Resolved", message: "Previous alert resolved.", time: "11 hours ago", type: "success", read: true },

        { id: 41, title: "Scan Scheduled", message: "Night scan scheduled.", time: "11 hours ago", type: "info", read: true },
        { id: 42, title: "Security Alert", message: "Unauthorized API usage detected.", time: "12 hours ago", type: "error", read: false },
        { id: 43, title: "Scan Completed", message: "Cloud scan completed.", time: "12 hours ago", type: "success", read: true },
        { id: 44, title: "Policy Updated", message: "Access policy updated.", time: "13 hours ago", type: "info", read: true },
        { id: 45, title: "Scan Failed", message: "Web scan failed.", time: "13 hours ago", type: "error", read: false },

        { id: 46, title: "Scan Completed", message: "Network scan completed.", time: "14 hours ago", type: "success", read: true },
        { id: 47, title: "Warning", message: "High memory usage detected.", time: "14 hours ago", type: "warning", read: false },
        { id: 48, title: "New Alert", message: "New vulnerability alert.", time: "15 hours ago", type: "info", read: true },
        { id: 49, title: "Scan Completed", message: "Security audit completed.", time: "15 hours ago", type: "success", read: true },
        { id: 50, title: "Critical Issue", message: "RCE vulnerability detected.", time: "16 hours ago", type: "error", read: false },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground p-6 space-y-6">

            {/* Header */}
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Notifications</h1>

                <button className="px-4 py-2 text-sm border border-border rounded-md bg-card hover:bg-muted transition">
                    Mark all as read
                </button>
            </div>

            {/* Notification List */}
            <div className="bg-card border border-border rounded-lg divide-y divide-border">

                {notifications.map((item) => (
                    <NotificationItem key={item.id} {...item} />
                ))}

            </div>

        </div>
    );
}

/* -------------------- Notification Item -------------------- */

function NotificationItem({
    title,
    message,
    time,
    type,
    read,
}: Notification) {
    const typeStyles: Record<NotificationType, string> = {
        success: "text-success",
        error: "text-destructive",
        warning: "text-warning",
        info: "text-info",
    };

    const icons = {
        success: <CheckCircle size={16} />,
        error: <XCircle size={16} />,
        warning: <AlertTriangle size={16} />,
        info: <Info size={16} />,
    };

    return (
        <div className={`p-4 flex items-start gap-4 hover:bg-muted/40 transition ${!read ? "bg-muted/30" : ""}`}>

            {/* Icon */}
            <div className={`${typeStyles[type]} mt-1`}>
                {icons[type]}
            </div>

            {/* Content */}
            <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">{title}</h3>
                    <span className="text-xs text-muted-foreground">{time}</span>
                </div>

                <p className="text-sm text-muted-foreground">{message}</p>
            </div>

            {/* Unread Dot */}
            {!read && (
                <span className="w-2 h-2 rounded-full bg-primary mt-2" />
            )}
        </div>
    );
}
