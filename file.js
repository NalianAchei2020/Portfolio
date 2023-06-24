/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
const openMenu = document.getElementById('menu');
const closeMenu = document.getElementById('close_menu');
const navItems = document.querySelector('.nav-items');

openMenu.addEventListener('click', () => {
  navItems.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
  navItems.style.display = 'none';
});

// popup window//
const data = [
  {
    id: 1,
    name: 'Facebook 360',
    background: { org: 'CANOPY', type: 'Back End Dev', year: '2017' },
    description: "'Lorem Ipsum is simply dummy text of the printing has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    Image: 'Images/img1.png',
    imageTwo: 'Images/cart1.png',
    liveLink: 'https://nalianachei2020.github.io/Portfolio/',
    sourceLink: 'https://github.com/NalianAchei2020/Portfolio',
    IconSource: '<i class="fa-brands fa-github"></i>',
    IconLive: '<i class="fa-solid fa-arrow-up-right-from-square"></i>',
    live: 'See Live',
    source: 'see-source',
  },
  {
    id: 2,
    name: 'Uber Navigation',
    background: { org: 'CANOPY', type: 'Back End Dev', year: '2017' },
    description: "'Lorem Ipsum is simply dummy text of the printing has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    Image: 'Images/img2.png',
    imageTwo: 'Images/cart2.png',
    liveLink: 'https://nalianachei2020.github.io/Portfolio/',
    sourceLink: 'https://github.com/NalianAchei2020/Portfolio',
    IconSource: '<i class="fa-brands fa-github"></i>',
    IconLive: '<i class="fa-solid fa-arrow-up-right-from-square"></i>',
    live: 'See Live',
    source: 'see-source',
  },
  {
    id: 3,
    name: 'Tonic',
    background: { org: 'CANOPY', type: 'Back End Dev', year: '2017' },
    description: "'Lorem Ipsum is simply dummy text of the printing has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    Image: 'Images/cart1.png',
    imageTwo: 'Images/cart3.png',
    liveLink: 'https://nalianachei2020.github.io/Portfolio/',
    sourceLink: 'https://github.com/NalianAchei2020/Portfolio',
    IconSource: '<i class="fa-brands fa-github"></i>',
    IconLive: '<i class="fa-solid fa-arrow-up-right-from-square"></i>',
    live: 'See Live',
    source: 'see-source',
  },
  {
    id: 4,
    name: 'Tonic',
    background: { org: 'CANOPY', type: 'Back End Dev', year: '2017' },
    description: "'Lorem Ipsum is simply dummy text of the printing has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    Image: 'Images/cart3.png',
    imageTwo: 'Images/cart4.png',
    liveLink: 'https://nalianachei2020.github.io/Portfolio/',
    sourceLink: 'https://github.com/NalianAchei2020/Portfolio',
    IconSource: '<i class="fa-brands fa-github"></i>',
    IconLive: '<i class="fa-solid fa-arrow-up-right-from-square"></i>',
    live: 'See Live',
    source: 'see-source',
  },
];

document.getElementById('project').innerHTML = data.map((item, index) => {
  let className = '';
  if (index === 1 || index === data.length - 1) {
    className = 'cart-reverse';
  } else {
    className = 'cart-normal';
  }
  let position = '';
  if (index === 0) {
    position = 'content1';
  } else if (index === 1) {
    position = 'content2';
  } else if (index === data.length - 1) {
    position = 'content4';
  } else {
    position = 'content3';
  }
  return `
  <div class="${className}" key="${item.id}">
  <picture>
      <source media="(min-width:768px)" srcset="${item.Image}" alt="cart-image">
      <img  class="cart-image1" src="${item.imageTwo}" alt="cart-image">
  </picture>
      <div class="cart-text">
        <h1 class="cart-title">${item.name}</h1>
        <ul class="card-list" >
            <li class="card-list-item1"><a href="#">CANOPY</a></li>
            <li><img src="Images/Counter.png" alt="counter"/></li>
            <li class="card-list-item"><a href="#">Back End Dev</a></li>
             <li><img src="Images/Counter.png" alt="counter"/></li>
             <li class="card-list-item"><a href="#">2015</a></li>
        </ul>
        <p>A daily selection of privately personalized reads; no 
          accounts or sign-ups required.</p>
            <ul class="pro-lang">
                <li>CSS</li>
                <li>HTML</li>
                <li>Javascript</li>
            </ul>
         <button class="btn-project" id="${item.id}" onclick="show(${item.id})">See project</button>
       </div>
</div> 
<div data-popup="popup-window" class="${position}" id="obj-${item.id}">
<div class="container1">
<h2>${item.name}</h2>
<span class="popup-close"><i class="fa fa-times" aria-hidden="true"  onclick="hide(${item.id})"></i></span>
<ul class="card-list" >
<li class="card-list-item10"><a href="#">CANOPY</a></li>
<li><img src="Images/Counter.png" alt="counter"/></li>
<li class="card-list-item20"><a href="#">Back End Dev</a></li>
 <li><img src="Images/Counter.png" alt="counter"/></li>
  <li class="card-list-item20"><a href="#">2015</a></li>
        </ul>
<picture>
  <source media="(min-width:768px)" srcset="${item.Image}" alt="cart-image">
  <img  class="popup-image" src="${item.imageTwo}" alt="cart-image">
  </picture>
<div class="flex-two">
<div class="text-popup">
<p>${item.description}</p>
</div>
<div class="popup-icon">
<ul class="pro-lang">
  <li>CSS</li>
  <li>HTML</li>
  <li>Javascript</li>
</ul>
<div class = "buttons">
<a href=${item.liveLink}><button type="button" id="first">
<span>${item.live}</span>
<span>${item.IconLive}</span>
</button></a>
<a href="${item.sourceLink}"><button type="button">
<span>${item.source}</span>
<span>${item.IconSource}</span>
</button></a>
</div>
</div>
</div>
</div>
</div>
  `;
}).join('');
function show(index) {
  const objElement = document.getElementById(`obj-${index}`);
  objElement.style.visibility = 'visible';
}

function hide(index) {
  const content = document.getElementById(`obj-${index}`);
  content.style.visibility = 'hidden';
}

const Contactform = document.querySelector('.contact-container');
function errorMessage(message) {
  document.getElementById('error').innerHTML = message;
}
const emailValue = document.getElementById('email');
Contactform.addEventListener('input', (e) => {
  if (emailValue.value !== emailValue.value.toLowerCase()) {
    errorMessage('Email should be in lower case');
    e.preventDefault();
    return false;
  }
  // preserve data in the browser//
  const name = Contactform.name.value;
  const email = Contactform.email.value;
  const message = Contactform.message.value;
  const JSONdata = JSON.stringify({ name, email, message });
  localStorage.setItem('data', JSONdata);
});
const userInfo = JSON.parse(localStorage.getItem('data'));
Contactform.name.value = userInfo.name;
Contactform.email.value = userInfo.email;
Contactform.message.value = userInfo.message;