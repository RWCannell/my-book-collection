import data from "./../data/books.js";

const cardContent = document.getElementById("cardRow");
let html = "";
data.books.forEach(book => {
    console.log(book.title);
    html = html + `
        <div class="col-sm-4">
            <div class="card">
                <img src="./images/book_icon.png" class="book-cover" alt="...">
                <div class="card-body">
                    <h5 class="book-title"><b>${book.title}</b></h5>
                    <p class="book-author"><b>Author:</b> ${book.author}</p>
                    <p class="book-year"><b>Year:</b> ${book.originallyPublished}</p>
                    <p class="reading-status"><b>Status:</b> ${book.readingStatus}</p>
                    <a href="${book.readMoreUrl}" target="_blank">Wiki</a>
                </div>
            </div>
        </div>
    `;
});
cardContent.innerHTML = html;
