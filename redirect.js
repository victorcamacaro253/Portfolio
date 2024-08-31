document.addEventListener('DOMContentLoaded', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        console.log("La geolocalización no es soportada por este navegador.");
    }

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        
        // Aquí puedes usar la latitud y longitud para determinar la ubicación
        obtenerUbicacion(latitude, longitude);
    }

    function error() {
        console.log("No se pudo obtener la ubicación.");
    }

    function obtenerUbicacion(lat, lon) {
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&addressdetails=1`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const countryCode = data.address.country_code.toUpperCase(); // Obtener el código del país en mayúsculas
                establecerIdiomaPorPais(countryCode);
            })
            .catch(error => console.log("Error al obtener la ubicación:", error));
    }

    function establecerIdiomaPorPais(countryCode) {
        let language;

        switch (countryCode) {
            case 'ES':
                language = 'Spanish';
                break;
            case 'US':
            case 'GB':
                language = 'English';
                break;
            default:
                language = 'Other';
                break;
        }

        mostrarMensajeYRedirigir(language);
    }

    function mostrarMensajeYRedirigir(language) {
        // Crear y mostrar el mensaje de redirección
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

        const messageText = document.createElement('p');
        messageText.textContent = `We detected that you are in ${language === 'Spanish' ? 'Spain' : 'the United States'}. It is better to use the ${language} version of the site.`;
        
        const redirectButton = document.createElement('button');
        redirectButton.textContent = `Go to ${language} version`;
        redirectButton.style.marginTop = '10px';
        redirectButton.style.padding = '10px 20px';
        redirectButton.style.border = 'none';
        redirectButton.style.backgroundColor = '#007bff';
        redirectButton.style.color = '#fff';
        redirectButton.style.cursor = 'pointer';

        redirectButton.addEventListener('click', function() {
            if (language === 'English') {
                window.location.href = '/index - ingles.html'; // Página en inglés
            } else if (language === 'Spanish') {
                window.location.href = '/index.html'; // Página en español
            } else {
                window.location.href = '/index-other.html'; // Página para otros idiomas
            }
        });

        messageContainer.appendChild(messageText);
        messageContainer.appendChild(redirectButton);

        document.body.appendChild(messageContainer);
    }
});
