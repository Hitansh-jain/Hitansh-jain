import { Brain, Palette, Users, Lightbulb, Cpu, MessageSquare, Zap, Target, Rocket, Code } from "lucide-react";

const SkillsSection = () => {
  const coreSkills = [
    { title: "Prompt Engineering", description: "Crafting precise prompts to unlock AI's full potential", icon: Brain },
    { title: "AI Agent Design", description: "Building intelligent automated workflows", icon: Cpu },
    { title: "Output Perfection", description: "Refining AI outputs to achieve flawless results", icon: Target },
    { title: "Vision Architecture", description: "Designing systems that solve real problems", icon: Lightbulb },
    { title: "Workflow Automation", description: "Streamlining processes for maximum efficiency", icon: Zap },
    { title: "Creative Direction", description: "Blending technology with creative vision", icon: Palette },
  ];

  const softSkills = [
    { name: "Community Leadership", icon: Users },
    { name: "Problem Solving", icon: Rocket },
    { name: "Teaching & Mentoring", icon: MessageSquare },
    { name: "Strategic Thinking", icon: Code },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <p className="text-xs text-muted-foreground tracking-widest uppercase mb-4">
          Expertise
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          The 'Smart' Stack
        </h2>
        <p className="text-muted-foreground mb-16 max-w-lg">
          Not just skills—a philosophy of leveraging AI to achieve the extraordinary.
        </p>

        {/* Core Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border mb-16">
          {coreSkills.map((skill) => (
            <div key={skill.title} className="bg-background p-6 hover:bg-card transition-colors">
              <div className="flex items-start gap-4">
                <skill.icon className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <p className="text-xs text-muted-foreground tracking-widest uppercase mb-6">
          Beyond Technical
        </p>
        <div className="flex flex-wrap gap-3">
          {softSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
            >
              <skill.icon className="w-4 h-4" />
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;