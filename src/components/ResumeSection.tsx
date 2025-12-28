import { Download, FileText, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const ResumeSection = () => {
  const generateResume = () => {
    const resumeContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Hitansh Jain - Resume</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', system-ui, sans-serif; color: #1a1a1a; line-height: 1.6; padding: 40px; max-width: 800px; margin: 0 auto; }
    .header { text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #00f0ff; }
    .name { font-size: 32px; font-weight: 700; margin-bottom: 8px; }
    .tagline { color: #00a8b5; font-size: 14px; font-style: italic; margin-bottom: 12px; }
    .contact { color: #666; font-size: 13px; }
    .section { margin-bottom: 25px; }
    .section-title { font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #00a8b5; border-bottom: 1px solid #e0e0e0; padding-bottom: 5px; margin-bottom: 12px; }
    .item { margin-bottom: 12px; }
    .item-title { font-weight: 600; font-size: 14px; }
    .item-subtitle { color: #666; font-size: 13px; }
    .item-date { color: #999; font-size: 12px; }
    .skills-grid { display: flex; flex-wrap: wrap; gap: 8px; }
    .skill { background: #f0fafa; padding: 4px 12px; border-radius: 20px; font-size: 12px; color: #00a8b5; }
    .quote { font-style: italic; color: #666; text-align: center; padding: 15px; background: #f9f9f9; border-radius: 8px; margin-bottom: 25px; }
    .highlight { color: #00a8b5; font-weight: 500; }
    @media print { body { padding: 20px; } }
  </style>
</head>
<body>
  <div class="header">
    <div class="name">HITANSH JAIN</div>
    <div class="tagline">"I am not a fan of unnecessary hard work; I am a master of Efficiency."</div>
    <div class="contact">Kanore, Udaipur, Rajasthan | AI Enthusiast & Efficiency Expert</div>
  </div>

  <div class="quote">
    Real-World Ideas. AI Execution. — Connecting complex problems with smart AI solutions.
  </div>

  <div class="section">
    <div class="section-title">Education</div>
    <div class="item">
      <div class="item-title">B.Sc. (Final Year) - Expected 2026</div>
      <div class="item-subtitle">Govt. Shri Sanwariya Ji College, Mandfia (MLSU Udaipur)</div>
    </div>
    <div class="item">
      <div class="item-title">12th Standard (Maths-Science)</div>
      <div class="item-subtitle">High Percentile Achievement</div>
    </div>
    <div class="item">
      <div class="item-title">10th Standard</div>
      <div class="item-subtitle">Maths-Science Background - High Percentile</div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Certifications</div>
    <div class="item">
      <div class="item-title">Data Analytics Job Simulation</div>
      <div class="item-subtitle">Deloitte Australia (Forage)</div>
      <div class="item-date">November 2025</div>
    </div>
    <div class="item">
      <div class="item-title">5-Day AI Agents Intensive Course</div>
      <div class="item-subtitle">Google / ULS</div>
      <div class="item-date">December 2025</div>
    </div>
    <div class="item">
      <div class="item-title">Advance Diploma in Computer Science</div>
      <div class="item-subtitle">ShikshaPro Academy</div>
      <div class="item-date">2025</div>
    </div>
    <div class="item">
      <div class="item-title">Diploma in Computer Science</div>
      <div class="item-subtitle">RCSA</div>
      <div class="item-date">2025</div>
    </div>
    <div class="item">
      <div class="item-title">RS-CIT (IT Literacy)</div>
      <div class="item-subtitle">VMOU Kota</div>
      <div class="item-date">November 2022</div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Key Achievement</div>
    <div class="item">
      <div class="item-title">Community Mentor - 1000+ People Helped</div>
      <div class="item-subtitle">Guided peers on social media during Google's 5-Day AI Intensive Course</div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Featured Project</div>
    <div class="item">
      <div class="item-title">Eco Waste Wise Agent</div>
      <div class="item-subtitle">AI-powered sustainability solution. Architected the vision, leveraged AI for execution, refined with human intelligence.</div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Skills & Expertise</div>
    <div class="skills-grid">
      <span class="skill">Prompt Engineering</span>
      <span class="skill">AI Agent Design</span>
      <span class="skill">Presentation Automation</span>
      <span class="skill">Graphic Design</span>
      <span class="skill">Video Editing</span>
      <span class="skill">UI Layouts</span>
      <span class="skill">Community Management</span>
      <span class="skill">Idea Generation</span>
      <span class="skill">Problem Solving</span>
    </div>
  </div>
</body>
</html>
    `;

    const newWindow = window.open("", "_blank");
    if (newWindow) {
      newWindow.document.write(resumeContent);
      newWindow.document.close();
    }
  };

  return (
    <section id="resume" className="py-24 md:py-32 px-6 bg-secondary/20">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section header */}
        <div className="mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-xs font-mono text-primary uppercase tracking-widest mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The <span className="gradient-text">"Honest"</span> Resume
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A transparent look at skills, achievements, and the journey so far
          </p>
        </div>

        {/* Resume preview card */}
        <div className="glass-card p-8 rounded-2xl mb-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
              <FileText className="w-10 h-10 text-primary" />
            </div>
            
            <h3 className="text-xl font-semibold mb-2">Hitansh Jain</h3>
            <p className="text-muted-foreground text-sm mb-6">
              AI Enthusiast • Efficiency Expert • 2026 Graduate
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["AI Skills", "Certifications", "Projects", "Education"].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-secondary text-xs text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>

            <Button
              variant="hero"
              size="xl"
              onClick={generateResume}
              className="group"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download My Honest Resume
              <Sparkles className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
          Opens in a new window • Print-ready format
        </p>
      </div>
    </section>
  );
};

export default ResumeSection;
