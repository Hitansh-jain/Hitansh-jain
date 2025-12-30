import { Mail, Calendar, MapPin } from "lucide-react";
import aboutIllustration from "@/assets/about-illustration.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        {/* Header with illustration */}
        <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
          <div className="flex-1">
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-4">
              About
            </p>

            {/* Personal Info */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <a href="mailto:hitanshj281@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                hitanshj281@gmail.com
              </a>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                July 7, 2005
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Kanore, Udaipur, Rajasthan
              </div>
            </div>
          </div>
          
          {/* Illustration */}
          <div className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0 mx-auto md:mx-0">
            <img 
              src={aboutIllustration} 
              alt="About illustration" 
              className="w-full h-full object-contain animate-fade-in"
            />
          </div>
        </div>

        {/* Story */}
        <div className="space-y-8 text-muted-foreground leading-relaxed max-w-2xl">
          <p className="text-foreground text-lg">
            I'm Hitansh Jain. Even though I'm not from a Computer Science background, 
            I'm breaking into this field through pure hard work.
          </p>

          <p>
            Many believe a degree is everything, but I strongly feel that skills matter more than a piece of paper. 
            I'm constantly pushing myself to be better in every field I touch.
          </p>

          <div className="border-l-2 border-border pl-6 py-2">
            <p className="text-xs uppercase tracking-widest mb-4 text-foreground/60">My Honest Truth</p>
            <p>
              I don't pretend to know everything. I'm a learner first, 
              always curious, always growing. I believe in being real about my journey—the struggles, 
              the failures, and the small wins that keep me going.
            </p>
          </div>

          <p>
            While others chase shortcuts, I'm building my foundation brick by brick. 
            Every day, I wake up with one goal: to be 1% better than yesterday.
          </p>

          <div className="border-l-2 border-border pl-6 py-2">
            <p className="text-xs uppercase tracking-widest mb-4 text-foreground/60">What Drives Me</p>
            <p>
              I'm not here to prove anyone wrong—I'm here to prove to myself that backgrounds don't define futures. 
              With the rise of AI, I've found my calling: mastering the art of directing technology rather than competing with it.
            </p>
          </div>

          <p className="text-foreground">
            The journey is long, but I'm in it for the long haul.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;