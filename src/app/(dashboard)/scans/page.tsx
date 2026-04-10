import ScanHeader from "./components/ScanHeader";
import ScanFilters from "./components/ScanFilters";
import ScanTable from "./components/ScanTable";
import { scanData } from "./data";
import ScanMetaBar from "./components/ScanMetaBar";

export default function ScansPage() {
    return (
        <div className="h-screen    ">

            <div className="bg-white my-2">
                <ScanMetaBar />
            </div>
            <div className="flex-1 flex flex-col bg-card overflow-hidden">
                <ScanFilters />

                {/* Table wrapper */}
                <div className="flex-1 overflow-auto ">
                    <ScanTable data={scanData} />
                </div>
            </div>
        </div>
    );
}
