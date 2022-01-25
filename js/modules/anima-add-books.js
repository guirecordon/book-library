export default function initAddBooks() {
  const form = document.getElementById('new-book-form');
  const table = document.querySelector('table');
  const saveBtn = document.querySelector('#saveBtn');
  const cancelBtn = document.querySelector('#cancel-btn');
  const modal = document.querySelector('[data-modal="container"]');
  const deleteIcon = "icon"

  let myLibrary = [];
  let formData = {};
  let id = 0;

  function addBookToLibrary(event) {
    formData[event.target.name] = event.target.value;
  }

  form.addEventListener('change', addBookToLibrary);
  
  function saveFormData() {
    if(formData.bookTitle) {
      myLibrary.push(formData);
      createList();
      console.log(myLibrary);
      formData = {};
      id++
      modal.classList.toggle('active');
    }
  }

  function createList() {
    const newRow = document.createElement('tr');
    table.appendChild(newRow);
    
    let col1 = document.createElement('td');
    let col2 = document.createElement('td');
    let col3 = document.createElement('td');
    let col4 = document.createElement('td');
    let col5 = document.createElement('td');

    col1.innerHTML = myLibrary[id].bookTitle;
    newRow.appendChild(col1);
    col2.innerHTML = myLibrary[id].bookAuthor;
    newRow.appendChild(col2);
    if(myLibrary[id].favoriteQuotes) {
      col3.innerHTML = myLibrary[id].favoriteQuotes;
    }
    newRow.appendChild(col3);
    const label = document.createElement('label');
    label.classList.add('switch');
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    label.appendChild(checkBox);
    const slider = document.createElement('span');
    slider.classList.add('slider');
    slider.classList.add('round');
    label.appendChild(slider);
    col4.appendChild(label);
    if(myLibrary[id].read) {
      checkBox.setAttribute('checked', '');
    }
    newRow.appendChild(col4);
    newRow.appendChild(col5);
    const deleteSpan = document.createElement('button');
    deleteSpan.classList.add('delete-btn');
    deleteSpan.innerText = "X";
    col5.appendChild(deleteSpan);

    deleteSpan.addEventListener('click', (e) => {
      e.target.closest('tr').remove();
    })
  }

  saveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    saveFormData();
    form.reset();
  });

  cancelBtn.addEventListener('click', (e) => {
    e.preventDefault()
    form.reset();
    modal.classList.toggle('active');
  })
}
