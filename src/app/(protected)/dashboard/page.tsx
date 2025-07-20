"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import DashboardCard from "./components/dashboard-card";
import { ActiveDevicesIcon, AlertsIcon, DevicesIcon, UsersIcon } from "./components/icons";

interface TableData {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
}

interface DeviceTableData {
  id: string;
  name: string;
  code: string;
  active: boolean;
  city: string;
  createdAt: string;
}

// Componente da tabela de usuários
const UsersTable = ({ data }: { data: TableData[] }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md">
      <table className="w-full bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
            <th className="py-3 px-6 text-left">Nome</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Função</th>
            <th className="py-3 px-6 text-left">Data de Registro</th>
            <th className="py-3 px-6 text-left">Ações</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm">
          {data.map((user) => (
            <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">{user.name}</td>
              <td className="py-3 px-6 text-left">{user.email}</td>
              <td className="py-3 px-6 text-left">
                <span className={`py-1 px-3 rounded-full text-xs ${user.role === "ADMIN" ? "bg-purple-200 text-purple-700" : "bg-green-200 text-green-700"}`}>
                  {user.role}
                </span>
              </td>
              <td className="py-3 px-6 text-left">{user.createdAt}</td>
              <td className="py-3 px-6 text-left">
                <div className="flex items-center space-x-3">
                  <button className="text-blue-500 hover:text-blue-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                    </svg>
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Componente da tabela de dispositivos
const DevicesTable = ({ data }: { data: DeviceTableData[] }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-md">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
            <th className="py-3 px-6 text-left">Nome</th>
            <th className="py-3 px-6 text-left">Código</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-left">Cidade</th>
            <th className="py-3 px-6 text-left">Data de Adição</th>
            <th className="py-3 px-6 text-left">Ações</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm">
          {data.map((device) => (
            <tr key={device.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">{device.name}</td>
              <td className="py-3 px-6 text-left">{device.code}</td>
              <td className="py-3 px-6 text-left">
                <span className={`py-1 px-3 rounded-full text-xs ${device.active ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"}`}>
                  {device.active ? "Ativo" : "Inativo"}
                </span>
              </td>
              <td className="py-3 px-6 text-left">{device.city}</td>
              <td className="py-3 px-6 text-left">{device.createdAt}</td>
              <td className="py-3 px-6 text-left">
                <div className="flex items-center space-x-3">
                  <button className="text-blue-500 hover:text-blue-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                    </svg>
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Página do Dashboard
export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalDevices: 0,
    activeDevices: 0,
    pendingAlerts: 0
  });

  const [users, setUsers] = useState<TableData[]>([]);
  const [devices, setDevices] = useState<DeviceTableData[]>([]);

  // Carregar dados
  useEffect(() => {
    // Aqui iríamos fazer chamadas à API para buscar os dados reais
    // Como é apenas um exemplo, vamos usar dados fictícios
    const fetchData = async () => {
      // Simulação de carregamento
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Dados simulados
      setStats({
        totalUsers: 152,
        totalDevices: 87,
        activeDevices: 64,
        pendingAlerts: 12
      });

      setUsers([
        { id: "1", name: "João Silva", email: "joao@exemplo.com", role: "USER", createdAt: "12/05/2023" },
        { id: "2", name: "Maria Souza", email: "maria@exemplo.com", role: "ADMIN", createdAt: "03/02/2023" },
        { id: "3", name: "Carlos Ferreira", email: "carlos@exemplo.com", role: "USER", createdAt: "22/07/2023" },
        { id: "4", name: "Ana Oliveira", email: "ana@exemplo.com", role: "USER", createdAt: "15/09/2023" },
        { id: "5", name: "Pedro Santos", email: "pedro@exemplo.com", role: "USER", createdAt: "30/10/2023" },
      ]);

      setDevices([
        { id: "1", name: "Caixa d'água - Residencial", code: "DEV001", active: true, city: "São Paulo", createdAt: "10/01/2023" },
        { id: "2", name: "Reservatório - Comercial", code: "DEV002", active: true, city: "Rio de Janeiro", createdAt: "05/03/2023" },
        { id: "3", name: "Cisterna - Industrial", code: "DEV003", active: false, city: "Belo Horizonte", createdAt: "12/04/2023" },
        { id: "4", name: "Tanque - Fazenda", code: "DEV004", active: true, city: "Goiânia", createdAt: "22/05/2023" },
        { id: "5", name: "Piscina - Clube", code: "DEV005", active: false, city: "Brasília", createdAt: "17/06/2023" },
      ]);

      setLoading(false);
    };

    fetchData();
  }, []);

  // Mostrar loading enquanto carrega
  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Visão Geral</h1>

      {/* Cards de estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard
          title="Total de Usuários"
          value={stats.totalUsers}
          icon={<UsersIcon />}
          color="blue"
        />
        <DashboardCard
          title="Total de Dispositivos"
          value={stats.totalDevices}
          icon={<DevicesIcon />}
          color="green"
        />
        <DashboardCard
          title="Dispositivos Ativos"
          value={stats.activeDevices}
          icon={<ActiveDevicesIcon />}
          color="purple"
          description={`${Math.round((stats.activeDevices / stats.totalDevices) * 100)}% do total`}
        />
        <DashboardCard
          title="Alertas Pendentes"
          value={stats.pendingAlerts}
          icon={<AlertsIcon />}
          color="red"
        />
      </div>

      {/* Seção de Usuários */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Usuários Recentes</h2>
          <Link href="/dashboard/users" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Ver Todos
          </Link>
        </div>
        <UsersTable data={users} />
      </div>

      {/* Seção de Dispositivos */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Dispositivos Recentes</h2>
          <Link href="/dashboard/devices" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
            Ver Todos
          </Link>
        </div>
        <DevicesTable data={devices} />
      </div>
    </div>
  );
} 