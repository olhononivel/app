/**
 * Rotas públicas acessíveis sem autenticação
 * @type {string[]}
 */
export const publicRoutes: string[] = [
	'/',
	'/privacy-policy',
	'/terms-of-use',
	'/auth/new-verification',
	// '/auth/device/active-device',
	// '/api/device/add-new-device',
	'/api/device/link-device',
	// '/api/device/add-subscribe-monitoring',
	// '/api/device/device-data',
	'/api/device/save-data-device',
];

/**
 * Rotas para autenticação
 * @type {string[]}
 */
export const authRoutes: string[] = [
	'/auth/login',
	'/auth/register',
	'/auth/forgot-password',
	'/auth/error',
	'/auth/reset',
	'/auth/new-password',
];

/**
 * Prefixo de rotas da API de autenticação
 * Rotas de autenticação devem ser prefixadas com este valor
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth';

/**
 * Rota de redirecionamento padrão após login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/home';
export const DEFAULT_DASHBOARD_REDIRECT = '/dashboard';

/**
 * Rotas para administradores
 * @type {string[]}
 */
export const adminRoutes = [
	'/dashboard',
	'/dashboard/users',
	'/dashboard/devices',
	'/dashboard/notifications',
	'/dashboard/settings',
];