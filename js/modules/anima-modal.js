export default function initModal() {
  const addBtn = document.querySelector('.btn');
  const modal = document.querySelector('[data-modal="container"]');

  if(addBtn && modal) {
    function toggleModal(event) {
      event.preventDefault();
      modal.classList.toggle('active');
    }

    function clickOutside(event) {
      if(event.target === this) {
        toggleModal(event);
      }
    }

    addBtn.addEventListener('click', toggleModal);
    modal.addEventListener('click', clickOutside);
  }
};
