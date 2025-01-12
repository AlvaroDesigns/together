export const Welcome = () => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bienvenida</title>
  <style>
    /* Estilos generales */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }

    .email-container {
      max-width: 600px;
      margin: 20px auto;
      background: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    /* Encabezado */
    .email-header {
      background-color: #0073e6;
      padding: 20px;
      text-align: center;
    }

    .email-header img {
      max-width: 150px;
      height: auto;
    }

    /* Cuerpo del correo */
    .email-body {
      padding: 20px;
      color: #333333;
      line-height: 1.6;
      text-align: center;
    }

    .email-body h1 {
      font-size: 24px;
      color: #0073e6;
      margin-bottom: 10px;
    }

    .email-body p {
      font-size: 16px;
      margin-bottom: 20px;
    }

    /* Footer */
    .email-footer {
      text-align: center;
      padding: 20px;
      background-color: #f4f4f4;
      border-top: 1px solid #dddddd;
      color: #666666;
    }

    .email-footer img {
      max-width: 120px;
      height: auto;
      margin-bottom: 10px;
    }

    .email-footer p {
      font-size: 12px;
      margin: 0;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <!-- Encabezado -->
    <div class="email-header">
      <img src="https://together.alvarodesigns.com/logo.png" alt="Together Logo">
    </div>

    <!-- Cuerpo -->
    <div class="email-body">
      <h1>Hola Pablo,</h1>
      <p>Estamos encantados de que inicies esta etapa con nosotros. ¡Te damos la bienvenida con los brazos abiertos a Together Labs!</p>
    </div>

    <!-- Footer -->
    <div class="email-footer">
      <img src="https://together.alvarodesigns.com/logo_footer_black.png" alt="Together Footer Logo">
      <p>© 2025 Together Labs Inc.</p>
    </div>
  </div>
</body>
</html>
`;
};
