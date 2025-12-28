import { Brain, Palette, Users, Lightbulb, Cpu, MessageSquare, Sparkles, Zap, Target, Rocket, Code } from "lucide-react";

const SkillsSection = () => {
  const coreSkills = [
    {
      title: "Prompt Engineering",
      description: "Crafting precise prompts to unlock AI's full potential",
      icon: Brain,
      color: "primary",
    },
    {
      title: "AI Agent Design",
      description: "Building intelligent automated workflows",
      icon: Cpu,
      color: "accent",
    },
    {
      title: "Output Perfection",
      description: "Refining AI outputs to achieve flawless results",
      icon: Target,
      color: "primary",
    },
    {
      title: "Vision Architecture",
      description: "Designing systems that solve real problems",
      icon: Lightbulb,
      color: "accent",
    },
    {
      title: "Workflow Automation",
      description: "Streamlining processes for maximum efficiency",
      icon: Zap,
      color: "primary",
    },
    {
      title: "Creative Direction",
      description: "Blending technology with creative vision",
      icon: Palette,
      color: "accent",
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
    <section id="skills" className="py-28 md:py-36 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-gradient text-xs font-mono text-primary uppercase tracking-[0.2em] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Expertise
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            The <span className="gradient-text">'Smart'</span> Stack
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Not just skills—a philosophy of leveraging AI to achieve the extraordinary
          </p>
        </div>

        {/* Core Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-20">
          {coreSkills.map((skill, index) => (
            <div
              key={skill.title}
              className="group relative"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="glass-card-hover p-7 rounded-3xl h-full relative overflow-hidden">
                {/* Hover gradient overlay */}
                <div 
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    skill.color === 'primary' 
                      ? 'bg-gradient-to-br from-primary/10 via-transparent to-transparent' 
                      : 'bg-gradient-to-br from-accent/10 via-transparent to-transparent'
                  }`} 
                />
                
                {/* Icon */}
                <div className="relative mb-5">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                    skill.color === 'primary' 
                      ? 'bg-primary/10 group-hover:bg-primary/20' 
                      : 'bg-accent/10 group-hover:bg-accent/20'
                  }`}>
                    <skill.icon className={`w-7 h-7 transition-all duration-300 ${
                      skill.color === 'primary' ? 'text-primary' : 'text-accent'
                    } group-hover:icon-glow`} />
                  </div>
                  {/* Decorative corner */}
                  <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full opacity-60 group-hover:opacity-100 transition-opacity ${
                    skill.color === 'primary' ? 'bg-primary' : 'bg-accent'
                  }`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-glow transition-all">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-all duration-500 ${
                  skill.color === 'primary' 
                    ? 'bg-gradient-to-r from-primary via-primary/50 to-transparent' 
                    : 'bg-gradient-to-r from-accent via-accent/50 to-transparent'
                }`} />
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-6 mb-16">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <Sparkles className="w-6 h-6 text-primary animate-pulse icon-glow" />
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        {/* Soft Skills */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-foreground mb-3">Beyond Technical</h3>
          <p className="text-muted-foreground">The human skills that amplify AI mastery</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {softSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-card px-6 py-4 rounded-2xl flex items-center gap-4 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group cursor-default"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <skill.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">
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