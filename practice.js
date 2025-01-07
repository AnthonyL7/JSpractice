
const books = [
  {
    title: "Can't Hurt Me",
    author: 'David Goggins'
  },
  {
    title: "Grit",
    author: 'Angela Duckworth'
  }
]

const arr = Array.from(books)
const titles = arr.map(book => book.title)
console.log(titles)
