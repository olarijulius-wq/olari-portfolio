import Reveal from "@/components/Reveal";
import SpotlightSurface from "@/components/SpotlightSurface";
import { glassGhost, glassPanelInteractive } from "@/app/lib/glass";

const certifications = [
  {
    title: "SOC Level 1",
    issuer: "TryHackMe",
    issued: "Jul 2026",
    expires: "Jul 2029",
    credentialId: "THM-UJBJISXXUJ",
    verifyUrl: "https://tryhackme.com/certificate/THM-UJBJISXXUJ",
    skills: ["SIEM", "Network Security Monitoring"],
  },
  {
    title: "AI Security",
    issuer: "TryHackMe",
    issued: "Jun 2026",
    expires: "Jun 2029",
    credentialId: "THM-BLIOO59WFH",
    verifyUrl: "https://tryhackme.com/certificate/THM-BLIOO59WFH",
    skills: [],
  },
] as const;

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative w-full py-24 md:py-32"
      aria-labelledby="certifications-heading"
    >
      <div
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="mb-14">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-600">
            Certifications
          </p>
          <h2
            id="certifications-heading"
            className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl"
          >
            Credentials
          </h2>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((certification, index) => (
            <Reveal key={certification.credentialId} delay={index * 0.08}>
              <SpotlightSurface
                glowRadius={560}
                glowStrength={0.1}
                className={`h-full rounded-2xl p-7 md:p-8 ${glassPanelInteractive}`}
              >
                <div className="flex h-full flex-col gap-7">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-600">
                      {certification.issuer}
                    </p>
                    <h3 className="mt-4 font-display text-3xl font-bold tracking-tight text-white">
                      {certification.title}
                    </h3>
                  </div>

                  <dl className="grid gap-4 text-sm sm:grid-cols-3">
                    <div>
                      <dt className="text-xs uppercase tracking-[0.18em] text-zinc-600">Issued</dt>
                      <dd className="mt-2 text-zinc-300">{certification.issued}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-[0.18em] text-zinc-600">Expires</dt>
                      <dd className="mt-2 text-zinc-300">{certification.expires}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-[0.18em] text-zinc-600">
                        Credential ID
                      </dt>
                      <dd className="mt-2 break-all font-mono text-xs text-zinc-300">
                        {certification.credentialId}
                      </dd>
                    </div>
                  </dl>

                  {certification.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {certification.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 text-xs font-medium text-zinc-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto border-t border-white/[0.08] pt-6">
                    <a
                      href={certification.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${glassGhost} rounded-2xl px-4 py-2 text-sm`}
                    >
                      Verify credential
                    </a>
                  </div>
                </div>
              </SpotlightSurface>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
