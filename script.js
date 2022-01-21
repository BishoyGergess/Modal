'use strict';
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlayModal = document.querySelector('.overlay');
const showModals = document.querySelectorAll('.show-modal');

const clickCloseModal = function () {
  modal.classList.add('hidden');
  overlayModal.classList.add('hidden');
};
const clickOpenModal = function () {
  modal.classList.remove('hidden');
  overlayModal.classList.remove('hidden');
};
for (let i = 0; i < showModals.length; i++)
  showModals[i].addEventListener('click', clickOpenModal);

closeModal.addEventListener('click', clickCloseModal);
overlayModal.addEventListener('click', clickCloseModal);
