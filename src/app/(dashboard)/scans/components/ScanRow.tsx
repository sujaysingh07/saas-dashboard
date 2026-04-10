type Scan = {
    id: number;
    name: string;
    type: string;
    status: "Completed" | "Scheduled" | "Failed";
    progress: number;
    vulnerabilities: {
        critical: number;
        high: number;
        medium: number;
        low: number;
    };
    lastScan: string;
};

export default function ScanRow({ scan }: { scan: Scan }) {
    const statusStyles = {
        Completed: "bg-green-100 text-green-700",
        Scheduled: "bg-blue-100 text-blue-700",
        Failed: "bg-red-100 text-red-600",
    };

    return (
        <tr className="border-t border-border hover:bg-muted/40 transition">
            {/* Name */}
            <td className="p-3 font-medium">{scan.name}</td>

            {/* Type */}
            <td className="p-3 text-muted-foreground">{scan.type}</td>

            {/* Status */}
            <td className="p-3">
                <span
                    className={`px-2 py-1 rounded-md text-xs font-medium ${statusStyles[scan.status]}`}
                >
                    {scan.status}
                </span>
            </td>

            {/* Progress */}
            <td className="p-3">
                <div className="flex items-center gap-3">
                    <div className="w-28 bg-muted h-2 rounded-full overflow-hidden">
                        <div
                            className={`h-2 rounded-full ${scan.status === "Failed"
                                    ? "bg-red-500"
                                    : scan.status === "Scheduled"
                                        ? "bg-blue-500"
                                        : "bg-primary"
                                }`}
                            style={{ width: `${scan.progress}%` }}
                        />
                    </div>
                    <span className="text-xs text-muted-foreground">
                        {scan.progress}%
                    </span>
                </div>
            </td>

            {/* Vulnerabilities */}
            <td className="p-3">
                <div className="flex gap-2 ">
                    {scan.vulnerabilities.critical > 0 && (
                        <Badge color="critical" value={scan.vulnerabilities.critical} />
                    )}
                    {scan.vulnerabilities.high > 0 && (
                        <Badge color="high" value={scan.vulnerabilities.high} />
                    )}
                    {scan.vulnerabilities.medium > 0 && (
                        <Badge color="medium" value={scan.vulnerabilities.medium} />
                    )}
                    {scan.vulnerabilities.low > 0 && (
                        <Badge color="low" value={scan.vulnerabilities.low} />
                    )}
                </div>
            </td>

            {/* Last Scan */}
            <td className="p-3 text-muted-foreground text-sm">
                {scan.lastScan}
            </td>
        </tr>
    );
}

/* Vulnerability Badge Component */
function Badge({
    color,
    value,
}: {
    color: "critical" | "high" | "medium" | "low";
    value: number;
}) {
    const styles = {
        critical: "bg-red-500 text-white",
        high: "bg-orange-500 text-white",
        medium: "bg-yellow-400 text-black",
        low: "bg-green-500 text-white",
    };

    return (
        <span
            className={`px-2 py-0.5 rounded-md text-xs font-semibold ${styles[color]}`}
        >
            {value}
        </span>
    );
}
