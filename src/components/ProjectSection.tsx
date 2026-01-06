import { ExternalLink } from 'lucide-react';

const ProjectSection = () => {
  return (
    <section id="project" className="py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-xs font-mono text-primary uppercase tracking-widest mb-4">
            Featured Work
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            Project <span className="gradient-text">Spotlight</span>
          </h2>
        </div>

        {/* Demo Project Card */}
        <div className="glass-card rounded-2xl overflow-hidden group mb-8">
          <div className="p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <h3 className="text-xl md:text-2xl font-bold gradient-text">Eco Waste Wise Agent</h3>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono w-fit">
                Capstone Project
              </span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you want to explore my work, you can check out this demo project that I submitted as my capstone project. More projects will be added over time — the main flagship projects are coming soon!
            </p>
            
            <a 
              href="https://kaggle.com/competitions/agents-intensive-capstone-project/writeups/new-writeup-1763633367214" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary font-medium transition-all duration-300 group/link"
            >
              <span>View Project</span>
              <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Coming Soon Card */}
        <div className="glass-card rounded-2xl overflow-hidden group">
          {/* Header */}
          <div className="relative h-56 md:h-72 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent overflow-hidden flex items-center justify-center">
            {/* Floating particles */}
            <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-primary/60 animate-float" />
            <div className="absolute top-20 right-20 w-3 h-3 rounded-full bg-primary/40 animate-float delay-200" />
            <div className="absolute bottom-16 left-1/4 w-2 h-2 rounded-full bg-primary/40 animate-float delay-300" />
            <div className="absolute bottom-10 right-1/4 w-2 h-2 rounded-full bg-primary/50 animate-float delay-100" />
            <div className="text-4xl md:text-6xl font-bold text-primary/30 tracking-wider">Coming Soon</div>
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
