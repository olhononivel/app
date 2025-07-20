"use server";

import { SearchDevicesSchema } from "../schemas";
import { getDeviceByCodeOrName } from "@/data/device";
import * as z from "zod";

export const searchDevice = async (term: z.infer<typeof SearchDevicesSchema>) => {
	// Valida os dados recebidos
	const parsedData = SearchDevicesSchema.safeParse(term);

	if (!parsedData.success) {
		return { error: "Tente fazer a busca com pelo menos 3 caracteres" };
	}

	// busca os dispositivos
	const devices = await getDeviceByCodeOrName(parsedData.data.searchTerm);

	return { success: "", devices };
}