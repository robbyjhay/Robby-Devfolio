'use client';

import { ExternalLink, ArrowDownToLine, Briefcase, GraduationCap, Award, Eye } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { education, experience, certifications, achievements } from '@/lib/data';
import Image from 'next/image';

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 w-full bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.1),transparent_50%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-headline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            My professional journey, education, and achievements
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <Link href="/resume">
              <Button
                className="gap-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/20 hover:shadow-[0_0_15px_rgba(0,243,255,0.5)] transition-all duration-300"
                size="lg"
              >
                <ExternalLink className="w-4 h-4" />
                View Full Resume
              </Button>
            </Link>
            <a href="/Okikioluwa Jefferson CV.pdf" download="Okikioluwa Jefferson CV.pdf">
              <Button
                className="gap-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/20 hover:shadow-[0_0_15px_rgba(0,243,255,0.5)] transition-all duration-300"
                size="lg"
              >
                <ArrowDownToLine className="w-4 h-4" />
                Download CV
              </Button>
            </a>
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary transition-colors duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline text-primary">
                  <GraduationCap className="w-5 h-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="space-y-2 border-l-2 border-primary/20 pl-4">
                    <h3 className="font-semibold text-foreground font-headline">{edu.degree}</h3>
                    <p className="text-sm text-muted-foreground font-body">{edu.institution}</p>
                    <p className="text-sm text-primary font-code">{edu.period}</p>
                    <p className="text-sm text-muted-foreground font-body">{edu.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Certifications & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary transition-colors duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline text-primary">
                  <Award className="w-5 h-5" />
                  Certifications & Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
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
                    <div key={index} className="space-y-1 border-l-2 border-accent/20 pl-4 flex justify-between items-start group">
                      <div>
                        <h3 className="font-semibold text-foreground font-headline">{item.title}</h3>
                        <p className="text-sm text-muted-foreground font-body">{item.subtitle}</p>
                        <p className="text-sm text-primary font-code">{item.date}</p>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                            <Eye className="h-5 w-5" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md bg-card/95 backdrop-blur-md border-primary/20 p-0 overflow-hidden">
                          <div className="max-h-[90vh] overflow-y-auto p-6">
                            <DialogHeader>
                              <DialogTitle className="text-primary">{item.title}</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4 mt-4">
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                              {item.previewImage && (
                                <div className="rounded-lg overflow-hidden border border-border">
                                  <img
                                    src={item.previewImage}
                                    alt={item.title}
                                    className="w-full h-auto max-h-none block"
                                  />
                                </div>
                              )}
                              <div className="flex justify-between text-xs text-primary/60">
                                <span>{item.subtitle}</span>
                                <span>{item.date}</span>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Card className="mt-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary transition-colors duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline text-primary">
                <Briefcase className="w-5 h-5" />
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="space-y-3 border-l-2 border-secondary/20 pl-4">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground font-headline">{exp.title}</h3>
                    <p className="text-muted-foreground font-body">{exp.company}</p>
                    <p className="text-sm text-primary font-code">{exp.period}</p>
                  </div>
                  <ul className="space-y-2 ml-4">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start font-body">
                        <span className="text-primary mr-2">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
