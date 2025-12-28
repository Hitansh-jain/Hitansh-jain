import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

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
    }, 60);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="text-center max-w-3xl mx-auto relative z-10">
        {/* Location */}
        <p className="text-xs text-muted-foreground tracking-widest uppercase mb-8 opacity-0 animate-fade-up">
          Kanore, Udaipur, Rajasthan
        </p>
        
        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 opacity-0 animate-fade-up delay-100">
          Hitansh <span className="gradient-text">Jain</span>
        </h1>
        
        {/* Typing tagline */}
        <div className="h-8 md:h-10 flex items-center justify-center mb-10">
          <p className="text-lg md:text-xl text-muted-foreground font-light">
            {displayText}
            <span className={`inline-block w-0.5 h-5 bg-primary ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
          </p>
        </div>
        
        {/* Quote */}
        <div className="glass-card px-6 py-4 max-w-md mx-auto mb-12 opacity-0 animate-fade-up delay-300">
          <p className="text-sm text-muted-foreground italic">
            "I am not a fan of unnecessary hard work; I am a <span className="text-primary not-italic font-medium">master of Efficiency.</span>"
          </p>
        </div>
        
        {/* Sub-text */}
        <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed opacity-0 animate-fade-up delay-400">
          I connect the dots between complex problems and smart AI solutions.
          <br className="hidden md:block" />
          <span className="text-foreground/80">Building for the future, one prompt at a time.</span>
        </p>
      </div>
      
      {/* Scroll indicator */}
      <a 
        href="#about" 
        className="absolute bottom-12 text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;