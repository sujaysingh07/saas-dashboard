"use client";

import { ModeToggle } from "@/components/ui/mode-toggle";
import { House } from "lucide-react";
import { usePathname } from "next/navigation";

export default function ScanHeader() {
    const pathname = usePathname();

    return (
        <div className="flex items-center border-b px-6 py-2 border-border sticky top-0 bg-background z-10">

            {/* LEFT */}
            <div className="flex-1">
                {pathname === "/scans" && (
                    <div className="flex items-baseline gap-2">
                        <h1 className="text-xl font-semibold">Scan</h1>

                        <House size={10} />

                        <p className="text-[12px] text-muted-foreground px-1">
                            / Private Assets /{" "}
                            <span className="text-primary font-semibold px-1">
                                New Scan
                            </span>
                        </p>
                    </div>
                )}
            </div>

            {/* RIGHT (ALWAYS RIGHT) */}
            <div className="flex items-center gap-3 ml-auto">

                {pathname === "/scans" && (
                    <>
                        <button className="px-4 py-1 rounded-md border border-border bg-transparent">
                            Export Report
                        </button>

                        <button className="px-4 py-1 rounded-md bg-destructive/20 border border-destructive/30 text-destructive">
                            Stop Scan
                        </button>
                    </>
                )}

                <ModeToggle />
            </div>
        </div>
    );
}
