import { TimelineMax } from 'gsap/all';

export default function animation() {

  let tl = new TimelineMax();
  let tl1 = new TimelineMax({paused: true});
  let tl2 = new TimelineMax();
  let isClicked = false;

  tl
    .fromTo('.header', 1, { opacity: 0, y: -70 }, { opacity: 1, y: 0 });
  
  tl1
    .fromTo('.navigation', 0.5, { x: 400 }, { x: 0 })
    .fromTo('.hero', 0.5, { x: 0 }, { x: -400 },'-=0.5')
    .fromTo('.header__logo', 0.5, { x: 0 }, { x: -400 },'-=0.5')
    .staggerFromTo('.nav li', 0.5, { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, 0.1);

  tl2
    .fromTo('.hero__title', 0.5, {opacity: 0, y: 100}, { opacity: 1, y: 0 })
    .fromTo('.hero__text', 0.5, {opacity: 0, y: 100}, { opacity: 1, y: 0 })
    .fromTo('.hero__action', 0.5, {opacity: 0, y: 100}, { opacity: 1, y: 0 });


  $('.burger').click(function() {
    if (!isClicked) {
      $('body').addClass('sidemenu-is-open');
      tl1.play();
      

      isClicked = true;

    } else {
      $('body').removeClass('sidemenu-is-open');
      tl1.reverse();
      isClicked = false;
    }

  });


}
