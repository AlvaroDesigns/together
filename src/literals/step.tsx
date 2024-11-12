const STEP1 = {
  TITLE: 'Datos de contacto',
  TEXT: 'Indica los siguientes datos a los que te enviaremos toda la información de tu póliza.',
};

const STEP2 = {
  TITLE: 'Datos personales',
  TEXT: 'Completa tu información personal, la utilizaremos para completar tu póliza.',
};

const STEP3 = {
  TITLE: 'Dirección postal',
  TEXT: 'Rellena los campos con tu dirección actual para completar el registro.',
};

const STEP4 = {
  TITLE: 'Tu póliza de orfandad gratuita',
  TEXT: 'Una vez revisada la documentación pulsa la casilla ‘Aceptar’ e introduce el PIN enviado por SMS a su móvil. Por último pulsa ‘Firmar’.',
};

const STEP5 = {
  TITLE: 'Firma Rechazada',
  SUBTITLE:
    'Has rechazado la firma de la póliza recuerda que para disfrutar de la cobertura de este seguro debes aceptar la firma.',
  TEXT: 'Si tienes dudas puedes ponerte en contacto con nosotros en el 900 300 066 o  916 024 600.',
  DESCRIPTIONS: [
    'Has rechazado la firma de la póliza recuerda que para disfrutar de la cobertura de este seguro debes aceptar la firma.',
    'Si tienes dudas puedes ponerte en contacto con nosotros en el',
    '900 300 066 o 916 024 600.',
  ],
};

const NOT_FOUND = {
  TITLE: 'Promoción no encontrada',
  DESCRIPTIONS: [
    'Para contratar el seguro gratuito de orfandad y así proteger a tus hijos durante 2 años, puedes acceder desde el enlace del email que te envió tu colegio.',
    'Gracias por confiar en Nationale-Nederlanden.',
  ],
};

const STEP_INDICATIONS = [
  {
    labelText: 'Contacto',
  },
  {
    labelText: 'Sobre ti',
  },
  {
    labelText: 'Dirección',
  },
  {
    labelText: 'Firma',
  },
];

const THANKS = {
  TITLE_OK: 'Proceso de alta completado',
  TITLE_KO: 'El proceso no se ha firmado correctamente',
  TEXT_OK:
    'En los próximos días se completara tu proceso, te llegara un email con los pasos a seguir.',
  TEXT_KO: 'Por favor intentalo nuevo mas tarde.',
};

export { STEP1, STEP2, STEP3, STEP4, STEP5, STEP_INDICATIONS, NOT_FOUND, THANKS };
