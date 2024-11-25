/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
   navToggle = document.getElementById('nav-toggle'),
   navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if (navClose) {
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
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
const scrollUp = () => {
   const scrollUp = document.getElementById('scroll-up')
   // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
   this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
      : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
scrollUp()

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
   const scrollDown = window.scrollY

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
         sectionTop = current.offsetTop - 58,
         sectionId = current.getAttribute('id'),
         sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
         sectionsClass.classList.add('active-link')
      } else {
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
sr.reveal(`.home__images`, { origin: 'bottom', delay: 1000 })
sr.reveal(`.about__images, .contact__img`, { origin: 'left' })
sr.reveal(`.about__data, .contact__data`, { origin: 'right' })
sr.reveal(`.projects__card`, { interval: 100 })
document.addEventListener('DOMContentLoaded', () => {
   /*=============== CONTROL PRINCIPAL ===============*/
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

   /*=============== ACTUALIZACIÓN EN TIEMPO REAL ===============*/
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
      const inputElement = document.getElementById(inputId);
      if (inputElement) {
         inputElement.addEventListener('input', (e) => {
            document.documentElement.style.setProperty(cssVariable, e.target.value);
         });
      }
   });

   // Actualización de colores del gradiente
   const gradientStart = document.getElementById('first-gradient-start');
   const gradientEnd = document.getElementById('first-gradient-end');

   if (gradientStart && gradientEnd) {
      gradientStart.addEventListener('input', updateGradient);
      gradientEnd.addEventListener('input', updateGradient);
   }

   function updateGradient() {
      const start = gradientStart.value;
      const end = gradientEnd.value;
      const gradient = `linear-gradient(90deg, ${start}, ${end})`;
      document.documentElement.style.setProperty('--first-gradient', gradient);
   }

   /*=============== ESQUEMAS DE COLORES PREDEFINIDOS ===============*/
   const colorSchemes = {
      innovation: {
         '--first-color': '#1b73e8',
         '--second-color': '#17a2b8',
         '--title-color': '#1c1e21',
         '--text-color': '#495057',
         '--text-color-light': '#adb5bd',
         '--body-color': '#f8f9fa',
         '--container-color': '#ffffff',
         '--white-color': '#ffffff',
         '--black-color': '#212529',
         '--gray-border': '#dee2e6',
         '--black-border': '#343a40',
         '--first-gradient': ['#1b73e8', '#17a2b8'],
      },
      energy: {
         '--first-color': '#ff6f00',
         '--second-color': '#fdd835',
         '--title-color': '#4e342e',
         '--text-color': '#6d4c41',
         '--text-color-light': '#a1887f',
         '--body-color': '#ffffff',
         '--container-color': '#fffde7',
         '--white-color': '#ffffff',
         '--black-color': '#3e2723',
         '--gray-border': '#e0e0e0',
         '--black-border': '#5d4037',
         '--first-gradient': ['#ff6f00', '#fdd835'],
      },
      minimal: {
         '--first-color': '#5a6473',
         '--second-color': '#a3a9b1',
         '--title-color': '#2a2d32',
         '--text-color': '#5d636b',
         '--text-color-light': '#9aa0a6',
         '--body-color': '#ffffff',
         '--container-color': '#f4f6f8',
         '--white-color': '#ffffff',
         '--black-color': '#1c2023',
         '--gray-border': '#dfe3e7',
         '--black-border': '#3b4147',
         '--first-gradient': ['#5a6473', '#a3a9b1'],
      },
      fresh: {
         '--first-color': '#00bcd4',
         '--second-color': '#e91e63',
         '--title-color': '#212121',
         '--text-color': '#4a4a4a',
         '--text-color-light': '#bdbdbd',
         '--body-color': '#fafafa',
         '--container-color': '#ffffff',
         '--white-color': '#ffffff',
         '--black-color': '#000000',
         '--gray-border': '#e0e0e0',
         '--black-border': '#9e9e9e',
         '--first-gradient': ['#00bcd4', '#e91e63'],
      },
      trust: {
         '--first-color': '#333333',
         '--second-color': '#ffd700',
         '--title-color': '#ffffff',
         '--text-color': '#cccccc',
         '--text-color-light': '#aaaaaa',
         '--body-color': '#111111',
         '--container-color': '#222222',
         '--white-color': '#ffffff',
         '--black-color': '#000000',
         '--gray-border': '#555555',
         '--black-border': '#999999',
         '--first-gradient': ['#333333', '#ffd700'],
      },
      // Nuevos esquemas
      "warm-tone": {
         '--first-color': '#e07a5f',
         '--second-color': '#f2cc8f',
         '--title-color': '#3d405b',
         '--text-color': '#81b29a',
         '--text-color-light': '#f4f1de',
         '--body-color': '#faf9f9',
         '--container-color': '#ffffff',
         '--white-color': '#ffffff',
         '--black-color': '#333333',
         '--gray-border': '#dcdcdc',
         '--black-border': '#111111',
         '--first-gradient': ['#e07a5f', '#f2cc8f'],
      },
      "nature-green": {
         '--first-color': '#2a9d8f',
         '--second-color': '#e9c46a',
         '--title-color': '#264653',
         '--text-color': '#6a994e',
         '--text-color-light': '#a3be8c',
         '--body-color': '#f4f4f4',
         '--container-color': '#ffffff',
         '--white-color': '#ffffff',
         '--black-color': '#1e1e1e',
         '--gray-border': '#dddddd',
         '--black-border': '#4a4a4a',
         '--first-gradient': ['#2a9d8f', '#e9c46a'],
      },
      "pastel-harmony": {
         '--first-color': '#ffcad4',
         '--second-color': '#bde0fe',
         '--title-color': '#a2d2ff',
         '--text-color': '#ffd6a5',
         '--text-color-light': '#ffc8dd',
         '--body-color': '#fffaf3',
         '--container-color': '#ffffff',
         '--white-color': '#ffffff',
         '--black-color': '#2c2c2c',
         '--gray-border': '#e8e8e8',
         '--black-border': '#888888',
         '--first-gradient': ['#ffcad4', '#bde0fe'],
      },
      "earthy-tones": {
         '--first-color': '#9b2226',
         '--second-color': '#ae2012',
         '--title-color': '#bb3e03',
         '--text-color': '#ca6702',
         '--text-color-light': '#e9d8a6',
         '--body-color': '#fefae0',
         '--container-color': '#ffffff',
         '--white-color': '#ffffff',
         '--black-color': '#001219',
         '--gray-border': '#e5e5e5',
         '--black-border': '#333333',
         '--first-gradient': ['#9b2226', '#ae2012'],
      },
      "vibrant-neon": {
         '--first-color': '#06d6a0',
         '--second-color': '#118ab2',
         '--title-color': '#ef476f',
         '--text-color': '#ffd166',
         '--text-color-light': '#a9d6e5',
         '--body-color': '#f0f5f9',
         '--container-color': '#ffffff',
         '--white-color': '#ffffff',
         '--black-color': '#073b4c',
         '--gray-border': '#d4d4d4',
         '--black-border': '#000000',
         '--first-gradient': ['#06d6a0', '#118ab2'],
      },
      "bold-contrast": {
         '--first-color': '#000000',
         '--second-color': '#f5cb5c',
         '--title-color': '#3a3a3a',
         '--text-color': '#e63946',
         '--text-color-light': '#333333',
         '--body-color': '#ffffff',
         '--container-color': '#ffffff',
         '--white-color': '#ffffff',
         '--black-color': '#000000',
         '--gray-border': '#e5e5e5',
         '--black-border': '#444444',
         '--first-gradient': ['#000000', '#f5cb5c'],
      },
      "sunset-glow": {
         '--first-color': '#f48c06',
         '--second-color': '#dc2f02',
         '--title-color': '#370617',
         '--text-color': '#9d0208',
         '--text-color-light': '#f4a261',
         '--body-color': '#fefae0',
         '--container-color': '#ffffff',
         '--white-color': '#ffffff',
         '--black-color': '#001219',
         '--gray-border': '#dcdcdc',
         '--black-border': '#202020',
         '--first-gradient': ['#f48c06', '#dc2f02'],
      },
      "icy-blue": {
         '--first-color': '#4361ee',
         '--second-color': '#48cae4',
         '--title-color': '#023e8a',
         '--text-color': '#0077b6',
         '--text-color-light': '#90e0ef',
         '--body-color': '#f8fcff',
         '--container-color': '#ffffff',
         '--white-color': '#ffffff',
         '--black-color': '#03045e',
         '--gray-border': '#e3e3e3',
         '--black-border': '#000000',
         '--first-gradient': ['#4361ee', '#48cae4'],
      },
   };
   

   // Función para aplicar un esquema
   const schemeSelector = document.getElementById('color-scheme');
   if (schemeSelector) {
      schemeSelector.addEventListener('change', (e) => {
         applyScheme(e.target.value);
      });
   }

   function applyScheme(scheme) {
      const selectedScheme = colorSchemes[scheme];
      Object.entries(selectedScheme).forEach(([cssVariable, value]) => {
         if (Array.isArray(value)) {
            gradientStart.value = value[0];
            gradientEnd.value = value[1];
            updateGradient();
         } else {
            document.documentElement.style.setProperty(cssVariable, value);
            const inputId = colorInputs[cssVariable];
            if (inputId) {
               const inputElement = document.getElementById(inputId);
               if (inputElement) inputElement.value = value;
            }
         }
      });
   }

   /*=============== CONTROL DE CATEGORÍAS ===============*/
   const categoryButtons = document.querySelectorAll('.color-category-btn');
   const categoryContents = document.querySelectorAll('.color-category-content');

   if (categoryButtons.length && categoryContents.length) {
      categoryButtons.forEach((button) => {
         button.addEventListener('click', () => {
            // Remover la clase "active" de todas las categorías
            categoryButtons.forEach((btn) => btn.classList.remove('active'));
            categoryContents.forEach((content) => content.classList.remove('active'));

            // Activar la categoría seleccionada
            button.classList.add('active');
            const categoryId = button.getAttribute('data-category');
            const targetContent = document.getElementById(categoryId);
            if (targetContent) {
               targetContent.classList.add('active');
            }
         });
      });
   } else {
      console.error('No se encontraron los botones o contenidos de categorías.');
   }
});


/*=============== icon ===============*/
const header = document.querySelector('.header');
const logo = document.querySelector('.nav__logo-img');

function adjustLogoColor() {
   // Detecta el fondo actual del header
   const backgroundColor = window.getComputedStyle(header).backgroundColor;

   // Extrae los valores RGB
   const [r, g, b] = backgroundColor.match(/\d+/g).map(Number);

   // Calcula la luminosidad
   const brightness = (r * 0.299 + g * 0.587 + b * 0.114); // Fórmula de luminosidad

   // Aplica la clase según la luminosidad
   if (brightness < 128) {
      header.classList.add('dark-theme');
      header.classList.remove('light-theme');
   } else {
      header.classList.add('light-theme');
      header.classList.remove('dark-theme');
   }
}

// Ajusta el color del logo al cargar la página y al desplazarse
window.addEventListener('scroll', adjustLogoColor);
window.addEventListener('load', adjustLogoColor);

