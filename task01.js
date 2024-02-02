class LibraryManager {
  #books;

  constructor(initialBooks = []) {
    if (new Set(initialBooks).size !== initialBooks.length) {
      throw new Error("Переданный массив содержит дублирующиеся книги");
    }
    this.#books = initialBooks;
  }

  get allBooks() {
    return this.#books;
  }

  addBook(title) {
    if (this.#books.includes(title)) {
      throw new Error(`Книга с названием "${title}" уже существует в списке`);
    }
    this.#books.push(title);
  }

  removeBook(title) {
    const index = this.#books.indexOf(title);
    if (index === -1) {
      throw new Error(`Книги с названием "${title}" нет в списке`);
    }
    this.#books.splice(index, 1);
  }

  hasBook(title) {
    return this.#books.includes(title);
  }
}

try {
  const library = new LibraryManager(["Book1", "Book2"]);
  library.addBook("Book3");
  console.log(library.allBooks);
  library.removeBook("Book2");
  console.log(library.allBooks);
  console.log(library.hasBook("Book1"));
  console.log(library.hasBook("Book2"));
} catch (error) {
  console.error(error.message);
}
