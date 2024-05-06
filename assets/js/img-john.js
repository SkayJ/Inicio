const imagenPequena = document.getElementById('John');
const imagenGrande = document.getElementById('Forma');
let isResponsive = false;

function checkScreenSize() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        isResponsive = true;
    } else {
        isResponsive = false;
        activateImageMovement();
    }
}

function activateImageMovement() {
    document.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Calcular la posición de las imágenes en función de la posición del mouse con un desplazamiento mínimo
        const imagenPequenaX = (windowWidth - mouseX) / 20; // Ajusta el valor de desplazamiento según necesites
        const imagenPequenaY = (windowHeight - mouseY) / 20; // Ajusta el valor de desplazamiento según necesites
        const imagenGrandeX = (windowWidth - mouseX) / 10; // Ajusta el valor de desplazamiento según necesites
        const imagenGrandeY = (windowHeight - mouseY) / 10; // Ajusta el valor de desplazamiento según necesites

        imagenPequena.style.left = imagenPequenaX + 'px';
        imagenPequena.style.top = imagenPequenaY + 'px';
        imagenGrande.style.left = imagenGrandeX + 'px';
        imagenGrande.style.top = imagenGrandeY + 'px';
    });
}

// Verificar el tamaño de la pantalla al cargar la página
checkScreenSize();

// Verificar el tamaño de la pantalla cuando se redimensiona
window.addEventListener('resize', checkScreenSize);