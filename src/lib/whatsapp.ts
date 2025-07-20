/**
 * Integração com a API Whapi Cloud para envio de mensagens de WhatsApp
 * Documentação: https://whapi.readme.io/reference/sendmessagetext
 */

interface WhapiResponse {
  sent: boolean;
  message?: {
    id: string;
    timestamp: number;
  };
  error?: string;
}

/**
 * Envia uma mensagem de texto via WhatsApp usando a API Whapi
 * @param phoneNumber - Número do telefone no formato internacional (ex: 5511999999999)
 * @param message - Mensagem de texto a ser enviada
 * @returns Promise com resultado do envio
 */
export const sendWhatsAppMessage = async (phoneNumber: string, message: string): Promise<WhapiResponse> => {
  try {
    const response = await fetch(`${process.env.W_API_BASE_URL}/message/send-text?instanceId=${process.env.W_ID_INSTANCE}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.W_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: phoneNumber,
        message,
        delayMessage: 1
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || `HTTP error! status: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error('❌ Erro ao enviar mensagem do WhatsApp:', error);
    throw error;
  }
};

/**
 * Envia alerta de monitoramento via WhatsApp
 * @param phoneNumber - Número do telefone no formato internacional
 * @param deviceCode - Código do dispositivo
 * @param deviceName - Nome do dispositivo
 * @param level - Nível atual (%)
 * @param pumpFail - Bombas com falha (string separada por vírgula)
 */
export const sendWhatsAppAlert = async (
  phoneNumber: string,
  deviceCode: string,
  deviceName: string,
  level: number,
  pumpFail: string
): Promise<void> => {
  try {
    // Formata o número para padrão internacional se necessário
    const formattedPhone = phoneNumber.startsWith('+') ? phoneNumber.slice(1) : phoneNumber;
    // Constrói a mensagem de alerta
    const isPumpFail = pumpFail.length > 0;
    const pumpFailText = isPumpFail
      ? `\n⚠️ *Bomba com falha:* ${pumpFail}\nPor favor, verifique o dispositivo e tome as medidas necessárias.`
      : '';

    const deviceUrl = `${process.env.NEXT_PUBLIC_APP_URL}/device/${deviceCode}`;

    const message = `🚨 *Alerta - Olho no Nível*

📊 *Dispositivo:* ${deviceName}
🏷️ *Código:* ${deviceCode}
📈 *Nível atual:* ${level}%${pumpFailText}

🔗 Acesse para mais detalhes: ${deviceUrl}

_Mensagem automática do sistema de monitoramento_`;

    // Envia a mensagem
    await sendWhatsAppMessage(formattedPhone, message);

  } catch (error) {
    console.error('❌ Erro ao enviar alerta do WhatsApp:', error);
    // Não lança o erro para não interromper o fluxo principal
  }
}; 