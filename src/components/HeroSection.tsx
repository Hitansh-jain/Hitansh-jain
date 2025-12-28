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
    <section className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-3xl mx-auto">
        {/* Location */}
        <p className="text-xs text-muted-foreground tracking-widest uppercase mb-8 opacity-0 animate-fade-up">
          Kanore, Udaipur, Rajasthan
        </p>
        
        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 opacity-0 animate-fade-up delay-100">
          Hitansh Jain
        </h1>
        
        {/* Typing tagline */}
        <div className="h-8 md:h-10 flex items-center justify-center mb-10">
          <p className="text-lg md:text-xl text-muted-foreground font-light">
            {displayText}
            <span className={`inline-block w-0.5 h-5 bg-foreground ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
          </p>
        </div>
        
        {/* Quote */}
        <p className="text-sm text-muted-foreground max-w-md mx-auto mb-16 opacity-0 animate-fade-up delay-300">
          "I am not a fan of unnecessary hard work; I am a master of Efficiency."
        </p>
        
        {/* Sub-text */}
        <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed opacity-0 animate-fade-up delay-400">
          I connect the dots between complex problems and smart AI solutions.
          Building for the future, one prompt at a time.
        </p>
      </div>
      
      {/* Scroll indicator */}
      <a 
        href="#about" 
        className="absolute bottom-12 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowDown className="w-4 h-4" />
      </a>
    </section>
  );
};

export default HeroSection;