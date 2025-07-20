"use client";

import { useEffect, useState } from "react";
import { NotificationsIcon } from "../components/icons";

interface Notification {
  id: string;
  deviceId: string;
  deviceName: string;
  type: "alert" | "info" | "warning";
  level: number;
  statusSend: boolean;
  message: string;
  createdAt: string;
  resolvedAt?: string;
}

const NotificationsList = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  useEffect(() => {
    // Aqui você faria a chamada para sua API
    const fetchNotifications = async () => {
      try {
        // Simulação de dados
        await new Promise(resolve => setTimeout(resolve, 1000));
        const mockNotifications: Notification[] = [
          { id: "1", deviceId: "1", deviceName: "Caixa d'água - Residencial", type: "alert", level: 95, statusSend: true, message: "Nível crítico atingido. Risco de transbordamento.", createdAt: "30/10/2023 15:45:12", resolvedAt: "30/10/2023 16:30:05" },
          { id: "2", deviceId: "3", deviceName: "Cisterna - Industrial", type: "warning", level: 20, statusSend: true, message: "Nível baixo. Verificar abastecimento.", createdAt: "29/10/2023 09:12:45" },
          { id: "3", deviceId: "2", deviceName: "Reservatório - Comercial", type: "info", level: 50, statusSend: true, message: "Manutenção programada concluída com sucesso.", createdAt: "28/10/2023 14:30:00", resolvedAt: "28/10/2023 14:35:22" },
          { id: "4", deviceId: "5", deviceName: "Piscina - Clube", type: "alert", level: 10, statusSend: false, message: "Nível muito baixo. Verificar vazamentos.", createdAt: "27/10/2023 18:05:33" },
          { id: "5", deviceId: "4", deviceName: "Tanque - Fazenda", type: "warning", level: 30, statusSend: true, message: "Nível abaixo do ideal. Programar abastecimento.", createdAt: "26/10/2023 10:22:15", resolvedAt: "26/10/2023 12:45:17" },
        ];

        setNotifications(mockNotifications);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar notificações:", error);
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  // Filtrar notificações
  const filteredNotifications = notifications.filter(notification => {
    const matchesType = typeFilter === "all" || notification.type === typeFilter;
    const matchesStatus = statusFilter === "all" ||
      (statusFilter === "resolved" && notification.resolvedAt) ||
      (statusFilter === "pending" && !notification.resolvedAt);

    return matchesType && matchesStatus;
  });

  const getTypeStyles = (type: string) => {
    switch (type) {
      case "alert":
        return "bg-red-100 text-red-800";
      case "warning":
        return "bg-yellow-100 text-yellow-800";
      case "info":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "alert":
        return "Alerta";
      case "warning":
        return "Aviso";
      case "info":
        return "Informação";
      default:
        return type;
    }
  };

  const handleResolveNotification = (id: string) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id
          ? { ...notification, resolvedAt: new Date().toLocaleString("pt-BR") }
          : notification
      )
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="w-full md:w-1/4">
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Tipo de Notificação</label>
          <select
            id="type"
            name="type"
            className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="all">Todos os tipos</option>
            <option value="alert">Alertas</option>
            <option value="warning">Avisos</option>
            <option value="info">Informações</option>
          </select>
        </div>

        <div className="w-full md:w-1/4">
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            id="status"
            name="status"
            className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">Todos os status</option>
            <option value="pending">Pendentes</option>
            <option value="resolved">Resolvidos</option>
          </select>
        </div>

        <div className="w-full md:w-auto mt-4 md:mt-0 md:ml-auto flex items-end">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Criar Notificação
          </button>
        </div>
      </div>

      {filteredNotifications.length === 0 ? (
        <div className="text-center py-12">
          <NotificationsIcon />
          <h3 className="mt-2 text-sm font-medium text-gray-900">Nenhuma notificação encontrada</h3>
          <p className="mt-1 text-sm text-gray-500">Não há notificações que correspondam aos filtros selecionados.</p>
        </div>
      ) : (
        <div className="flow-root mt-6">
          <ul role="list" className="-my-5 divide-y divide-gray-200">
            {filteredNotifications.map((notification) => (
              <li key={notification.id} className="py-5">
                <div className="relative focus-within:ring-2 focus-within:ring-blue-500">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className={`${getTypeStyles(notification.type)} p-2 rounded-md`}>
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {notification.type === "alert" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          )}
                          {notification.type === "warning" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          )}
                          {notification.type === "info" && (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          )}
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          <span className="absolute inset-0" aria-hidden="true"></span>
                          {notification.deviceName} - <span className={getTypeStyles(notification.type)}>{getTypeLabel(notification.type)}</span>
                        </h3>
                        <div className="mt-1 text-sm text-gray-600 space-y-1">
                          <p>{notification.message}</p>
                          <p className="text-xs text-gray-500">
                            Nível: {notification.level}% | Enviado: {notification.statusSend ? "Sim" : "Não"}
                          </p>
                        </div>
                        <div className="mt-2 text-xs text-gray-500">
                          <span className="font-medium">Criado em:</span> {notification.createdAt}
                          {notification.resolvedAt && (
                            <span className="ml-4 font-medium">Resolvido em:</span>
                          )} {notification.resolvedAt}
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 self-start flex">
                      {!notification.resolvedAt && (
                        <button
                          type="button"
                          onClick={() => handleResolveNotification(notification.id)}
                          className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          <span className="px-2 py-1 text-xs font-medium text-blue-700 rounded-md bg-blue-100 hover:bg-blue-200">
                            Marcar como resolvido
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default function NotificationsPage() {
  return (
    <div>
      <div className="flex items-center mb-6">
        <div className="bg-yellow-100 p-2 rounded-lg mr-3">
          <NotificationsIcon />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Gerenciamento de Notificações</h1>
      </div>

      <NotificationsList />
    </div>
  );
} 