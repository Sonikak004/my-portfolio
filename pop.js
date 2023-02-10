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