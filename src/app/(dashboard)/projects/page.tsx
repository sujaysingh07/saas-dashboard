import { Folder, Users, Activity } from "lucide-react";

type Project = {
  id: number;
  name: string;
  owner: string;
  scans: number;
  status: "Active" | "Inactive";
};

export default function ProjectsPage() {
  const projects: Project[] = [
    { id: 1, name: "Project X", owner: "Nammagiri", scans: 120, status: "Active" },
    { id: 2, name: "Security Audit", owner: "Sujay", scans: 80, status: "Active" },
    { id: 3, name: "Cloud Infrastructure", owner: "DevOps Team", scans: 45, status: "Inactive" },
    { id: 4, name: "Web Platform", owner: "Frontend Team", scans: 200, status: "Active" },
    { id: 5, name: "Mobile Backend", owner: "Backend Team", scans: 95, status: "Active" },
    { id: 6, name: "Payment Gateway", owner: "Finance Team", scans: 60, status: "Inactive" },
    { id: 7, name: "Authentication Service", owner: "Security Team", scans: 150, status: "Active" },
    { id: 8, name: "Internal Tools", owner: "Admin Team", scans: 30, status: "Inactive" },
    { id: 9, name: "AI Threat Detection", owner: "AI Team", scans: 110, status: "Active" },
    { id: 10, name: "Logging & Monitoring", owner: "SRE Team", scans: 75, status: "Active" },
    { id: 11, name: "API Gateway", owner: "Platform Team", scans: 140, status: "Active" },
    { id: 12, name: "Legacy System Audit", owner: "Audit Team", scans: 25, status: "Inactive" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground p-6 space-y-6">

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Projects</h1>

        <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm hover:opacity-90 transition">
          + New Project
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </div>
  );
}


function ProjectCard({ project }: { project: Project }) {
  const statusStyles = {
    Active: "bg-success/20 text-success",
    Inactive: "bg-muted text-muted-foreground",
  };

  return (
    <div className="bg-card border border-border rounded-lg p-5 space-y-4 hover:bg-muted/40 transition cursor-pointer">

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-medium">
          <Folder size={16} className="text-muted-foreground" />
          {project.name}
        </div>

        <span className={`px-2 py-1 text-xs rounded-md ${statusStyles[project.status]}`}>
          {project.status}
        </span>
      </div>

      <div className="space-y-2 text-sm text-muted-foreground">

        <div className="flex items-center gap-2">
          <Users size={14} />
          <span>Owner: {project.owner}</span>
        </div>

        <div className="flex items-center gap-2">
          <Activity size={14} />
          <span>{project.scans} scans</span>
        </div>

      </div>

    </div>
  );
}
