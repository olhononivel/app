"use client";

import { useState } from "react";
import { SettingsIcon } from "../components/icons";

// Interface para os tipos de configurações
interface SystemSettings {
  alertThresholds: {
    criticalLevelLow: number;
    criticalLevelHigh: number;
    warningLevelLow: number;
    warningLevelHigh: number;
  };
  monitoringIntervals: {
    dataCollectionInterval: number;
    systemCheckInterval: number;
  };
  notificationPreferences: {
    emailNotifications: boolean;
    pushNotifications: boolean;
    smsNotifications: boolean;
    dailySummary: boolean;
  };
  maintenanceSettings: {
    autoBackup: boolean;
    backupInterval: number;
    dataRetentionDays: number;
  };
}

// Componente para configurações de alertas
const AlertThresholds = ({
  settings,
  updateSettings,
}: {
  settings: SystemSettings["alertThresholds"];
  updateSettings: (
    category: "alertThresholds",
    newSettings: SystemSettings["alertThresholds"]
  ) => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateSettings("alertThresholds", {
      ...settings,
      [name]: parseInt(value),
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Limites de Alerta
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="criticalLevelLow"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nível Crítico Baixo (%)
          </label>
          <input
            type="number"
            id="criticalLevelLow"
            name="criticalLevelLow"
            value={settings.criticalLevelLow}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
            max="100"
          />
        </div>
        <div>
          <label
            htmlFor="criticalLevelHigh"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nível Crítico Alto (%)
          </label>
          <input
            type="number"
            id="criticalLevelHigh"
            name="criticalLevelHigh"
            value={settings.criticalLevelHigh}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
            max="100"
          />
        </div>
        <div>
          <label
            htmlFor="warningLevelLow"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nível Alerta Baixo (%)
          </label>
          <input
            type="number"
            id="warningLevelLow"
            name="warningLevelLow"
            value={settings.warningLevelLow}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
            max="100"
          />
        </div>
        <div>
          <label
            htmlFor="warningLevelHigh"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nível Alerta Alto (%)
          </label>
          <input
            type="number"
            id="warningLevelHigh"
            name="warningLevelHigh"
            value={settings.warningLevelHigh}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
            max="100"
          />
        </div>
      </div>
    </div>
  );
};

// Componente para configurações de monitoramento
const MonitoringIntervals = ({
  settings,
  updateSettings,
}: {
  settings: SystemSettings["monitoringIntervals"];
  updateSettings: (
    category: "monitoringIntervals",
    newSettings: SystemSettings["monitoringIntervals"]
  ) => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateSettings("monitoringIntervals", {
      ...settings,
      [name]: parseInt(value),
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Intervalos de Monitoramento
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="dataCollectionInterval"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Intervalo de Coleta de Dados (minutos)
          </label>
          <input
            type="number"
            id="dataCollectionInterval"
            name="dataCollectionInterval"
            value={settings.dataCollectionInterval}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="1"
          />
        </div>
        <div>
          <label
            htmlFor="systemCheckInterval"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Intervalo de Verificação do Sistema (minutos)
          </label>
          <input
            type="number"
            id="systemCheckInterval"
            name="systemCheckInterval"
            value={settings.systemCheckInterval}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="1"
          />
        </div>
      </div>
    </div>
  );
};

// Componente para configurações de notificações
const NotificationPreferences = ({
  settings,
  updateSettings,
}: {
  settings: SystemSettings["notificationPreferences"];
  updateSettings: (
    category: "notificationPreferences",
    newSettings: SystemSettings["notificationPreferences"]
  ) => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    updateSettings("notificationPreferences", {
      ...settings,
      [name]: checked,
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Preferências de Notificação
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="emailNotifications"
            name="emailNotifications"
            checked={settings.emailNotifications}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label
            htmlFor="emailNotifications"
            className="ml-2 block text-sm text-gray-700"
          >
            Notificações por Email
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="pushNotifications"
            name="pushNotifications"
            checked={settings.pushNotifications}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label
            htmlFor="pushNotifications"
            className="ml-2 block text-sm text-gray-700"
          >
            Notificações Push
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="smsNotifications"
            name="smsNotifications"
            checked={settings.smsNotifications}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label
            htmlFor="smsNotifications"
            className="ml-2 block text-sm text-gray-700"
          >
            Notificações SMS
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="dailySummary"
            name="dailySummary"
            checked={settings.dailySummary}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label
            htmlFor="dailySummary"
            className="ml-2 block text-sm text-gray-700"
          >
            Resumo Diário
          </label>
        </div>
      </div>
    </div>
  );
};

// Componente para configurações de manutenção
const MaintenanceSettings = ({
  settings,
  updateSettings,
}: {
  settings: SystemSettings["maintenanceSettings"];
  updateSettings: (
    category: "maintenanceSettings",
    newSettings: SystemSettings["maintenanceSettings"]
  ) => void;
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const newValue = type === "checkbox" ? (e.target as HTMLInputElement).checked : parseInt(value);

    updateSettings("maintenanceSettings", {
      ...settings,
      [name]: newValue,
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Configurações de Manutenção
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="autoBackup"
            name="autoBackup"
            checked={settings.autoBackup}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label
            htmlFor="autoBackup"
            className="ml-2 block text-sm text-gray-700"
          >
            Backup Automático
          </label>
        </div>
        <div>
          <label
            htmlFor="backupInterval"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Intervalo de Backup (horas)
          </label>
          <input
            type="number"
            id="backupInterval"
            name="backupInterval"
            value={settings.backupInterval}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="1"
            disabled={!settings.autoBackup}
          />
        </div>
        <div>
          <label
            htmlFor="dataRetentionDays"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Retenção de Dados (dias)
          </label>
          <input
            type="number"
            id="dataRetentionDays"
            name="dataRetentionDays"
            value={settings.dataRetentionDays}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="1"
          />
        </div>
      </div>
    </div>
  );
};

export default function SettingsPage() {
  // Configurações iniciais (simula dados do backend)
  const [settings, setSettings] = useState<SystemSettings>({
    alertThresholds: {
      criticalLevelLow: 10,
      criticalLevelHigh: 90,
      warningLevelLow: 20,
      warningLevelHigh: 80,
    },
    monitoringIntervals: {
      dataCollectionInterval: 5,
      systemCheckInterval: 15,
    },
    notificationPreferences: {
      emailNotifications: true,
      pushNotifications: true,
      smsNotifications: false,
      dailySummary: true,
    },
    maintenanceSettings: {
      autoBackup: true,
      backupInterval: 24,
      dataRetentionDays: 90,
    },
  });

  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  // Função para atualizar configurações
  const updateSettings = <T extends keyof SystemSettings>(
    category: T,
    newSettings: SystemSettings[T]
  ) => {
    setSettings({
      ...settings,
      [category]: newSettings,
    });
  };

  // Função para salvar configurações (simula chamada API)
  const saveSettings = async () => {
    setIsSaving(true);
    setSaveMessage(null);

    try {
      // Simulação de chamada à API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simula sucesso
      setSaveMessage({
        message: "Configurações salvas com sucesso!",
        type: "success",
      });
    } catch (error) {
      console.error("Erro ao salvar configurações:", error);
      setSaveMessage({
        message: "Erro ao salvar configurações. Tente novamente.",
        type: "error",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div>
      <div className="flex items-center mb-6">
        <div className="bg-blue-100 p-2 rounded-lg mr-3">
          <SettingsIcon />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">
          Configurações do Sistema
        </h1>
      </div>

      {saveMessage && (
        <div
          className={`mb-6 p-4 rounded-md ${saveMessage.type === "success"
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-800"
            }`}
        >
          {saveMessage.message}
        </div>
      )}

      <AlertThresholds
        settings={settings.alertThresholds}
        updateSettings={updateSettings}
      />

      <MonitoringIntervals
        settings={settings.monitoringIntervals}
        updateSettings={updateSettings}
      />

      <NotificationPreferences
        settings={settings.notificationPreferences}
        updateSettings={updateSettings}
      />

      <MaintenanceSettings
        settings={settings.maintenanceSettings}
        updateSettings={updateSettings}
      />

      <div className="flex justify-end mt-6">
        <button
          type="button"
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-3"
        >
          Cancelar
        </button>
        <button
          type="button"
          className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isSaving ? "opacity-75 cursor-not-allowed" : ""
            }`}
          onClick={saveSettings}
          disabled={isSaving}
        >
          {isSaving ? "Salvando..." : "Salvar Configurações"}
        </button>
      </div>
    </div>
  );
}