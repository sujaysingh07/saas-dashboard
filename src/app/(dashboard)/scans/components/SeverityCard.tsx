const severityStyles = {
    critical: {
        color: "#D1347C",
        bg: "rgba(209, 52, 124, 0.12)",
    },
    high: {
        color: "#B356A1",
        bg: "rgba(179, 86, 161, 0.12)",
    },
    medium: {
        color: "#33855A",
        bg: "rgba(51, 133, 90, 0.12)",
    },
    low: {
        color: "#D95692",
        bg: "rgba(217, 86, 146, 0.12)",
    },
};

export default function SeverityCard({
    title,
    value,
    trend,
    color,
    icon,
}: {
    title: string;
    value: number;
    trend: string;
    color: "critical" | "high" | "medium" | "low";
    icon: React.ReactNode;
}) {
    const styles = severityStyles[color];

    return (
        <div className="p-4 px-6 rounded-xl">
            <div className="flex justify-between items-start">
                <p className="text-sm text-muted-foreground">{title}</p>

                <div
                    className="w-8 h-8 flex items-center justify-center rounded-[8px] p-1.5"
                    style={{
                        backgroundColor: styles.bg,
                        color: styles.color,
                    }}
                >
                    {icon}
                </div>
            </div>

            <div className="flex gap-2 items-baseline mt-2">
                <div className="text-2xl font-semibold">{value}</div>

                <p
                    className="text-[10px] font-semibold"
                    style={{ color: styles.color }}
                >
                    {trend}
                </p>
            </div>
        </div>
    );
}
