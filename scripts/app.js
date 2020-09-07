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
  library.push(book)
  return book;
}

function displayLibrary(array) {
  array.forEach((item) => {
    return item;
  });
}