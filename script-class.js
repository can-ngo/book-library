const booksContainer = document.querySelector('.books-container');
const overlay = document.querySelector('.overlay');
const form = document.querySelector('form');
const closeBtn = document.querySelector('#close-btn');
const openModelBtn = document.querySelector('#open-modal-btn');
const addBookBtn = document.querySelector('#add-book-button');
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const bookPages = document.querySelector('#book-pages');


// Open modal, form
openModelBtn.addEventListener('click', () => {
    overlay.style.display = 'flex';
})

// Close form, close modal
closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
})

addBookBtn.addEventListener('click', e => {
    e.preventDefault();
    const bookIsRead = document.querySelector('input[name="bookRead"]:checked').value;
    // Validate form input
    if (!bookTitle.value.trim()) {
        alert('Please type in the book title')
        return
    }
    if (!bookAuthor.value.trim()) {
        alert("Please provide author's name")
        return
    }
    
    Library.addBook({title: bookTitle.value, author: bookAuthor.value, pages: bookPages.value, isRead: (bookIsRead === 'true')})
    Display.removeDisplay();
    Display.displayBooks(Library.books);
    overlay.style.display = 'none';   
})

class Library {    
    static books = [];
    
    static addBook (book) {
        if (typeof book === 'object' && book !== null){
            this.books.push(book)
        } else {
            alert('Add book fail, detail missed')
        }
        
    }
    
    static removeBook (bookName) {
        if (!isNaN(bookName)) {
            this.books = this.books.filter( book => this.books.indexOf(book) !== bookName )
            console.log(`Removed book index ${bookName}`)
        } else {
            this.books = this.books.filter( book => book.title !== bookName )
            return console.log(`Removed 1 book title: ${bookName}`)
        } 
    }

}

Library.addBook({title: 'Những chú chó săn của Chúa', author: "Kevin Vost", pages: 296, isRead: true});
Library.addBook({title: 'Tự Thuật Thánh Augustino', author: "Aurelius Augustino", pages: 620, isRead: false});
Library.addBook({title: 'Đức Maria tấm gương cho giáo hội', author: "Raniero Cantalamessa", pages: 393, isRead: false});
Library.addBook({title: 'Life of Can Ngo', author: "C4n ngO", pages: 200, isRead: true});
Library.addBook({title: 'Đường đi một mình', author: "Nguyễn Tầm Thường", pages: 211, isRead: false});
Library.addBook({title: 'Những đứa con của Mẹ', author: "Trăng Thập Tự", pages: 316, isRead: false});
Library.addBook({title: 'Hạnh phúc ở dưới chân', author: "Tiến sĩ Trần Thị Giồng", pages: 227, isRead: false});
    
class Display {
    static displayBooks (books) {
        books.forEach(book => {
            const card  = document.createElement('div');
            booksContainer.appendChild(card);
            card.setAttribute('class','card');
            card.setAttribute('id', `card-${books.indexOf(book)}`)
            card.innerHTML = `
                    <p><strong>${book.title}</strong></p>
                    <p>${book.author}</p>
                    <p>${book.pages? book.pages + " trang" : ""}</p>
                    <p id="${books.indexOf(book)}-stat"
                       style="color: ${book.isRead ? 'green' : 'red'}"    
                    >
                       ${book.isRead?"Đã đọc":"Chưa đọc"}
                    </p>
                    <div>
                       <button class="read-btn" style="background-color: ##0D47A1;">Read</button>
                       <button class="delete-btn" style="background-color: #FE6464;">Delete</button>
                    </div>
                    `
            const readBtn = card.querySelector('.read-btn');
            readBtn.addEventListener('click', () => {
                book.isRead = !book.isRead;
                const readStatus = document.getElementById(`${books.indexOf(book)}-stat`);
                readStatus.textContent = book.isRead ? "Đã đọc" : "Chưa đọc";
                readStatus.style.color = book.isRead ? 'green' : 'red';
            })
            
            const deleteBtn = card.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', e => {
                e.target.parentNode.parentNode.remove();
                Library.removeBook(books.indexOf(book));
            })
        });
    }

    static removeDisplay() {
        const cards = document.querySelectorAll('.card')
        cards.forEach(card => booksContainer.removeChild(card))
    }
}

Display.displayBooks(Library.books)