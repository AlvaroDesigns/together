export const Account = ({ name = "amig@" }: { name?: string }) => {
  return `<html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bienvenido a Together</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            color: #333;
          }
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f7f7f7;
          }
          .header {
            text-align: center;
            padding: 20px 0;
          }
          .header img {
            max-width: 150px;
          }
          .content {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
          }
          .content h1 {
            color: #009688;
            font-size: 18px;
            margin-bottom: 8px;
            font-weight: bold;
          }
          .cta-button {
            display: inline-block;
            margin: 10px 0;
            padding: 10px 20px;
            background-color: #009688;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            text-align: center;
          }
          .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 12px;
            color: #666;
          }
          .footer a {
            color: #009688;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <img
              src="https://together.alvarodesigns.com/logo.png"
              alt="Together Logo"
            />
          </div>
          <div class="content">
            <h1>Hola ${name},</h1>
            <p>
             <strong>Has realizado un cambio personal que afecta a tus datos personales.</strong>
              recuerdas que guardar correctamente tus datos es importante para tu seguridad y 
              confianza en Together.Para más información puedes consultar nuestra
              <a href="#">Política de Privacidad</a>.
            </p>
             <p>
              Por último, nos ayudaría mucho a mejorar conocer el por qué nos has
              conocido. ¿Nos ayudas? Es 1 minuto, prometido 🤗
            </p>
            <a href="#" class="cta-button"
              >¿Como nos has conocido?</a
            >
          </div>
          <div class="footer">
            <p>Estamos encantados de verte 💗</p>
            <p>© Together Labs inc 2025</p>
            <p>
              <a href="#>Twitter</a> |
              <a href="#">Instagram</a> |
              <a href="#">Facebook</a> |
              <a href="#">Linkedin</a>
            </p>
            <p><a href="#">Centro de ayuda</a></p>
          </div>
        </div>
      </body>
    </html>
`;
};
