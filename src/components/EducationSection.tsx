import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      year: "2023-2026",
      title: "B.Sc. (Final Year)",
      institution: "Shri Sanwaliaji Government College, Mandaphia",
      university: "MLSU Udaipur",
      status: "Currently Pursuing",
      highlight: true,
    },
    {
      year: "2023",
      title: "12th Standard",
      institution: "Maths-Science Stream",
      description: "Strong foundation in Mathematics & Science",
      percentage: "72.20%",
    },
    {
      year: "2021",
      title: "10th Standard",
      institution: "Secondary Education",
      description: "Maths-Science background",
      percentage: "High Percentile",
    },
  ];

  return (
    <section id="education" className="py-24 md:py-32 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-xs font-mono text-primary uppercase tracking-widest mb-4">
            Academic Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">
            Education <span className="gradient-text">Timeline</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-px" />

          {education.map((item, index) => (
            <div
              key={item.title}
              className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_20px_hsl(180_100%_50%/_0.5)] -translate-x-1/2 mt-6 z-10" />

              {/* Year badge - mobile */}
              <div className="md:hidden ml-10 mb-2">
                <span className="font-mono text-sm text-primary">{item.year}</span>
              </div>

              {/* Content card */}
              <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:text-right" : ""}`}>
                <div
                  className={`glass-card p-6 rounded-xl group hover:border-primary/30 transition-all duration-300 ${
                    item.highlight ? "border-primary/20" : ""
                  }`}
                >
                  {/* Year badge - desktop */}
                  <span className="hidden md:inline-block font-mono text-sm text-primary mb-2">
                    {item.year}
                  </span>

                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 ${index % 2 === 0 ? "md:order-last md:ml-auto" : ""}`}>
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div className={index % 2 === 0 ? "md:text-right md:flex-1" : ""}>
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.institution}</p>
                    </div>
                  </div>

                  {item.university && (
                    <p className="text-sm text-muted-foreground mb-2">{item.university}</p>
                  )}
                  {item.description && (
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  )}
                  {item.status && (
                    <span className="inline-block mt-3 px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary">
                      {item.status}
                    </span>
                  )}
                  {item.percentage && (
                    <span className="inline-block mt-3 px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground">
                      {item.percentage}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
