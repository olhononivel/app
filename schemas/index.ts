import { isValidBrazilianPhone } from '@/lib/phone';
import * as z from 'zod';

// LoginSchema
export const LoginSchema = z.object({
	email: z.string().email({
		message: 'Email inválido',
	}),
	password: z.string().min(6, {
		message: 'Senha deve ter no mínimo 6 caracteres',
	}),
});

export const RegisterSchema = z.object({
	name: z.string().min(3, {
		message: 'Nome deve ter no mínimo 3 caracteres',
	}),
	email: z.string().email({
		message: 'Email inválido',
	}),
	password: z.string().min(6, {
		message: 'Senha deve ter no mínimo 6 caracteres',
	}),
});

// ResetPassSchema
export const ResetPassSchema = z.object({
	email: z.string().email({
		message: 'Email inválido',
	}),
});

// NewPasswordSchema
export const NewPasswordSchema = z.object({
	password: z.string().min(6, {
		message: 'Senha deve ter no mínimo 6 caracteres',
	}),
});

// Cadastrar novo dispositivos
export const AddNewDeviceSchema = z.object({
	capacityTank: z.number().min(1, "A capacidade do tanque deve ser maior que zero"),
	code: z.string().min(1, "O código do dispositivo é obrigatório"),
	loraAddress: z.string().min(1, "O endereço LoRa é obrigatório"),
	loraSerial: z.string().min(1, "O serial LoRa é obrigatório"),
	city: z.string().min(1, "A cidade é obrigatória"),
	street: z.string().min(1, "A rua é obrigatória"),
	number: z.string().min(1, "O número é obrigatório"),
	district: z.string().min(1, "O bairro é obrigatório"),
	zipCode: z.string().min(8, "CEP deve ter pelo menos 8 caracteres"),
	complement: z.string().optional(),
	name: z.string().min(1, "O apelido do dispositivo é obrigatório"),
});

export type AddNewDeviceSchemaType = z.infer<typeof AddNewDeviceSchema>;

// Buscar dispositivos
export const SubscribeDeviceSchema = z.object({
	idDevice: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
	idUser: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
});

// Buscar devices por usuário
export const ListDevicesByUserSchema = z.object({
	userId: z.string().min(3, "Id deve conter no mínimo 3 caracteres"),
});

// Buscar devices por usuário
export const SearchDevicesSchema = z.object({
	searchTerm: z.string().min(3, "Campo deve conter no mínimo 3 caracteres"),
});

// Salva dados do dispositivo 
export const InsertDeviceDataSchema = z.object({
	deviceId: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
	level: z.number().int().min(0, "O nível deve ser maior ou igual a 0"),
	pumps: z.array(z.object({
		namePump: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
		statusPower: z.boolean(),
		isFail: z.boolean()
	}))
});
export type InsertDeviceDataType = z.infer<typeof InsertDeviceDataSchema>;

// Schema para atualizar informações do usuário
export const UpdateUserProfileSchema = z.object({
	name: z.string().min(2, {
		message: 'Nome deve ter no mínimo 2 caracteres',
	}).optional(),
	phone: z.string().refine((phone) => {
		if (!phone || phone.trim() === '') return true; // Campo opcional
		return isValidBrazilianPhone(phone);
	}, {
		message: 'Número de telefone inválido. Use o formato: ** * ****-**** (DDD + número)',
	}).optional(),
});

export type UpdateUserProfileType = z.infer<typeof UpdateUserProfileSchema>;
