let library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  }
}

function addToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  library.push(book);
  renderLibrary(library);
}

function renderLibrary(array) {
  array.forEach((item) => {
    const container = document.getElementById('container');
    const card = document.createElement('div');
    card.className = 'card';
    card.innerText = item.info();
    container.appendChild(card);
  });
}

function handleAddBtn() {
  document.getElementById('addBook').addEventListener('submit', () => {
    addToLibrary(title, author, pages, read);
    renderLibrary(library);
  });
}
handleAddBtn();
addToLibrary("The Gunslinger", "Stephen King", "600", false);