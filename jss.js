let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active'); 
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}



const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll',checkBoxec);

checkBoxec();

function checkBoxec() {
    const triggerBottom = window.innerHeight / 5 * 4;
    
    boxes.forEach((box) => {
     const boxTop = box.getBoundingClientRect().top;

     if (boxTop < triggerBottom) {
       box.classList.add('show');
     } else {
        box.classList.remove('show');
     }
    });
}

const boxes1 = document.querySelectorAll('h1');

window.addEventListener('scroll',checkBoxec1);

checkBoxec1();

function checkBoxec1() {
    const triggerBottom = window.innerHeight / 5 * 4;
    
    boxes1.forEach((box1) => {
     const boxTop = box1.getBoundingClientRect().top;

     if (boxTop < triggerBottom) {
       box1.classList.add('show');
     } else {
        box1.classList.remove('show');
     }
    });
}