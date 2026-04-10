import Link from "next/link";

export default function ScanFilters() {
    return (
        <div className="flex items-center justify-between gap-4 p-5">
            <input
                placeholder="Search scans by name or type..."
                className="flex-1 px-4 py-2 rounded-md border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />

            <div className="flex gap-3">
                <button className="px-4 py-2 rounded-md border border-border">
                    Filter
                </button>

                <button className="px-4 py-2 rounded-md border border-border">
                    Column
                </button>

                <Link href="/scans/new-scan" className="px-4 py-2 rounded-md bg-primary text-primary-foreground">
                    + New Scan
                </Link>
            </div>
        </div>
    );
}
