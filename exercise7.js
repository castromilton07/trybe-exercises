const assert = require('assert');

const books = [
  { id: 1, name: 'As Crônicas de Gelo e Fogo', genre: 'Fantasia', author: { name: 'George R. R. Martin', birthYear: 1948, }, releaseYear: 1991, },
  { id: 2, name: 'O Senhor dos Anéis', genre: 'Fantasia', author: { name: 'J. R. R. Tolkien', birthYear: 1892, }, releaseYear: 1954, },
  { id: 3, name: 'Fundação', genre: 'Ficção Científica', author: { name: 'Isaac Asimov', birthYear: 1920, }, releaseYear: 1951, },
  { id: 4, name: 'Duna', genre: 'Ficção Científica', author: { name: 'Frank Herbert', birthYear: 1920, }, releaseYear: 1965, },
  { id: 5, name: 'A Coisa', genre: 'Terror', author: { name: 'Stephen King', birthYear: 1947, }, releaseYear: 1986, },
  { id: 6, name: 'O Chamado de Cthulhu', genre: 'Terror', author: { name: 'H. P. Lovecraft', birthYear: 1890, }, releaseYear: 1928, },
];

const expectedResult = 'O Senhor dos Anéis';

const authorWith3DotsOnName = () => (books.find((book) => (/^.\. .\. .\. $/).test(book.author.name.slice(0, 9)) && book.author.name.match(/\./g).length === 3 )).name;
  
// const authorWith3DotsOnName = () => (books.find((book) => book.author.name[1] === '.' && book.author.name[4] === '.' && book.author.name[7] === '.' )).name;

// const authorWith3DotsOnName = () => books.find((book) => (book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3)).name;

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);

/* function authorWith3DotsOnName() {
  const regex1 = /^.\. .\. .\. $/i;
  const regex2 = /\./g;
  return (books.find((book) => regex1.test(book.author.name.slice(0, 9)) && book.author.name.match(regex2).length === 3 )).name;
} */

// if (books[1].author.name.split(' ').filter((word) => word.endsWith('.')).length === 3) { console.log(books[1].name); };
