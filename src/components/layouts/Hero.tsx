'use client';

import { useState, useEffect } from 'react';
import Container from './Container';
import BioText from '../landing/BioText';
import SocialLinks from '../landing/SocialLinks';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Clock, Mail, FileText, Linkedin } from 'lucide-react';

const titles = [
  "B.Tech CSE Student",
  "Aspiring Data Scientist",
  "Machine Learning Enthusiast",
  "AI Solutions Builder"
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState('');
  const [showVisits, setShowVisits] = useState(false);
  const MOCK_VISITS = 699;

  useEffect(() => {
    // Subtitle animation
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    // Clock update for India time
    const clockTimer = setInterval(() => {
      const timeString = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: true,
        hour: 'numeric',
        minute: '2-digit',
      });
      setCurrentTime(`${timeString} (IST)`);
    }, 1000);

    // Initial clock set
    const initTime = new Date().toLocaleTimeString('en-US', {
      timeZone: 'Asia/Kolkata',
      hour12: true,
      hour: 'numeric',
      minute: '2-digit',
    });
    setCurrentTime(`${initTime} (IST)`);

    return () => {
      clearInterval(timer);
      clearInterval(clockTimer);
    };
  }, []);

  return (
    <Container className={`relative flex flex-col items-start justify-center pt-6 md:pt-8`}>
      {/* Visitor counter — top-right corner */}
      <button
        onClick={() => setShowVisits((v) => !v)}
        aria-label={showVisits ? 'Hide visit count' : 'Show visit count'}
        className="absolute top-4 right-4 flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-300 transition-colors cursor-pointer select-none group"
      >
        <AnimatePresence mode="wait">
          {showVisits ? (
            <motion.span
              key="count"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ duration: 0.2 }}
              className="tabular-nums"
            >
              {MOCK_VISITS.toLocaleString()}
            </motion.span>
          ) : null}
        </AnimatePresence>
        {showVisits ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110">
            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
            <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/>
            <line x1="2" x2="22" y1="2" y2="22"/>
          </svg>
        )}
      </button>

      <div className="flex h-full w-full flex-col sm:flex-row px-4 md:px-5">
        <div className="mb-4 sm:mb-0 sm:mr-6">
          <div className="w-fit rounded-full border p-1 bg-white dark:bg-[#0a0a0a] dark:border-neutral-700 shadow-sm">
            <div className="box-border h-28 w-28 overflow-hidden rounded-full border border-neutral-200 dark:border-neutral-700 bg-linear-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 object-cover select-none md:h-36 md:w-36">
              <Image
                src="/barun.png"
                alt="Barun Saha"
                height={144}
                width={144}
                priority
                unoptimized={true}
                className="box-border h-full w-full scale-110 object-cover transition-none drop-shadow-md"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center pb-1 md:pb-2">
          <h1 className="flex w-full items-center gap-2 text-2xl font-medium text-neutral-800 md:pb-0.5 md:text-3xl dark:text-neutral-50">
            <span>Barun Saha</span>
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-blue-500" fill="currentColor">
              <path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"></path>
            </svg>
          </h1>
          
          <div className="flex h-6 items-center overflow-hidden mb-2">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-sm font-medium text-neutral-500/80 md:text-base dark:text-neutral-400"
              >
                {titles[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-2">
            <div className="flex items-center gap-1.5 text-xs font-medium text-neutral-500 dark:text-neutral-400">
              <MapPin size={14} className="text-neutral-400" />
              <span>India</span>
            </div>
            
            {currentTime && (
              <div className="flex items-center gap-1.5 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                <Clock size={14} className="text-neutral-400" />
                <span>{currentTime}</span>
              </div>
            )}
          </div>
          
          <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-3">
            <a href="mailto:barun@example.com" className="group flex items-center gap-1.5 text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200">
              <Mail size={14} className="transition-transform group-hover:scale-110" />
              <span>Email</span>
            </a>
            <a href="https://linkedin.com/in/barun20saha" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1.5 text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200">
              <Linkedin size={14} className="transition-transform group-hover:scale-110" />
              <span>LinkedIn</span>
            </a>
            <a href="https://drive.google.com/open?id=1EuoiSmZGW1SMd55Jtn2ASd6FSto6fVDN" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1.5 text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200">
              <FileText size={14} className="transition-transform group-hover:scale-110" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
      
      <section className="mt-8 md:mt-12 w-full">
        <BioText />
      </section>
      
      <section className="mt-8 md:mt-12 w-full">
        <SocialLinks />
      </section>
    </Container>
  );
};

export default Hero;
