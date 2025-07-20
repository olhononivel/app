"use client";

import Image from 'next/image';
import { ReactNode, useState } from 'react';

interface SidebarItemProps {
  href: string;
  icon: ReactNode;
  label: string;
}

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className={`fixed flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r dark:bg-gray-900 dark:border-gray-700 transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
    >
      {/* Logo */}
      <a href="#" className="mx-auto">
        <Image
          className="w-auto h-6 sm:h-7"
          src="https://merakiui.com/images/full-logo.svg"
          alt="Logo"
          width={120}
          height={28}
        />
      </a>

      {/* User Info */}
      <div className="flex flex-col items-center mt-6 -mx-2">
        <Image
          className="object-cover w-24 h-24 mx-2 rounded-full"
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt="User avatar"
          width={96}
          height={96}
        />
        <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">John Doe</h4>
        <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">john@example.com</p>
      </div>

      {/* Navigation */}
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <SidebarItem href="#" icon={<DashboardIcon />} label="Dashboard" />
          <SidebarItem href="#" icon={<AccountIcon />} label="Accounts" />
          <SidebarItem href="#" icon={<TicketsIcon />} label="Tickets" />
          <SidebarItem href="#" icon={<SettingsIcon />} label="Settings" />
        </nav>
      </div>

      {/* Mobile Menu Icon */}
      <button
        className="absolute top-4 right-4 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuIcon />
      </button>
    </aside>
  );
}

function SidebarItem({ href, icon, label }: SidebarItemProps) {
  return (
    <a
      className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
      href={href}
    >
      {icon}
      <span className="mx-4 font-medium">{label}</span>
    </a>
  );
}

function MenuIcon() {
  return (
    <svg
      className="w-6 h-6 text-gray-800 dark:text-gray-200"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

// Ícones específicos
function DashboardIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AccountIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Continue com ícones para Tickets e Settings da mesma forma
function TicketsIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 21C6.47715 21 2 16.5228 2 11V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V11C22 16.5228 17.5228 21 12 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17V13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 9H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.5 21H7.5C6.67157 21 6 20.3284 6 19.5V4.5C6 3.67157 6.67157 3 7.5 3H16.5C17.3284 3 18 3.67157 18 4.5V19.5C18 20.3284 17.3284 21 16.5 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 9V12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15H12.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Sidebar;
