"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Folder,
    Scan,
    Calendar,
    Bell,
    Settings,
    LifeBuoy,
    ChevronRight,
} from "lucide-react";
import Logo from "./Logo";
import Image from "next/image";

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 h-screen bg-sidebar text-sidebar-foreground border-r border-sidebar-border flex flex-col justify-between">
            <div>
                {/* Logo */}
                <div className="px-6 py-6">
                    <Logo />
                </div>

                <nav className="px-3 pt-5 space-y-1">
                    <NavItem
                        href="/dashboard"
                        icon={LayoutDashboard}
                        label="Dashboard"
                        active={pathname === "/dashboard"}
                    />

                    <NavItem
                        href="/projects"
                        icon={Folder}
                        label="Projects"
                        active={pathname === "/projects"}
                    />

                    <NavItem
                        href="/scans"
                        icon={Scan}
                        label="Scans"
                        active={pathname === "/scans"}
                    />

                    <NavItem
                        href="/schedule"
                        icon={Calendar}
                        label="Schedule"
                        active={pathname === "/schedule"}
                    />

                    <div className="my-4 border-t border-sidebar-border" />

                    <NavItem
                        href="/notifications"
                        icon={Bell}
                        label="Notifications"
                        active={pathname === "/notifications"}
                    />

                    <NavItem
                        href="/settings"
                        icon={Settings}
                        label="Settings"
                        active={pathname === "/settings"}
                    />

                    <NavItem
                        href="/support"
                        icon={LifeBuoy}
                        label="Support"
                        active={pathname === "/support"}
                    />
                </nav>
            </div>

            {/* Bottom profile */}
            <div className="border-t border-sidebar-border p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Image
                            src="https://i.pravatar.cc/40"
                            alt="user"
                            width={36}
                            height={36}
                            className="h-9 w-9 rounded-full"
                        />
                        <div className="leading-tight">
                            <p className="text-xs text-muted-foreground">
                                admin@edu.com
                            </p>
                            <p className="text-sm font-medium">
                                Security Lead
                            </p>
                        </div>
                    </div>

                    <ChevronRight size={18} className="text-muted-foreground" />
                </div>
            </div>
        </aside>
    );
}

function NavItem({
    href,
    icon: Icon,
    label,
    active,
}: {
    href: string;
    icon: any;
    label: string;
    active: boolean;
}) {
    return (
        <Link
            href={href}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-full text-sm transition
        ${active
                ? "bg-sidebar-primary/40 text-sidebar-accent-foreground font-medium"
                    : "text-muted-foreground  hover:bg-sidebar-primary/40 hover:text-sidebar-accent-foreground"
                }
      `}
        >
            <Icon size={18} />
            {label}
        </Link>
    );
}
