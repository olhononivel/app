"use client";

import Link from "next/link";
import { useCallback, useEffect, useState, useTransition } from "react";
import { toast } from "react-toastify";
import { DevicesIcon } from "../components/icons";

interface Device {
  id: string;
  code: string;
  name: string;
  active: boolean;
  capacityTank: number;
  loraAddress: string;
  loraSerial: string;
  city: string;
  street: string;
  district: string;
  zipCode: string;
  number: string | null;
  complement: string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
}

const DeviceList = () => {
  const [isPending, startTransition] = useTransition();
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const page = 1;
  const limit = 30;

  // Função para buscar dispositivos com os filtros aplicados
  const fetchDevices = useCallback(async () => {
    setLoading(true);

    try {
      startTransition(async () => {
        // Preparar os parâmetros para a API
        const params = {
          page,
          limit,
          name: searchTerm,
          code: searchTerm,
          city: searchTerm,
          status: statusFilter === "active" ? true :
            statusFilter === "inactive" ? false :
              undefined
        };

        // Fazer a chamada para a API com os parâmetros
        const response = await fetch("/api/device/list-devices", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(params),
        });

        if (!response.ok) {
          throw new Error("Falha ao buscar dispositivos");
        }

        const responseData = await response.json();

        if (responseData.error) {
          toast.error(responseData.error);
          setLoading(false);
          return;
        }

        setDevices(responseData.data || []);
        setLoading(false);
      });
    } catch (error) {
      console.error("Erro ao buscar dispositivos:", error);
      toast.error("Não foi possível carregar os dispositivos. Tente novamente.");
      setLoading(false);
    }
  }, [page, limit, searchTerm, statusFilter]);

  // Carregar dispositivos quando os filtros mudarem
  useEffect(() => {
    // Definir um pequeno atraso para evitar múltiplas chamadas durante a digitação
    const delayDebounceFn = setTimeout(() => {
      fetchDevices();
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [fetchDevices]);

  if (loading || isPending) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="w-full md:w-1/3">
          <label htmlFor="search" className="sr-only">Buscar dispositivos</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              id="search"
              name="search"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
              placeholder="Buscar por nome, código ou cidade"
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="w-full md:w-1/4">
          <label htmlFor="status" className="sr-only">Filtrar por status</label>
          <select
            id="status"
            name="status"
            className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">Todos os status</option>
            <option value="active">Ativos</option>
            <option value="inactive">Inativos</option>
          </select>
        </div>

        <Link
          href="/dashboard/devices/add"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Adicionar Dispositivo
        </Link>
      </div>

      {devices.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 mb-4">Nenhum dispositivo encontrado</p>
          <Link
            href="/dashboard/devices/add"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Adicionar novo dispositivo
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nome
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Código
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Capacidade
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Localização
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Última Atualização
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {devices.map((device) => (
                <tr key={device.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{device.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{device.code}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${device.active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}>
                      {device.active ? "Ativo" : "Inativo"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {device.capacityTank.toLocaleString("pt-BR")} L
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{device.city}</div>
                    <div className="text-xs text-gray-500">{device.street}, {device.district}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {typeof device.createdAt === 'string'
                      ? device.createdAt
                      : new Date(device.createdAt).toLocaleDateString('pt-BR')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default function DevicesPage() {
  return (
    <div>
      <div className="flex items-center mb-6">
        <div className="bg-green-100 p-2 rounded-lg mr-3">
          <DevicesIcon />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Gerenciamento de Dispositivos</h1>
      </div>

      <DeviceList />
    </div>
  );
} 