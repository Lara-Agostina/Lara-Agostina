// Array con las rutas de tus imágenes
const misFotos = [
    'ruta/de/tu/foto1.jpg',
    'ruta/de/tu/foto2.jpg',
    'ruta/de/tu/foto3.jpg',
    'ruta/de/tu/foto4.jpg'
];

const contenedor = document.getElementById('grid-fotos');

// Función para cargar las fotos automáticamente
misFotos.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = "Fotografía de Lara Agostina";
    contenedor.appendChild(img);
});

// Array con las rutas de tus imágenes y sus descripciones
const fotosGaleria = [
    { src: 'ruta/a/tu/foto-personal-1.jpg', alt: 'Atardecer en la ciudad' },
    { src: 'ruta/a/tu/foto-personal-2.jpg', alt: 'Retrato en blanco y negro' },
    { src: 'ruta/a/tu/foto-personal-3.jpg', alt: 'Detalle de la naturaleza' },
    { src: 'ruta/a/tu/foto-personal-4.jpg', alt: 'Arquitectura moderna' },
    { src: 'ruta/a/tu/foto-personal-5.jpg', alt: 'Viaje a la montaña' },
    { src: 'ruta/a/tu/foto-personal-6.jpg', alt: 'Comida artística' },
];

const galleryGrid = document.getElementById('gallery-grid');

// Si no quieres rellenar el HTML manualmente, borra los <div> del HTML y usa este JS
// para cargar todas las fotos desde este array.
// Si ya tienes los divs en HTML, puedes dejar este JS comentado o borrarlo.
/*
fotosGaleria.forEach((foto, index) => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');
    galleryItem.setAttribute('data-aos', 'zoom-in');
    galleryItem.setAttribute('data-aos-delay', index * 100); // Retraso para el efecto AOS

    const img = document.createElement('img');
    img.src = foto.src;
    img.alt = foto.alt;

    galleryItem.appendChild(img);
    galleryGrid.appendChild(galleryItem);
});
*/

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn = document.querySelector('.close-lightbox');

// Seleccionamos todas las imágenes de certificados y de la galería
const images = document.querySelectorAll('.cert-card img, .gallery-item img');

images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        // Agregamos una pequeña demora para la animación
        setTimeout(() => lightbox.classList.add('active'), 10);
        
        lightboxImg.src = img.src;
        lightboxCaption.innerHTML = img.alt;
    });
});

// Cerrar al hacer clic en la X o fuera de la imagen
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.classList.remove('active');
        setTimeout(() => lightbox.style.display = 'none', 300);
    }
});

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-list');

// Abrir el menú al hacer clic en las rayitas
menu.addEventListener('click', function() {
    menuLinks.classList.toggle('active');
});

// Cerrar el menú automáticamente cuando haces clic en una sección
document.querySelectorAll('.nav-list a').forEach(n => n.addEventListener('click', () => {
    menuLinks.classList.remove('active');
}));