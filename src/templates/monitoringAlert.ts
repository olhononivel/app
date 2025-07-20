const generateTemplateMonitoringAlert = (link: string, deviceName: string, level: number, pumpFail: string) => {
  const isPumpFail = pumpFail.length > 0;
  const pumpFailText = isPumpFail ? `Bomba com falha: ${pumpFail}. Por favor, verifique o dispositivo e tome as medidas necessárias.` : "Nenhuma bomba com falha";

  // Sistema de cores baseado no nível
  const getColorScheme = (level: number, hasPumpFail: boolean) => {
    if (hasPumpFail) {
      return {
        primary: '#8b5cf6', // Roxo para falha de bomba
        primaryDark: '#7c3aed',
        background: '#f3f4f6',
        border: '#8b5cf6',
        text: '#581c87',
        emoji: '⚠️',
        status: 'FALHA DE BOMBA',
        urgency: 'crítica'
      };
    }
    
    if (level >= 0 && level <= 25) {
      return {
        primary: '#dc2626', // Vermelho - Crítico/Vazio
        primaryDark: '#b91c1c',
        background: '#fee2e2',
        border: '#f87171',
        text: '#991b1b',
        emoji: '🔴',
        status: 'NÍVEL CRÍTICO',
        urgency: 'crítica'
      };
    } else if (level >= 26 && level <= 50) {
      return {
        primary: '#ea580c', // Laranja - Baixo
        primaryDark: '#c2410c',
        background: '#fed7aa',
        border: '#fb923c',
        text: '#c2410c',
        emoji: '🟠',
        status: 'NÍVEL BAIXO',
        urgency: 'alta'
      };
    } else if (level >= 51 && level <= 75) {
      return {
        primary: '#ca8a04', // Amarelo - Médio
        primaryDark: '#a16207',
        background: '#fef3c7',
        border: '#fbbf24',
        text: '#92400e',
        emoji: '🟡',
        status: 'NÍVEL MÉDIO',
        urgency: 'moderada'
      };
    } else {
      return {
        primary: '#16a34a', // Verde - Alto/Cheio
        primaryDark: '#15803d',
        background: '#dcfce7',
        border: '#4ade80',
        text: '#166534',
        emoji: '🟢',
        status: 'NÍVEL ALTO',
        urgency: 'baixa'
      };
    }
  };

  const colorScheme = getColorScheme(level, isPumpFail);

  // Função para converter hex para rgba
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}, ${alpha}`;
  };

  const data = {
    title: `${colorScheme.emoji} Alerta de Monitoramento - ${deviceName}`,
    description: `Nossos sistemas detectaram uma alteração de nível no dispositivo ${deviceName}. Nível atual: ${level}%. Prioridade ${colorScheme.urgency}. ${pumpFailText}`,
    buttonText: "Verificar Dispositivo",
    unsubscribeText: `Continuaremos monitorando o dispositivo ${deviceName} e enviaremos alertas quando necessário.`,
    companyName: "Olho no Nível",
    companyLogo: "https://olho-no-nivel.vercel.app/images/logo.png"
  };

  const htmlTemplate = `
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>${data.title}</title>
    <!--[if mso]>
    <noscript>
      <xml>
        <o:OfficeDocumentSettings>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    </noscript>
    <![endif]-->
    <style>
      /* Reset styles */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      /* Base styles */
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 1.6;
        color: #333333;
        background-color: #f8fafc;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      /* Container */
      .email-container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        overflow: hidden;
      }
      
             /* Header */
       .email-header {
         background: linear-gradient(135deg, ${colorScheme.primary} 0%, ${colorScheme.primaryDark} 100%);
         padding: 32px 40px;
         text-align: center;
         color: white;
       }
      
      .logo {
        width: 60px;
        height: 60px;
        margin: 0 auto 16px auto;
        background-color: rgba(255, 255, 255, 1);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .logo img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        border-radius: 8px;
      }
      
      .company-name {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 8px;
        letter-spacing: -0.5px;
      }
      
      /* Body */
      .email-body {
        padding: 40px;
      }
      
      .email-title {
        font-size: 28px;
        font-weight: 700;
        color: #1a202c;
        margin-bottom: 20px;
        text-align: center;
        line-height: 1.3;
      }
      
      .email-description {
        font-size: 16px;
        color: #4a5568;
        line-height: 1.6;
        margin-bottom: 32px;
        text-align: center;
      }
      
             /* Level indicator */
       .level-indicator {
         background-color: ${colorScheme.background};
         border: 2px solid ${colorScheme.border};
         border-radius: 12px;
         padding: 20px;
         margin: 24px 0;
         text-align: center;
       }
       
       .level-text {
         font-size: 18px;
         font-weight: 600;
         color: ${colorScheme.text};
         margin-bottom: 8px;
       }
       
       .level-value {
         font-size: 32px;
         font-weight: 700;
         color: ${colorScheme.primary};
         margin-bottom: 4px;
       }
      
      .device-name {
        font-size: 14px;
        color: #78716c;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      
      /* Button */
      .button-container {
        text-align: center;
        margin-bottom: 40px;
      }
      
             .alert-button {
         display: inline-block;
         background: linear-gradient(135deg, ${colorScheme.primary} 0%, ${colorScheme.primaryDark} 100%);
         color: white;
         text-decoration: none;
         padding: 16px 32px;
         border-radius: 8px;
         font-weight: 600;
         font-size: 16px;
         box-shadow: 0 4px 12px rgba(${hexToRgba(colorScheme.primary, 0.3)});
         transition: all 0.2s ease;
       }
      
      .text-button {
        font-size: 16px;
        font-weight: 600;
        color: #ffffff;
        text-decoration: none;
      }
      
             .alert-button:hover {
         transform: translateY(-2px);
         box-shadow: 0 6px 16px rgba(${hexToRgba(colorScheme.primary, 0.4)});
       }
      
      /* Footer */
      .email-footer {
        border-top: 1px solid #e2e8f0;
        padding: 24px 40px;
        text-align: center;
      }
      
      .footer-text {
        font-size: 14px;
        color: #718096;
        line-height: 1.5;
      }
      
             /* Alert info */
       .alert-info {
         background-color: ${colorScheme.background};
         border-left: 4px solid ${colorScheme.primary};
         padding: 16px;
         margin: 24px 0;
         border-radius: 0 8px 8px 0;
       }
      
      .alert-text {
        font-size: 14px;
        color: #4a5568;
        margin: 0;
      }
      
      /* Pump status */
      .pump-status {
        background-color: ${isPumpFail ? '#fee2e2' : '#f0fdf4'};
        border: 1px solid ${isPumpFail ? '#f87171' : '#4ade80'};
        border-radius: 8px;
        padding: 16px;
        margin: 24px 0;
      }
      
      .pump-status-text {
        font-size: 14px;
        color: ${isPumpFail ? '#dc2626' : '#16a34a'};
        margin: 0;
        font-weight: 500;
      }
      
      /* Responsive */
      @media only screen and (max-width: 600px) {
        .email-container {
          margin: 0;
          border-radius: 0;
        }
        
        .email-header,
        .email-body,
        .email-footer {
          padding: 24px 20px;
        }
        
        .email-title {
          font-size: 24px;
        }
        
        .alert-button {
          display: block;
          width: 100%;
          padding: 18px;
        }
        
        .level-value {
          font-size: 28px;
        }
      }
      
      /* Dark mode support */
      @media (prefers-color-scheme: dark) {
        .email-container {
          background-color: #2d3748;
        }
        
        .email-title {
          color: #f7fafc;
        }
        
        .email-description {
          color: #cbd5e0;
        }
        
        .alert-info {
          background-color: #4a5568;
        }
        
        .alert-text {
          color: #cbd5e0;
        }
      }
    </style>
  </head>
  <body>
    <div style="background-color: #f8fafc; padding: 40px 20px; min-height: 100vh;">
      <div class="email-container">
        <!-- Header -->
        <div class="email-header">
          <div class="logo">
            <img src="${data.companyLogo}" alt="${data.companyName}">
          </div>
          <div class="company-name">${data.companyName}</div>
        </div>
        
        <!-- Body -->
        <div class="email-body">
          <h1 class="email-title">${data.title}</h1>
          
          <p class="email-description">${data.description}</p>
          
                     <div class="level-indicator">
             <div class="device-name">${deviceName}</div>
             <div class="level-value">${level}%</div>
             <div class="level-text">${colorScheme.status}</div>
           </div>
          
          <div class="pump-status">
            <p class="pump-status-text">
              ${isPumpFail ? `⚠️ ${pumpFailText}` : `✅ Todas as bombas funcionando normalmente`}
            </p>
          </div>
          
          <div class="alert-info">
            <p class="alert-text">
              📊 Este alerta foi gerado automaticamente pelo sistema de monitoramento em tempo real.
            </p>
          </div>
          
          <div class="button-container">
            <a href="${link}" class="alert-button">
              <span class="text-button">${data.buttonText}</span>
            </a>
          </div>
          
                     <div style="text-align: center; margin-top: 24px;">
             <p style="font-size: 14px; color: #718096;">
               Acesse o sistema para mais detalhes:<br>
               <span style="word-break: break-all; color: ${colorScheme.primary};">${link}</span>
             </p>
           </div>
        </div>
        
        <!-- Footer -->
        <div class="email-footer">
          <p class="footer-text">${data.unsubscribeText}</p>
          <p class="footer-text" style="margin-top: 12px;">
            © ${new Date().getFullYear()} ${data.companyName}. Sistema de Monitoramento.
          </p>
        </div>
      </div>
    </div>
  </body>
  </html>
  `;

  return htmlTemplate;
};

export default generateTemplateMonitoringAlert;