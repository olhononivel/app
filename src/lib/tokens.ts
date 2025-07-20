import { v4 as uuidv4 } from 'uuid';

import { db } from '@/lib/db';
import { getVerificationTokenByEmail } from '../data/verification-token';
import { getPasswordResetTokenByEmail } from '../data/password-reset-token'; 
import { deleteActivationDeviceById, getActivationDeviceById, insertActivationDevice } from '../data/device-activation';

export const generatePasswordResetToken = async (email: string) => {
	const token = uuidv4();
	// tempo de inspiração do token de reset de senha, valido por 15 minutos
	const expires = new Date(new Date().getTime() + 15 * 60 * 1000);

	const existingToken = await getPasswordResetTokenByEmail(email);

	if (existingToken) {
		await db.passwordResetToken.delete({
			where: { id: existingToken.id },
		});
	};

	const passwordResetToken = await db.passwordResetToken.create({
		data: {
			token,
			email,
			expires,
		},
	});

	return passwordResetToken;
};

export const generateVerificationToken = async (email: string) => {
	const token = uuidv4();
	// tempo de inspiração do token de verificação, valido por 15 minutos
	const expires = new Date(new Date().getTime() + 15 * 60 * 1000);

	const existingToken = await getVerificationTokenByEmail(email);

	if (existingToken) {
		await db.verificationToken.delete({
			where: { id: existingToken.id },
		});
	};

	const verificationToken = await db.verificationToken.create({
		data: {
			token,
			email,
			expires,
		},
	});

	return verificationToken;
};

// generate token for device activation
export const generateActivationTokenDevice = async (id: string) => {
	const token = uuidv4();

	const existingToken = await getActivationDeviceById(id);

	if (existingToken) {
		await deleteActivationDeviceById(existingToken.id)
	};

	const activationToken = await insertActivationDevice(token, id);

	return activationToken;
};
