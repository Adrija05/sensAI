"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BrainCircuit,
  Briefcase,
  LineChart,
  ScrollText,
  ArrowRight,
  Trophy,
  Target,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import HeroSection from "@/components/hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function LandingPage() {
  const features = [
    {
      icon: <BrainCircuit className="w-10 h-10 mb-4 text-primary" />,
      title: "AI-Powered Career Guidance",
      description:
        "Get personalized career advice and insights powered by advanced AI technology.",
    },
    {
      icon: <Briefcase className="w-10 h-10 mb-4 text-primary" />,
      title: "Interview Preparation",
      description:
        "Practice with role-specific questions and get instant feedback to improve your performance.",
    },
    {
      icon: <LineChart className="w-10 h-10 mb-4 text-primary" />,
      title: "Industry Insights",
      description:
        "Stay ahead with real-time industry trends, salary data, and market analysis.",
    },
    {
      icon: <ScrollText className="w-10 h-10 mb-4 text-primary" />,
      title: "Smart Resume Creation",
      description:
        "Generate ATS-optimized resumes and tailored cover letters with AI assistance.",
    },
  ];

  return (
    <div>
      <HeroSection />

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2
            style={{ color: "#EE82EE" }}
            className="text-3xl font-bold tracking-tighter text-center mb-12"
          >
            Powerful Features for Your Career Growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-colors duration-300"
              >
                <CardContent className="pt-6 text-center flex flex-col items-center">
                  <div
                    style={{ color: "#EE82EE" }}
                    className="flex flex-col items-center justify-center"
                  >
                    {feature.icon}
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p style={{ color: "#D8BFD8" }} className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              ["50+", "Industries Covered"],
              ["1000+", "Interview Questions"],
              ["95%", "Success Rate"],
              ["24/7", "AI Support"],
            ].map(([stat, label], i) => (
              <div key={i} className="flex flex-col items-center space-y-2">
                <h3 className="text-4xl font-bold" style={{ color: "#EE82EE" }}>
                  {stat}
                </h3>
                <p style={{ color: "#D8BFD8" }} className="text-muted-foreground">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 style={{ color: "#EE82EE" }} className="text-3xl font-bold mb-4">
              How It Works
            </h2>
            <p style={{ color: "#D8BFD8" }} className="text-muted-foreground">
              Four simple steps to accelerate your career growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              [Trophy, "Build Your Resume", "Create an ATS-optimized resume with AI assistance"],
              [Target, "Get AI Feedback", "Receive personalized suggestions and improvement tips"],
              [Sparkles, "Practice Interviews", "Prepare with AI-generated role-specific questions"],
              [CheckCircle2, "Track Progress", "Monitor your improvement with detailed analytics"],
            ].map(([Icon, title, desc], i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 style={{ color: "#EE82EE" }} className="font-semibold text-xl">
                  {title}
                </h3>
                <p style={{ color: "#D8BFD8" }} className="text-muted-foreground">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 style={{ color: "#EE82EE" }} className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote:
                  "The AI-powered interview prep was a game-changer. Landed my dream job at a top tech company!",
                author: "Sarah Chen",
                image: "https://randomuser.me/api/portraits/women/75.jpg",
                role: "Software Engineer",
                company: "Tech Giant Co.",
              },
              {
                quote:
                  "The industry insights helped me pivot my career successfully. The salary data was spot-on!",
                author: "Michael Rodriguez",
                image: "https://randomuser.me/api/portraits/men/75.jpg",
                role: "Product Manager",
                company: "StartUp Inc.",
              },
              {
                quote:
                  "My resume's ATS score improved significantly. Got more interviews in two weeks than in six months!",
                author: "Priya Patel",
                image: "https://randomuser.me/api/portraits/women/74.jpg",
                role: "Marketing Director",
                company: "Global Corp",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative h-12 w-12 flex-shrink-0">
                        <Image
                          width={40}
                          height={40}
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="rounded-full object-cover border-2 border-primary/20"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <p className="text-sm text-primary">{testimonial.company}</p>
                      </div>
                    </div>
                    <blockquote>
                      <p className="text-muted-foreground italic relative">
                        <span className="text-3xl text-primary absolute -top-4 -left-2">
                          &quot;
                        </span>
                        {testimonial.quote}
                        <span className="text-3xl text-primary absolute -bottom-4">
                          &quot;
                        </span>
                      </p>
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 style={{ color: "#EE82EE" }} className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p style={{ color: "#D8BFD8" }} className="text-muted-foreground">
              Find answers to common questions about our platform
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "How does the AI career guidance work?",
                  answer:
                    "Our AI analyzes your profile, skills, and career goals to provide personalized recommendations. It uses real-time industry data and proven career development frameworks to guide your professional growth.",
                },
                {
                  question: "Is my data secure?",
                  answer:
                    "Yes, we take data security seriously. All your personal and professional information is encrypted and stored securely. We never share your data with third parties without your explicit consent.",
                },
                {
                  question: "Can I cancel my subscription anytime?",
                  answer:
                    "Absolutely! You can cancel your subscription at any time. We offer a hassle-free cancellation process, and you'll continue to have access to your plan until the end of your billing period.",
                },
                {
                  question: "How accurate are the industry insights?",
                  answer:
                    "Our industry insights are drawn from real-time market data, trusted sources, and extensive analysis. We update our data weekly to ensure you have the most current information for your career decisions.",
                },
                {
                  question: "Do you offer refunds?",
                  answer:
                    "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service. No questions asked!",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger style={{ color: "#EE82EE" }} className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full">
        <div className="mx-auto py-24 gradient rounded-lg">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
              Ready to Accelerate Your Career?
            </h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
              Join thousands of professionals who are advancing their careers
              with AI-powered guidance.
            </p>
            <Link href="/sign-up" passHref>
              <Button
                size="lg"
                variant="secondary"
                className="h-11 mt-5 animate-bounce text-white"
                style={{ backgroundColor: "#720e9e" }}
              >
                Start Your Journey Today{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}