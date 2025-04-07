interface ShareButtonProps {
  url: string;
  title: string;
}

const ShareButton = async ({ url, title }: ShareButtonProps) => {
  if (navigator.share) {
    await navigator
      .share({
        title: 'Compartir URL',
        text: title,
        url: url,
      })
      .then(() => console.log('¡Enlace compartido! Muchas gracias'))
      .catch((error) => console.log('Ups, se ha producido un error', error));
  } else {
    alert('La función de compartir no está soportada en este dispositivo.');
  }
};

export default ShareButton;
