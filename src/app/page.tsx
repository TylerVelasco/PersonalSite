"use client";

import { useEffect, useState } from "react";
import Sidebar from "./sections/Sidebar";
import HomeSection from "./sections/HomeSection";
import SkillsSection from "./sections/SkillsSection";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";

export default function Home() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      setShowFooter(scrollPosition >= pageHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 space-y-8 ml-[1rem] md:ml-[1rem]">
        <section id="home" className="min-h-[100vh]">
          <HomeSection />
        </section>
        <section id="skills" className="min-h-[75vh]">
          <SkillsSection />
        </section>
        <section id="about" className="min-h-[75vh]">
          <AboutSection />
        </section>
        <section id="contact" className="min-h-[75vh]">
          <ContactSection />
        </section>
      </main>
      {/* Footer */}
      {showFooter && (
        <footer className="fixed bottom-0 left-0 w-full p-4 bg-gray-800 text-gray-200 text-center text-xl">
          <p>Hey you made it to the bottom. By the way did you find all 5 bugs?</p>
          <div className="relative group">
            <p className="cursor-pointer">Hover Me for a Hint</p>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex items-center bg-gray-700 text-white text-sm px-4 py-2 rounded shadow-lg">
              <ul className="text-left text-lg">
                <li>1. Sidebar: A Bug link</li>
                <li>2. My Profile</li>
                <li>3. About Section: Hover over &quot;bugs&quot;</li>
                <li>4. Contact Section: Popup after 5 clicks on Send Message</li>
                <li>5. Quality over Quantity</li>
              </ul>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
