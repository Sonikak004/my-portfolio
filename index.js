// hamburger menu open
function open() {
  document.querySelector('#mobile').style.display = 'block';
}
document.querySelectorAll('.items')[0].addEventListener('click', open);

// hamburger menu close

function close() {
  document.getElementById('mobile').style.display = 'none';
}
document.getElementById('close-menu').addEventListener('click', close);

// menu close when Items are clicked

document.querySelectorAll('.menuItems').forEach((item) => {
  item.addEventListener('click', close);
});

// pop-up and project cards

const proCards = [
  {
    id: 0,
    heading: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    image: './images/probackground.png',
    button: ['see live', 'see source', 'see project'],
    technologies: ['html', 'css', 'Bootstrap', 'Ruby'],
    liveLink: 'https://sonikak004.github.io/myportfolio/',
    sourceLink: 'https://github.com/sonikak004/myortfolio',
  },
  {
    id: 1,
    heading: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    image: './images/probackground.png',
    button: ['see live', 'see source', 'see project'],
    technologies: ['html', 'Bootstrap', 'Ruby'],
    link: '#',
  },
  {
    id: 2,
    heading: 'Multi-post stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    image: './images/probackground.png',
    button: ['see live', 'see source', 'see project'],
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 3,
    heading: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    image: './images/probackground.png',
    button: ['see live', 'see source', 'see project'],
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 4,
    heading: 'Multi-post stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    image: './images/probackground.png',
    button: ['see live', 'see source', 'see project'],
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 5,
    heading: 'Multi-post stories',
    image: './images/probackground.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    button: ['see live', 'see source', 'see project'],
    technologies: ['html', 'Bootstrap', 'Ruby'],
  },
  {
    id: 6,
    heading: 'Multi-post stories',
    image: './images/probackground.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    button: ['see live', 'see source', 'see project'],
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveLink: '#',
    sourceLink: '#',
  },
];

const popCards = [
  {
    id: 0,
    name: 'Keeping track of hundreds  of components website',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: './images/probackground.png',
    button: ['see live', 'see source', 'see project'],
    technologies: ['html', 'css', 'Bootstrap', 'Ruby'],
    liveLink: 'https://sonikak004.github.io/',
    sourceLink: 'https://github.com/Sonikak004/my-portfolio',
  },
  {
    id: 1,
    heading: 'Keeping track of hundreds  of components website',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: './images/probackground.png',
    button: ['see live', 'see source', 'see project'],
    technologies: ['html', 'Bootstrap', 'Ruby on Rails'],
    link: '#',
  },
  {
    id: 2,
    heading: 'Profesional Art Printing Data',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: './images/probackground.png',
    button: ['see live', 'see source', 'see project'],
    technologies: ['html', 'Bootstrap', 'Ruby on Rails'],
    link: '#',
  },
];

// popup

const popupVar = document.querySelector('.recent-div');

for (let i = 0; i <= (document.querySelectorAll('.click')).length; i += 1) {
  const popCard = `
  <div id="my-modal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
    <h3 class="modal-head-text">${proCards[i].heading}</h3>
    <h3 id="heading-popup" class="modal-head-text-desk">${proCards[i].heading}</h3>
      <span>
      <img src=images/vectorx.png alt="project image" class="close" id="popclose"/>
      </span>
    </div>
    <ul class="tech-button1 pop-tech-but">
    <li class="pop-card1">
      <nav class="icon-1">${popCards[i].technologies[0]}</nav>
    </li>
    <li class="pop-card2">
    <nav class="icon-1">${popCards[i].technologies[1]}</nav>
    </li>
    <li class="pop-card3">
    <nav class="icon-1">${popCards[i].technologies[2]}</nav>
    </li>
    <li class="pop-card4">
    <nav class="icon-1">${popCards[i].technologies[2]}</nav>
    </li>
    </ul>
    <div class="modal-body">
    <img src=images/popup-img.png alt="project image" class="pop-window"/>
    <img src=images/popup-desktop-img.png alt="project image" class="pop-window-desk"/>
    <p class="pop-text"> ${popCards[0].description}
    <p class="pop-text-desk"> ${popCards[1].description}
    </div>
    <div class="modal-footer">
    <div class="pop-btn">
    <button class="link-button1 ltext1" type="button">
    <a class="seelive-but" href=${popCards[0].liveLink}>${proCards[i].button[0]}<img class="btn-icon1" src="./images/seelive.png"/>
    </a>
    </button>
    <button class="link-button2 ltext1" type="button">
    <a class="seesrc-but" href=${popCards[0].sourceLink}>${proCards[i].button[1]}
    <img class="btn-icon2" src="./images/seesource.png"/>
    </a>
    </button>
    </div>
    </div>
  </div>
</div>
`;

  popupVar.innerHTML += popCard;
}

const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#project-button');
const closeBtn = document.querySelector('#popclose');

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// pop-end

const projectSection1 = document.querySelector('#project-section');

for (let i = 1; i <= 1; i += 1) {
  const card = `<img
  class="pro-img1"
  src= ${proCards[i].image}
  alt="project card one"
  />
  <div class="pro-img1-desk">
  <div/>
</div>
<div class="pro1">
<h2 class="ptext1">${proCards[0].heading}</h2>
<p class="ptext-1"> ${proCards[i].description}
</p>
<ul class="tech-button1">
  <li class="card1">
    <nav class="icon-1">${proCards[i].technologies[0]}</nav>
  </li>
  <li class="card2">
  <nav class="icon-1">${proCards[i].technologies[1]}</nav>
  </li>
  <li class="card3">
  <nav class="icon-1">${proCards[i].technologies[2]}</nav>
  </li>
  </ul>
  <button id="see-pro-pop" class="pop-up but1 butext but click" type="button"> ${proCards[i].button[2]} </button>
  </div>`;

  projectSection1.innerHTML += card;
}

// second card section

const projectSection2 = document.querySelector('#project-section');

for (let i = 1; i <= 1; i += 1) {
  const card = `<img
  class="pro-img2"
  src= ${proCards[i].image}
  alt="project card two"
/>
<div class="pro-img2-desk">
  <div/>
<div class="pro2">
<h2 class="ptext2">${proCards[0].heading}</h2>
<p class="ptext-2"> ${proCards[i].description}
</p>
<ul class="tech-button2">
  <li class="card1">
    <nav class="icon-2">${proCards[i].technologies[0]}</nav>
  </li>
  <li class="card2">
  <nav class="icon-2">${proCards[i].technologies[1]}</nav>
  </li>
  <li class="card3">
  <nav class="icon-2">${proCards[i].technologies[2]}</nav>
  </li>
  </ul>
  <button id="see-pro-pop2" class="pop-up but2 butext click but" type="button"> ${proCards[i].button[2]} </button>
  </div>`;

  projectSection2.innerHTML += card;
}

// third card section

const projectSection3 = document.querySelector('#project-section');

for (let i = 2; i <= 2; i += 1) {
  const card = `<img
  class="pro-img3"
  src= ${proCards[i].image}
  alt="project card three"
/>
<div class="pro-img3-desk">
  <div/>
<div class="pro3">
<h2 class="ptext3">${proCards[0].heading}</h2>
<p class="ptext-3"> ${proCards[i].description}
</p>
<ul class="tech-button3">
  <li class="card1">
    <nav class="icon-3">${proCards[i].technologies[0]}</nav>
  </li>
  <li class="card2">
  <nav class="icon-3">${proCards[i].technologies[1]}</nav>
  </li>
  <li class="card3">
  <nav class="icon-3">${proCards[i].technologies[2]}</nav>
  </li>
  </ul>
  <button id="see-pro-pop3" class="pop-up but3 butext click but" type="button"> ${proCards[i].button[2]} </button>
  </div>`;

  projectSection3.innerHTML += card;
}

// fourth card section

const projectSection4 = document.querySelector('#project-section');

for (let i = 3; i <= 3; i += 1) {
  const card = `<img
  class="pro-img4"
  src= ${proCards[i].image}
  alt="project card four"
/>
<div class="pro4">
<h2 class="ptext4">${proCards[0].heading}</h2>
<p class="ptext-4"> ${proCards[i].description}
</p>
<ul class="tech-button4">
  <li class="card1">
    <nav class="icon-4">${proCards[i].technologies[0]}</nav>
  </li>
  <li class="card2">
  <nav class="icon-4">${proCards[i].technologies[1]}</nav>
  </li>
  <li class="card3">
  <nav class="icon-4">${proCards[i].technologies[2]}</nav>
  </li>
  </ul>
  <button id="see-pro-pop4" class="pop-up but4 butext click but" type="button"> ${proCards[i].button[2]} </button>
  </div>`;

  projectSection4.innerHTML += card;
}

// fifth card section

const projectSection5 = document.querySelector('#project-section');

for (let i = 4; i <= 4; i += 1) {
  const card = `<img
  class="pro-img5"
  src= ${proCards[i].image}
  alt="project card five"
/>
<div class="pro-img5-desk">
  <div/>
<div class="pro5">
<h2 class="ptext5">${proCards[0].heading}</h2>
<p class="ptext-5"> ${proCards[i].description}
</p>
<ul class="tech-button5">
  <li class="card1">
    <nav class="icon-5">${proCards[i].technologies[0]}</nav>
  </li>
  <li class="card2">
  <nav class="icon-5">${proCards[i].technologies[1]}</nav>
  </li>
  <li class="card3">
  <nav class="icon-5">${proCards[i].technologies[2]}</nav>
  </li>
  </ul>
  <button id="see-pro-pop5" class="pop-up but5 butext click but" type="button"> ${proCards[i].button[2]} </button>
  </div>`;

  projectSection5.innerHTML += card;
}

// sixth card section

const projectSection6 = document.querySelector('#project-section');

for (let i = 5; i <= 5; i += 1) {
  const card = `<img
  class="pro-img6"
  src= ${proCards[i].image}
  alt="project card six"
/>
<div class="pro-img6-desk">
  <div/>
<div class="pro6">
<h2 class="ptext6">${proCards[0].heading}</h2>
<p class="ptext-6"> ${proCards[i].description}
</p>
<ul class="tech-button6">
  <li class="card1">
    <nav class="icon-6">${proCards[i].technologies[0]}</nav>
  </li>
  <li class="card2">
  <nav class="icon-6">${proCards[i].technologies[1]}</nav>
  </li>
  <li class="card3">
  <nav class="icon-6">${proCards[i].technologies[2]}</nav>
  </li>
  </ul>
  <button id="see-pro-pop6" class="pop-up but6 butext click but" type="button"> ${proCards[i].button[2]} </button>
  </div>`;

  projectSection6.innerHTML += card;
}

// pop up for cards 1

const popUpBtn = document.querySelector('#see-pro-pop');
const closePop = document.querySelector('#popclose');

// Open
function openModal1() {
  modal.style.display = 'block';
}

// Close
function closepopmodal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick1(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}

// Events
popUpBtn.addEventListener('click', openModal1);
closePop.addEventListener('click', closepopmodal);
window.addEventListener('click', outsideClick1);

// pop up for cards 2

const popUpBtn2 = document.querySelector('#see-pro-pop2');
const closePop2 = document.querySelector('#popclose');

// Open
function openModal2() {
  modal.style.display = 'block';
}

// Close
function closepopmodal2() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick2(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}

// Events
popUpBtn2.addEventListener('click', openModal2);
closePop2.addEventListener('click', closepopmodal2);
window.addEventListener('click', outsideClick2);

// pop up for cards 3

const popUpBtn3 = document.querySelector('#see-pro-pop3');
const closePop3 = document.querySelector('#popclose');

// Open
function openModal3() {
  modal.style.display = 'block';
}

// Close
function closepopmodal3() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick3(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}

// Events
popUpBtn3.addEventListener('click', openModal3);
closePop3.addEventListener('click', closepopmodal3);
window.addEventListener('click', outsideClick3);

// pop up for cards 4

const popUpBtn4 = document.querySelector('#see-pro-pop4');
const closePop4 = document.querySelector('#popclose');

// Open

function openModal4() {
  modal.style.display = 'block';
}

// Close
function closepopmodal4() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick4(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}

// Events
popUpBtn4.addEventListener('click', openModal4);
closePop4.addEventListener('click', closepopmodal4);
window.addEventListener('click', outsideClick4);

// pop up for cards 5

const popUpBtn5 = document.querySelector('#see-pro-pop5');
const closePop5 = document.querySelector('#popclose');

// Open
function openModal5() {
  modal.style.display = 'block';
}

// Close
function closepopmodal5() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick5(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}

// Events
popUpBtn5.addEventListener('click', openModal5);
closePop5.addEventListener('click', closepopmodal5);
window.addEventListener('click', outsideClick5);

// pop up for cards 6

const popUpBtn6 = document.querySelector('#see-pro-pop6');
const closePop6 = document.querySelector('#popclose');

// Open
function openModal6() {
  modal.style.display = 'block';
}

// Close
function closepopmodal6() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick6(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}

// Events
popUpBtn6.addEventListener('click', openModal6);
closePop6.addEventListener('click', closepopmodal6);
window.addEventListener('click', outsideClick6);