const booksContainer = document.querySelector('.books-container');

const myLibrary = [];

addBookToLibrary('Đức Maria tấm gương cho giáo hội', 'Raniero Cantalamessa', 393, false);
addBookToLibrary('Tự Thuật Thánh Augustino', "Aurelius Augustino", 620, false);
addBookToLibrary('Những chú chó săn của Chúa', "Kevin Vost", 296, false);
addBookToLibrary('Tiểu sử tự thuật Thánh nữ Têrêsa Hài Đồng Giêsu', "E. Allison Peers Seed And Ward", 432, false);
addBookToLibrary('Lạy Chúa con đây', "Cao Gia An, S.J", 326, false);
addBookToLibrary('Đường đi một mình', "Nguyễn Tầm Thường", 211, false);
addBookToLibrary('Những đứa con của Mẹ', "Trăng Thập Tự", 316, false);
addBookToLibrary('Hạnh phúc ở dưới chân', "Tiến sĩ Trần Thị Giồng", 227, false);

populateBookCards();

const readBtns = document.querySelectorAll(".read-btn");
const deleteBtns = document.querySelectorAll(".delete-btn");

readBtns.forEach( (btn, index) => {
    btn.addEventListener('click', e => {
        const readStatus = document.getElementById(`${index}-stat`);
        myLibrary[index].isRead = !myLibrary[index].isRead;
        readStatus.textContent = 
            myLibrary[index].isRead ? 
            "Đã đọc" :
            "Chưa đọc" ;
        readStatus.style.color = 
            myLibrary[index].isRead ?
            'green' :
            'red' ; 
    })
})






function addBookToLibrary(title, author, pages, isRead) {
    let newBook = new Book(title, author, pages, isRead)
    myLibrary.push(newBook);
    return
}

function Book (title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function () {
        return `${this.title} by ${this.author}, ${pages} pages`
    }
}

function populateBookCards() {
    myLibrary.forEach( (book,index) => {
        const card = document.createElement('div');
        booksContainer.appendChild(card);
        card.setAttribute('class','card');
        card.setAttribute('id', `card-${index}`)
        card.innerHTML += `
            <p><strong>${book.title}</strong></p>
            <p>${book.author}</p>
            <p>${book.pages} trang</p>
            <p id="${index}-stat"
                style="color: ${book.isRead? 'green' : 'red'}"    
            >
                ${book.isRead?"Đã đọc":"Chưa đọc"}
            </p>
            <div>
                <button class="read-btn">Read</button>
                <button class="delete-btn">Delete</button>
            </div>
            `
    })
}