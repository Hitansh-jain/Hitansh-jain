import { Leaf, Sparkles, Code, Eye } from "lucide-react";

const ProjectSection = () => {
  return (
    <section id="project" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-xs font-mono text-primary uppercase tracking-widest mb-4">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">
            Project <span className="gradient-text">Spotlight</span>
          </h2>
        </div>

        {/* Project card */}
        <div className="glass-card rounded-2xl overflow-hidden group">
          {/* Project header with gradient */}
          <div className="relative h-48 md:h-64 bg-gradient-to-br from-primary/20 via-neon-green/10 to-transparent overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/20 flex items-center justify-center animate-float">
                <Leaf className="w-12 h-12 md:w-16 md:h-16 text-primary" />
              </div>
            </div>
            {/* Floating particles */}
            <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-primary/60 animate-float" />
            <div className="absolute top-20 right-20 w-3 h-3 rounded-full bg-neon-green/40 animate-float delay-200" />
            <div className="absolute bottom-16 left-1/4 w-2 h-2 rounded-full bg-primary/40 animate-float delay-300" />
          </div>

          {/* Project content */}
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Eco Waste Wise Agent
              </h3>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary">
                AI-Powered
              </span>
            </div>

            {/* The honest story */}
            <div className="glass-card p-5 rounded-xl mb-6 border-l-2 border-primary/50">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">The Honest Story</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    "Built with AI, refined by human intelligence. I didn't code every line; 
                    I <span className="text-foreground">architected the vision</span> and worked 
                    tirelessly to make it perfect. The skill lies in{" "}
                    <span className="neon-text">perfection and prompting</span>, not just manual labor."
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                <Code className="w-5 h-5 text-primary" />
                <span className="text-sm">AI Architecture</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                <Eye className="w-5 h-5 text-primary" />
                <span className="text-sm">Vision Design</span>
              </div>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {["AI Agents", "Prompt Engineering", "Sustainability", "Automation"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full bg-secondary text-xs font-medium text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
