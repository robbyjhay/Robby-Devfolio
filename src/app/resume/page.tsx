'use client';

import { Button } from '@/components/ui/button';
import {
  ArrowDownToLine,
  Github,
  Linkedin,
  Mail,
  Phone,
  GraduationCap,
  Briefcase,
  Award,
  Code,
  ExternalLink,
  Trophy,
} from 'lucide-react';
import {
  name as devName,
  education,
  experience,
  resumeSkills,
  resumeProjects,
  resumeCertDetails,
  achievements,
} from '@/lib/data';

export default function ResumePage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-background text-foreground p-4 sm:p-6 lg:p-8">
      <main className="w-full max-w-5xl bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl shadow-lg p-8 sm:p-12 print:shadow-none print:border-none print:bg-white print:text-black">
        {/* Header */}
        <header className="relative text-center border-b border-border/50 pb-6 mb-8 print:border-black">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent print:text-black print:bg-none">
            {devName}
          </h1>
          <p className="text-sm mt-2 text-primary/80">Full-Stack Developer | Computer Science Student | AI & Web Systems Enthusiast</p>
          <div className="absolute top-0 right-0 print:hidden">
            <a href="/resume.pdf" download="Okikioluwa_Robert_Jefferson_Resume.pdf">
              <Button
                variant="outline"
                size="icon"
                className="bg-card/50 hover:bg-primary/20"
              >
                <ArrowDownToLine className="h-4 w-4" />
                <span className="sr-only">Download PDF</span>
              </Button>
            </a>
          </div>
          <div className="mt-4 flex justify-center items-center flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground print:text-black">
            <a href="mailto:jeffersonokikioluwa@gmail.com" className="flex items-center gap-2 hover:text-primary">
              <Mail className="w-4 h-4" />
              jeffersonokikioluwa@gmail.com
            </a>
            <a href="https://github.com/robbyjhay" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
              <Github className="w-4 h-4" />
              github.com/robbyjhay
            </a>
            <a href="https://www.linkedin.com/in/okikioluwa-jefferson" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary">
              <Linkedin className="w-4 h-4" />
              linkedin.com/in/okikioluwa-jefferson
            </a>
          </div>
        </header>

        {/* Main Content */}
        <div className="space-y-10">
          {/* Education */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-primary border-b border-border/50 pb-2 print:border-black">
              <GraduationCap /> Education
            </h2>
            {education.map((edu, index) => (
              <div key={index} className="space-y-1">
                <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                <p className="text-muted-foreground">
                  {edu.institution}{edu.location ? `, ${edu.location}` : ''}
                </p>
                <div className="flex justify-between text-sm text-primary">
                  <span>{edu.period}</span>
                  <span>{edu.description}</span>
                </div>
              </div>
            ))}
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-primary border-b border-border/50 pb-2 print:border-black">
              <Code /> Technical Skills
            </h2>
            <div className="space-y-3">
              {resumeSkills.map((skill) => (
                <div key={skill.category} className="grid grid-cols-1 md:grid-cols-4 gap-1 text-sm">
                  <strong className="md:col-span-1 text-foreground">{skill.category}:</strong>
                  <p className="md:col-span-3 text-muted-foreground">{skill.items}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-primary border-b border-border/50 pb-2 print:border-black">
              <Briefcase /> Work Experience
            </h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                    <span className="text-sm text-primary">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground">{exp.company}</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground pl-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-primary border-b border-border/50 pb-2 print:border-black">
              <Github /> Projects
            </h2>
            <div className="space-y-6">
              {resumeProjects.map((project) => (
                <div key={project.name} className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-4">
                    {project.links.map(link => (
                      <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm text-accent-foreground hover:text-primary flex items-center gap-1">
                        {link.name} <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-primary border-b border-border/50 pb-2 print:border-black">
              <Award /> Certifications &amp; Simulations
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground pl-2">
              {resumeCertDetails.map((cert, index) => (
                <li key={index}>
                  <strong>{cert.label}:</strong> {cert.text}
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-accent-foreground hover:text-primary ml-2">[Link]</a>
                  )}
                </li>
              ))}
            </ul>
          </section>

          {/* Achievements */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-primary border-b border-border/50 pb-2 print:border-black">
              <Trophy /> Achievements
            </h2>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="space-y-1">
                  <h3 className="text-lg font-semibold text-foreground">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.organization}</p>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
