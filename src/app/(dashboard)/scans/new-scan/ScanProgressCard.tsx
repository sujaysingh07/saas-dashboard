import { Search, Map, FlaskConical, ShieldCheck, FileText } from "lucide-react";

type Step = "Spidering" | "Mapping" | "Testing" | "Validating" | "Reporting";

export default function ScanProgressCard({
  progress = 50,
  activeStep = "Spidering",
}: {
  progress?: number;
  activeStep?: Step;
}) {
  const steps: { label: Step; icon: any }[] = [
    { label: "Spidering", icon: Search },
    { label: "Mapping", icon: Map },
    { label: "Testing", icon: FlaskConical },
    { label: "Validating", icon: ShieldCheck },
    { label: "Reporting", icon: FileText },
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center gap-8">
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-8 border-muted" />
          <div
            className="absolute inset-0 rounded-full border-8 border-primary"

          />
          <div className="text-center">
            <div className="text-xl font-semibold text-foreground">
              {progress}%
            </div>
            <div className="text-xs text-muted-foreground">In progress</div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-between relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = step.label === activeStep;

            return (
              <div
                key={step.label}
                className="flex flex-col items-center gap-2 flex-1 "
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border transition
                  ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-md"
                      : "bg-muted text-muted-foreground border-border "
                  }
                  `}
                >
                  <Icon size={18} />
                </div>

                <span
                  className={`text-xs ${
                    isActive
                      ? "text-foreground font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="border-t border-border my-6" />

      <div className="grid grid-cols-6 gap-6 text-sm">
        <Meta label="Scan Type" value="Grey Box" />
        <Meta label="Targets" value="google.com" />
        <Meta label="Started At" value="Nov 22, 09:00AM" />
        <Meta label="Credentials" value="2 Active" />
        <Meta label="Files" value="Control.pdf" />
        <Meta label="Checklists" value="40/350" highlight />
      </div>
    </div>
  );
}

function Meta({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-muted-foreground text-xs">{label}</span>
      <span
        className={`font-medium ${
          highlight ? "text-primary" : "text-foreground"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
