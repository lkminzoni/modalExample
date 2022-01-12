
// Image Portrait
const imgUrl = document.querySelector('#portrait');
imgUrl.src= `https://randomuser.me/api/portraits/men/${Math.floor(Math.random()*99)}.jpg`


// main app
const toggle = document.querySelector('#toggle');
const close = document.querySelector('#close');
const open = document.querySelector('#open');
const modal = document.querySelector('#modal');

// Navbar toggle
toggle.addEventListener('click',() => document.body.classList.toggle('show-nav'));

// Modal
open.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

window.addEventListener('click', (e) => e.target === modal ? modal.classList.remove('show-modal'):false)