"use client";

import dynamic from "next/dynamic";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { socialLinks, bio, name as devName } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ParticleField = dynamic(() => import("@/components/particle-field"), {
  ssr: false,
});

const roles = ["Full-Stack Developer", "Computer Science Student", "AI & Web Systems Enthusiast"];

export default function HeroSection() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setText(currentRole.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="about" className="relative w-full min-h-[90vh] py-12 md:py-24 lg:py-32 overflow-hidden bg-background">
      {/* Particle Network Background — dots form "ROBBY" vertically on the left */}
      <div className="absolute inset-0 w-full h-full">
        <ParticleField />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Main Content */}
      <div className="container relative px-4 md:px-6 z-10 pl-20 sm:pl-28 lg:pl-32">
        <div className="grid gap-10 lg:grid-cols-2 items-center">

          {/* Profile Image with Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center order-2 lg:order-2"
          >
            <div className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px]">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-30 animate-pulse" />
              {profileImage && (
                <Image
                  src="/profile.png"
                  alt="Profile Picture"
                  fill
                  priority
                  className="rounded-full object-cover border-2 border-primary/50 shadow-2xl shadow-primary/20 relative z-10"
                  data-ai-hint={profileImage.imageHint}
                  sizes="(max-width: 768px) 250px, 350px"
                />
              )}
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left order-1 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-2"
            >
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-secondary">
                Hello, I&apos;m <br />
                <span className="text-primary">{devName}</span>
              </h1>

              <div className="h-8 md:h-10">
                <span className="font-code text-xl md:text-2xl text-accent">
                  &gt; {text}
                  <span className="animate-pulse">_</span>
                </span>
              </div>

              <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0 font-body leading-relaxed">
                {bio}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4 pt-4 justify-center lg:justify-start"
            >
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="outline"
                  size="icon"
                  asChild
                  className="rounded-full border-primary/20 hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,243,255,0.5)]"
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
