import { Download, FileText } from "lucide-react";
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
    .header { text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #10b981; }
    .name { font-size: 28px; font-weight: 700; margin-bottom: 8px; }
    .tagline { color: #10b981; font-size: 13px; font-style: italic; margin-bottom: 10px; }
    .contact { color: #666; font-size: 12px; }
    .contact a { color: #10b981; text-decoration: none; }
    .section { margin-bottom: 22px; }
    .section-title { font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #10b981; border-bottom: 1px solid #e0e0e0; padding-bottom: 5px; margin-bottom: 10px; }
    .item { margin-bottom: 10px; }
    .item-title { font-weight: 600; font-size: 13px; }
    .item-subtitle { color: #666; font-size: 12px; }
    .item-date { color: #999; font-size: 11px; }
    .skills-grid { display: flex; flex-wrap: wrap; gap: 6px; }
    .skill { background: #ecfdf5; padding: 3px 10px; border-radius: 20px; font-size: 11px; color: #10b981; }
    .quote { font-style: italic; color: #666; text-align: center; padding: 12px; background: #f9fafb; border-radius: 6px; margin-bottom: 22px; font-size: 13px; }
    @media print { body { padding: 20px; } }
  </style>
</head>
<body>
  <div class="header">
    <div class="name">HITANSH JAIN</div>
    <div class="tagline">"I am not a fan of unnecessary hard work; I am a master of Efficiency."</div>
    <div class="contact">
      Kanore, Udaipur, Rajasthan, India | 
      <a href="mailto:hitanshj281@gmail.com">hitanshj281@gmail.com</a> | 
      DOB: July 7, 2005
    </div>
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
      <div class="item-title">12th Standard (RBSE, Maths-Science) - 72.20%</div>
      <div class="item-subtitle">Completed 2023</div>
    </div>
    <div class="item">
      <div class="item-title">10th Standard (RBSE) - 91.67%</div>
      <div class="item-subtitle">Maths-Science Background - Completed 2021</div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Certifications</div>
    <div class="item">
      <div class="item-title">Data Analytics Job Simulation</div>
      <div class="item-subtitle">Deloitte Australia (Forage) • November 2025</div>
    </div>
    <div class="item">
      <div class="item-title">5-Day AI Agents Intensive Course</div>
      <div class="item-subtitle">Google / ULS • December 2025</div>
    </div>
    <div class="item">
      <div class="item-title">Advance Diploma in Computer Science</div>
      <div class="item-subtitle">ShikshaPro Academy • 2025</div>
    </div>
    <div class="item">
      <div class="item-title">Diploma in Computer Science</div>
      <div class="item-subtitle">RCSA • 2025</div>
    </div>
    <div class="item">
      <div class="item-title">RS-CIT (IT Literacy)</div>
      <div class="item-subtitle">VMOU Kota • November 2022</div>
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
    <div class="section-title">Skills & Expertise</div>
    <div class="skills-grid">
      <span class="skill">Prompt Engineering</span>
      <span class="skill">AI Agent Design</span>
      <span class="skill">Output Perfection</span>
      <span class="skill">Vision Architecture</span>
      <span class="skill">Workflow Automation</span>
      <span class="skill">Creative Direction</span>
      <span class="skill">Community Leadership</span>
      <span class="skill">Problem Solving</span>
      <span class="skill">Teaching & Mentoring</span>
    </div>
  </div>

  <div class="section">
    <div class="section-title">About Me</div>
    <div class="item">
      <div class="item-subtitle">Even though I'm not from a Computer Science background, I'm breaking into this field through pure hard work. I strongly believe skills matter more than a piece of paper. With the rise of AI, I've found my calling: mastering the art of directing technology rather than competing with it.</div>
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
    <section id="resume" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-2xl mx-auto text-center">
        {/* Header */}
        <p className="section-label mb-4">Get In Touch</p>
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          The <span className="gradient-text">"Honest"</span> Resume
        </h2>
        <p className="text-muted-foreground text-sm mb-10">
          A transparent look at skills, achievements, and the journey so far
        </p>

        {/* Resume preview card */}
        <div className="glass-card-hover p-8 mb-6">
          <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-primary/10 flex items-center justify-center">
            <FileText className="w-7 h-7 text-primary" />
          </div>
          
          <h3 className="text-lg font-medium mb-1">Hitansh Jain</h3>
          <p className="text-muted-foreground text-sm mb-5">
            AI Enthusiast • Efficiency Expert • 2026 Graduate
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
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
            onClick={generateResume}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Download className="w-4 h-4 mr-2" />
            View Resume
          </Button>
        </div>

        <p className="text-xs text-muted-foreground">
          Opens in a new window • Print-ready format
        </p>
      </div>
    </section>
  );
};

export default ResumeSection;