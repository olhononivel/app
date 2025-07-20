"use client";

import { useState } from "react";
import { DashboardIcon } from "../components/icons";

// Tipos de dados para os relatórios
interface ReportFilter {
  startDate: string;
  endDate: string;
  deviceIds: string[];
  reportType: "daily" | "weekly" | "monthly";
  metrics: ("waterLevel" | "alerts" | "consumption")[];
}

interface DeviceOption {
  id: string;
  name: string;
  code: string;
}

// Componente de filtros para relatórios
const ReportFilters = ({
  filters,
  devices,
  onFilterChange,
  onGenerateReport,
}: {
  filters: ReportFilter;
  devices: DeviceOption[];
  onFilterChange: (name: string, value: string | string[] | "daily" | "weekly" | "monthly") => void;
  onGenerateReport: () => void;
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Filtros de Relatório
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="startDate"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Data Inicial
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={filters.startDate}
            onChange={(e) => onFilterChange("startDate", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="endDate"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Data Final
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={filters.endDate}
            onChange={(e) => onFilterChange("endDate", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="reportType"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Tipo de Relatório
          </label>
          <select
            id="reportType"
            name="reportType"
            value={filters.reportType}
            onChange={(e) =>
              onFilterChange("reportType", e.target.value)
            }
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="daily">Diário</option>
            <option value="weekly">Semanal</option>
            <option value="monthly">Mensal</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="devices"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Dispositivos
          </label>
          <select
            id="devices"
            name="devices"
            multiple
            value={filters.deviceIds}
            onChange={(e) => {
              const selectedOptions = Array.from(
                e.target.selectedOptions,
                (option) => option.value
              );
              onFilterChange("deviceIds", selectedOptions);
            }}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
          >
            {devices.map((device) => (
              <option key={device.id} value={device.id}>
                {device.name} ({device.code})
              </option>
            ))}
          </select>
        </div>

        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Métricas
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="waterLevel"
                name="metrics"
                value="waterLevel"
                checked={filters.metrics.includes("waterLevel")}
                onChange={(e) => {
                  const newMetrics = e.target.checked
                    ? [...filters.metrics, "waterLevel"]
                    : filters.metrics.filter((m) => m !== "waterLevel");
                  onFilterChange("metrics", newMetrics);
                }}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="waterLevel"
                className="ml-2 block text-sm text-gray-700"
              >
                Nível de Água
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="alerts"
                name="metrics"
                value="alerts"
                checked={filters.metrics.includes("alerts")}
                onChange={(e) => {
                  const newMetrics = e.target.checked
                    ? [...filters.metrics, "alerts"]
                    : filters.metrics.filter((m) => m !== "alerts");
                  onFilterChange("metrics", newMetrics);
                }}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="alerts"
                className="ml-2 block text-sm text-gray-700"
              >
                Alertas
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="consumption"
                name="metrics"
                value="consumption"
                checked={filters.metrics.includes("consumption")}
                onChange={(e) => {
                  const newMetrics = e.target.checked
                    ? [...filters.metrics, "consumption"]
                    : filters.metrics.filter((m) => m !== "consumption");
                  onFilterChange("metrics", newMetrics);
                }}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="consumption"
                className="ml-2 block text-sm text-gray-700"
              >
                Consumo
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="button"
          onClick={onGenerateReport}
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Gerar Relatório
        </button>
      </div>
    </div>
  );
};

// Componente para exibir um relatório
const ReportPreview = ({ loading }: { loading: boolean }) => {
  if (loading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md flex justify-center items-center h-80">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Visualização do Relatório
        </h2>
        <div className="flex space-x-2">
          <button
            type="button"
            className="px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Imprimir
          </button>
          <button
            type="button"
            className="px-3 py-1.5 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Exportar PDF
          </button>
          <button
            type="button"
            className="px-3 py-1.5 border border-transparent rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Exportar CSV
          </button>
        </div>
      </div>

      <div className="border rounded-md p-4 bg-gray-50 mb-4">
        <h3 className="text-sm font-medium text-gray-700 mb-2">
          Resumo do Relatório
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-3 rounded-md border border-gray-200">
            <div className="text-xs text-gray-500">Total de Dispositivos</div>
            <div className="text-xl font-semibold text-gray-800">5</div>
          </div>
          <div className="bg-white p-3 rounded-md border border-gray-200">
            <div className="text-xs text-gray-500">Média de Nível</div>
            <div className="text-xl font-semibold text-gray-800">65%</div>
          </div>
          <div className="bg-white p-3 rounded-md border border-gray-200">
            <div className="text-xs text-gray-500">Total de Alertas</div>
            <div className="text-xl font-semibold text-gray-800">12</div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Dispositivo
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Nível Médio
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Alertas
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Consumo
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Caixa dágua - Residencial (DEV001)
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                72%
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                3
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                450L
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Reservatório - Comercial (DEV002)
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                58%
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                2
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                2.100L
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Cisterna - Industrial (DEV003)
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                42%
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                5
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                4.800L
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Tanque - Fazenda (DEV004)
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                85%
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                0
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                3.200L
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Piscina - Clube (DEV005)
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                68%
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                2
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                12.500L
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default function ReportsPage() {
  // Estado para os filtros do relatório
  const [filters, setFilters] = useState<ReportFilter>({
    startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0],
    endDate: new Date().toISOString().split("T")[0],
    deviceIds: [],
    reportType: "daily",
    metrics: ["waterLevel", "alerts", "consumption"],
  });

  // Estado para controlar o carregamento do relatório
  const [loading, setLoading] = useState(false);
  const [reportGenerated, setReportGenerated] = useState(false);

  // Dados simulados de dispositivos
  const devices: DeviceOption[] = [
    { id: "1", name: "Caixa d'água - Residencial", code: "DEV001" },
    { id: "2", name: "Reservatório - Comercial", code: "DEV002" },
    { id: "3", name: "Cisterna - Industrial", code: "DEV003" },
    { id: "4", name: "Tanque - Fazenda", code: "DEV004" },
    { id: "5", name: "Piscina - Clube", code: "DEV005" },
  ];

  // Função para atualizar filtros
  const handleFilterChange = (name: string, value: string | string[] | "daily" | "weekly" | "monthly") => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Função para gerar o relatório
  const handleGenerateReport = async () => {
    setLoading(true);
    setReportGenerated(false);

    try {
      // Simulação de chamada à API
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setReportGenerated(true);
    } catch (error) {
      console.error("Erro ao gerar relatório:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex items-center mb-6">
        <div className="bg-indigo-100 p-2 rounded-lg mr-3">
          <DashboardIcon />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">
          Relatórios
        </h1>
      </div>

      <ReportFilters
        filters={filters}
        devices={devices}
        onFilterChange={handleFilterChange}
        onGenerateReport={handleGenerateReport}
      />

      {(loading || reportGenerated) && <ReportPreview loading={loading} />}
    </div>
  );
} 