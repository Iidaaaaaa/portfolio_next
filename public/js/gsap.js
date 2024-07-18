// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  // gsap code here!
});

gsap.registerPlugin(ScrollTrigger);

// アニメーションを定義する
gsap.to(".profile__image", {
  scrollTrigger: {
    trigger: ".profile__profile",
    start: "top 20%",
  },
  opacity: 1,
  x: 0,
  duration: 1,
});

gsap.to(".skill__item", {
  scrollTrigger: {
    trigger: ".skill__title",
    start: "top 30%",
  },
  opacity: 1,
  y: 0,
  duration: 0.5,
  ease: "power2.out",
});

gsap.to(".card", {
  scrollTrigger: {
    trigger: ".work__title",
    start: "top 20%",
  },
  opacity: 1,
  duration: 0.5,
  ease: "power2.out",
});

// header
const items = document.querySelectorAll(".header__item");

const tl = gsap.timeline({ repeat: -1 });
items.forEach((item) => {
  tl.to(item, { opacity: 1, duration: 0.5, ease: "Power2.easeInOut" });
});
tl.play();

// profile
const profile = document.querySelectorAll(".profile__item");

const pro_tl = gsap.timeline({ repeat: -1 });

profile.forEach((item) => {
  pro_tl.to(item, { opacity: 1, duration: 0.5, ease: "Power2.easeInOut" });
});

pro_tl.play();
// skill
const skill = document.querySelectorAll(".skill__itemdod");

const ski_tl = gsap.timeline({ repeat: -1 });

skill.forEach((item) => {
  ski_tl.to(item, { opacity: 1, duration: 0.5, ease: "Power2.easeInOut" });
});

ski_tl.play();

// work
const work = document.querySelectorAll(".work__item");

const wor_tl = gsap.timeline({ repeat: -1 });

work.forEach((item) => {
  wor_tl.to(item, { opacity: 1, duration: 0.5, ease: "Power2.easeInOut" });
});

wor_tl.play();

// other
const other = document.querySelectorAll(".other__item");

const oth_tl = gsap.timeline({ repeat: -1 });

other.forEach((item) => {
  oth_tl.to(item, { opacity: 1, duration: 0.5, ease: "Power2.easeInOut" });
});

oth_tl.play();
