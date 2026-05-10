/* =========================
   SAFE SELECTOR
========================= */

function $(selector){
  return document.querySelector(selector);
}

/* =========================
   SMOOTH SCROLL FUNCTION
========================= */

function scrollToSection(id){

  const element = document.getElementById(id);

  if(element){

    element.scrollIntoView({
      behavior:'smooth',
      block:'start'
    });

    /* CLOSE MOBILE MENU */

    const mobileMenu = $('#mobileMenu');

    if(mobileMenu){

      mobileMenu.classList.add('hidden');

    }

  }

}

/* =========================
   NAVBAR SCROLL EFFECT
========================= */

window.addEventListener('scroll',()=>{

  const nav = $('nav');

  if(!nav) return;

  if(window.scrollY > 50){

    nav.style.background =
      'rgba(3,7,18,0.88)';

    nav.style.backdropFilter =
      'blur(18px)';

    nav.style.borderBottom =
      '1px solid rgba(255,255,255,0.05)';

    nav.style.boxShadow =
      '0 10px 30px rgba(0,0,0,0.25)';

  }else{

    nav.style.background =
      'rgba(255,255,255,0.03)';

    nav.style.backdropFilter =
      'blur(16px)';

    nav.style.borderBottom =
      '1px solid rgba(255,255,255,0.03)';

    nav.style.boxShadow =
      'none';

  }

});

/* =========================
   LOADER
========================= */

window.addEventListener('load',()=>{

  const loader = $('#loader');

  if(!loader) return;

  setTimeout(()=>{

    loader.style.opacity = '0';
    loader.style.visibility = 'hidden';

    setTimeout(()=>{

      loader.remove();

    },600);

  },1000);

});

/* =========================
   BACK TO TOP
========================= */

const backToTop = $('#backToTop');

window.addEventListener('scroll',()=>{

  if(!backToTop) return;

  if(window.scrollY > 300){

    backToTop.classList.remove('hidden');

  }else{

    backToTop.classList.add('hidden');

  }

});

if(backToTop){

  backToTop.addEventListener('click',()=>{

    window.scrollTo({
      top:0,
      behavior:'smooth'
    });

  });

}

/* =========================
   MOBILE MENU
========================= */

const menuBtn = $('#menuBtn');
const mobileMenu = $('#mobileMenu');

if(menuBtn && mobileMenu){

  menuBtn.addEventListener('click',()=>{

    mobileMenu.classList.toggle('hidden');

  });

}

/* =========================
   CLOSE MENU WHEN CLICK LINK
========================= */

const mobileButtons =
  document.querySelectorAll('#mobileMenu button');

mobileButtons.forEach(btn=>{

  btn.addEventListener('click',()=>{

    if(mobileMenu){

      mobileMenu.classList.add('hidden');

    }

  });

});

/* =========================
   ACTIVE NAV MENU
========================= */

const sections =
  document.querySelectorAll('section');

window.addEventListener('scroll',()=>{

  let current = '';

  sections.forEach(section=>{

    const sectionTop =
      section.offsetTop;

    if(window.pageYOffset >= sectionTop - 200){

      current =
        section.getAttribute('id');

    }

  });

  const navButtons =
    document.querySelectorAll('nav button');

  navButtons.forEach(btn=>{

    btn.classList.remove(
      'text-cyan-400'
    );

    const clickAttr =
      btn.getAttribute('onclick');

    if(
      clickAttr &&
      clickAttr.includes(current)
    ){

      btn.classList.add(
        'text-cyan-400'
      );

    }

  });

});

/* =========================
   PARALLAX EFFECT
========================= */

if(window.innerWidth > 768){

  window.addEventListener('mousemove',(e)=>{

    const floating =
      document.querySelectorAll('.floating');

    const moveX =
      (e.clientX / window.innerWidth - 0.5) * 12;

    const moveY =
      (e.clientY / window.innerHeight - 0.5) * 12;

    floating.forEach(el=>{

      el.style.transform =
        `translate(${moveX}px, ${moveY}px)`;

    });

  });

}

/* =========================
   BUTTON EFFECT
========================= */

const buttons =
  document.querySelectorAll('button');

buttons.forEach(button=>{

  button.addEventListener('mouseenter',()=>{

    button.style.transition =
      '0.3s ease';

  });

});

/* =========================
   CONTACT FORM
========================= */

const form = $('form');

if(form){

  form.addEventListener('submit',(e)=>{

    e.preventDefault();

    const submitBtn =
      form.querySelector('button');

    if(!submitBtn) return;

    submitBtn.innerHTML =
      'Sending...';

    submitBtn.disabled = true;

    setTimeout(()=>{

      submitBtn.innerHTML =
        'Message Sent ✓';

      submitBtn.style.opacity =
        '0.9';

      setTimeout(()=>{

        submitBtn.innerHTML =
          'Send Message';

        submitBtn.disabled = false;

      },2500);

    },1500);

  });

}

/* =========================
   PREVENT DRAG IMAGE
========================= */

const images =
  document.querySelectorAll('img');

images.forEach(img=>{

  img.setAttribute('draggable','false');

});

/* =========================
   AOS INIT
========================= */

if(typeof AOS !== 'undefined'){

  AOS.init({
    duration:1000,
    once:true
  });

}