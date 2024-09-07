const booksContainer = document.querySelector('.books-container');
const overlay = document.querySelector('.overlay');
const form = document.querySelector('form');
const closeBtn = document.querySelector('#close-btn');
const openModelBtn = document.querySelector('#open-modal-btn');
const addBookBtn = document.querySelector('#add-book-button');
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const bookPages = document.querySelector('#book-pages');

const myLibrary = [];

addBookToLibrary('Đức Maria tấm gương cho giáo hội', 'Raniero Cantalamessa', 393, false);
addBookToLibrary('Tự Thuật Thánh Augustino', "Aurelius Augustino", 620, false);
addBookToLibrary('Những chú chó săn của Chúa', "Kevin Vost", 296, false);
addBookToLibrary('Tiểu sử tự thuật Thánh nữ Têrêsa Hài Đồng Giêsu', "E. Allison Peers Seed And Ward", 432, false);
addBookToLibrary('Lạy Chúa con đây', "Cao Gia An, S.J", 326, false);
addBookToLibrary('Đường đi một mình', "Nguyễn Tầm Thường", 211, false);
addBookToLibrary('Những đứa con của Mẹ', "Trăng Thập Tự", 316, false);
addBookToLibrary('Hạnh phúc ở dưới chân', "Tiến sĩ Trần Thị Giồng", 227, false);


myLibrary.forEach( item => item.populate())

// Add book
addBookBtn.addEventListener('click', e => {
    e.preventDefault();
    const bookIsRead = document.querySelector('input[name="bookRead"]:checked').value;
    addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, bookIsRead === 'true')
    myLibrary[myLibrary.length - 1].populate();
    overlay.style.display = 'none';
})

// Open modal, form
openModelBtn.addEventListener('click', e => {
    overlay.style.display = 'flex';
})

// Close form, close modal
closeBtn.addEventListener('click', e => {
    overlay.style.display = 'none';
})


function addBookToLibrary(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead)
    myLibrary.push(newBook);
    return
}

function Book (title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.populate = function () {
        const card = document.createElement('div');
        booksContainer.appendChild(card);
        card.setAttribute('class','card');
        card.setAttribute('id', `card-${myLibrary.indexOf(this)}`)
        card.innerHTML += `
            <p><strong>${this.title}</strong></p>
            <p>${this.author}</p>
            <p>${this.pages? this.pages + " trang" : ""}</p>
            <p id="${myLibrary.indexOf(this)}-stat"
                style="color: ${this.isRead? 'green' : 'red'}"    
            >
                ${this.isRead?"Đã đọc":"Chưa đọc"}
            </p>
            <div>
                <button class="read-btn">Read</button>
                <button class="delete-btn">Delete</button>
            </div>
            `
        const readBtn = card.querySelector('.read-btn');
        readBtn.addEventListener('click', () => {
            this.isRead = !this.isRead;
            const readStatus = document.getElementById(`${myLibrary.indexOf(this)}-stat`);
            readStatus.textContent = this.isRead ? "Đã đọc" : "Chưa đọc";
            readStatus.style.color = this.isRead ? 'green' : 'red';
        })

        const deleteBtn = card.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', e => {
            e.target.parentNode.parentNode.remove();
        })
    }
}