import { Award, ExternalLink, Calendar, Building2 } from "lucide-react";
import { useState } from "react";

const CertificationsSection = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const certifications = [
    {
      id: "deloitte",
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte Australia",
      platform: "Forage",
      date: "November 2025",
      category: "Data Analytics",
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: "google-ai",
      title: "5-Day AI Agents Intensive Course",
      issuer: "Google / ULS",
      platform: "AI Intensive",
      date: "December 2025",
      category: "AI Specialist",
      color: "from-green-500 to-emerald-500",
      highlight: true,
    },
    {
      id: "shikshapr",
      title: "Advance Diploma in Computer Science",
      issuer: "ShikshaPro Academy",
      date: "2025",
      category: "Computer Science",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "rcsa",
      title: "Diploma in Computer Science",
      issuer: "RCSA",
      date: "2025",
      category: "Computer Science",
      color: "from-orange-500 to-amber-500",
    },
    {
      id: "rscit",
      title: "RS-CIT (IT Literacy)",
      issuer: "VMOU Kota",
      date: "November 2022",
      category: "IT Fundamentals",
      color: "from-red-500 to-rose-500",
    },
  ];

  return (
    <section id="certifications" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-xs font-mono text-primary uppercase tracking-widest mb-4">
            Credentials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Certification <span className="gradient-text">Vault</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Professional certifications and courses that validate expertise
          </p>
        </div>

        {/* Certifications grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className={`glass-card rounded-xl overflow-hidden group transition-all duration-500 ${
                hoveredId === cert.id ? "scale-[1.02] border-primary/40" : ""
              } ${cert.highlight ? "md:col-span-2 lg:col-span-1" : ""}`}
              onMouseEnter={() => setHoveredId(cert.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Gradient top bar */}
              <div className={`h-1 bg-gradient-to-r ${cert.color}`} />

              <div className="p-6">
                {/* Category badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground mb-4">
                  {cert.category}
                </span>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building2 className="w-4 h-4" />
                    <span>{cert.issuer}</span>
                    {cert.platform && (
                      <>
                        <span className="text-border">•</span>
                        <span>{cert.platform}</span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Hover reveal - credential ID */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    hoveredId === cert.id ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-muted-foreground">
                        ID: {cert.id.toUpperCase()}-2025
                      </span>
                      <button className="flex items-center gap-1 text-xs text-primary hover:underline">
                        <span>Verify</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
