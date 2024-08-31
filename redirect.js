// redirect.js

document.addEventListener('DOMContentLoaded', function() {
    // Detectar el idioma del navegador
    const userLang = navigator.language || navigator.userLanguage;

    // Obtener el contenedor para mostrar el mensaje
    const messageContainer = document.createElement('div');
    messageContainer.id = 'lang-message';
    messageContainer.style.position = 'fixed';
    messageContainer.style.bottom = '10px';
    messageContainer.style.right = '10px';
    messageContainer.style.padding = '20px';
    messageContainer.style.backgroundColor = '#fff';
    messageContainer.style.border = '1px solid #ddd';
    messageContainer.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    messageContainer.style.zIndex = '1000';

    // Mensaje y botón de redirección
    const messageText = document.createElement('p');
    messageText.textContent = `We detected that you are in ${userLang.startsWith('es') ? 'Spain' : 'the United States'}. It is better to use the ${userLang.startsWith('es') ? 'Spanish' : 'English'} version of the site.`;
    
    const redirectButton = document.createElement('button');
    redirectButton.textContent = `Go to ${userLang.startsWith('es') ? 'Spanish' : 'English'} version`;
    redirectButton.style.marginTop = '10px';
    redirectButton.style.padding = '10px 20px';
    redirectButton.style.border = 'none';
    redirectButton.style.backgroundColor = '#007bff';
    redirectButton.style.color = '#fff';
    redirectButton.style.cursor = 'pointer';

    redirectButton.addEventListener('click', function() {
       // Obtén el idioma del usuario
const userLang = navigator.language || navigator.userLanguage;

if (userLang.startsWith('en')) {
    window.location.href = '/index - ingles.htm'; // Página en inglés
} else if (!userLang.startsWith('es')) {
    // Redirige a una página para otros idiomas y muestra el mensaje
    window.location.href = '/index-other.html'; // Página para otros idiomas (ajusta el nombre del archivo según sea necesario)
} else {
    // Si el idioma es español, no hagas redirección y no muestres mensaje
    // Aquí puedes colocar un mensaje opcional o simplemente no hacer nada
    console.log('Idioma detectado: Español. No se requiere redirección.');
}

    });

    messageContainer.appendChild(messageText);
    messageContainer.appendChild(redirectButton);

    document.body.appendChild(messageContainer);
});
