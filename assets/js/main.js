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
   const openButton = document.createElement('button'); // Crear botón flotante dinámicamente

   // Configurar el botón flotante
   openButton.id = 'open-controls';
   openButton.textContent = '+';
   openButton.classList.add('color-controls__open', 'hidden');
   document.body.appendChild(openButton);

   // Alternar minimización (esconder o mostrar)
   toggleButton.addEventListener('click', () => {
      const isMinimized = controls.classList.toggle('minimized');
      toggleButton.textContent = isMinimized ? 'Mostrar' : 'Esconder';
      openButton.classList.toggle('hidden', !isMinimized);
   });

   // Mostrar el menú al hacer clic en el botón flotante
   openButton.addEventListener('click', () => {
      controls.classList.remove('minimized');
      toggleButton.textContent = 'Esconder';
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
      if (gradientStart && gradientEnd) {
         const start = gradientStart.value;
         const end = gradientEnd.value;
         const gradient = `linear-gradient(90deg, ${start}, ${end})`;
         document.documentElement.style.setProperty('--first-gradient', gradient);
      }
   }

   /*=============== ESQUEMAS DE COLORES PREDEFINIDOS ===============*/
   const colorSchemes = {
      innovation: {
         '--first-color': '#1b73e8', // Azul brillante
         '--second-color': '#17a2b8', // Turquesa
         '--title-color': '#1c1e21', // Gris oscuro
         '--text-color': '#495057', // Gris neutro
         '--text-color-light': '#adb5bd', // Gris claro
         '--body-color': '#f8f9fa', // Fondo claro
         '--container-color': '#ffffff', // Blanco
         '--white-color': '#ffffff', // Blanco
         '--black-color': '#212529', // Negro suave
         '--gray-border': '#dee2e6', // Gris claro
         '--black-border': '#343a40', // Gris oscuro
         '--first-gradient': ['#1b73e8', '#17a2b8'],
      },
      energy: {
         '--first-color': '#ff6f00', // Naranja vibrante
         '--second-color': '#fdd835', // Amarillo
         '--title-color': '#4e342e', // Marrón oscuro
         '--text-color': '#6d4c41', // Marrón medio
         '--text-color-light': '#a1887f', // Marrón claro
         '--body-color': '#ffffff', // Blanco
         '--container-color': '#fffde7', // Amarillo claro
         '--white-color': '#ffffff', // Blanco
         '--black-color': '#3e2723', // Marrón profundo
         '--gray-border': '#e0e0e0', // Gris claro
         '--black-border': '#5d4037', // Marrón oscuro
         '--first-gradient': ['#ff6f00', '#fdd835'],
      },
      minimal: {
         '--first-color': '#5a6473', // Azul grisáceo
         '--second-color': '#a3a9b1', // Gris claro
         '--title-color': '#2a2d32', // Gris oscuro
         '--text-color': '#5d636b', // Gris intermedio
         '--text-color-light': '#9aa0a6', // Gris claro
         '--body-color': '#ffffff', // Blanco
         '--container-color': '#f4f6f8', // Gris muy claro
         '--white-color': '#ffffff', // Blanco
         '--black-color': '#1c2023', // Gris profundo
         '--gray-border': '#dfe3e7', // Gris claro
         '--black-border': '#3b4147', // Gris oscuro
         '--first-gradient': ['#5a6473', '#a3a9b1'],
      },
      fresh: {
         '--first-color': '#00bcd4', // Azul turquesa
         '--second-color': '#e91e63', // Rosa brillante
         '--title-color': '#212121', // Gris oscuro
         '--text-color': '#4a4a4a', // Gris medio
         '--text-color-light': '#bdbdbd', // Gris claro
         '--body-color': '#fafafa', // Fondo claro
         '--container-color': '#ffffff', // Blanco
         '--white-color': '#ffffff', // Blanco
         '--black-color': '#000000', // Negro
         '--gray-border': '#e0e0e0', // Gris claro
         '--black-border': '#9e9e9e', // Gris medio
         '--first-gradient': ['#00bcd4', '#e91e63'],
      },
      trust: {
         '--first-color': '#333333', // Gris muy oscuro
         '--second-color': '#ffd700', // Dorado
         '--title-color': '#ffffff', // Blanco
         '--text-color': '#cccccc', // Gris claro
         '--text-color-light': '#aaaaaa', // Gris muy claro
         '--body-color': '#111111', // Negro intenso
         '--container-color': '#222222', // Gris oscuro
         '--white-color': '#ffffff', // Blanco
         '--black-color': '#000000', // Negro
         '--gray-border': '#555555', // Gris medio
         '--black-border': '#999999', // Gris oscuro
         '--first-gradient': ['#333333', '#ffd700'],
      },
      "warm-tone": {
         '--first-color': '#e07a5f', // Terracota
         '--second-color': '#f2cc8f', // Beige cálido
         '--title-color': '#3d405b', // Azul grisáceo oscuro
         '--text-color': '#81b29a', // Verde apagado
         '--text-color-light': '#f4f1de', // Crema
         '--body-color': '#faf9f9', // Blanco cálido
         '--container-color': '#ffffff', // Blanco
         '--white-color': '#ffffff', // Blanco
         '--black-color': '#333333', // Gris oscuro
         '--gray-border': '#dcdcdc', // Gris claro
         '--black-border': '#111111', // Negro
         '--first-gradient': ['#e07a5f', '#f2cc8f'],
      },
      "nature-green": {
         '--first-color': '#2a9d8f', // Verde azulado
         '--second-color': '#e9c46a', // Amarillo suave
         '--title-color': '#264653', // Azul oscuro
         '--text-color': '#6a994e', // Verde hierba
         '--text-color-light': '#a3be8c', // Verde claro
         '--body-color': '#f4f4f4', // Blanco grisáceo
         '--container-color': '#ffffff', // Blanco
         '--white-color': '#ffffff', // Blanco
         '--black-color': '#1e1e1e', // Gris oscuro
         '--gray-border': '#dddddd', // Gris claro
         '--black-border': '#4a4a4a', // Gris oscuro
         '--first-gradient': ['#2a9d8f', '#e9c46a'],
      },
      "pastel-harmony": {
         '--first-color': '#ffcad4', // Rosa pastel
         '--second-color': '#bde0fe', // Azul pastel
         '--title-color': '#a2d2ff', // Azul claro
         '--text-color': '#ffd6a5', // Durazno
         '--text-color-light': '#ffc8dd', // Rosa claro
         '--body-color': '#fffaf3', // Crema
         '--container-color': '#ffffff', // Blanco
         '--white-color': '#ffffff', // Blanco
         '--black-color': '#2c2c2c', // Gris oscuro
         '--gray-border': '#e8e8e8', // Gris claro
         '--black-border': '#888888', // Gris medio
         '--first-gradient': ['#ffcad4', '#bde0fe'],
      },
      "earthy-tones": {
         '--first-color': '#9b2226', // Rojo ladrillo
         '--second-color': '#ae2012', // Rojo oscuro
         '--title-color': '#bb3e03', // Naranja quemado
         '--text-color': '#ca6702', // Amarillo tierra
         '--text-color-light': '#e9d8a6', // Beige claro
         '--body-color': '#fefae0', // Blanco cálido
         '--container-color': '#ffffff', // Blanco
         '--white-color': '#ffffff', // Blanco
         '--black-color': '#001219', // Azul oscuro
         '--gray-border': '#e5e5e5', // Gris claro
         '--black-border': '#333333', // Gris oscuro
         '--first-gradient': ['#9b2226', '#ae2012'],
      },
      "vibrant-neon": {
         '--first-color': '#06d6a0', // Verde neón
         '--second-color': '#118ab2', // Azul neón
         '--title-color': '#ef476f', // Rosa neón
         '--text-color': '#ffd166', // Amarillo neón
         '--text-color-light': '#a9d6e5', // Azul claro
         '--body-color': '#f0f5f9', // Blanco azulado
         '--container-color': '#ffffff', // Blanco
         '--white-color': '#ffffff', // Blanco
         '--black-color': '#073b4c', // Azul muy oscuro
         '--gray-border': '#d4d4d4', // Gris claro
         '--black-border': '#000000', // Negro
         '--first-gradient': ['#06d6a0', '#118ab2'],
      },
      "bold-contrast": {
         '--first-color': '#000000', // Negro
         '--second-color': '#f5cb5c', // Amarillo dorado
         '--title-color': '#3a3a3a', // Gris oscuro
         '--text-color': '#e63946', // Rojo intenso
         '--text-color-light': '#333333', // Gris muy oscuro
         '--body-color': '#ffffff', // Blanco
         '--container-color': '#ffffff', // Blanco
         '--white-color': '#ffffff', // Blanco
         '--black-color': '#000000', // Negro
         '--gray-border': '#e5e5e5', // Gris claro
         '--black-border': '#444444', // Gris oscuro
         '--first-gradient': ['#000000', '#f5cb5c'],
      },
      "sunset-glow": {
         '--first-color': '#f48c06', // Naranja atardecer
         '--second-color': '#dc2f02', // Rojo cálido
         '--title-color': '#370617', // Marrón vino
         '--text-color': '#9d0208', // Rojo oscuro
         '--text-color-light': '#f4a261', // Naranja claro
         '--body-color': '#fefae0', // Blanco cálido
         '--container-color': '#ffffff', // Blanco
         '--white-color': '#ffffff', // Blanco
         '--black-color': '#001219', // Azul oscuro
         '--gray-border': '#dcdcdc', // Gris claro
         '--black-border': '#202020', // Gris oscuro
         '--first-gradient': ['#f48c06', '#dc2f02'],
      },
      "icy-blue": {
         '--first-color': '#4361ee', // Azul hielo
         '--second-color': '#48cae4', // Azul turquesa
         '--title-color': '#023e8a', // Azul profundo
         '--text-color': '#0077b6', // Azul medio
         '--text-color-light': '#90e0ef', // Azul claro
         '--body-color': '#f8fcff', // Blanco azulado
         '--container-color': '#ffffff', // Blanco
         '--white-color': '#ffffff', // Blanco
         '--black-color': '#03045e', // Azul oscuro
         '--gray-border': '#e3e3e3', // Gris claro
         '--black-border': '#000000', // Negro
         '--first-gradient': ['#4361ee', '#48cae4'],
      },
   };


   function applyScheme(scheme) {
      const selectedScheme = colorSchemes[scheme];
      if (!selectedScheme) {
         console.error(`Esquema de colores "${scheme}" no encontrado.`);
         return;
      }

      Object.entries(selectedScheme).forEach(([cssVariable, value]) => {
         if (Array.isArray(value)) {
            if (gradientStart && gradientEnd) {
               gradientStart.value = value[0];
               gradientEnd.value = value[1];
               updateGradient();
            }
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

   const schemeSelector = document.getElementById('color-scheme');
   if (schemeSelector) {
      schemeSelector.addEventListener('change', (e) => {
         applyScheme(e.target.value);
      });
   } else {
      console.error('El selector de esquemas "color-scheme" no está disponible.');
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

