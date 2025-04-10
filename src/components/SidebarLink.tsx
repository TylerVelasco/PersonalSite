"use client";

import { ReactNode } from "react";

interface SidebarLinkProps {
  href: string;
  isCollapsed: boolean;
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  hiddenByDefault?: boolean;
}

export default function SidebarLink({
  href,
  isCollapsed,
  icon,
  label,
  onClick,
  hiddenByDefault = false,
}: SidebarLinkProps) {
  return (
    <a
      href={href}
      className={`flex items-center ${
        isCollapsed ? "justify-center" : "justify-start"
      } p-3 rounded-lg text-gray-200 hover:bg-gray-700 ${
        hiddenByDefault ? "hidden group-hover:flex" : ""
      }`}
      onClick={onClick}
    >
      <span className="flex-none text-gray-200">{icon}</span>
      {!isCollapsed && <span className="ml-3 text-gray-200 text-3xl">{label}</span>}
    </a>
  );
}
