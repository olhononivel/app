import { db } from "../lib/db";

export type CreateNotificationDeviceType = {
	deviceId: string;
	level: number;
};

export const insertNotificationDevice = async (infoDevice: CreateNotificationDeviceType) => {
	try {
		const deviceData = await db.deviceNotification.create({
			data: {
				deviceId: infoDevice.deviceId,
				level: infoDevice.level,
			}
		});

		return deviceData;
	} catch {
		return null;
	}
}