import { Mail, Calendar, MapPin, Heart, Sparkles, ArrowUpRight } from "lucide-react";

const AboutSection = () => {
  const personalInfo = [
    { icon: Mail, label: "Email", value: "hitanshj281@gmail.com", href: "mailto:hitanshj281@gmail.com" },
    { icon: Calendar, label: "DOB", value: "July 7, 2005" },
    { icon: MapPin, label: "Location", value: "Kanore, Udaipur, India" },
  ];

  return (
    <section id="about" className="py-28 md:py-36 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-gradient text-xs font-mono text-primary uppercase tracking-[0.2em] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            About Me
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Meet <span className="gradient-text-static">Hitansh Jain</span>
          </h2>
        </div>

        {/* Personal Info Cards */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
          {personalInfo.map((info, index) => (
            <div
              key={info.label}
              className="glass-card-hover px-6 py-4 rounded-2xl flex items-center gap-4 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <info.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{info.label}</span>
                {info.href ? (
                  <a 
                    href={info.href} 
                    className="block text-foreground hover:text-primary transition-colors flex items-center gap-1 group/link"
                  >
                    {info.value}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                ) : (
                  <p className="text-foreground">{info.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Story Content */}
        <div className="space-y-10 text-center max-w-3xl mx-auto">
          {/* Main Introduction */}
          <div className="glass-card p-8 md:p-10 rounded-3xl">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed font-medium">
              I'm <span className="neon-text">Hitansh Jain</span>. Even though I'm not from a Computer Science background, 
              I'm breaking into this field through <span className="text-primary">pure hard work</span>.
            </p>
          </div>

          {/* Philosophy */}
          <div className="relative py-8">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed px-8">
              Many believe a degree is everything, but I strongly feel that{" "}
              <span className="text-foreground font-semibold">skills matter more than a piece of paper</span>. 
              I'm constantly pushing myself to be better in every field I touch.
            </p>
          </div>

          {/* Honesty Section */}
          <div className="space-y-8">
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
              <Heart className="w-5 h-5 text-primary icon-glow" />
              <span className="text-sm font-mono text-primary uppercase tracking-[0.2em]">My Honest Truth</span>
              <Heart className="w-5 h-5 text-primary icon-glow" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-2xl text-left hover:border-primary/30 transition-colors">
                <p className="text-muted-foreground leading-relaxed">
                  I don't pretend to know everything. I'm a <span className="text-foreground">learner first</span>, 
                  always curious, always growing. I believe in being real about my journey—the struggles, 
                  the failures, and the small wins that keep me going.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-2xl text-left hover:border-primary/30 transition-colors">
                <p className="text-muted-foreground leading-relaxed">
                  While others chase shortcuts, I'm building my foundation{" "}
                  <span className="text-foreground">brick by brick</span>. Every day, I wake up with one goal: 
                  to be <span className="text-primary font-medium">1% better</span> than yesterday.
                </p>
              </div>
            </div>
          </div>

          {/* Motivation */}
          <div className="pt-8">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/50" />
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-sm font-mono text-accent uppercase tracking-[0.2em]">What Drives Me</span>
              <Sparkles className="w-5 h-5 text-accent" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/50" />
            </div>
            
            <div className="glass-card p-8 md:p-10 rounded-3xl border-accent/20">
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm not here to prove anyone wrong—I'm here to prove to{" "}
                <span className="text-foreground font-medium">myself</span> that backgrounds don't define futures. 
                With the rise of AI, I've found my calling: mastering the art of{" "}
                <span className="neon-text">directing technology</span> rather than competing with it.
              </p>

              <p className="text-xl md:text-2xl text-foreground font-semibold">
                The journey is long, but I'm in it for the{" "}
                <span className="gradient-text-static">long haul</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;