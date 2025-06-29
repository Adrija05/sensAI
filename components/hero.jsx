"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full py-36 pt-48 bg-gradient-to-b from-background to-blue-950/50 relative overflow-hidden">
      {/* Grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none grid-overlay"
      ></div>

      {/* Content wrapper */}
      <div className="relative space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1
            style={{ color: "#EE82EE" }}
            className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient"
          >
            Your AI Career Coach for
            <br />
            Professional Success
          </h1>
          <p
            style={{ color: "#D8BFD8" }}
            className="mx-auto max-w-[600px] text-muted-foreground md:text-xl"
          >
            Advance your career with personalized guidance, interview prep, and
            AI-powered tools for job success.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8" style={{ backgroundColor: "#EE82EE" }}>
              Get Started
            </Button>
          </Link>
          <Link href="https://youtu.be/4MOqzvDyLPg?si=fY2sojGQaoh9tTtZ">
            <Button size="lg" variant="outline" className="px-8" style={{ color: "#EE82EE" }}>
              Watch Demo
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/ai.jpg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;