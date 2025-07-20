const generateTemplateConfirmationEmail = (link: string) => {
  const data = {
    title: "Confirme sua conta no Olho no Nível",
    description: "Para confirmar seu endereço de e-mail e ativar seu acesso ao sistema de monitoramento, por favor clique no botão abaixo. Este link expirará em 15 minutos.",
    buttonText: "Confirmar email",
    unsubscribeText: "Caso não tenha solicitado este e-mail, por favor desconsidere.",
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
        background: linear-gradient(135deg, #0666EB 0%, #1e40af 100%);
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

      .text-button {
        font-size: 16px;
        font-weight: 600;
        color: #ffffff;
        text-decoration: none;
      }
      
      .email-description {
        font-size: 16px;
        color: #4a5568;
        line-height: 1.6;
        margin-bottom: 32px;
        text-align: center;
      }
      
      /* Button */
      .button-container {
        text-align: center;
        margin-bottom: 40px;
      }
      
      .confirm-button {
        display: inline-block;
        background: linear-gradient(135deg, #0666EB 0%, #1e40af 100%);
        color: white;
        text-decoration: none;
        padding: 16px 32px;
        border-radius: 8px;
        font-weight: 600;
        font-size: 16px;
        box-shadow: 0 4px 12px rgba(6, 102, 235, 0.3);
        transition: all 0.2s ease;
      }
      
      .confirm-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(6, 102, 235, 0.4);
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
      
      /* Security info */
      .security-info {
        background-color: #f7fafc;
        border-left: 4px solid #0666EB;
        padding: 16px;
        margin: 24px 0;
        border-radius: 0 8px 8px 0;
      }
      
      .security-text {
        font-size: 14px;
        color: #4a5568;
        margin: 0;
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
        
        .confirm-button {
          display: block;
          width: 100%;
          padding: 18px;
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
        
        .security-info {
          background-color: #4a5568;
        }
        
        .security-text {
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
          
          <div class="security-info">
            <p class="security-text">
              🔒 Este é um e-mail de segurança. Nunca compartilhe este link com outras pessoas.
            </p>
          </div>
          
          <div class="button-container">
            <a href="${link}" class="confirm-button">
              <span class="text-button">${data.buttonText}</span>
            </a>
          </div>
          
          <div style="text-align: center; margin-top: 24px;">
            <p style="font-size: 14px; color: #718096;">
              Ou copie e cole este link no seu navegador:<br>
              <span style="word-break: break-all; color: #0666EB;">${link}</span>
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

export default generateTemplateConfirmationEmail;