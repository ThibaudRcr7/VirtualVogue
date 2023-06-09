"use strict";

import {
	gsap
} from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";


// Anim Cercle Pourcentage

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

// Curseur custom

var customCursor = document.getElementById('custom-cursor');

document.addEventListener('mousemove', function(e) {
	// Ajouter un délai de 100 millisecondes (ajustable selon vos besoins)
	setTimeout(function() {
		var x = e.clientX;
		var y = e.clientY;
		customCursor.style.left = x + 'px';
		customCursor.style.top = y + 'px';
	}, 100);
});



// Burger Menu

const openburger = document.querySelector(".header__nav--burger");
const closeburger = document.querySelector(".header__nav--closeburger");

openburger.addEventListener("click", () => {

	document.querySelector(".header__nav").classList.add("open");
})

closeburger.addEventListener("click", () => {

	document.querySelector(".header__nav").classList.remove("open");
});



// Flèche retour en haut

const arrowContainer = document.getElementById('arrow-container');

arrowContainer.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
});

window.addEventListener('scroll', () => {
	if (window.scrollY > 0) {
		arrowContainer.classList.add('clicked');
	} else {
		arrowContainer.classList.remove('clicked');
	}
});
