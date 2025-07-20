/**
 * Faz formatação do nome fulano de tal para Fulano de Tal
 * @param name nome a ser formatado
 * @returns nome formatado
 * @example
 * prettierName('fulano de tal') // Fulano de Tal
 * prettierName('FULANO DE TAL') // Fulano de Tal
 */

export const prettierName = (name: string) => {
	if (!name) return '';
	
	return name
		.toLowerCase()
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
};