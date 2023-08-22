'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');
console.log(btnsOpenModel);

const closemodal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openmodal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModel.length; i++) {
  btnsOpenModel[i].addEventListener('click', openmodal);
  btnCloseModal.addEventListener('click', closemodal);
  overlay.addEventListener('click', closemodal);
}
