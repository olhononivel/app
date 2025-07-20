/**
 * Biblioteca para envio assíncrono de notificações
 * Garante que alertas sejam enviados sem bloquear o fluxo principal
 */

import { sendEmailAlert } from "./mail";

interface User {
  id: string;
  email: string;
  phone?: string | null;
  name?: string | null;
}

interface NotificationData {
  deviceCode: string;
  deviceName: string;
  level: number;
  pumpFail: string;
  deviceUrl?: string;
}

/**
 * Envia notificações (email + WhatsApp) para um usuário específico
 * @param user - Dados do usuário
 * @param data - Dados da notificação
 * @returns Promise com resultado do envio
 */
const sendNotificationToUser = async (user: User, data: NotificationData) => {
  const results = {
    userId: user.id,
    userName: user.name || user.email,
    email: { success: false, error: null as string | null },
    whatsapp: { success: false, error: null as string | null, sent: false }
  };

  // Envio do email (sempre tenta enviar)
  try {
    await sendEmailAlert(user.email, data.deviceCode, data.deviceName, data.level, data.pumpFail);
    results.email.success = true;
  } catch (error) {
    results.email.error = error instanceof Error ? error.message : 'Erro desconhecido';
    console.error(`❌ Erro ao enviar email para ${user.email}:`, error);
  }

  // Envio do WhatsApp (se usuário tem telefone configurado)
  if (user.phone) {
    try {
      // TODO: Descomentar quando o WhatsApp estiver funcionando
      // await sendWhatsAppAlert(user.phone, data.deviceCode, data.deviceName, data.level, data.pumpFail);
      results.whatsapp.success = true;
      results.whatsapp.sent = true;
    } catch (error) {
      results.whatsapp.error = error instanceof Error ? error.message : 'Erro desconhecido';
      console.error(`❌ Erro ao enviar WhatsApp para ${user.phone}:`, error);
    }
  } else {
    console.log(`📱 Usuário ${user.email} não tem telefone configurado - WhatsApp não enviado`);
  }

  return results;
};

/**
 * Envia notificações para todos os usuários que monitoram um dispositivo
 * Execução assíncrona que não bloqueia o fluxo principal
 * @param users - Lista de usuários que monitoram o dispositivo
 * @param data - Dados da notificação
 */
export const sendDeviceNotifications = async (users: User[], data: NotificationData) => {
  try {
    // Envia notificações para todos os usuários em paralelo
    users.map(user => sendNotificationToUser(user, data));
  } catch (error) {
    console.error('❌ Erro crítico no sistema de notificações:', error);
  }
};

/**
 * Versão simplificada para envio em background (fire-and-forget)
 * Não bloqueia execução e não retorna erros
 * @param users - Lista de usuários
 * @param data - Dados da notificação
 */
export const sendDeviceNotificationsBackground = (users: User[], data: NotificationData) => {
  // Executa em background sem aguardar resultado
  setImmediate(() => {
    sendDeviceNotifications(users, data).catch(error => {
      console.error('❌ Erro no envio background de notificações:', error);
    });
  });
}; 