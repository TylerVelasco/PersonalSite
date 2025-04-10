"use client";

import { useState } from "react";
import { House, User, Briefcase, Envelope, Bug, List } from "@phosphor-icons/react";
import SidebarLink from "../../components/SidebarLink";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="flex">
      {/* Hamburger Menu Button */}
      {!isMobileMenuOpen && (
        <button
          className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-gray-200 rounded-lg md:hidden"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <List size={36} />
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`group fixed top-0 left-0 min-h-screen bg-gray-800 text-gray-200 shadow-xl transition-transform duration-300 z-40 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 ${
          isCollapsed ? "w-24" : "max-w-[20rem]"
        } flex flex-col items-center p-4 overflow-y-auto`}
      >
        <nav className="flex flex-col gap-2 w-full">
          <SidebarLink
            href="#home"
            isCollapsed={isCollapsed}
            icon={<House size={36} className="flex-none" />}
            label="Home"
            onClick={handleLinkClick}
          />
          <SidebarLink
            href="#skills"
            isCollapsed={isCollapsed}
            icon={<Briefcase size={36} className="flex-none" />}
            label="Skills"
            onClick={handleLinkClick}
          />
          <SidebarLink
            href="#about"
            isCollapsed={isCollapsed}
            icon={<User size={36} className="flex-none" />}
            label="About Me"
            onClick={handleLinkClick}
          />
          <SidebarLink
            href="#contact"
            isCollapsed={isCollapsed}
            icon={<Envelope size={36} className="flex-none" />}
            label="Contact"
            onClick={handleLinkClick}
          />
          <SidebarLink
            href="#home"
            isCollapsed={isCollapsed}
            icon={<Bug size={36} className="flex-none group-hover:text-gray-200" />}
            label="A Bug"
            onClick={handleLinkClick}
            hiddenByDefault={true}
          />
        </nav>
        <button
          className="mb-4 p-2 bg-gray-700 rounded-lg hover:bg-gray-600 text-lg"
          onClick={() => {
            setIsCollapsed(!isCollapsed);
            if (isMobileMenuOpen) {
              setIsMobileMenuOpen(false);
            }
          }}
        >
          {isCollapsed ? "→" : "←"}
        </button>
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1 transition-all duration-300 ${
          isMobileMenuOpen ? "ml-0" : isCollapsed ? "md:ml-24" : "md:ml-[15rem]"
        }`}
      >
        {/* Overlay for Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-opacity-50 z-30 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}
      </main>
    </div>
  );
}
