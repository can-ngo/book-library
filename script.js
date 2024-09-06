// const booksContainer = $(".books-container");

const myLibrary = [];

function Book (title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function () {
        return `${this.title} by ${this.author}, ${pages} pages`
    }
}

function addBookToLibrary(title, author, pages, isRead) {
    let newBook = new Book(title, author, pages, isRead)
    myLibrary.push(newBook);
    return
}

addBookToLibrary('Đức Maria tấm gương cho giáo hội', 'Raniero Cantalamessa', 393, false);
addBookToLibrary('Tự Thuật Thánh Augustino', "Aurelius Augustino", 620, false);
addBookToLibrary('Những chú chó săn của Chúa', "Kevin Vost", 296, false);
addBookToLibrary('Tiểu sử tự thuật Thánh nữ Têrêsa Hài Đồng Giêsu', "E. Allison Peers Seed And Ward", 432, false);
addBookToLibrary('Lạy Chúa con đây', "Cao Gia An, S.J", 326, false);
addBookToLibrary('Đường đi một mình', "Nguyễn Tầm Thường", 211, false);
addBookToLibrary('Những đứa con của Mẹ', "Trăng Thập Tự", 316, false);
addBookToLibrary('Hạnh phúc ở dưới chân', "Tiến sĩ Trần Thị Giồng", 227, false);



console.log(myLibrary);


