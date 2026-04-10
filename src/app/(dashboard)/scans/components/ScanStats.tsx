import { Ban } from "lucide-react";
import SeverityCard from "./SeverityCard";
import { IconInfoTriangle, IconZoomExclamation } from "@tabler/icons-react";

export default function ScanStats() {
    return (
        <div className="grid grid-cols-4 gap-4">
            <SeverityCard
                title="Critical Severity"
                value={86}
                trend="↑ +2% increase than yesterday"
                color="critical"
                icon={<Ban />}
            />
            <SeverityCard
                title="High Severity"
                value={16}
                trend="↑ +0.9% increase than yesterday"
                color="high"
                icon={<IconInfoTriangle stroke={2} />}
            />
            <SeverityCard
                title="Medium Severity"
                value={26}
                trend="↓ -0.9% decrease than yesterday"
                color="medium"
                icon={<IconInfoTriangle stroke={2} />}
            />
            <SeverityCard
                title="Low Severity"
                value={16}
                trend="↑ +0.9% increase than yesterday"
                color="low"
                icon={<IconZoomExclamation stroke={2} />}
            />
        </div>
    );
}
