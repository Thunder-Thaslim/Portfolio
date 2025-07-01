/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click' , linkAction))

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav__link");

window.addEventListener("scroll", () => {
  let currentSectionId = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active-link");
    if (link.getAttribute("href").includes(currentSectionId)) {
      link.classList.add("active-link");
    }
  });
});


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById('header');
    // when te scroll is greater than 80 viewport height, add the scroll-hearder class to header tag
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // when te scroll is greater than 350 viewport height, add the scroll-hearder class to scroll-top class
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

/*==================== ABOUT TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        
        tabContents.forEach((tabContent) => {
           tabContent.classList.remove('tab__active'); 
        });

        target.classList.add('tab__active');

        tabs.forEach((tab) =>{
            tab.classList.remove('tab__active');
        });

        tab.classList.add('tab__active');
    });
});

/*=============== CONTACT FORM =============== */
const contactForm = document.getElementById('contact-form'),
   contactName = document.getElementById('contact-name'),
   contactEmail = document.getElementById('contact-email'),
   contactSubject = document.getElementById('contact-subject'),
   contactMessage = document.getElementById('contact-message'),
   errorMessage = document.getElementById('error-message')

const sendEmail = (e) => {
  e.preventDefault();
    
    // check if the field has a value
    if (
        contactName.value ===''||
        contactEmail.value ===''||
        contactSubject.value ===''||
        contactMessage.value ===''
    ) {
        // show mesage
        errorMessage.textContent = 'Write all the input fields'
    } else {
        // serviceID - templateID - #form - publickey
        emailjs.sendForm(
            'service_ihr4nde',
            'template_jfs3j1r',
            '#contact-form',
            '1RgXWBAUCPF-JXver'
        ).then(() => {
            // show message and add color, window + dot to open emoji
            errorMessage.classList.add('color-first');
            errorMessage.textContent = 'Message sent ✔️';

            // remove message after 5 seconds
            setTimeout(() => {
                errorMessage.textContent = '';
            }, 5000);
        }, (error) => {
            alert('OOPs! SOMETHING WENT WRONG...', error);
        });

        //clear input field
        contactName.value = '';
        contactEmail.value = '';
        contactSubject.value = '';
        contactMessage.value = '';
    }
   };

contactForm.addEventListener('submit', sendEmail);


/*=============== NEXT PAGE =============== */
document.getElementById("mobiledev-page").addEventListener("click", function() {
    window.location.href = "Nextpage/mobiledevpage.html";
    });

document.getElementById("web-page").addEventListener("click", function() {
    window.location.href = "Nextpage/webpage.html";
    });

document.getElementById("photo-page").addEventListener("click", function() {
    window.location.href = "Nextpage/photopage.html";
    });

document.getElementById("video-page").addEventListener("click", function() {
    window.location.href = "Nextpage/videopage.html";
    });

document.getElementById("business-page").addEventListener("click", function() {
    window.location.href = "Nextpage/businesspage.html";
    });

document.getElementById("report-page").addEventListener("click", function() {
    window.location.href = "Nextpage/marketpage.html";
    });