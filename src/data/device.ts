import { db } from "@/lib/db";

// busca um dispositivo pelo código e retorna o dispositivo e o usuário que estiver monitorando ele!
export const getDeviceByCode = async (code: string) => {
	try {
		const device = await db.device.findFirst({
			where: {
				code
			},
			include: {
				monitors: {
					include: {
						user: true
					}
				}
			}
		});

		return device;
	} catch {
		return null;
	}
};

// busca um dispositivos com parte do código ou nome independente de letra maiuscula e minuscula
export const getDeviceByCodeOrName = async (query: string) => {
	try {
		const device = await db.device.findMany({
			where: {
				OR: [
					{ code: { contains: query, mode: "insensitive" } },
					{ name: { contains: query, mode: "insensitive" } }
				],
				AND: [
					{ active: true }
				]
			}
		});

		return device;
	} catch {
		return null;
	}
};

// busca um dispositivo pelo id
export const getDeviceById = async (id: string) => {
	try {
		const device = await db.device.findUnique({
			where: { id }
		});

		return device;
	} catch {
		return null;
	}
};
