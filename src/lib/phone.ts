/**
 * Utilitários para formatação e validação de números de telefone brasileiros
 */

/**
 * Formata número de telefone para exibição (** * ****-****) - sem código do país
 * @param phone - Número limpo com ou sem código do país
 * @returns Número formatado apenas com DDD + número
 */
export const formatPhoneDisplay = (phone: string): string => {
  if (!phone) return '';

  // Remove tudo que não é dígito
  const cleaned = phone.replace(/\D/g, '');

  let phoneNumber = cleaned;

  // Se começa com 55, remove o código do país para exibição
  if (cleaned.length === 13 && cleaned.startsWith('55')) {
    phoneNumber = cleaned.slice(2); // Remove os primeiros 2 dígitos (55)
  }

  // Formato brasileiro: DDD (2 dígitos) + número (9 dígitos) = 11 dígitos
  if (phoneNumber.length === 11) {
    const ddd = phoneNumber.slice(0, 2);       // 11, 21, etc
    const firstPart = phoneNumber.slice(2, 3); // 9
    const secondPart = phoneNumber.slice(3, 7); // 1234
    const thirdPart = phoneNumber.slice(7, 11); // 5678

    return `${ddd} ${firstPart} ${secondPart}-${thirdPart}`;
  }

  return phone; // Retorna como está se não conseguir formatar
};

/**
 * Formata número durante a digitação (máscara em tempo real)
 * Formato: ** * ****-**** (DDD + 9 dígitos)
 * @param value - Valor atual do input
 * @returns Valor formatado
 */
export const formatPhoneInput = (value: string): string => {
  // Remove tudo que não é dígito
  const numbers = value.replace(/\D/g, '');

  // Limita a 11 dígitos (DDD + 9 dígitos do celular)
  const limited = numbers.slice(0, 11);

  // Aplica máscara conforme o usuário digita
  if (limited.length <= 2) {
    return limited;
  } else if (limited.length <= 3) {
    return `${limited.slice(0, 2)} ${limited.slice(2)}`;
  } else if (limited.length <= 7) {
    return `${limited.slice(0, 2)} ${limited.slice(2, 3)} ${limited.slice(3)}`;
  } else {
    return `${limited.slice(0, 2)} ${limited.slice(2, 3)} ${limited.slice(3, 7)}-${limited.slice(7)}`;
  }
};

/**
 * Converte número formatado para formato limpo com código do país
 * @param formattedPhone - Número formatado (** * ****-****)
 * @returns Número limpo no formato internacional (55**********) ou null se inválido
 */
export const parsePhoneToClean = (formattedPhone: string): string | null => {
  if (!formattedPhone) return null;

  const cleaned = formattedPhone.replace(/\D/g, '');

  // Se tem 11 dígitos, adiciona código do país (55) - comportamento padrão
  if (cleaned.length === 11) {
    return `55${cleaned}`;
  }

  // Se tem 13 dígitos e começa com 55, está correto
  if (cleaned.length === 13 && cleaned.startsWith('55')) {
    return cleaned;
  }

  return null;
};

/**
 * Valida se número de telefone brasileiro está correto
 * Aceita apenas 11 dígitos (DDD + 9 dígitos)
 * @param phone - Número de telefone (formatado ou limpo, sem código do país)
 * @returns true se válido
 */
export const isValidBrazilianPhone = (phone: string): boolean => {
  if (!phone) return false;

  const cleaned = phone.replace(/\D/g, '');

  // Aceita 11 dígitos (formato brasileiro) ou 13 (com código 55)
  let phoneNumber = cleaned;

  if (cleaned.length === 13 && cleaned.startsWith('55')) {
    phoneNumber = cleaned.slice(2); // Remove código do país para validação
  } else if (cleaned.length === 11) {
    phoneNumber = cleaned; // Número brasileiro sem código do país
  } else {
    return false; // Tamanho inválido
  }

  // Deve ter exatamente 11 dígitos (DDD + 9 dígitos)
  if (phoneNumber.length !== 11) return false;

  // Extrai DDD (primeiros 2 dígitos)
  const ddd = phoneNumber.slice(0, 2);
  const dddNumber = parseInt(ddd);

  // Valida DDDs válidos do Brasil
  const validDDDs = [
    11, 12, 13, 14, 15, 16, 17, 18, 19, // SP
    21, 22, 24, // RJ/ES
    27, 28, // ES
    31, 32, 33, 34, 35, 37, 38, // MG
    41, 42, 43, 44, 45, 46, // PR
    47, 48, 49, // SC
    51, 53, 54, 55, // RS
    61, // DF
    62, 64, // GO
    63, // TO
    65, 66, // MT
    67, // MS
    68, // AC
    69, // RO
    71, 73, 74, 75, 77, // BA
    79, // SE
    81, 87, // PE
    82, // AL
    83, // PB
    84, // RN
    85, 88, // CE
    86, 89, // PI
    91, 93, 94, // PA
    92, 97, // AM
    95, // RR
    96, // AP
    98, 99  // MA
  ];

  if (!validDDDs.includes(dddNumber)) return false;

  // Número deve começar com 9 (celular)
  const firstDigit = phoneNumber.slice(2, 3);
  if (firstDigit !== '9') return false;

  return true;
};

/**
 * Converte número para formato internacional para API (sem formatação)
 * @param phone - Número formatado ou limpo
 * @returns Número no formato internacional (55**********) ou null se inválido
 */
export const phoneToInternational = (phone: string): string | null => {
  const cleaned = parsePhoneToClean(phone);

  if (!cleaned || !isValidBrazilianPhone(cleaned)) {
    return null;
  }

  return cleaned;
}; 