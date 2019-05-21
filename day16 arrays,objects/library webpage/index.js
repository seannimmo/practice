
let list = [
{
    title: 'A Game of Thrones',
    authors: ['GRR Martin'],
    pages: 694,
    year: '1996',
    canBorrow: "Yes",
    available: "Yes",
},

{
    title: 'Good Omens',
    authors: ["Neil Gaiman", "Terry Pratchet"],
    pages: 288,
    year: "1990",
    canBorrow: "Yes",
    available: "No",
},

{
    title: 'Where the Wild Things Are',
    authors: ["Maurice Sendak"],
    pages: 40,
    year: '1963',
    canBorrow: "No",
    available: "Yes",
},

{
    title: 'In Search of Lost Time',
    authors: ["Marcel Proust"],
    pages: 4215,
    year: '1913',
    canBorrow: "Yes",
    available: "Yes",
},
];



const update = () => {
    const books = document.querySelector('#list');
    books.innerHTML="Book List";
    
    for(i = 0; i < list.length; i++){
        let book = document.createElement('div');
        book.className = "input";
        book.innerHTML = `<strong>Title:</strong> ${list[i].title} <br><strong>Author:</strong> ${list[i].authors} <br><strong>Pages: </strong>${list[i].pages} <br><strong>Year: </strong> ${list[i].year} <br><strong>Can this be taken home? </strong>${list[i].canBorrow} <br><strong>Is this book available?</strong>${list[i].available}`;
        books.appendChild(book);
    }
};

update();
document.addEventListener('DOMContentLoaded', () => {
    
});