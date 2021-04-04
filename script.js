let upButton = document.querySelector('.up-button');
window.onscroll = function () {
  if (window.pageYOffset > document.body.scrollHeight / 2) {
    upButton.classList.add('shown')
  } else {
    upButton.classList.remove('shown')
  }
}

upButton.onclick = function () {
  window.scrollTo(0, 0);
}






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




let nextSlide = document.querySelector('.next');
let prevSlide = document.querySelector('.previous');
let slide = document.querySelector('.slide-1');
let cards = slide.children;
let count = 0;

let arrayCards = [
  {
    title: 'Sourabh B.',
    job: 'Co Founder of Mew',
    review: 'Great Team with great experience, i would reguler recommended to all that you will get better support by working with this awesome team and their expert members :)',
  },

  {
    title: 'Sourabh C.',
    job: 'Co Founder of Mew 2',
    review: 'Great Team with great experience, i would reguler recommended to all that you will get better support by working with this awesome team',
  },

  {
    title: 'Sourabh D.',
    job: 'Co Founder of Mew 3',
    review: 'Great Team with great experience, i would reguler recommended to all that you will get better support by working with this awesome team',
  },

  {
    title: 'Sourabh E.',
    job: 'Co Founder of Mew 4',
    review: 'Great Team with great experience, i would reguler recommended to all that you will get better support by working with this awesome team',
  },

];

function createCard(title, job, review) {
  let div = makeElement('div', 'card')
  slide.appendChild(div);
  let profileName = makeElement('h5', 'wqe', title);
  div.appendChild(profileName);
  let jobName = makeElement('h6', 'wqe', job);
  div.appendChild(jobName);
  let fieldReview = makeElement('p', 'wqe', review);
  div.appendChild(fieldReview);
  return div;
}

function makeElement(tagName, className, text) {
  let element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  } return element;

}



function addCheckHandler(card) {
  nextSlide.addEventListener('click', function (evt) {
    evt.preventDefault();
    count++;
    if (count === arrayCards.length) {
      count = 0;
      card = createCard(arrayCards[count]['title'], arrayCards[count]['job'], arrayCards[count]['review']);
    }
    if (nextSlide) {
      slide.innerHTML = '';
      card = createCard(arrayCards[count]['title'], arrayCards[count]['job'], arrayCards[count]['review']);
    }
  });

  prevSlide.addEventListener('click', function (evt) {
    evt.preventDefault();
    count--;
    if (count === -1) {
      count = arrayCards.length - 1;
      card = createCard(arrayCards[count]['title'], arrayCards[count]['job'], arrayCards[count]['review']);
    }
    if (prevSlide) {
      slide.innerHTML = '';
      card = createCard(arrayCards[count]['title'], arrayCards[count]['job'], arrayCards[count]['review']);
    }
  });
}



for (let i = 0; i < cards.length; i++) {
  addCheckHandler(cards[0]);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



let footerSpoiler = document.querySelectorAll('.lists-title');
let footerList = document.querySelectorAll('.footer__list');



footerSpoiler.forEach((item, indexItem) => {
  item.addEventListener('click', () => {
    footerList[indexItem].classList.toggle('active-list')
  });
});




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



let toggleBurger = document.querySelector('.header__burger');
let navList = document.querySelector('.navigation__burger');
let body = document.querySelector('body');


toggleBurger.onclick = function () {
  this.classList.toggle('active');
  navList.classList.toggle('active');
  body.classList.toggle('lock');
}




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let inputHolder = document.querySelector('.input-place');

inputHolder.onfocus = function () {
  this.placeholder = '';
}
inputHolder.onblur = function () {
  this.placeholder = 'Example@gmail.com';
}