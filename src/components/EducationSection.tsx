import { GraduationCap } from "lucide-react";
import educationIllustration from "@/assets/education-illustration.png";

const EducationSection = () => {
  const education = [
    {
      year: "2023-2026",
      title: "B.Sc. (Final Year)",
      institution: "Govt. Shri Sanwariya Ji College, Mandfia",
      university: "MLSU Udaipur",
      status: "Currently Pursuing",
    },
    {
      year: "2023",
      title: "12th Standard (RBSE)",
      institution: "Maths-Science Stream",
      percentage: "72.20%",
    },
    {
      year: "2021",
      title: "10th Standard (RBSE)",
      institution: "Maths-Science",
      percentage: "91.67%",
    },
  ];

  return (
    <section id="education" className="py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        {/* Header with illustration */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="flex-1">
            <p className="section-label mb-4">Academic Journey</p>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Education <span className="gradient-text">Timeline</span>
            </h2>
          </div>
          <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
            <img 
              src={educationIllustration} 
              alt="Education illustration" 
              className="w-full h-full object-contain animate-fade-in"
            />
          </div>
        </div>

        {/* Timeline - Compact */}
        <div className="space-y-6">
          {education.map((item, index) => (
            <div
              key={item.title}
              className="glass-card-hover p-5 flex items-start gap-4"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="font-medium text-foreground">{item.title}</h3>
                  <span className="text-xs font-mono text-primary whitespace-nowrap">{item.year}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.institution}</p>
                {item.university && (
                  <p className="text-xs text-muted-foreground mt-1">{item.university}</p>
                )}
                
                <div className="flex items-center gap-2 mt-2">
                  {item.status && (
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 text-xs text-primary">
                      {item.status}
                    </span>
                  )}
                  {item.percentage && (
                    <span className="px-2 py-0.5 rounded-full bg-secondary text-xs text-muted-foreground">
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