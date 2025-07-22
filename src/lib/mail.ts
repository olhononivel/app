import { Resend } from 'resend';
import generateTemplateMonitoringAlert from '../templates/monitoringAlert';
import generateTemplateResetPassword from '../templates/resetPassword';
import generateTemplateConfirmationEmail from '../templates/verificationEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendResetPasswordEmail = async (email: string, token: string) => {
  const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: 'Olho no nível <registro@olhononivel.com.br>',
    to: email,
    subject: 'Recuperação de senha',
    html: generateTemplateResetPassword(resetLink),
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${process.env.NEXT_PUBLIC_APP_URL}/auth/new-verification?token=${token}`;


  await resend.emails.send({
    from: 'Olho no nível <registro@olhononivel.com.br>',
    to: email,
    subject: 'Confirme sua conta no Olho no nível',
    html: generateTemplateConfirmationEmail(confirmLink),
  });
};

export const sendEmailAlert = async (email: string, deviceCode: string, deviceName: string, level: number, pumpFail: string) => {
  const confirmLink = `${process.env.NEXT_PUBLIC_APP_URL}/device/${deviceCode}`;

  await resend.emails.send({
    from: 'Olho no nível <monitoramento@olhononivel.com.br>',
    to: email,
    subject: `Alteração de nível - ${deviceName}`,
    html: generateTemplateMonitoringAlert(confirmLink, deviceName, level, pumpFail),
  });
};