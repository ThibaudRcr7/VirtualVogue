console.info('Hello world');

const openburger = document.querySelector(".header__nav--burger");
const closeburger = document.querySelector(".header__nav--closeburger");

openburger.addEventListener("click", ()=>{

    document.querySelector(".header__nav").classList.add("open");
})

closeburger.addEventListener("click", ()=>{

    document.querySelector(".header__nav").classList.remove("open");
})