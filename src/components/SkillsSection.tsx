import { Brain, Palette, Users, Lightbulb, Cpu, Video, MessageSquare, Sparkles } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "AI & Automation",
      icon: Brain,
      skills: [
        { name: "Prompt Engineering", level: 95 },
        { name: "AI Agent Design", level: 90 },
        { name: "Presentation Automation", level: 85 },
        { name: "Workflow Optimization", level: 88 },
      ],
      color: "primary",
    },
    {
      title: "Design & Creative",
      icon: Palette,
      skills: [
        { name: "Graphic Design", level: 85 },
        { name: "Video Editing", level: 80 },
        { name: "UI Layouts", level: 75 },
        { name: "Visual Communication", level: 88 },
      ],
      color: "neon-green",
    },
    {
      title: "Leadership & Soft Skills",
      icon: Users,
      skills: [
        { name: "Community Management", level: 92 },
        { name: "Idea Generation", level: 95 },
        { name: "Problem Solving", level: 90 },
        { name: "Teaching & Mentoring", level: 88 },
      ],
      color: "primary",
    },
  ];

  const tools = [
    { name: "AI Tools", icon: Cpu },
    { name: "Creative Suite", icon: Sparkles },
    { name: "Video Editing", icon: Video },
    { name: "Communication", icon: MessageSquare },
    { name: "Innovation", icon: Lightbulb },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-xs font-mono text-primary uppercase tracking-widest mb-4">
            Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The <span className="gradient-text">'Smart'</span> Stack
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A unique blend of AI mastery, creative skills, and leadership abilities
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category) => (
            <div key={category.title} className="glass-card p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">{skill.name}</span>
                      <span className="text-xs font-mono text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-neon-green rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools row */}
        <div className="flex flex-wrap justify-center gap-4">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="glass-card px-5 py-3 rounded-full flex items-center gap-2 hover:border-primary/30 transition-all duration-300 hover:scale-105"
            >
              <tool.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
