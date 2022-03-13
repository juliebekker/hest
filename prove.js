
var nav = document.getElementById('nav');
  window.onscroll = function () {

    if(window.pageYOffset > 100) {

    nav.style.position = "fixed";
    nav.style.bottom = 0;

  }else {
    box.style.position = "absoulte";
    box.style.bottom = 100;
  }
  }

/*
document.getElementById("click1").onclick = function() {myFunction()};

  function myFunction() {

  }
*/

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})


function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
