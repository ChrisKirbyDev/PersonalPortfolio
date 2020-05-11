const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-list');
  const navList = document.querySelectorAll('.nav-list li');

  //Toggle Nav

  burger.addEventListener('click', () => {
    //Toggle Nav
    nav.classList.toggle('nav-active');

    //Animate links
    navList.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index/5+0.5}s`;
      }
    });
    //Burger Animation
    burger.classList.toggle('toggle');

  });



}

navSlide();
