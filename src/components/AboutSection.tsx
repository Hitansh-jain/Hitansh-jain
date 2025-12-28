import { Mail, Calendar, MapPin, Heart, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-xs font-mono text-primary uppercase tracking-widest mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Meet <span className="gradient-text">Hitansh Jain</span>
          </h2>
        </div>

        {/* Personal Info */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            <a href="mailto:hitanshjain987@gmail.com" className="hover:text-primary transition-colors">
              hitanshjain987@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span>January 11, 2004</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Kota, Rajasthan, India</span>
          </div>
        </div>

        {/* Story Content */}
        <div className="space-y-8 text-center max-w-3xl mx-auto">
          {/* Main Introduction */}
          <p className="text-xl md:text-2xl text-foreground leading-relaxed font-medium">
            I'm <span className="neon-text">Hitansh Jain</span>. Even though I'm not from a Computer Science background, 
            I'm breaking into this field through <span className="text-primary">pure hard work</span>.
          </p>

          {/* Philosophy */}
          <div className="py-6 border-y border-border/30">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Many believe a degree is everything, but I strongly feel that{" "}
              <span className="text-foreground font-semibold">skills matter more than a piece of paper</span>. 
              I'm constantly pushing myself to be better in every field I touch.
            </p>
          </div>

          {/* Honesty Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-2 text-primary">
              <Heart className="w-5 h-5" />
              <span className="text-sm font-mono uppercase tracking-widest">My Honest Truth</span>
              <Heart className="w-5 h-5" />
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              I don't pretend to know everything. I'm a <span className="text-foreground">learner first</span>, 
              always curious, always growing. I believe in being real about my journey—the struggles, 
              the failures, and the small wins that keep me going.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              While others chase shortcuts, I'm building my foundation{" "}
              <span className="text-foreground">brick by brick</span>. Every day, I wake up with one goal: 
              to be <span className="text-primary">1% better</span> than yesterday.
            </p>
          </div>

          {/* Motivation */}
          <div className="pt-6">
            <div className="flex items-center justify-center gap-2 text-primary mb-4">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-mono uppercase tracking-widest">What Drives Me</span>
              <Sparkles className="w-5 h-5" />
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              I'm not here to prove anyone wrong—I'm here to prove to{" "}
              <span className="text-foreground font-medium">myself</span> that backgrounds don't define futures. 
              With the rise of AI, I've found my calling: mastering the art of{" "}
              <span className="neon-text">directing technology</span> rather than competing with it.
            </p>

            <p className="text-lg text-foreground mt-6 font-medium">
              The journey is long, but I'm in it for the{" "}
              <span className="gradient-text">long haul</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
