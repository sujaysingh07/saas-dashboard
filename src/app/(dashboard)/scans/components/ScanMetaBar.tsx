import { RefreshCw } from "lucide-react";
import ScanStats from "./ScanStats";

export default function ScanMetaBar() {
    return (
        <div className="bg-card border border-border">

            {/* Top Meta Row */}
            <div className="flex items-center justify-between px-6 py-4 text-sm">

                {/* Left Meta Info */}
                <div className="flex items-center gap-6 text-muted-foreground">

                    <MetaItem label="Org" value="Project X" />
                    <Divider />

                    <MetaItem label="Owner" value="Nammagiri" />
                    <Divider />

                    <MetaItem label="Total Scans" value="100" />
                    <Divider />

                    <MetaItem label="Scheduled" value="1000" />
                    <Divider />

                    <MetaItem label="Rescans" value="100" />
                    <Divider />

                    <MetaItem label="Failed Scans" value="100" />
                </div>

                {/* Right Side Refresh */}
                <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition">
                    <RefreshCw size={14} />
                    <span>10 mins ago</span>
                </button>
            </div>

            {/* Stats Section */}
            <div className="border-t border-border">
                <ScanStats />
            </div>

        </div>
    );
}

function MetaItem({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="flex items-center gap-1">
            <span className="text-muted-foreground">{label}:</span>
            <span className="text-foreground font-medium">{value}</span>
        </div>
    );
}

function Divider() {
    return <div className="h-4 w-px bg-border" />;
}
