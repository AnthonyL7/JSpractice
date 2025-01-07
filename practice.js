
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


function getTheTitles(titles) {
  const arr = Array.from(books)
  return arr.map(titles => titles.title)
}

console.log(getTheTitles([
  {
    title: "Can't Hurt Me",
    author: 'David Goggins'
  },
  {
    title: "Grit",
    author: 'Angela Duckworth'
  }
]))
