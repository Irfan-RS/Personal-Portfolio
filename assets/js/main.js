const initPortfolio = () => {
   console.log('Initializing portfolio scripts...');

   /*=============== BLUR HEADER =================*/
   const blurHeader = () => {
      const header = document.getElementById('header');
      if (header) {
         window.scrollY >= 50 ? header.classList.add('blur-header') 
                              : header.classList.remove('blur-header');
      }
   }
   window.addEventListener('scroll', blurHeader);


   /*=============== CUSTOM CURSOR ===============*/
   try {
      const cursorDot = document.getElementById('cursor-dot');
      const cursorOutline = document.getElementById('cursor-outline');

      if (cursorDot && cursorOutline) {
         const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
         
         if (!isTouchDevice) {
            cursorDot.style.display = 'block';
            cursorOutline.style.display = 'block';

            window.addEventListener('mousemove', (e) => {
               const posX = e.clientX;
               const posY = e.clientY;

               cursorDot.style.left = `${posX}px`;
               cursorDot.style.top = `${posY}px`;

               cursorOutline.animate({
                  left: `${posX}px`,
                  top: `${posY}px`
               }, { duration: 500, fill: 'forwards' });
            });

            const interactiveElements = document.querySelectorAll('a, button, .work__button');
            
            interactiveElements.forEach(el => {
               el.addEventListener('mouseenter', () => {
                  cursorOutline.style.width = '60px';
                  cursorOutline.style.height = '60px';
                  cursorOutline.style.backgroundColor = 'rgba(162, 128, 255, 0.15)';
                  cursorOutline.style.borderColor = 'transparent';
                  cursorDot.style.transform = 'translate(-50%, -50%) scale(0)';
               });

               el.addEventListener('mouseleave', () => {
                  cursorOutline.style.width = '40px';
                  cursorOutline.style.height = '40px';
                  cursorOutline.style.backgroundColor = 'transparent';
                  cursorOutline.style.borderColor = 'var(--first-color-light)';
                  cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
               });
            });
         }
      }
   } catch (cursorError) {
      console.error('Custom cursor initialization failed:', cursorError);
   }


   /*=============== HOME SPLIT TEXT ===============*/
   try {
      if (typeof anime !== 'undefined') {
         anime({
            targets: '.home__name',
            opacity: [0, 1],
            translateY: [40, 0],
            easing: 'easeOutExpo',
            duration: 1500,
            delay: 300
         });

         anime({
            targets: '.home__profession span',
            opacity: [0, 1],
            translateX: [-30, 0],
            easing: 'easeOutExpo',
            duration: 1200,
            delay: anime.stagger(200, {start: 600})
         });

         anime({
            targets: '.home__greeting, .home__description, .home__buttons',
            opacity: [0, 1],
            translateY: [20, 0],
            easing: 'easeOutExpo',
            duration: 1200,
            delay: anime.stagger(150, {start: 800})
         });

         anime({
            targets: '.home__image-box',
            opacity: [0, 1],
            scale: [0.8, 1],
            easing: 'easeOutExpo',
            duration: 1800,
            delay: 500
         });
      } else {
         console.warn('anime.js is not loaded.');
      }
   } catch (animeError) {
      console.error('Anime.js animations failed to run:', animeError);
   }


   /*=============== WORK TABS ===============*/
   try {
      const tabs = document.querySelectorAll('[data-target]');
      const tabContents = document.querySelectorAll('.work__content');

      console.log(`Found ${tabs.length} tabs and ${tabContents.length} tab contents.`);

      tabs.forEach(tab => {
         tab.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSelector = tab.dataset.target;
            console.log(`Tab clicked: targeting ${targetSelector}`);
            
            const target = document.querySelector(targetSelector);

            if (target) {
               // Hide all content areas
               tabContents.forEach(tabContent => {
                  tabContent.classList.remove('active-content');
               });

               // Show target content
               target.classList.add('active-content');
               console.log(`Successfully activated content: ${targetSelector}`);

               // Update active classes on buttons
               tabs.forEach(t => {
                  t.classList.remove('active-tab');
               });
               tab.classList.add('active-tab');
            } else {
               console.error(`Target not found for selector: ${targetSelector}`);
            }
         });
      });
   } catch (tabsError) {
      console.error('Work tabs switching initialization failed:', tabsError);
   }


   /*=============== COPY EMAIL IN CONTACT ===============*/
   const copyEmailBtn = document.getElementById('copy-email-btn');
   const contactEmail = document.getElementById('contact-email');

   if (copyEmailBtn && contactEmail) {
      copyEmailBtn.addEventListener('click', () => {
         const emailText = contactEmail.textContent;

         navigator.clipboard.writeText(emailText).then(() => {
            const originalHTML = copyEmailBtn.innerHTML;
            
            copyEmailBtn.innerHTML = 'Copied! <i class="ri-check-line"></i>';
            copyEmailBtn.style.background = 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)';
            copyEmailBtn.style.boxShadow = '0 8px 20px rgba(46, 204, 113, 0.3)';

            setTimeout(() => {
               copyEmailBtn.innerHTML = originalHTML;
               copyEmailBtn.style.background = '';
               copyEmailBtn.style.boxShadow = '';
            }, 2500);
         }).catch(err => {
            console.error('Failed to copy text: ', err);
         });
      });
   }


   /*=============== CURRENT YEAR OF THE FOOTER ===============*/ 
   const yearSpan = document.getElementById('footer-year');
   if (yearSpan) {
      yearSpan.textContent = `© ${new Date().getFullYear()}`;
   }


   /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
   const sections = document.querySelectorAll('section[id]');

   const scrollActive = () => {
      const scrollDown = window.scrollY;

      sections.forEach(current => {
         const sectionHeight = current.offsetHeight,
               sectionTop = current.offsetTop - 58,
               sectionId = current.getAttribute('id'),
               sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

         if (sectionsClass) {
            if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
               sectionsClass.classList.add('active-link');
            } else {
               sectionsClass.classList.remove('active-link');
            }
         }
      });
   }
   window.addEventListener('scroll', scrollActive);


   /*=============== PROJECTS SWIPER ===============*/
   try {
      if (typeof Swiper !== 'undefined') {
         let projectsSwiper = new Swiper('.projects__container', {
            loop: true,
            spaceBetween: 24,
            grabCursor: true,
            
            navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
            },
            pagination: {
               el: '.swiper-pagination',
               clickable: true,
               dynamicBullets: true,
            },
            breakpoints: {
               576: {
                  slidesPerView: 1,
               },
               768: {
                  slidesPerView: 2,
               },
               1150: {
                  slidesPerView: 3,
               },
            },
         });
      } else {
         console.warn('Swiper is not loaded.');
      }
   } catch (swiperError) {
      console.error('Projects Swiper initialization failed:', swiperError);
   }

   /*=============== VISITOR COUNTER ===============*/
   const updateCounter = async () => {
      const visitCountEl = document.getElementById('visit-count');
      if (visitCountEl) {
         const hasVisited = localStorage.getItem('has_visited_v3');
         const url = hasVisited 
            ? 'https://api.counterapi.dev/v1/irfansudarani/visits_v3/' 
            : 'https://api.counterapi.dev/v1/irfansudarani/visits_v3/up';
         
         try {
            const response = await fetch(url);
            if (response.ok) {
               const data = await response.json();
               visitCountEl.textContent = Number(data.count).toLocaleString();
               if (!hasVisited) {
                  localStorage.setItem('has_visited_v3', 'true');
               }
            } else {
               throw new Error('API response not OK');
            }
         } catch (error) {
            console.error('Counter API failed, using fallback:', error);
            let localVisits = localStorage.getItem('visit_count_fallback_v3');
            if (!localVisits) {
               localVisits = 300;
               localStorage.setItem('visit_count_fallback_v3', localVisits);
            } else if (!hasVisited) {
               localVisits = parseInt(localVisits, 10) + 1;
               localStorage.setItem('visit_count_fallback_v3', localVisits);
            }
            visitCountEl.textContent = Number(localVisits).toLocaleString();
            if (!hasVisited) {
               localStorage.setItem('has_visited_v3', 'true');
            }
         }
      }
   };
   updateCounter();

   /*=============== SCROLL REVEAL ANIMATION ===============*/
   if (typeof ScrollReveal !== 'undefined') {
      const sr = ScrollReveal({
         origin: 'top',
         distance: '60px',
         duration: 2000,
         delay: 300,
         // reset: true // Animations repeat
      });

      sr.reveal('.contact__data', { origin: 'left' });
      sr.reveal('.about__data, .contact__info', { origin: 'right' });
      sr.reveal('.projects__container, .work__container, .skills__container', { delay: 400 });
   }
};

if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', initPortfolio);
} else {
   initPortfolio();
}
