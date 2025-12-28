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

        {/* Coming Soon Card */}
        <div className="glass-card rounded-2xl overflow-hidden group">
          {/* Header with gradient */}
          <div className="relative h-48 md:h-64 bg-gradient-to-br from-primary/20 via-neon-green/10 to-transparent overflow-hidden flex items-center justify-center">
            <div className="text-center">
              <span className="px-6 py-2 rounded-full bg-primary/20 border border-primary/30 text-lg md:text-xl font-bold text-primary animate-pulse">
                Coming Soon
              </span>
            </div>
            {/* Floating particles */}
            <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-primary/60 animate-float" />
            <div className="absolute top-20 right-20 w-3 h-3 rounded-full bg-neon-green/40 animate-float delay-200" />
            <div className="absolute bottom-16 left-1/4 w-2 h-2 rounded-full bg-primary/40 animate-float delay-300" />
            <div className="absolute bottom-10 right-1/4 w-2 h-2 rounded-full bg-primary/50 animate-float delay-100" />
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-foreground font-medium">
                I'm currently in a <span className="neon-text">high-growth phase</span>, prioritizing deep learning over surface-level projects.
              </p>
              
              <p>
                While I have a portfolio of basic projects, I've chosen not to showcase them because I don't believe in just <span className="text-foreground">'filling up space.'</span> If it doesn't challenge me or solve a real problem, it doesn't make the cut. I am currently working on high-impact projects that meet my standards of innovation and technical depth.
              </p>
              
              <p className="text-foreground font-medium italic border-l-2 border-primary/50 pl-4">
                "I'm not here to show the basics; I'm here to build the <span className="gradient-text">extraordinary</span>. Big things are under assembly—Stay tuned!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
