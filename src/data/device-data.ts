import { InsertDeviceDataType } from "../../schemas";
import { db } from "../lib/db";
// get data model DeviceData by id
export const getDeviceDataById = async (id: string) => {
	try {
		const deviceData = await db.deviceData.findUnique({
			where: { id }
		});

		return deviceData;
	} catch {
		return null;
	}
}

// Busca o dado mais recente do dispositivo usando id do dispositivo filtrando pelo campo active
export const getLastDeviceDataByDeviceId = async (deviceId: string) => {
	try {
		const deviceData = await db.deviceData.findFirst({
			where: {
				deviceId,
			},
			orderBy: {
				createdAt: 'desc'
			}
		});

		return deviceData;
	} catch {
		return null;
	}
}

// insert data model DeviceData
export const insertDeviceData = async (infoDevice: InsertDeviceDataType) => {
	try {
		const deviceData = await db.deviceData.create({
			data: {
				pumps: infoDevice.pumps,
				level: infoDevice.level,
				deviceId: infoDevice.deviceId,
			}
		});

		return deviceData;
	} catch {
		return null;
	}
}