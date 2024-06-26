"use client";

import React from 'react';
import SectionHeading from './section_heading';
import { motion } from "framer-motion";
import useSectionInView from '@/lib/hooks';


export default function About() {
  const { ref } = useSectionInView("About", 0.8);

  return (
    <motion.section
      ref={ref}
      className="mb-28 mt-10 max-w-[45rem] text-center leading-8 sm:mb-32 scroll-mt-28"
      initial = {{ opacity: 0, y: 100 }}
      animate = {{ opacity: 1, y: 0 }}
      transition = {{ 
        delay: 0.15
      }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="dark:opacity-80 text-[0.85rem] sm:text-lg leading-[1.5rem] sm:leading-8">
        I attended the University of Illinois at Chicago and graduated with a {" "} 
        <span className="font-semibold">Bachelors of Science in Computer Engineering</span>. During my classes I found myself enjoying my {" "}
        <span className="font-semibold">computer architecture, programming, and algorithms</span> classes more than my electrical-focused classes, so I focused on software development. 
        
      </p>

      <p className="dark:opacity-80 mt-4 text-[0.85rem] sm:text-lg leading-[1.5rem] sm:leading-8">
        My favorite part of programming problem-solving. I love the feeling of finally figuring out a solution to the problem I have been working on!
        My core tech stack is{" "}
        <span className="font-semibold">Python, Ruby on Rails, C++, HTML/CSS, React, and SQL</span>. I am also familiar with many other languages such as{" "}
        <span className="font-semibold">Java, Elixir, TypeScript, C#, and Angular</span>.
        I am always interested in learning new technologies! I plan on learning new languages and technologies such as{" "}
        <span className="font-semibold">Go, Rust, Django, Gleam, .NET and AWS</span> just to name a few.
      </p>
        
      <p className="dark:opacity-80 mt-4 text-[0.85rem] sm:text-lg leading-[1.5rem] sm:leading-8"> 
        When I'm not coding, I enjoy{" "}
        <span className="font-medium italic">going on long bike rides, listening to music, watching movies, building legos, tinkering with technology, and playing video games</span>.
        I enjoy picking up new hobbies in my free time and spending time with my friends!
      </p>

      <p className="dark:opacity-80 mt-4 text-[0.85rem] sm:text-lg leading-[1.5rem] sm:leading-8">
        I am currently looking for a new position as a software developer, feel free to reach out and we can chat about some new opportunities!
      </p>
    </motion.section>
  )
}
