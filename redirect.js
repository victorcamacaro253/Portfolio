document.addEventListener('DOMContentLoaded', function() {
    // Detectar el idioma del navegador
    const userLang = navigator.language || navigator.userLanguage;

    // Solo mostrar el mensaje si el idioma no es español
    if (!userLang.startsWith('es')) {
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
        messageText.textContent = `We detected that you are in ${userLang.startsWith('en') ? 'the United States' : 'another country'}. It is better to use the ${userLang.startsWith('en') ? 'English' : 'Spanish'} version of the site.`;

        const redirectButton = document.createElement('button');
        redirectButton.textContent = `Go to ${userLang.startsWith('en') ? 'English' : 'Spanish'} version`;
        redirectButton.style.marginTop = '10px';
        redirectButton.style.padding = '10px 20px';
        redirectButton.style.border = 'none';
        redirectButton.style.backgroundColor = '#007bff';
        redirectButton.style.color = '#fff';
        redirectButton.style.cursor = 'pointer';

        redirectButton.addEventListener('click', function() {
            if (userLang.startsWith('en')) {
                window.location.href = '/index - ingles.html'; // Página en inglés
            } else {
                window.location.href = '/index-other.html'; // Página para otros idiomas (ajusta el nombre del archivo según sea necesario)
            }
        });

        messageContainer.appendChild(messageText);
        messageContainer.appendChild(redirectButton);

        document.body.appendChild(messageContainer);
    }
});
