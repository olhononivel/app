"use server";

import { ListDevicesByUserSchema } from "../schemas";
import { getDevicesByUser } from "@/data/user-device";
import * as z from "zod";

export const listDevicesByUser = async (userId: z.infer<typeof ListDevicesByUserSchema>) => {
	// Valida os dados recebidos
	const parsedData = ListDevicesByUserSchema.safeParse(userId);

	if (!parsedData.success) {
		return { error: "Não foi possível buscar os dispositivos! Tente fazer login novamente!" };
	}

	// Busca os dispositivos do usuário
	const devices = await getDevicesByUser(parsedData.data.userId);

	return { success: "", devices };
}