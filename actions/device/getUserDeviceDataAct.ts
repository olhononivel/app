"use server";

import { db } from "@/lib/db";
import { auth } from "../../auth";

export interface DeviceDataResponse {
  id: string;
  level: number;
  pumps: unknown;
  createdAt: Date;
  device: {
    id: string;
    name: string;
    code: string;
    city: string;
    street: string;
    capacityTank: number;
    active: boolean;
  };
}

export const getUserDeviceDataAction = async (limit: number = 20) => {
  // Valida se usuário está logado
  const user = await auth();

  // Verifica se o usuário está logado ou a req em ambiente de desenvolvimento
  if (!user) {
    return { error: 'Usuário não encontrado' };
  }

  try {
    // Busca os dispositivos que o usuário monitora
    const userDevices = await db.userDevice.findMany({
      where: {
        userId: user?.user?.id,
        receiveAlerts: true // Apenas dispositivos que o usuário quer receber alertas
      },
      include: {
        device: {
          include: {
            deviceData: {
              orderBy: {
                createdAt: 'desc'
              },
              take: limit, // Limita quantos dados por dispositivo
              select: {
                id: true,
                level: true,
                pumps: true,
                createdAt: true
              }
            }
          }
        }
      }
    });

    // Flatten e organiza os dados por data mais recente
    const allDeviceData: DeviceDataResponse[] = [];

    userDevices.forEach(userDevice => {
      userDevice.device.deviceData.forEach(data => {
        allDeviceData.push({
          id: data.id,
          level: data.level,
          pumps: data.pumps,
          createdAt: data.createdAt,
          device: {
            id: userDevice.device.id,
            name: userDevice.device.name,
            code: userDevice.device.code,
            city: userDevice.device.city,
            street: userDevice.device.street,
            capacityTank: userDevice.device.capacityTank,
            active: userDevice.device.active
          }
        });
      });
    });

    // Ordena todos os dados por data mais recente
    const sortedData = allDeviceData.sort((a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    ).slice(0, limit);

    return {
      error: null,
      data: sortedData,
      totalDevices: userDevices.length
    };

  } catch (error) {
    console.error('Erro ao buscar dados dos dispositivos:', error);
    return { error: 'Erro interno do servidor ao buscar dados dos dispositivos' };
  }
}; 