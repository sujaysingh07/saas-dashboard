import { User, Lock, Bell, Palette } from "lucide-react";

/* -------------------- Settings Page -------------------- */
export default function SettingsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground p-6 space-y-6">

            {/* Header */}
            <div>
                <h1 className="text-2xl font-semibold">Settings</h1>
                <p className="text-sm text-muted-foreground">
                    Manage your account and preferences
                </p>
            </div>

            {/* Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Profile Settings */}
                <SettingsCard title="Profile" icon={<User size={16} />}>
                    <div className="space-y-4">
                        <Input label="Full Name" placeholder="Sujay Singh" />
                        <Input label="Email" placeholder="sujay@email.com" />
                        <Input label="Organization" placeholder="Project X" />
                    </div>
                </SettingsCard>

                {/* Security Settings */}
                <SettingsCard title="Security" icon={<Lock size={16} />}>
                    <div className="space-y-4">
                        <Input label="Current Password" type="password" />
                        <Input label="New Password" type="password" />
                        <Input label="Confirm Password" type="password" />

                        <button className="w-full mt-2 bg-primary text-primary-foreground py-2 rounded-md text-sm hover:opacity-90 transition">
                            Update Password
                        </button>
                    </div>
                </SettingsCard>

                {/* Notifications */}
                <SettingsCard title="Notifications" icon={<Bell size={16} />}>
                    <div className="space-y-3 text-sm">
                        <Toggle label="Email Notifications" />
                        <Toggle label="Scan Alerts" />
                        <Toggle label="Weekly Reports" />
                    </div>
                </SettingsCard>

                {/* Preferences */}
                <SettingsCard title="Preferences" icon={<Palette size={16} />}>
                    <div className="space-y-3 text-sm">
                        <Toggle label="Dark Mode" />
                        <Toggle label="Auto Refresh Dashboard" />
                    </div>
                </SettingsCard>

            </div>

        </div>
    );
}

/* -------------------- Reusable Components -------------------- */

function SettingsCard({
    title,
    icon,
    children,
}: {
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}) {
    return (
        <div className="bg-card border border-border rounded-lg p-5 space-y-4">
            <div className="flex items-center gap-2 font-medium">
                <span className="text-muted-foreground">{icon}</span>
                {title}
            </div>

            {children}
        </div>
    );
}

function Input({
    label,
    type = "text",
    placeholder,
}: {
    label: string;
    type?: string;
    placeholder?: string;
}) {
    return (
        <div className="space-y-1">
            <label className="text-sm text-muted-foreground">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full px-3 py-2 rounded-md border border-border bg-background text-sm outline-none focus:ring-2 focus:ring-primary"
            />
        </div>
    );
}

function Toggle({ label }: { label: string }) {
    return (
        <div className="flex items-center justify-between">
            <span className="text-muted-foreground">{label}</span>

            <button className="w-10 h-5 rounded-full bg-muted relative transition">
                <span className="absolute left-1 top-1 w-3 h-3 bg-foreground rounded-full transition" />
            </button>
        </div>
    );
}
