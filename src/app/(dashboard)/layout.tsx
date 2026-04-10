import { Sidebar } from "@/components/shared/Sidebar";
import ScanHeader from "./scans/components/ScanHeader";


export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen">
            <Sidebar />

            {/* RIGHT SIDE CONTENT */}
            <main className="flex-1 overflow-auto ">
                <ScanHeader />
                {children}
            </main>
        </div>
    );
}
