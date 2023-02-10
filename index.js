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