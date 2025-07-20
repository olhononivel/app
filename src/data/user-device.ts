import { db } from "@/lib/db";
import { Prisma } from "@prisma/client";

export type DeviceType = Exclude<Prisma.PromiseReturnType<typeof getDevicesByUser>, null>[number];
export type SubscriptionType = Prisma.PromiseReturnType<typeof getSubscription>;
export type SubscribeType = Prisma.PromiseReturnType<typeof subscribeDevice>;

// busca todos os dispositivos que o usuário está inscrito
export const getDevicesByUser = async (userId: string) => {
	try {
		const devices = await db.userDevice.findMany({
			where: { userId },
			include: { device: true }
		});

		return devices.map(d => d.device);
	} catch {
		return null;
	}
};

// verifica se o usuário já está inscrito no dispositivo
export const getSubscription = async (idDevice: string, idUser: string) => {
	try {
		const existingSubscription = await db.userDevice.findFirst({
			where: {
				deviceId: idDevice,
				userId: idUser
			}
		});

		return existingSubscription;
	} catch {
		return null;
	}
};

// inscreve o usuário no dispositivo
export const subscribeDevice = async (idDevice: string, idUser: string) => {
	try {
		const device = await db.userDevice.create({
			data: {
				deviceId: idDevice,
				userId: idUser
			}
		});

		return device;
	} catch {
		return null;
	}
};

// remove a inscrição do usuário no dispositivo
export const removeSubscribeDevice = async (idDevice: string, idUser: string) => {
	try {
		await db.userDevice.delete({
			where: {
				userId_deviceId: {
					deviceId: idDevice,
					userId: idUser
				}
			}
		});

		return true;
	} catch {
		return false;
	}
};