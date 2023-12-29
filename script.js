'use strict';

const refs = {
  btnShowModalWindowAll: document.querySelectorAll('.show-modal-window'),
  overlay: document.querySelector('.overlay'),
  closeModal: document.querySelector('.close-modal-window'),
  modalWindow: document.querySelector('.modal-window'),
};
const btn = refs.btnShowModalWindowAll;
const openModal = refs.modalWindow;
const closedModal = refs.closeModal;

const showOpenModal = () => {
  openModal.classList.remove('hidden');
  refs.overlay.classList.remove('hidden');
};
const addClassHidden = () => {
  refs.modalWindow.classList.add('hidden');
  refs.overlay.classList.add('hidden');
};

const closedEscapeModal = e => {
  if (e.key === 'Escape' && !openModal.classList.contains('hidden')) {
    addClassHidden();
  }
};

for (let i = 0; i < btn.length; i += 1) {
  btn[i].addEventListener('click', showOpenModal);
}

refs.closeModal.addEventListener('click', addClassHidden);
refs.overlay.addEventListener('click', addClassHidden);

document.addEventListener('keydown', closedEscapeModal);

// 5 / 82;
