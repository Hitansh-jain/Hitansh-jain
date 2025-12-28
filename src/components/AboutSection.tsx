import { Sparkles, Users, Zap, Quote, Target, Rocket } from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      icon: Users,
      value: "1000+",
      label: "People Guided",
    },
    {
      icon: Sparkles,
      value: "AI",
      label: "First Mindset",
    },
    {
      icon: Zap,
      value: "100%",
      label: "Result Driven",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-xs font-mono text-primary uppercase tracking-widest mb-4">
            The Story
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Meet <span className="gradient-text">Hitansh</span>
          </h2>
        </div>

        {/* Main Story Content */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start mb-16">
          {/* Left Column - Main Story */}
          <div className="lg:col-span-3 space-y-6">
            {/* Philosophy Card */}
            <div className="glass-card p-6 md:p-8 rounded-2xl border-l-2 border-primary/50">
              <div className="flex items-start gap-4 mb-4">
                <Quote className="w-8 h-8 text-primary flex-shrink-0" />
                <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed italic">
                  "I don't just build; I <span className="neon-text">architect</span>. While others focus on manual coding, I focus on Prompt Engineering and Output Perfection."
                </p>
              </div>
            </div>

            {/* Story paragraphs */}
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                <span className="text-foreground font-semibold">Hitansh</span> is a visionary who believes 
                in working <span className="text-foreground">smarter, not harder</span>. In an era where AI 
                is reshaping everything, he's chosen to master it rather than compete against it.
              </p>
              
              <p>
                His approach is refreshingly honest—he leverages AI to build projects like the{" "}
                <span className="text-primary font-medium">'Eco Waste Wise Agent'</span> because 
                he understands that the real skill lies in <span className="text-foreground">vision, 
                direction, and perfection</span>, not just manual labor.
              </p>

              <p>
                Despite starting as a beginner, Hitansh guided{" "}
                <span className="text-foreground font-medium">1000+ people</span> on social media 
                during Google's 5-day AI Intensive course—proving that understanding and sharing 
                knowledge is just as valuable as creating it.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="glass-card p-4 rounded-xl flex items-center gap-3 group hover:border-primary/30 transition-all">
                <Target className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Precision Focused</span>
              </div>
              <div className="glass-card p-4 rounded-xl flex items-center gap-3 group hover:border-primary/30 transition-all">
                <Rocket className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Growth Mindset</span>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="lg:col-span-2 space-y-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card p-6 rounded-xl flex items-center gap-5 group hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-neon-green/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-neon-green/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}

            {/* Belief Card */}
            <div className="glass-card p-5 rounded-xl bg-gradient-to-br from-primary/5 to-transparent">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">My belief:</span> The future belongs 
                to those who can <span className="neon-text">direct AI</span>, not those who try 
                to outwork it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;