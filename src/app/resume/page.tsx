'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowDownToLine,
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  Briefcase,
  Award,
  Code,
  ExternalLink,
  Trophy,
  Eye,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  name as devName,
  education,
  experience,
  resumeSkills,
  resumeProjects,
  certifications,
  achievements,
} from '@/lib/data';
import Image from 'next/image';

export default function ResumePage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-background text-foreground p-4 sm:p-6 lg:p-8">
      <main className="w-full max-w-5xl bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl shadow-lg p-8 sm:p-12 print:shadow-none print:border-none print:bg-white print:text-black">
        {/* Header */}
        <header className="relative text-center border-b border-border/50 pb-6 mb-8 print:border-black">
          <div className="absolute top-0 left-0 print:hidden">
            <Link href="/#resume">
              <Button
                variant="outline"
                className="bg-card/50 hover:bg-primary/20 gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </Button>
            </Link>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent print:text-black print:bg-none">
            {devName}
          </h1>
          <p className="text-sm mt-2 text-primary/80">Full-Stack Developer | Computer Science Student | AI & Web Systems Enthusiast</p>
          <div className="absolute top-0 right-0 print:hidden">
            <a href="/Okikioluwa Jefferson CV.pdf" download="Okikioluwa Jefferson CV.pdf">
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
              {resumeSkills.map((skill, index) => (
                <div key={index} className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-2">
                  <span className="font-medium text-foreground">{skill.category}:</span>
                  <span className="text-muted-foreground">{skill.items}</span>
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

          {/* Certifications & Achievements */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-primary border-b border-border/50 pb-2 print:border-black">
              <Award /> Certifications & Achievements
            </h2>
            <div className="space-y-6">
              {/* Combine and Sort Chronologically */}
              {[
                ...certifications.map(c => ({ ...c, type: 'Certification', title: c.name, subtitle: c.issuer })),
                ...achievements.map(a => ({ ...a, type: 'Achievement', title: a.title, subtitle: a.organization }))
              ]
                .sort((a, b) => {
                  if (a.date.includes('2026')) return -1;
                  if (b.date.includes('2026')) return 1;
                  if (a.date === 'Ongoing') return 1;
                  if (b.date === 'Ongoing') return -1;
                  return b.date.localeCompare(a.date);
                })
                .map((item, index) => (
                  <div key={index} className="flex justify-between items-start group border-l-2 border-primary/20 pl-4 py-1">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.subtitle} | {item.date}</p>
                      <p className="text-sm text-muted-foreground/80">{item.description}</p>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          <Eye className="h-5 w-5" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md bg-card/95 backdrop-blur-md border-primary/20">
                        <DialogHeader>
                          <DialogTitle className="text-primary">{item.title}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                          {item.previewImage && (
                            <div className="relative aspect-video rounded-lg overflow-hidden border border-border">
                              <Image
                                src={item.previewImage}
                                alt={item.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                          )}
                          <div className="flex justify-between text-xs text-primary/60">
                            <span>{item.subtitle}</span>
                            <span>{item.date}</span>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
