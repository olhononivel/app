"use server";

import { getUserById } from "@/data/user";

import { getDeviceById } from "@/data/device";
import { getSubscription, removeSubscribeDevice, subscribeDevice } from "@/data/user-device";
import * as z from "zod";
import { SubscribeDeviceSchema } from "../schemas";

export const addSubscribeMonitoring = async (data: z.infer<typeof SubscribeDeviceSchema>) => {
	// Valida os dados recebidos
	const parsedData = SubscribeDeviceSchema.safeParse(data);

	if (!parsedData.success) {
		return { error: "" };
	}

	const { idDevice, idUser } = parsedData.data;

	// verifica se o usuario existe
	const existingUser = await getUserById(idUser);

	if (!existingUser) {
		return { error: 'Usuário inválido' };
	}

	// verifica se o dispositivo existe
	const existingDevice = await getDeviceById(idDevice)

	if (!existingDevice) {
		return { error: 'Dispositivo inválido' };
	}

	// verifica se o usuário já está inscrito no dispositivo
	const existingSubscription = await getSubscription(idDevice, idUser);

	if (existingSubscription) {
		return { error: 'Você já está inscrito neste dispositivo' };
	}

	// inscreve o usuário no dispositivo
	const device = await subscribeDevice(idDevice, idUser);

	return { success: true, device };
}

export const removeSubscribeMonitoring = async (data: z.infer<typeof SubscribeDeviceSchema>) => {
	// Valida os dados recebidos
	const parsedData = SubscribeDeviceSchema.safeParse(data);

	if (!parsedData.success) {
		return { error: "" };
	}

	const { idDevice, idUser } = parsedData.data;

	// verifica se o usuario existe
	const existingUser = await getUserById(idUser);

	if (!existingUser) {
		return { error: 'Usuário inválido' };
	}

	// verifica se o dispositivo existe
	const existingDevice = await getDeviceById(idDevice)

	if (!existingDevice) {
		return { error: 'Dispositivo inválido' };
	}

	// verifica se o usuário está inscrito no dispositivo
	const existingSubscription = await getSubscription(idDevice, idUser);

	if (!existingSubscription) {
		return { error: 'Você não está inscrito neste dispositivo' };
	}

	// remove a inscrição do usuário no dispositivo
	const isRemoved = await removeSubscribeDevice(idDevice, idUser);

	if (!isRemoved) {
		return { error: 'Erro ao remover inscrição' };
	}

	return { success: true };
}