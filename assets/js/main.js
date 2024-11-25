/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () =>{
   const header = document.getElementById('header')
   // Add a class if the bottom offset is greater than 50 of the viewport
   this.scrollY >= 50 ? header.classList.add('bg-header') 
                      : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)
bgHeader()

/*=============== SWIPER SERVICES ===============*/ 
const swiperServices = new Swiper('.services__swiper', {
   loop: true,
   grabCursor: true,
   spaceBetween: 24,
   slidesPerView: 'auto',

   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
})

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
   // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
scrollUp()

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
   origin: 'top',
   distance: '100px',
   duration: 2500,
   delay: 400,
   // reset: true, // Animations repeat
})

sr.reveal(`.home__content, .services__data, .services__swiper, .footer__container`)
sr.reveal(`.home__images`, {origin: 'bottom', delay: 1000})
sr.reveal(`.about__images, .contact__img`, {origin: 'left'})
sr.reveal(`.about__data, .contact__data`, {origin: 'right'})
sr.reveal(`.projects__card`, {interval: 100})

/*=============== CONTROL ===============*/
const controls = document.getElementById('color-controls');
const toggleButton = document.getElementById('toggle-controls');
const openButton = document.getElementById('open-controls');

// Alternar minimización
toggleButton.addEventListener('click', () => {
   controls.classList.toggle('minimized');
   openButton.classList.toggle('hidden', !controls.classList.contains('minimized'));
});

// Mostrar el menú al hacer clic en el botón flotante
openButton.addEventListener('click', () => {
   controls.classList.remove('minimized');
   openButton.classList.add('hidden');
});

// Mapeo de variables CSS a inputs
const colorInputs = {
   '--first-color': 'first-color',
   '--second-color': 'second-color',
   '--title-color': 'title-color',
   '--text-color': 'text-color',
   '--text-color-light': 'text-color-light',
   '--body-color': 'body-color',
   '--container-color': 'container-color',
   '--white-color': 'white-color',
   '--black-color': 'black-color',
   '--gray-border': 'gray-border',
   '--black-border': 'black-border',
};

// Actualización de colores en tiempo real
Object.entries(colorInputs).forEach(([cssVariable, inputId]) => {
   document.getElementById(inputId).addEventListener('input', (e) => {
      document.documentElement.style.setProperty(cssVariable, e.target.value);
   });
});

// Actualización de colores de los botones
document.getElementById('first-gradient-start').addEventListener('input', updateGradient);
document.getElementById('first-gradient-end').addEventListener('input', updateGradient);
document.getElementById('button-white-color').addEventListener('input', (e) => {
   document.documentElement.style.setProperty('--white-color', e.target.value);
});
document.getElementById('button-first-color').addEventListener('input', (e) => {
   document.documentElement.style.setProperty('--first-color', e.target.value);
});

// Función para actualizar el gradiente
function updateGradient() {
   const start = document.getElementById('first-gradient-start').value;
   const end = document.getElementById('first-gradient-end').value;
   const gradient = `linear-gradient(90deg, ${start}, ${end})`;
   document.documentElement.style.setProperty('--first-gradient', gradient);
}
