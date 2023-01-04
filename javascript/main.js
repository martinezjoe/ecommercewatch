// Mostrar menu 

const navMenu = document.getElementById('nav-menu');

const navClose = document.getElementById('nav-close'); 

const navToggle = document.getElementById('nav-toggle');

    

// Usamos el condicional para validar si la constante existe 
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
};

// Para esconder el menú 

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
};


//----------------------------------------------------

// Eliminamos el menu en movil, esto es que cuando le damos click a un enlace, automaticamente el menu se cierra

const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(link=> link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
}));


// -------------------------------------------------

// Cambiar el color del backgroud de la barra de navegacion

const scrollHeader = () =>{
    const header = document.getElementById('header');
    // Cuando la vista supere 50 vh, entonces se cambia el color del background de la barra de nav.
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header');
};


window.addEventListener('scroll', scrollHeader);


// ----------------------------------------------

// Swiper en Testimonios

let testimonialSwiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 30,
    loop: 'true',
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//-----------------------------------------------

// Swiper en Nuevo Productos

let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',

    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});

//------------------------------------------------

// SCROLL SECTIONS ACTIVE LINK

const sections = document.querySelectorAll('section[id]');
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset;

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link');
		}else{
			sectionsClass.classList.remove('active-link');
		}                                                    
	});
};

window.addEventListener('scroll', scrollActive);

// Mostrar el Scroll Up

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up');
    // Cuando el scroll sea mayor a 350 vh se mostrara el Scroll Up
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

//----------------------------------------------------------

//Mostrar el Carrito 

const cart = document.getElementById('cart');

const cartShop = document.getElementById('cart-shop');

const cartClose = document.getElementById('cart-close');

// Mostrar
// Verificamos si la variable existe 
if(cartShop){
    cartShop.addEventListener('click', () =>{
        cart.classList.add('show-cart');
    });
};

// Esconder

if(cartClose){
    cartClose.addEventListener('click', () =>{
        cart.classList.remove('show-cart');
    });
};

//-------------------------------------------------------------

// Tema oscuro 

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

// Previamente se selecciona el tipo 
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Obtenemos el tema actual
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';

// Validamos si el usario ha usado un tema previamente
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme);
};

// Activamos y desactivamos el tema, presionando el boton

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});
