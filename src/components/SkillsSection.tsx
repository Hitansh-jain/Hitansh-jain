import { Brain, Palette, Users, Lightbulb, Cpu, Video, MessageSquare, Sparkles, Zap, Target, Rocket, Code } from "lucide-react";

const SkillsSection = () => {
  const coreSkills = [
    {
      title: "Prompt Engineering",
      description: "Crafting precise prompts to unlock AI's full potential",
      icon: Brain,
      gradient: "from-primary via-primary/80 to-neon-green",
    },
    {
      title: "AI Agent Design",
      description: "Building intelligent automated workflows",
      icon: Cpu,
      gradient: "from-neon-green via-primary/60 to-primary",
    },
    {
      title: "Output Perfection",
      description: "Refining AI outputs to achieve flawless results",
      icon: Target,
      gradient: "from-primary/80 via-neon-green to-primary",
    },
    {
      title: "Vision Architecture",
      description: "Designing systems that solve real problems",
      icon: Lightbulb,
      gradient: "from-neon-green via-primary to-primary/80",
    },
    {
      title: "Workflow Automation",
      description: "Streamlining processes for maximum efficiency",
      icon: Zap,
      gradient: "from-primary via-neon-green/80 to-neon-green",
    },
    {
      title: "Creative Direction",
      description: "Blending technology with creative vision",
      icon: Palette,
      gradient: "from-primary/70 via-primary to-neon-green",
    },
  ];

  const softSkills = [
    { name: "Community Leadership", icon: Users },
    { name: "Problem Solving", icon: Rocket },
    { name: "Innovation Mindset", icon: Sparkles },
    { name: "Teaching & Mentoring", icon: MessageSquare },
    { name: "Strategic Thinking", icon: Code },
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
            Not just skills—a philosophy of leveraging AI to achieve the extraordinary
          </p>
        </div>

        {/* Core Skills - Hexagonal/Radial Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-16">
          {coreSkills.map((skill, index) => (
            <div
              key={skill.title}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="glass-card p-6 rounded-2xl h-full transition-all duration-500 hover:scale-105 hover:border-primary/40 relative overflow-hidden">
                {/* Background glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon container with rotating border */}
                <div className="relative mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-neon-green/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-neon-green/20 transition-all duration-300">
                    <skill.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  {/* Decorative dot */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary group-hover:animate-pulse" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>

                {/* Bottom gradient line */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
          <Sparkles className="w-5 h-5 text-primary animate-pulse" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        {/* Soft Skills */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-2">Beyond Technical</h3>
          <p className="text-sm text-muted-foreground">The human skills that amplify AI mastery</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {softSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-card px-5 py-3 rounded-full flex items-center gap-3 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group cursor-default"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;