"use client";

import { useEffect, useState } from "react";
import { SettingsIcon } from "../components/icons";

// Definição dos tipos
interface LogEntry {
  id: string;
  timestamp: string;
  level: "info" | "warning" | "error" | "debug";
  source: string;
  message: string;
  details?: string;
}

// Componente de filtros para os logs
const LogFilters = ({
  filters,
  onFilterChange,
  onClearLogs,
  onExportLogs,
}: {
  filters: {
    level: string;
    source: string;
    startDate: string;
    endDate: string;
    searchTerm: string;
  };
  onFilterChange: (name: string, value: string) => void;
  onClearLogs: () => void;
  onExportLogs: () => void;
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div>
          <label
            htmlFor="level"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nível
          </label>
          <select
            id="level"
            name="level"
            value={filters.level}
            onChange={(e) => onFilterChange("level", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Todos os níveis</option>
            <option value="info">Informação</option>
            <option value="warning">Aviso</option>
            <option value="error">Erro</option>
            <option value="debug">Debug</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="source"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Origem
          </label>
          <select
            id="source"
            name="source"
            value={filters.source}
            onChange={(e) => onFilterChange("source", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Todas as origens</option>
            <option value="api">API</option>
            <option value="auth">Autenticação</option>
            <option value="db">Banco de Dados</option>
            <option value="system">Sistema</option>
            <option value="device">Dispositivos</option>
          </select>
        </div>

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
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <label htmlFor="search" className="sr-only">
            Buscar
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              id="search"
              name="search"
              type="search"
              placeholder="Buscar mensagens de log"
              value={filters.searchTerm}
              onChange={(e) => onFilterChange("searchTerm", e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="flex space-x-2">
          <button
            type="button"
            onClick={onExportLogs}
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Exportar Logs
          </button>
          <button
            type="button"
            onClick={onClearLogs}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Limpar Logs
          </button>
        </div>
      </div>
    </div>
  );
};

// Função auxiliar para obter a classe de cor baseada no nível do log
const getLevelColor = (level: string) => {
  switch (level) {
    case "info":
      return "bg-blue-100 text-blue-800";
    case "warning":
      return "bg-yellow-100 text-yellow-800";
    case "error":
      return "bg-red-100 text-red-800";
    case "debug":
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

// Componente para exibir uma entrada de log
const LogEntry = ({ log }: { log: LogEntry }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-b border-gray-200 p-4 hover:bg-gray-50">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex flex-col md:flex-row md:items-center mb-2 md:mb-0">
          <div className="flex items-center mb-2 md:mb-0 md:mr-4">
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getLevelColor(log.level)}`}>
              {log.level.toUpperCase()}
            </span>
            <span className="ml-2 text-sm text-gray-600">
              {log.timestamp}
            </span>
          </div>
          <div className="font-medium text-gray-900">{log.source}</div>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-blue-600 hover:text-blue-800 md:ml-4"
        >
          {expanded ? "Ocultar detalhes" : "Ver detalhes"}
        </button>
      </div>
      <div className="mt-2 text-sm text-gray-700">{log.message}</div>
      {expanded && log.details && (
        <div className="mt-3 bg-gray-50 p-3 rounded-md border border-gray-200 overflow-auto">
          <pre className="text-xs text-gray-700 whitespace-pre-wrap">
            {log.details}
          </pre>
        </div>
      )}
    </div>
  );
};

// Página principal de logs do sistema
export default function SystemLogsPage() {
  // Estados
  const [loading, setLoading] = useState(true);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [filters, setFilters] = useState({
    level: "all",
    source: "all",
    startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0],
    endDate: new Date().toISOString().split("T")[0],
    searchTerm: "",
  });

  // Buscar logs (simulado)
  useEffect(() => {
    const fetchLogs = async () => {
      try {
        setLoading(true);

        // Simulação de chamada à API
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Dados simulados
        const mockLogs: LogEntry[] = [
          {
            id: "1",
            timestamp: "01/11/2023 08:15:22",
            level: "info",
            source: "auth",
            message: "Usuário autenticado com sucesso",
            details: "ID: user_123\nNome: João Silva\nIP: 192.168.1.100",
          },
          {
            id: "2",
            timestamp: "01/11/2023 10:23:45",
            level: "warning",
            source: "device",
            message: "Dispositivo com bateria baixa",
            details: "ID: DEV002\nBateria: 15%\nÚltima conexão: 01/11/2023 10:22:30",
          },
          {
            id: "3",
            timestamp: "01/11/2023 14:05:11",
            level: "error",
            source: "api",
            message: "Falha na requisição à API externa",
            details: "Endpoint: /api/external/weather\nStatusCode: 503\nMessage: Service Unavailable",
          },
          {
            id: "4",
            timestamp: "01/11/2023 15:30:20",
            level: "info",
            source: "system",
            message: "Backup automático iniciado",
            details: "ID: backup_2023110115\nArquivos: 156\nTamanho estimado: 2.3GB",
          },
          {
            id: "5",
            timestamp: "01/11/2023 15:42:18",
            level: "info",
            source: "system",
            message: "Backup automático concluído com sucesso",
            details: "ID: backup_2023110115\nArquivos: 156\nTamanho final: 2.1GB\nTempo de execução: 12min 58s",
          },
          {
            id: "6",
            timestamp: "01/11/2023 16:12:33",
            level: "debug",
            source: "db",
            message: "Otimização de consulta SQL",
            details: "Query ID: q_78912\nTempo antes: 1250ms\nTempo depois: 320ms\nMelhoria: 74.4%",
          },
          {
            id: "7",
            timestamp: "01/11/2023 17:05:10",
            level: "error",
            source: "device",
            message: "Falha na comunicação com dispositivo",
            details: "ID: DEV003\nÚltimo contato: 01/11/2023 08:30:15\nTentativas: 5",
          },
          {
            id: "8",
            timestamp: "01/11/2023 18:22:45",
            level: "warning",
            source: "system",
            message: "Uso elevado de CPU",
            details: "CPU: 89%\nMemória: 76%\nProcessos principais:\n- node: 45%\n- postgres: 25%",
          },
        ];

        setLogs(mockLogs);
      } catch (error) {
        console.error("Erro ao buscar logs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
  }, []);

  // Filtrar logs baseado nos filtros aplicados
  const filteredLogs = logs.filter((log) => {
    // Filtro por nível
    if (filters.level !== "all" && log.level !== filters.level) {
      return false;
    }

    // Filtro por origem
    if (filters.source !== "all" && log.source !== filters.source) {
      return false;
    }

    // Filtro por termo de busca
    if (
      filters.searchTerm &&
      !log.message.toLowerCase().includes(filters.searchTerm.toLowerCase()) &&
      !(
        log.details &&
        log.details.toLowerCase().includes(filters.searchTerm.toLowerCase())
      )
    ) {
      return false;
    }

    // Filtro por data
    const logDate = new Date(
      log.timestamp.split(" ")[0].split("/").reverse().join("-")
    );
    const startDate = new Date(filters.startDate);
    const endDate = new Date(filters.endDate);
    endDate.setHours(23, 59, 59, 999); // Fim do dia

    if (logDate < startDate || logDate > endDate) {
      return false;
    }

    return true;
  });

  // Manipulador de alteração de filtros
  const handleFilterChange = (name: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Limpar logs (simulado)
  const handleClearLogs = () => {
    if (window.confirm("Tem certeza que deseja limpar todos os logs?")) {
      // Em um caso real, isso chamaria uma API
      setLogs([]);
    }
  };

  // Exportar logs (simulado)
  const handleExportLogs = () => {
    // Em um caso real, isso geraria um download de arquivo
    alert("Os logs foram exportados com sucesso.");
  };

  return (
    <div>
      <div className="flex items-center mb-6">
        <div className="bg-gray-100 p-2 rounded-lg mr-3">
          <SettingsIcon />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Logs do Sistema</h1>
      </div>

      <LogFilters
        filters={filters}
        onFilterChange={handleFilterChange}
        onClearLogs={handleClearLogs}
        onExportLogs={handleExportLogs}
      />

      <div className="bg-white shadow-md rounded-lg">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : filteredLogs.length === 0 ? (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              Nenhum log encontrado
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Experimente ajustar seus filtros para ver mais resultados.
            </p>
          </div>
        ) : (
          <div className="overflow-hidden">
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <h3 className="text-sm font-medium text-gray-700">
                {filteredLogs.length} registros encontrados
              </h3>
            </div>
            <div className="divide-y divide-gray-200 max-h-[600px] overflow-y-auto">
              {filteredLogs.map((log) => (
                <LogEntry key={log.id} log={log} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 