"use server";

import { db } from "@/lib/db";

import { auth } from "../../auth";
import { AddNewDeviceSchema } from "../../schemas";
import * as z from "zod";

export const addNewDeviceAction = async (data: z.infer<typeof AddNewDeviceSchema>) => {
	// valida de usuario esta logado
	const user = await auth();

	// verifica se o usuario esta logado ou a req em ambiente de desenvolvimento
	if (!user && process.env.NODE_ENV !== 'development') {
		return { error: 'Usuário não encontrado' };
	}

	// Valida os dados recebidos
	const parsedData = AddNewDeviceSchema.safeParse(data);

	if (!parsedData.success) {
		return {
			error: parsedData.error.errors.map(e => e.message).join(", ")
		};
	}

	const {
		capacityTank,
		code,
		loraAddress,
		loraSerial,
		city,
		street,
		number,
		district,
		zipCode,
		complement,
		name,
	} = parsedData.data;

	// cria o dispositivo
	const device = await db.device.create({
		data: {
			capacityTank,
			code,
			loraAddress,
			loraSerial,
			city,
			street,
			number,
			district,
			zipCode,
			complement,
			name,
		},
	});

	if (!device) {
		console.log('Erro ao criar dispositivo');
		return { error: 'Erro ao criar dispositivo!' };
	}

	const infoDevice = {
		name: device.name,
		code: device.code,
		id: device.id,
	}

	return { error: null, data: infoDevice };
}
