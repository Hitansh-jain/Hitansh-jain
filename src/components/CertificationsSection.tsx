import { Award, ExternalLink, Calendar, Building2, X, CheckCircle, FileText, ZoomIn } from "lucide-react";
import { useState } from "react";

interface CertificationDetails {
  enrollmentCode?: string;
  userCode?: string;
  skills?: string[];
  verifiedBy?: string;
  badgeName?: string;
  certificateImage?: string;
}

interface Certification {
  id: string;
  title: string;
  issuer: string;
  platform?: string;
  date: string;
  category: string;
  color: string;
  highlight?: boolean;
  verifiable?: boolean;
  details?: CertificationDetails;
}

const CertificationsSection = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const certifications: Certification[] = [
    {
      id: "deloitte",
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte Australia",
      platform: "Forage",
      date: "November 20, 2025",
      category: "Data Analytics",
      color: "from-cyan-500 to-blue-500",
      verifiable: true,
      details: {
        enrollmentCode: "FW9PucCRHDkLSHZZ3",
        userCode: "691f337ee5978bc9456119f1",
        skills: ["Data Analysis", "Forensic Technology"],
        verifiedBy: "Tina McCreery, Chief Human Resources Officer, Deloitte",
        certificateImage: "https://res.cloudinary.com/dvk8cbn05/image/upload/f_auto,q_auto/v1767067731/Screenshot_2025-12-30_093828_kiacx0.png",
      },
    },
    {
      id: "google-ai",
      title: "5-Day AI Agents Intensive Course",
      issuer: "Kaggle & Google",
      platform: "AI Intensive",
      date: "December 18, 2025",
      category: "AI Specialist",
      color: "from-green-500 to-emerald-500",
      highlight: true,
      verifiable: true,
      details: {
        badgeName: "5-Day AI Agents Intensive Course with Google",
        verifiedBy: "Kaggle & Google",
        skills: ["AI Agents", "Prompt Engineering", "Google AI Tools"],
        certificateImage: "https://res.cloudinary.com/dvk8cbn05/image/upload/f_auto,q_auto/v1767067767/download_zmrxg8.png",
      },
    },
    {
      id: "shikshapr",
      title: "Advance Diploma in Computer Science",
      issuer: "ShikshaPro Academy",
      date: "2025",
      category: "Computer Science",
      color: "from-purple-500 to-pink-500",
      verifiable: true,
      details: {
        badgeName: "Advance Diploma in Computer Science",
        verifiedBy: "ShikshaPro Academy",
        skills: ["Programming Fundamentals", "Web Development", "Database Management", "Software Engineering"],
      },
    },
    {
      id: "rcsa",
      title: "Diploma in Computer Science",
      issuer: "RCSA",
      date: "2025",
      category: "Computer Science",
      color: "from-orange-500 to-amber-500",
      verifiable: true,
      details: {
        badgeName: "Diploma in Computer Science",
        verifiedBy: "RCSA (Rajasthan Computer Saksharta Abhiyan)",
        skills: ["Computer Basics", "Office Applications", "Internet & Email", "Operating Systems"],
      },
    },
    {
      id: "rscit",
      title: "RS-CIT (IT Literacy)",
      issuer: "VMOU Kota",
      date: "November 2022",
      category: "IT Fundamentals",
      color: "from-red-500 to-rose-500",
      verifiable: true,
      details: {
        badgeName: "Rajasthan State Certificate in Information Technology",
        verifiedBy: "VMOU (Vardhman Mahaveer Open University), Kota",
        skills: ["Computer Fundamentals", "MS Office", "Internet Basics", "Digital Literacy"],
      },
    },
  ];

  return (
    <section id="certifications" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-xs font-mono text-primary uppercase tracking-widest mb-4">
            Credentials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Certification <span className="gradient-text">Vault</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Professional certifications and courses that validate expertise
          </p>
        </div>

        {/* Certifications grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className={`glass-card rounded-xl overflow-hidden group transition-all duration-500 ${
                hoveredId === cert.id ? "scale-[1.02] border-primary/40" : ""
              } ${cert.highlight ? "md:col-span-2 lg:col-span-1" : ""}`}
              onMouseEnter={() => setHoveredId(cert.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Gradient top bar */}
              <div className={`h-1 bg-gradient-to-r ${cert.color}`} />

              <div className="p-6">
                {/* Category badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground mb-4">
                  {cert.category}
                </span>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building2 className="w-4 h-4" />
                    <span>{cert.issuer}</span>
                    {cert.platform && (
                      <>
                        <span className="text-border">•</span>
                        <span>{cert.platform}</span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Hover reveal - credential ID */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    hoveredId === cert.id ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-muted-foreground">
                        ID: {cert.id.toUpperCase()}-2025
                      </span>
                      {cert.verifiable ? (
                        <button
                          onClick={() => setSelectedCert(cert)}
                          className="flex items-center gap-1 text-xs text-primary hover:underline"
                        >
                          <span>Verify</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      ) : (
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <CheckCircle className="w-3 h-3" />
                          <span>Verified</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verification Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          />

          {/* Modal */}
          <div className="relative glass-card rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-6 animate-scale-in border border-primary/20">
            {/* Close button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Gradient header */}
            <div className={`h-2 bg-gradient-to-r ${selectedCert.color} rounded-full mb-6`} />

            {/* Verified badge */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <span className="text-green-500 font-semibold text-sm">Verified Certificate</span>
                <p className="text-xs text-muted-foreground">Authentic credential</p>
              </div>
            </div>

            {/* Certificate title */}
            <h3 className="text-xl font-bold text-foreground mb-2">
              {selectedCert.title}
            </h3>
            <p className="text-muted-foreground mb-6">
              Issued by {selectedCert.issuer}
            </p>

            {/* Details */}
            <div className="space-y-4 bg-secondary/30 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-primary" />
                <div>
                  <span className="text-xs text-muted-foreground block">Certificate Name</span>
                  <span className="text-sm font-medium">
                    {selectedCert.details?.badgeName || selectedCert.title}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-primary" />
                <div>
                  <span className="text-xs text-muted-foreground block">Issuing Organization</span>
                  <span className="text-sm font-medium">{selectedCert.issuer}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <span className="text-xs text-muted-foreground block">Issue Date</span>
                  <span className="text-sm font-medium">{selectedCert.date}</span>
                </div>
              </div>

              {selectedCert.details?.enrollmentCode && (
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary" />
                  <div>
                    <span className="text-xs text-muted-foreground block">Enrollment Verification Code</span>
                    <span className="text-sm font-mono text-primary">{selectedCert.details.enrollmentCode}</span>
                  </div>
                </div>
              )}

              {selectedCert.details?.userCode && (
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary" />
                  <div>
                    <span className="text-xs text-muted-foreground block">User Verification Code</span>
                    <span className="text-sm font-mono text-primary">{selectedCert.details.userCode}</span>
                  </div>
                </div>
              )}

              {selectedCert.details?.verifiedBy && (
                <div className="pt-3 border-t border-border/50">
                  <span className="text-xs text-muted-foreground block mb-1">Verified By</span>
                  <span className="text-sm">{selectedCert.details.verifiedBy}</span>
                </div>
              )}

              {selectedCert.details?.skills && (
                <div className="pt-3 border-t border-border/50">
                  <span className="text-xs text-muted-foreground block mb-2">Skills Validated</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.details.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedCert.details?.certificateImage && (
                <div className="pt-3 border-t border-border/50">
                  <span className="text-xs text-muted-foreground block mb-2">Certificate Preview</span>
                  <div 
                    className="relative cursor-pointer group/img rounded-lg overflow-hidden border border-border/50"
                    onClick={() => setImagePreview(selectedCert.details?.certificateImage || null)}
                  >
                    <img 
                      src={selectedCert.details.certificateImage} 
                      alt="Certificate" 
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Close button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="w-full mt-6 py-3 rounded-xl bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Full Image Preview Modal */}
      {imagePreview && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-background/90 backdrop-blur-md"
            onClick={() => setImagePreview(null)}
          />
          <div className="relative max-w-4xl w-full max-h-[90vh] animate-scale-in">
            <button
              onClick={() => setImagePreview(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={imagePreview} 
              alt="Certificate Full View" 
              className="w-full h-auto rounded-xl border border-border shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificationsSection;