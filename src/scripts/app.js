"use strict";



import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

 gsap.registerPlugin(ScrollTrigger);
 gsap.to(".stats__block", {
   x: 250,
   scrollTrigger: {
     trigger: ".stats__block",
     start: "top bottom",
     markers: "true",
   },
   toggleActions: "play restart restart restart"
 });


const openburger = document.querySelector(".header__nav--burger");
const closeburger = document.querySelector(".header__nav--closeburger");

openburger.addEventListener("click", ()=>{

    document.querySelector(".header__nav").classList.add("open");
})

closeburger.addEventListener("click", ()=>{

    document.querySelector(".header__nav").classList.remove("open");
})

