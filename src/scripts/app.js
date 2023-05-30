"use strict";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const circle = document.querySelector("svg circle");

gsap.to(circle, {
  strokeDashoffset: 189,
  duration: 2,
  scrollTrigger: {
    trigger: "#statsBlock",
    start: "top 80%",
    end: "bottom 80%",
    scrub: true
  }
});

const openburger = document.querySelector(".header__nav--burger");
const closeburger = document.querySelector(".header__nav--closeburger");

openburger.addEventListener("click", ()=>{

    document.querySelector(".header__nav").classList.add("open");
})

closeburger.addEventListener("click", ()=>{

    document.querySelector(".header__nav").classList.remove("open");
});
