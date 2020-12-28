let library = [];
if(!getLibrary('library')) {
  setLibrary('library', library);
} else {
  library = getLibrary('library');
}
const libContainer = document.getElementById('library');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addToLibrary(title, author, pages, read) {
  read ? read = "Read" : read = "Not Read"
  const book = new Book(title, author, pages, read);
  library.push(book);
  renderLibrary(library);
}

function renderLibrary(array) {
  let i = 0;
  while(libContainer.firstChild) {
    libContainer.removeChild(libContainer.lastChild);
  }
  array.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `${item.author}<br />${item.title}<br />` + 
      `${item.pages} pages<br />${item.read}` +
      '<button id="read">Reading Status</button>' + 
      '<button id="delete">Remove</button>';
    card.id = i;
    libContainer.appendChild(card);
    i++;
  });
  setLibrary('library', library);
  handleReadBtn();
  handleDeleteBtn();
}

function handleAddBtn() {
  const addCard = document.getElementById('addCard');
  const addBook = document.getElementById('addBook');
  addCard.addEventListener('click', () => {
    addCard.style.cssText = "display: none";
    addBook.style.cssText = "display: flex";
  });
}

function handleFormSubmit() {
  const addCard = document.getElementById('addCard');
  const addBook = document.getElementById('addBook');
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const pages = document.querySelector('#pages');
  const checkBox = document.querySelector('#read');
  document.getElementById('addBook').addEventListener('submit', () => {
    addToLibrary(title.value, author.value, pages.value, checkBox.checked);
    addCard.style.cssText = "display: flex";
    addBook.style.cssText = "display: none";
  });
}

function handleCancelBtn() {
  const addCard = document.getElementById('addCard');
  const addBook = document.getElementById('addBook');
  document.getElementById('cancel').addEventListener('click', () => {
    addBook.reset();
    addCard.style.cssText = "display: flex";
    addBook.style.cssText = "display: none";
  });
}

function readBook(index) {
  if (library[index].read === "Read") {
    library[index].read = "Not Read";
  } else {
    library[index].read = "Read";
  }
  renderLibrary(library);
}

function handleReadBtn() {
  document.querySelectorAll('#read').forEach((btn) => {
    btn.addEventListener('click', () => {
      readBook(btn.parentElement.id);
    });
  });
}

function deleteBook(index) {
  library.splice(index, 1);
  renderLibrary(library);
}

function handleDeleteBtn() {
  document.querySelectorAll('#delete').forEach((btn) => {
    btn.addEventListener('click', () => {
      deleteBook(btn.parentElement.id);
    });
  });
}

function setLibrary(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function getLibrary(key) {
  return JSON.parse(localStorage.getItem(key));
}

handleAddBtn();
handleFormSubmit();
handleCancelBtn();
renderLibrary(library);