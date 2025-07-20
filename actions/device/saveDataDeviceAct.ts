"use server";

import { getDeviceByCode } from "@/data/device";
import { insertDeviceData } from "@/data/device-data";
import { sendDeviceNotificationsBackground } from "../../src/lib/notifications";

interface Pump {
  name: string;
  statusPower: boolean;
  isFail: boolean;
}

interface DeviceData {
  code: string;
  level: number;
  pumps: Pump[]
}

export const saveDataDeviceAction = async (data: DeviceData) => {
  // verifica se o dispositivo existe
  const device = await getDeviceByCode(data.code.toUpperCase());

  if (!device) {
    return { error: "Dispositivo não encontrado!", data: null };
  }

  const pumps = data.pumps.map(pump => ({
    namePump: pump.name,
    statusPower: pump.statusPower,
    isFail: pump.isFail
  }));

  // insere
  const deviceData = await insertDeviceData({
    deviceId: device.id,
    level: data.level,
    pumps: pumps
  });

  if (!deviceData) {
    return { error: "🔴 Erro ao salvar os dados do dispositivo", data: null };
  }

  const pumpsFail = data.pumps.filter(pump => pump.isFail).map(pump => pump.name);

  // Envia notificações (email + WhatsApp) para todos os usuários que monitoram o dispositivo
  // Execução assíncrona para não bloquear o processamento principal
  if (device.monitors && device.monitors.length > 0) {
    const users = device.monitors.map(monitor => ({
      id: monitor.user.id,
      email: monitor.user.email,
      phone: monitor.user.phone,
      name: monitor.user.name
    }));

    const notificationData = {
      deviceCode: device.code,
      deviceName: device.name,
      level: data.level,
      pumpFail: pumpsFail.join(", ")
    };

    // Envio em background - não bloqueia o retorno da função
    sendDeviceNotificationsBackground(users, notificationData);
  }

  // TODO: Envia notificação push informando a mudança de nível do dispositivo ou falha de bomba
  return { error: null, data: deviceData };
}