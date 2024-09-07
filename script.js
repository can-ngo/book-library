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

    addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, bookIsRead)
    console.log(myLibrary[myLibrary.length - 1])
    myLibrary[myLibrary.length - 1].populate();
    const readBtns = document.querySelectorAll(".read-btn");
    const deleteBtns = document.querySelectorAll(".delete-btn");
    console.log(readBtns, deleteBtns)
    overlay.style.display = 'none';
})



const readBtns = document.querySelectorAll(".read-btn");
const deleteBtns = document.querySelectorAll(".delete-btn");

console.log(readBtns, deleteBtns);

// Read buttons function
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

// Delete buttons function
deleteBtns.forEach( (btn, index) => {
    btn.addEventListener('click', e => {
        e.target.parentNode.parentNode.remove()
    })
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
            <p>${this.pages} trang</p>
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
    }
}

// function populateBookCards() {
//     myLibrary.forEach( (book,index) => {
//         const card = document.createElement('div');
//         booksContainer.appendChild(card);
//         card.setAttribute('class','card');
//         card.setAttribute('id', `card-${index}`)
//         card.innerHTML += `
//             <p><strong>${book.title}</strong></p>
//             <p>${book.author}</p>
//             <p>${book.pages} trang</p>
//             <p id="${index}-stat"
//                 style="color: ${book.isRead? 'green' : 'red'}"    
//             >
//                 ${book.isRead?"Đã đọc":"Chưa đọc"}
//             </p>
//             <div>
//                 <button class="read-btn">Read</button>
//                 <button class="delete-btn">Delete</button>
//             </div>
//             `
//     })
// }