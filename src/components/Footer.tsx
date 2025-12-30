

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo / Name */}
        <div className="mb-6">
          <span className="text-2xl font-bold">
            Hitansh <span className="gradient-text">Jain</span>
          </span>
        </div>

        {/* Philosophy */}
        <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
          "The skill lies in perfection and prompting, not just manual labor."
        </p>

        {/* Quick links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {["About", "Education", "Certifications", "Skills", "Project", "Resume"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Credits */}
        <div className="text-xs text-muted-foreground">
          <span>© {currentYear} Hitansh Jain</span>
        </div>

        {/* Location */}
        <p className="text-xs text-muted-foreground/50 mt-4">
          Kanore, Udaipur, Rajasthan, India
        </p>
      </div>
    </footer>
  );
};

export default Footer;
