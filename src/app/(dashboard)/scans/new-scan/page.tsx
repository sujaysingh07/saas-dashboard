import LiveScanConsole from "./LiveScanConsole";
import ScanProgressCard from "./ScanProgressCard";

export default function NewScanPage() {
    return (
        <div className="p-3">
            <ScanProgressCard  />
            <LiveScanConsole
                logs={[
                    "[09:00:00] I'll begin a systematic penetration test on helpdesk.democorp.com...",
                    "[09:01:00] Target is online. Performing port scanning...",
                    "[09:02:00] Reconnaissance complete. Apache httpd 2.4.65 on port 80...",
                    "[09:06:00] Accessed dashboard using X-UserId header...",
                ]}
                findings={[
                    {
                        id: 1,
                        severity: "Critical",
                        title: "SQL Injection in Authentication Endpoint",
                        endpoint: "/api/users/profile",
                        description:
                            "Time-based blind SQL injection confirmed on user-controlled input.",
                        time: "10:45:23",
                    },
                    {
                        id: 2,
                        severity: "High",
                        title: "Unauthorized Access to User Metadata",
                        endpoint: "/api/auth/login",
                        description:
                            "Low-privilege user was able to access metadata of other users.",
                        time: "10:45:23",
                    },
                    {
                        id: 3,
                        severity: "High",
                        title: "Unauthorized Access to User Metadata",
                        endpoint: "/api/auth/login",
                        description:
                            "Low-privilege user was able to access metadata of other users.",
                        time: "10:45:23",
                    },
                    {
                        id: 4,
                        severity: "High",
                        title: "Unauthorized Access to User Metadata",
                        endpoint: "/api/auth/login",
                        description:
                            "Low-privilege user was able to access metadata of other users.",
                        time: "10:45:23",
                    },
                ]}
            />
        </div>
    );
}
