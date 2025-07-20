"use client";

import { DeviceDataResponse } from "../../../actions/device/getUserDeviceDataAct";
import { formatDistanceToNow, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface DeviceDataCardProps {
  deviceData: DeviceDataResponse;
}

export const DeviceDataCard = ({ deviceData }: DeviceDataCardProps) => {
  // Função para determinar a cor do nível baseado no valor
  const getLevelColor = (level: number) => {
    if (level >= 0 && level <= 25) return 'text-red-600';
    if (level >= 26 && level <= 50) return 'text-orange-600';
    if (level >= 51 && level <= 75) return 'text-yellow-600';
    return 'text-green-600';
  };

  // Função para determinar o ícone do nível
  const getLevelIcon = (level: number) => {
    if (level >= 0 && level <= 25) return '🔴';
    if (level >= 26 && level <= 50) return '🟠';
    if (level >= 51 && level <= 75) return '🟡';
    return '🟢';
  };

  // Função para determinar o status do nível
  const getLevelStatus = (level: number) => {
    if (level >= 0 && level <= 25) return 'CRÍTICO';
    if (level >= 26 && level <= 50) return 'BAIXO';
    if (level >= 51 && level <= 75) return 'MÉDIO';
    return 'ALTO';
  };

  const timeAgo = formatDistanceToNow(new Date(deviceData.createdAt), {
    addSuffix: true,
    locale: ptBR
  });

  // Formatação da data e hora exata
  const exactDateTime = format(new Date(deviceData.createdAt), "dd/MM/yyyy 'às' HH:mm", {
    locale: ptBR
  });

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-center justify-between">
        {/* Informações principais do dispositivo */}
        <div className="flex items-center space-x-3 flex-1">
          <span className="text-lg">{getLevelIcon(deviceData.level)}</span>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2">
              <h3 className="font-medium text-gray-900 truncate text-sm">
                {deviceData.device.name}
              </h3>
              <span className={`font-bold text-sm ${getLevelColor(deviceData.level)}`}>
                {deviceData.level}%
              </span>
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${getLevelColor(deviceData.level)} bg-opacity-10`}>
                {getLevelStatus(deviceData.level)}
              </span>
            </div>
            <p className="text-xs text-gray-500 truncate">
              {deviceData.device.city} • {deviceData.device.code}
            </p>
          </div>
        </div>

        {/* Status e tempo */}
        <div className="flex items-center space-x-3 text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <div className={`w-2 h-2 rounded-full ${deviceData.device.active ? 'bg-green-500' : 'bg-gray-400'}`} />
            <span>{deviceData.device.active ? 'Ativo' : 'Inativo'}</span>
          </div>
          <div className="text-right">
            <div>{timeAgo}</div>
            <div className="text-xs text-gray-400">{exactDateTime}</div>
          </div>
        </div>
      </div>
    </div>
  );
}; 