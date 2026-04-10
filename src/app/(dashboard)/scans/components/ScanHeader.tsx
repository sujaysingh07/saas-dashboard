import { ModeToggle } from "@/components/ui/mode-toggle";
import { House } from "lucide-react";

export default function ScanHeader() {
    return (
        <div className="flex items-center justify-between border-b-2 px-6 py-2 border-gray-400/20 sticky top-0 bg-background z-10">
            <div className="flex items-baseline gap-2">
                <h1 className="text-xl font-semibold">Scan</h1>

                <House size={10} />

                <p className="text-[12px] text-muted-foreground px-1">
                   / {"  "}Private Assets  / {"  "}<span className="text-primary font-semibold px-1">New Scan</span>
                </p>
            </div>

            <div className="flex gap-3">
                <button className="px-4 py-2 rounded-md border-2 border-gray-700/10 bg-transparent">
                    Export Report
                </button>

                <button className="px-4 py-2 rounded-md bg-red-300/30 border-2 border-red-700/20 text-red-600 ">
                    Stop Scan
                </button>
                <ModeToggle/>
            </div>
        </div>
    );
}
