"use client";

import { useState } from "react";

/* -------------------- TYPES -------------------- */
type Status = "Open" | "In Progress" | "Resolved";
type Priority = "Low" | "Medium" | "High";

type Comment = {
    id: number;
    text: string;
    author: string;
    time: string;
};

type Ticket = {
    id: number;
    title: string;
    user: string;
    status: Status;
    priority: Priority;
    assignedTo?: string;
    createdAt: string;
    comments: Comment[];
};

/* -------------------- PAGE -------------------- */
export default function SupportPage() {
    const [selected, setSelected] = useState<Ticket | null>(null);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<Status | "All">("All");

    const [tickets, setTickets] = useState<Ticket[]>([
        {
            id: 1,
            title: "API scan not running",
            user: "Rahul",
            status: "Open",
            priority: "High",
            createdAt: "2 mins ago",
            comments: [
                { id: 1, text: "Investigating issue", author: "Admin", time: "1 min ago" },
            ],
        },
        {
            id: 2,
            title: "Login issue",
            user: "Amit",
            status: "In Progress",
            priority: "Medium",
            createdAt: "10 mins ago",
            assignedTo: "Admin 1",
            comments: [],
        },
    ]);

    /* -------------------- FILTER -------------------- */
    const filtered = tickets.filter((t) => {
        const matchesSearch = t.title.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === "All" || t.status === filter;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="min-h-screen bg-background text-foreground p-6 space-y-6">

            {/* HEADER */}
            <div className="flex justify-between">
                <h1 className="text-2xl font-semibold">Support</h1>
            </div>

            {/* FILTERS */}
            <div className="flex gap-3">
                <input
                    placeholder="Search tickets..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border border-border px-3 py-2 rounded-md bg-background text-sm"
                />

                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value as any)}
                    className="border border-border px-2 py-2 rounded-md bg-background text-sm"
                >
                    <option>All</option>
                    <option>Open</option>
                    <option>In Progress</option>
                    <option>Resolved</option>
                </select>
            </div>

            {/* TABLE */}
            <div className="bg-card border border-border rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="border-b border-border text-muted-foreground">
                        <tr>
                            <th className="p-3 text-left">Title</th>
                            <th className="p-3 text-left">User</th>
                            <th className="p-3 text-left">Priority</th>
                            <th className="p-3 text-left">Status</th>
                            <th className="p-3 text-left">SLA</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filtered.map((t) => (
                            <tr
                                key={t.id}
                                onClick={() => setSelected(t)}
                                className="border-t border-border hover:bg-muted/40 cursor-pointer"
                            >
                                <td className="p-3 font-medium">{t.title}</td>
                                <td className="p-3 text-muted-foreground">{t.user}</td>
                                <td className="p-3">{t.priority}</td>
                                <td className="p-3">{t.status}</td>
                                <td className="p-3 text-xs text-muted-foreground">
                                    {getSLA(t.createdAt)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* DRAWER */}
            {selected && (
                <TicketDrawer
                    ticket={selected}
                    onClose={() => setSelected(null)}
                    updateTicket={(updated) =>
                        setTickets((prev) =>
                            prev.map((t) => (t.id === updated.id ? updated : t))
                        )
                    }
                />
            )}
        </div>
    );
}

/* -------------------- DRAWER -------------------- */
function TicketDrawer({
    ticket,
    onClose,
    updateTicket,
}: {
    ticket: Ticket;
    onClose: () => void;
    updateTicket: (t: Ticket) => void;
}) {
    const [comment, setComment] = useState("");

    const addComment = () => {
        if (!comment) return;

        updateTicket({
            ...ticket,
            comments: [
                ...ticket.comments,
                {
                    id: Date.now(),
                    text: comment,
                    author: "Admin",
                    time: "just now",
                },
            ],
        });

        setComment("");
    };

    return (
        <div className="fixed right-0 top-15 h-full w-[400px] bg-card border-l border-border p-4 space-y-4">

            {/* HEADER */}
            <div className="flex justify-between">
                <h2 className="font-semibold">{ticket.title}</h2>
                <button onClick={onClose}>✕</button>
            </div>

            {/* STATUS + PRIORITY */}
            <div className="space-y-2">
                <select
                    value={ticket.status}
                    onChange={(e) =>
                        updateTicket({ ...ticket, status: e.target.value as any })
                    }
                    className="w-full border border-border p-2 rounded-md"
                >
                    <option>Open</option>
                    <option>In Progress</option>
                    <option>Resolved</option>
                </select>

                <select
                    value={ticket.priority}
                    onChange={(e) =>
                        updateTicket({ ...ticket, priority: e.target.value as any })
                    }
                    className="w-full border border-border p-2 rounded-md"
                >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
            </div>

            {/* TIMELINE */}
            <div>
                <h3 className="text-sm font-medium mb-2">Timeline</h3>
                <div className="text-xs text-muted-foreground space-y-1">
                    <p>Created: {ticket.createdAt}</p>
                    <p>Status: {ticket.status}</p>
                </div>
            </div>

            {/* COMMENTS */}
            <div className="space-y-2">
                <h3 className="text-sm font-medium">Comments</h3>

                <div className="max-h-40 overflow-y-auto space-y-2">
                    {ticket.comments.map((c) => (
                        <div key={c.id} className="bg-muted p-2 rounded-md text-sm">
                            <p>{c.text}</p>
                            <span className="text-xs text-muted-foreground">
                                {c.author} • {c.time}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="flex gap-2">
                    <input
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="flex-1 border border-border p-2 rounded-md text-sm"
                        placeholder="Add comment..."
                    />
                    <button
                        onClick={addComment}
                        className="px-3 py-2 bg-primary text-primary-foreground rounded-md text-sm"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

/* -------------------- SLA TIMER -------------------- */
function getSLA(time: string) {
    if (time.includes("mins")) return "⚡ Fast";
    if (time.includes("hour")) return "⏳ Medium";
    return "🚨 Breach Risk";
}
