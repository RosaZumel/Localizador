function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const time = now.toLocaleTimeString('es-ES');

    document.getElementById('date').innerText = date;
    document.getElementById('time').innerText = time;

    // Obtener la localización
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById('location').innerText = "Geolocalización no soportada";
    }
}

function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    document.getElementById('location').innerText = `Latitud: ${lat}, Longitud: ${lon}`;
}

function showError() {
    document.getElementById('location').innerText = "No se pudo obtener la localización";
}

// Actualizar la hora y fecha cada segundo
setInterval(updateDateTime, 1000);
updateDateTime();
