import { Sparkles, Users, Zap } from "lucide-react";
const AboutSection = () => {
  const stats = [{
    icon: Users,
    value: "1000+",
    label: "People Helped"
  }, {
    icon: Sparkles,
    value: "AI",
    label: "Powered Solutions"
  }, {
    icon: Zap,
    value: "100%",
    label: "Efficiency Focused"
  }];
  return <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-xs font-mono text-primary uppercase tracking-widest mb-4">
            The Story
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            From Beginner to <span className="gradient-text">Guide</span>
          </h2>
        </div>

        {/* Story content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hitansh is a visionary who leverages AI and modern tools to achieve 
              high-quality results. He's refreshingly honest about using AI to build 
              projects like the <span className="text-foreground font-medium">'Eco Waste Wise Agent'</span> because 
              he believes the real skill lies in{" "}
              <span className="neon-text">I don't just build; I architect. While others focus on manual coding, I focus on 'Prompt Engineering' and 'Output Perfection'. My projects, like the Eco Waste Wise Agent, are a testament to how human vision and AI precision can come together to solve real-world problems.</span>, not just manual labor.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Despite being a beginner once, Hitansh guided{" "}
              <span className="text-foreground font-medium">1000+ people</span> on social media 
              during Google's 5-day AI Intensive course, proving that understanding 
              and sharing knowledge is just as valuable as creating it.
            </p>
          </div>

          {/* Stats cards */}
          <div className="grid gap-4">
            {stats.map((stat, index) => <div key={stat.label} className="glass-card p-6 rounded-xl flex items-center gap-5 group hover:border-primary/30 transition-all duration-300" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;