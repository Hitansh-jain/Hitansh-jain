import { useEffect, useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Real-World Ideas. AI Execution.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 70);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background mesh gradient */}
      <div className="absolute inset-0 mesh-gradient opacity-60" />
      
      {/* Animated orbs */}
      <div className="floating-orb top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15" />
      <div className="floating-orb bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10" style={{ animationDelay: '-5s' }} />
      <div className="floating-orb top-1/2 right-1/3 w-[300px] h-[300px] bg-primary/10" style={{ animationDelay: '-10s' }} />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Location badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border-gradient mb-10 opacity-0 animate-blur-in">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
          </span>
          <span className="text-sm font-medium text-muted-foreground tracking-wide">
            From Kanore, Udaipur, Rajasthan
          </span>
        </div>
        
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-8 opacity-0 animate-blur-in delay-100">
          <span className="text-foreground">Hitansh</span>{" "}
          <span className="gradient-text">Jain</span>
        </h1>
        
        {/* Typing tagline */}
        <div className="h-14 md:h-20 flex items-center justify-center mb-10">
          <p className="text-xl md:text-3xl lg:text-4xl font-light text-muted-foreground tracking-wide">
            {displayText}
            <span 
              className={`inline-block w-[3px] h-7 md:h-9 bg-primary ml-1.5 rounded-full transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`} 
            />
          </p>
        </div>
        
        {/* Philosophy quote */}
        <div className="glass-card-hover px-8 py-6 md:px-10 md:py-7 rounded-3xl max-w-3xl mx-auto mb-14 opacity-0 animate-blur-in delay-300">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-primary icon-glow" />
            <span className="text-xs font-mono text-primary uppercase tracking-[0.2em]">Philosophy</span>
            <Sparkles className="w-4 h-4 text-primary icon-glow" />
          </div>
          <p className="text-base md:text-lg text-muted-foreground italic leading-relaxed">
            "I am not a fan of unnecessary hard work; I am a{" "}
            <span className="neon-text font-semibold not-italic">master of Efficiency.</span>"
          </p>
        </div>
        
        {/* Sub-text */}
        <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-blur-in delay-400">
          I connect the dots between complex problems and smart AI solutions.
          <br className="hidden md:block" />
          <span className="text-foreground/80">Building for the future, one prompt at a time.</span>
        </p>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-blur-in delay-700">
        <a 
          href="#about" 
          className="flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 group"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] group-hover:tracking-[0.4em] transition-all">
            Explore
          </span>
          <div className="relative">
            <ChevronDown className="w-5 h-5 animate-bounce" />
            <div className="absolute inset-0 blur-sm bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </a>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;