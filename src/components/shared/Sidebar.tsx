"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
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
import Image from "next/image";
import Logo from "./Logo";

export function Sidebar() {
    const pathname = usePathname();

    const [profileOpen, setProfileOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const ref = useRef<HTMLDivElement>(null);

    // Close profile dropdown on outside click
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setProfileOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    return (
        <>
            {/* MOBILE MENU BUTTON */}
            <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden fixed top-4 left-4 z-50 bg-card border border-border p-2 rounded-md"
            >
                ☰
            </button>

            {/* BACKDROP */}
            <div
                onClick={() => setMobileOpen(false)}
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity md:hidden ${mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
            />

            {/* SIDEBAR */}
            <aside
                className={`
          fixed md:static top-0 left-0 h-full w-64
          bg-sidebar text-sidebar-foreground border-r border-sidebar-border
          flex flex-col justify-between z-50
          transform transition-transform duration-300 ease-in-out
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
            >
                {/* TOP */}
                <div>
                    {/* Mobile Header */}
                    <div className="flex items-center justify-between px-6 py-4 md:hidden">
                        <span className="font-semibold"></span>
                        <button onClick={() => setMobileOpen(false)}>✕</button>
                    </div>

                    {/* Logo */}
                    <div className="px-6 py-6">
                        <Logo />
                    </div>

                    {/* NAV */}
                    <nav className="px-3 pt-5 space-y-1">
                        <NavItem
                            href="/dashboard"
                            icon={LayoutDashboard}
                            label="Dashboard"
                            active={pathname === "/dashboard"}
                            onClick={() => setMobileOpen(false)}
                        />

                        <NavItem
                            href="/projects"
                            icon={Folder}
                            label="Projects"
                            active={pathname === "/projects"}
                            onClick={() => setMobileOpen(false)}
                        />

                        <NavItem
                            href="/scans"
                            icon={Scan}
                            label="Scans"
                            active={pathname === "/scans"}
                            onClick={() => setMobileOpen(false)}
                        />

                        <NavItem
                            href="/schedule"
                            icon={Calendar}
                            label="Schedule"
                            active={pathname === "/schedule"}
                            onClick={() => setMobileOpen(false)}
                        />

                        <div className="my-4 border-t border-sidebar-border" />

                        <NavItem
                            href="/notifications"
                            icon={Bell}
                            label="Notifications"
                            active={pathname === "/notifications"}
                            onClick={() => setMobileOpen(false)}
                        />

                        <NavItem
                            href="/settings"
                            icon={Settings}
                            label="Settings"
                            active={pathname === "/settings"}
                            onClick={() => setMobileOpen(false)}
                        />

                        <NavItem
                            href="/support"
                            icon={LifeBuoy}
                            label="Support"
                            active={pathname === "/support"}
                            onClick={() => setMobileOpen(false)}
                        />
                    </nav>
                </div>

                {/* PROFILE */}
                <div className="border-t border-sidebar-border p-4 relative" ref={ref}>
                    <button
                        onClick={() => setProfileOpen((prev) => !prev)}
                        className="w-full flex items-center justify-between"
                    >
                        <div className="flex items-center gap-3">
                            <Image
                                src="https://i.pravatar.cc/40"
                                alt="user"
                                width={36}
                                height={36}
                                className="h-9 w-9 rounded-full"
                            />
                            <div className="leading-tight text-left">
                                <p className="text-xs text-muted-foreground">
                                    admin@edu.com
                                </p>
                                <p className="text-sm font-medium">
                                    Security Lead
                                </p>
                            </div>
                        </div>

                        <ChevronRight
                            size={18}
                            className={`text-muted-foreground transition-transform ${profileOpen ? "rotate-90" : ""
                                }`}
                        />
                    </button>

                    {/* DROPDOWN */}
                    <div
                        className={`absolute bottom-16 left-4 right-4 bg-card border border-border rounded-lg shadow-md overflow-hidden transition-all duration-200 ${profileOpen
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-2 pointer-events-none"
                            }`}
                    >
                        <div className="p-3 border-b border-border">
                            <p className="text-sm font-medium">Sujay Singh</p>
                            <p className="text-xs text-muted-foreground">
                                admin@edu.com
                            </p>
                        </div>

                        <button className="w-full text-left px-4 py-2 text-sm hover:bg-muted/40">
                            View Profile
                        </button>

                        <button className="w-full text-left px-4 py-2 text-sm hover:bg-muted/40">
                            Account Settings
                        </button>

                        <div className="border-t border-border" />

                        <Link href="/login">
                            <button className="w-full text-left px-4 py-2 text-sm text-destructive hover:bg-destructive/10">
                                Logout
                            </button>
                        </Link>
                    </div>
                </div>
            </aside>
        </>
    );
}

/* NAV ITEM */
function NavItem({
    href,
    icon: Icon,
    label,
    active,
    onClick,
}: {
    href: string;
    icon: React.ComponentType<{ size: number }>;
    label: string;
    active: boolean;
    onClick?: () => void;
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`flex items-center gap-3 px-4 py-2.5 rounded-full text-sm transition
        ${active
                    ? "bg-sidebar-primary/40 text-sidebar-accent-foreground font-medium"
                    : "text-muted-foreground hover:bg-sidebar-primary/40 hover:text-sidebar-accent-foreground"
                }
      `}
        >
            <Icon size={18} />
            {label}
        </Link>
    );
}
