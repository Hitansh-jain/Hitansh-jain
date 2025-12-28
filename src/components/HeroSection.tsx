import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
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
    }, 80);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-neon-green/10 rounded-full blur-[100px] animate-float delay-300" />
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Name badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 opacity-0 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
          <span className="text-sm font-mono text-muted-foreground">Based in Udaipur, Rajasthan</span>
        </div>
        
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 opacity-0 animate-fade-up delay-100">
          <span className="text-foreground">Hitansh</span>{" "}
          <span className="gradient-text">Jain</span>
        </h1>
        
        {/* Typing tagline */}
        <div className="h-12 md:h-16 flex items-center justify-center mb-8">
          <p className="text-xl md:text-3xl lg:text-4xl font-light text-muted-foreground">
            {displayText}
            <span className="inline-block w-0.5 h-6 md:h-8 bg-primary ml-1 animate-pulse" />
          </p>
        </div>
        
        {/* Philosophy quote */}
        <div className="glass-card px-6 py-4 md:px-8 md:py-5 rounded-2xl max-w-3xl mx-auto mb-12 opacity-0 animate-fade-up delay-300">
          <p className="text-sm md:text-base text-muted-foreground italic">
            "I am not a fan of unnecessary hard work; I am a{" "}
            <span className="neon-text font-medium not-italic">master of Efficiency.</span>"
          </p>
        </div>
        
        {/* Sub-text */}
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-up delay-400">
          I connect the dots between complex problems and smart AI solutions.
          <br className="hidden md:block" />
          Building for the future, one prompt at a time.
        </p>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up delay-500">
        <a 
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
