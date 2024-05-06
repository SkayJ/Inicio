const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 50) {
		header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

//======== Obtener todos los enlaces del menú de navegación========//

// Obtener todos los enlaces del menú de navegación
const navLinks = document.querySelectorAll('.nav-list ul li a');

// Agregar un evento de clic a cada enlace
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remover la clase "active" de todos los enlaces
    navLinks.forEach(l => l.classList.remove('active'));
    // Agregar la clase "active" al enlace clickeado
    link.classList.add('active');
  });
});