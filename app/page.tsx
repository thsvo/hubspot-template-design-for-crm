/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle, Clock, Shield, Star, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HubSpotMeetings from "./HubSpot";
import Link from "next/link";

export default function CRMAuditLanding() {
  const heroRef = useRef(null);
  const painPointsRef = useRef(null);
  const featuresRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);
  const whyUsRef = useRef(null);
  const faqRef = useRef(null);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Pain points staggered animation
    gsap.fromTo(
      ".pain-point-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: painPointsRef.current,
          start: "top 80%",
        },
      }
    );

    // Features animation
    gsap.fromTo(
      ".feature-item",
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.15,
        duration: 0.6,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 75%",
        },
      }
    );

    // Testimonials animation
    gsap.fromTo(
      ".testimonial-card",
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.3,
        duration: 0.7,
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top 70%",
        },
      }
    );

    // Counter animation
    const counterElement = counterRef.current;
    if (counterElement) {
      ScrollTrigger.create({
        trigger: counterElement,
        start: "top 80%",
        onEnter: () => {
          let count = 0;
          const target = 600;
          const duration = 2;
          const interval = (duration * 1000) / target;

          const counter = setInterval(() => {
            count += 1;
            if (counterElement) {
              (counterElement as HTMLDivElement).textContent = count.toString();
            }
            if (count >= target) {
              clearInterval(counter);
            }
          }, interval);
        },
        once: true,
      });
    }

    // Other section animations
    const sections = [ctaRef, whyUsRef, faqRef];
    sections.forEach((section) => {
      gsap.fromTo(
        section.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: section.current,
            start: "top 80%",
          },
        }
      );
    });

    // Button hover animations
    gsap.utils.toArray(".cta-button").forEach((button) => {
      (button as HTMLElement).addEventListener("mouseenter", () => {
        gsap.to(button as HTMLElement, { scale: 1.05, duration: 0.3 });
      });
      (button as HTMLElement).addEventListener("mouseleave", () => {
        gsap.to(button as HTMLElement, { scale: 1, duration: 0.3 });
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-[#ff5c35] flex items-center justify-center text-white font-bold mr-2">
              CRM
            </div>
            <span className="font-bold text-xl">CRM Audit Pro</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="text-gray-600 hover:text-[#ff5c35] transition-colors"
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-[#ff5c35] transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#faq"
              className="text-gray-600 hover:text-[#ff5c35] transition-colors"
            >
              FAQ
            </a>
          </nav>
          <Link href="#hubspot-meetings">
            <Button className="cta-button bg-[#ff5c35] hover:bg-[#e54a25] text-white">
              Schedule Audit
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4" ref={heroRef}>
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                🚨 Is Your CRM Costing You Sales?{" "}
                <span className="text-[#ff5c35]">Transform It Today!</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                A broken CRM drains revenue through messy data, broken automations, and missed deals. Our audit uncovers these gaps and delivers a step-by-step plan to transform your CRM into a sales powerhouse—in just 48 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#hubspot-meetings">
                  <Button className="cta-button text-lg px-8 py-6 bg-[#ff5c35] hover:bg-[#e54a25] text-white">
                    👉 Start My Audit Now →
                  </Button>
                </Link>

                {/* <Button
                  className="cta-button text-lg px-8 py-6"
                  variant="outline"
                >
                  Learn More
                </Button> */}
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <div className="relative">
                <Image
                  src="https://plecto-website-2020.s3.amazonaws.com/images/Dashboard_-_Pipeline_CRM.max-1280x720.format-jpeg.jpg"
                  alt="CRM Dashboard"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-[#ff5c35] text-white font-bold py-2 px-4 rounded-full transform rotate-12">
                  Pro Audit
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <p className="text-xl text-gray-700 leading-relaxed">
            A streamlined CRM isn't just a tool—it's your sales team's
            competitive edge. Our expert audit uncovers hidden inefficiencies,
            resolves costly errors, and transforms your system into a
            revenue-driving powerhouse.
          </p>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20" ref={painPointsRef}>
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            📉 Is Your CRM Holding Back Your Sales?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Identify these critical issues before they cost you more revenue
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="pain-point-card border-red-100 shadow-lg">
              <CardContent className="p-8">
                <div className="text-red-500 text-4xl mb-4">❌</div>
                <h3 className="text-xl font-bold mb-3">Inaccurate Data</h3>
                <p className="text-gray-600">Missed follow-ups & lost leads.</p>
              </CardContent>
            </Card>

            <Card className="pain-point-card border-orange-100 shadow-lg">
              <CardContent className="p-8">
                <div className="text-orange-500 text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-bold mb-3">Broken Automations</h3>
                <p className="text-gray-600">Wasted time & leaked revenue.</p>
              </CardContent>
            </Card>

            <Card className="pain-point-card border-blue-100 shadow-lg">
              <CardContent className="p-8">
                <div className="text-blue-500 text-4xl mb-4">📉</div>
                <h3 className="text-xl font-bold mb-3">Underused Features</h3>
                <p className="text-gray-600">
                  Missed upsells & stagnant growth.
                </p>
              </CardContent>
            </Card>

            <Card className="pain-point-card border-purple-100 shadow-lg">
              <CardContent className="p-8">
                <div className="text-purple-500 text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3">Lost Opportunities</h3>
                <p className="text-gray-600">Competitors snag your deals.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-gray-50" id="features" ref={featuresRef}>
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Your Comprehensive CRM Audit Delivers
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Transform your CRM from a data repository into a sales-driving
            machine
          </p>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            <div className="feature-item flex">
              <div className="mr-4 text-[#ff5c35]">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Data Cleanup & Accuracy Review
                </h3>
                <p className="text-gray-600">
                  Eliminate errors that sabotage your deal flow.
                </p>
              </div>
            </div>

            <div className="feature-item flex">
              <div className="mr-4 text-[#ff5c35]">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Sales Process Optimization
                </h3>
                <p className="text-gray-600">
                  Slash bottlenecks and close deals 20% faster.
                </p>
              </div>
            </div>

            <div className="feature-item flex">
              <div className="mr-4 text-[#ff5c35]">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Marketing-Sales Alignment
                </h3>
                <p className="text-gray-600">
                  Sync teams for seamless revenue growth.
                </p>
              </div>
            </div>

            <div className="feature-item flex">
              <div className="mr-4 text-[#ff5c35]">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Automation Fixes</h3>
                <p className="text-gray-600">Fix workflows leaking leads.</p>
              </div>
            </div>

            <div className="feature-item flex">
              <div className="mr-4 text-[#ff5c35]">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Conversion Rate Boost
                </h3>
                <p className="text-gray-600">
                  Turn your CRM into a sales machine.
                </p>
              </div>
            </div>

            <div className="feature-item flex">
              <div className="mr-4 text-[#ff5c35]">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">KPI Benchmarking</h3>
                <p className="text-gray-600">
                  See how you stack up against competitors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Builders Section */}
      <section
        className="py-20 bg-white"
        id="testimonials"
        ref={testimonialsRef}
      >
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-center mb-16">
            <div className="mr-4">
              <Users className="h-10 w-10 text-[#ff5c35]" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">
                🔒 Trusted by <span ref={counterRef}>0</span>+ B2B Teams
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <Card className="testimonial-card shadow-lg">
              <CardContent className="p-8">
                <div className="flex text-yellow-400 mb-4">
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                </div>
                <p className="text-gray-700 mb-6">
                  "This audit uncovered $50K in missed revenue!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <p className="font-bold">SaaS Co. CEO</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="testimonial-card shadow-lg">
              <CardContent className="p-8">
                <div className="flex text-yellow-400 mb-4">
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                </div>
                <p className="text-gray-700 mb-6">
                  "Our CRM efficiency jumped 40% after their recommendations!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <p className="font-bold">Tech Startup CMO</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="testimonial-card shadow-lg">
              <CardContent className="p-8">
                <div className="flex text-yellow-400 mb-4">
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                </div>
                <p className="text-gray-700 mb-6">
                  "Closed deals 25% faster thanks to their automation fixes!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <p className="font-bold">eCommerce Sales Director</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="testimonial-card shadow-lg">
              <CardContent className="p-8">
                <div className="flex text-yellow-400 mb-4">
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                  <Star className="fill-current" />
                </div>
                <p className="text-gray-700 mb-6">
                  "Finally, our marketing and sales teams are aligned. Revenue
                  grew by 35%!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <p className="font-bold">B2B Marketing Manager</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#ff5c35] text-white" ref={ctaRef}>
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            🔥 Stop Letting Your CRM Sabotage Your Sales
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Act now to turn insights into action. Claim your audit today!
          </p>
          <Link href="#hubspot-meetings">
            <Button className="cta-button text-[#ff5c35] bg-white hover:bg-gray-100 text-lg px-8 py-6">
              <Clock className="mr-2 h-5 w-5" />
              🕒 Schedule My Audit →
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20" ref={whyUsRef}>
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="bg-[#fff2ee] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-[#ff5c35]" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                🏆 Certified CRM Experts
              </h3>
            </div>

            <div className="text-center">
              <div className="bg-[#fff2ee] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-[#ff5c35]" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                💼 100% Focused on B2B & Startups
              </h3>
            </div>

            <div className="text-center">
              <div className="bg-[#fff2ee] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-10 w-10 text-[#ff5c35]" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                📊 Actionable Insights in 48 Hours
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50" id="faq" ref={faqRef}>
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">
                ❓ What is a CRM Audit, and why do I need one?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                A CRM audit is a comprehensive review of your CRM system to identify inefficiencies, such as inaccurate data, broken automations, and underused features. It ensures your CRM is optimized to drive sales, improve workflows, and maximize revenue. If your CRM is costing you sales or wasting time, an audit is essential to transform it into a revenue-driving powerhouse.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">
                ❓ How long does the CRM audit process take?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                The audit process is fast and efficient. It starts with a 30-minute consultation call to understand your needs, followed by a detailed 48-hour analysis of your CRM system. You'll receive actionable insights and a step-by-step plan to optimize your CRM within 2 days.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">
                ❓ Is the CRM audit really free?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes, the CRM audit is completely complimentary with no obligations. We provide a detailed analysis and actionable recommendations at no cost to help you uncover hidden inefficiencies and boost your sales performance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">
                ❓ What specific issues does the CRM audit address?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Our audit covers:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Data Cleanup & Accuracy: Fix errors that sabotage your deal flow.</li>
                  <li>Sales Process Optimization: Slash bottlenecks and close deals 20% faster.</li>
                  <li>Marketing-Sales Alignment: Sync teams for seamless revenue growth.</li>
                  <li>Automation Fixes: Repair workflows leaking leads.</li>
                  <li>Conversion Rate Boost: Turn your CRM into a sales machine.</li>
                  <li>KPI Benchmarking: Compare your performance against competitors.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">
                ❓ How can a CRM audit help me close deals faster?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                By identifying and resolving bottlenecks in your sales process, optimizing automations, and ensuring accurate data, our audit helps streamline your CRM. This leads to faster follow-ups, improved lead management, and a 20% increase in deal-closing speed.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-medium">
                ❓ What kind of results can I expect from the audit?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Our clients have seen:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>$50K in uncovered missed revenue</li>
                  <li>40% improvement in CRM efficiency</li>
                  <li>25% faster deal closures</li>
                  <li>35% revenue growth from marketing-sales alignment</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg font-medium">
                ❓ Do you work with all types of CRMs?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes, our audit is platform-agnostic. Whether you use Salesforce, HubSpot, Zoho, or any other CRM, our certified experts can analyze and optimize your system to meet your business needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-lg font-medium">
                ❓ What happens after the audit?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                After the audit, you'll receive a detailed report with actionable recommendations. If you choose to move forward, our team can help implement the changes to transform your CRM into a sales powerhouse.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="text-lg font-medium">
                ❓ Is this service only for B2B companies?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                While we specialize in B2B and startups, our CRM audit is beneficial for any business looking to improve sales efficiency, streamline workflows, and maximize revenue.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="text-lg font-medium">
                ❓ How do I get started with my CRM audit?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Simply click the "Start My Audit Now" button or "Schedule My Audit" to book your 30-minute consultation. Our team will take care of the rest and deliver your results in 48 hours.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#ff5c35] to-[#ff7a5c] text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't Miss Out – Limited Availability!
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Our expert team only takes on a limited number of audits each month
            to ensure quality.
          </p>
          <Link href="#hubspot-meetings">
            <Button className="cta-button bg-white text-[#ff5c35] hover:bg-gray-100 text-lg px-10 py-6">
              👉 Start My Audit Now →
            </Button>
          </Link>
        </div>
      </section>
      <br />

      <div id="hubspot-meetings">

        <HubSpotMeetings />
      </div>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#ff5c35] flex items-center justify-center text-white font-bold mr-2">
                  CRM
                </div>
                <span className="font-bold text-xl">CRM Audit Pro</span>
              </div>
              <p className="mt-2 text-gray-400">Transforming CRMs into revenue engines</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h3 className="font-bold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Webinars
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Support
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} CRM Audit Pro. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
