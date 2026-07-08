import Reveal from "@/components/Reveal";
import SpotlightSurface from "@/components/SpotlightSurface";
import { glassPanelInteractive } from "@/app/lib/glass";

const securityGroups = [
  {
    label: "Monitoring",
    description: "Security operations fundamentals through lab work.",
    items: ["SIEM", "Network security monitoring"],
  },
  {
    label: "Testing tools",
    description: "Hands-on web and network inspection practice.",
    items: ["Burp Suite", "Nmap", "Wireshark"],
  },
  {
    label: "TryHackMe progress",
    description: "Structured paths and credentials I am building from.",
    items: ["SOC Level 1", "Jr Penetration Tester", "AI Security"],
  },
] as const;

export default function SecuritySkills() {
  return (
    <section
      id="security"
      className="relative w-full py-24 md:py-32"
      aria-labelledby="security-heading"
    >
      <div
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="mb-14">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-600">
            Security
          </p>
          <h2
            id="security-heading"
            className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl"
          >
            Hands-on security foundation
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
            Practical security work alongside production development: monitoring fundamentals,
            web app testing tools, and lab-based TryHackMe paths.
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {securityGroups.map((group, index) => (
            <Reveal key={group.label} delay={index * 0.08}>
              <SpotlightSurface
                glowRadius={480}
                glowStrength={0.1}
                className={`h-full rounded-2xl p-6 md:p-7 ${glassPanelInteractive}`}
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-600">
                  {group.label}
                </p>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{group.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 text-xs font-medium text-zinc-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </SpotlightSurface>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
