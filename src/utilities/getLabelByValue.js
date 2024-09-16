import books from "./books";
const booksLookup = books.reduce((acc, book) => {
  acc[book.value] = book.label;
  return acc;
}, {});

// Function to get label by value
export default function getLabelByValue(value) {
  return booksLookup[value] || "Label not found";
}
