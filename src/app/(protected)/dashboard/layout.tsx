"use client";

import { useSession } from "@/contexts/sessionContext";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import defaultAvatar from "../../../../public/images/default-avatar.svg";
import {
  AddDeviceIcon,
  DashboardIcon,
  DevicesIcon,
  LogsIcon,
  NotificationsIcon,
  ReportsIcon,
  SettingsIcon,
  UsersIcon
} from "./components/icons";

interface DashboardLayoutProps {
  children: ReactNode;
}

// Componentes para a Sidebar
interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const SidebarItem = ({ href, icon, label, active }: SidebarItemProps) => {
  return (
    <Link
      href={href}
      className={`flex items-center px-4 py-3 ${active
        ? "bg-blue-100 text-blue-700"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-700"
        } rounded-lg transition-colors duration-200`}
    >
      <span className="mr-3">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
};


// Layout do Dashboard
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const session = useSession();
  const user = session?.user;

  // Redirecionar se não for admin
  if (user && user.role !== "ADMIN") {
    redirect("/home");
  }

  // Menu lateral
  const menuItems = [
    { href: "/dashboard", icon: <DashboardIcon />, label: "Dashboard", active: false },
    { href: "/dashboard/users", icon: <UsersIcon />, label: "Usuários", active: false },
    { href: "/dashboard/devices", icon: <DevicesIcon />, label: "Dispositivos", active: false },
    { href: "/dashboard/notifications", icon: <NotificationsIcon />, label: "Notificações", active: false },
    { href: "/dashboard/reports", icon: <ReportsIcon />, label: "Relatórios", active: false },
    { href: "/dashboard/system-logs", icon: <LogsIcon />, label: "Logs do Sistema", active: false },
    { href: "/dashboard/settings", icon: <SettingsIcon />, label: "Configurações", active: false },
    { href: "/dashboard/addDevice", icon: <AddDeviceIcon />, label: "Adicionar Dispositivo", active: false },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 hidden md:block bg-white shadow-md">
        <div className="p-6">
          <Link href="/dashboard" className="text-xl font-bold text-gray-800">
            Olho no Nível
          </Link>
          <p className="text-sm text-gray-500 mt-1">Painel Administrativo</p>
        </div>

        {/* Perfil do usuário */}
        <div className="px-6 py-4 border-t border-gray-100">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={user?.image || defaultAvatar}
                alt="Avatar do usuário"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-800">{user?.name}</p>
              <p className="text-xs text-gray-500">Administrador</p>
            </div>
          </div>
        </div>

        {/* Menu da sidebar */}
        <nav className="mt-4 px-4 space-y-2">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.label}
              active={item.active}
            />
          ))}
        </nav>

        {/* Footer da sidebar */}
        <div className="px-6 py-4 mt-auto border-t border-gray-100">
          <Link
            href="/home"
            className="flex items-center text-sm text-gray-600 hover:text-gray-800 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Voltar para o App
          </Link>
        </div>
      </aside>

      {/* Conteúdo principal */}
      <div className="flex-1 overflow-auto">
        {/* Cabeçalho do conteúdo */}
        <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between md:hidden">
          <Link href="/dashboard" className="text-xl font-bold text-gray-800">
            Olho no Nível
          </Link>
          <button className="p-1 rounded-md hover:bg-gray-100">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </header>

        {/* Conteúdo da página */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
} 