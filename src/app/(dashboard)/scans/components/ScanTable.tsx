import ScanRow from "./ScanRow";

export default function ScanTable({ data }: { data: any[] }) {
    return (
        <div className="bg-card  overflow-hidden ">
            <table className="w-full text-sm mx-5">
                <thead className=" border-b-2 text-muted-foreground ">
                    <tr>
                        <th className="text-left p-3">Scan Name</th>
                        <th className="text-left p-3">Type</th>
                        <th className="text-left p-3">Status</th>
                        <th className="text-left p-3">Progress</th>
                        <th className="text-left p-3">Vulnerability</th>
                        <th className="text-left p-3">Last Scan</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((scan) => (
                        <ScanRow key={scan.id} scan={scan} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
