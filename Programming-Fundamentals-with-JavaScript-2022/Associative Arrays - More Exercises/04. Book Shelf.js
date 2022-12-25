function bookShelf(input) {
  let libraryList = {
    shelfID: {},
    books: [],
  };

  // Create the shef with id and get the title,author and genre of each book
  for (let el of input) {
    if (el.includes(" -> ")) {
      let [shelfID, genre] = el.split(" -> ");
      if (!libraryList.shelfID.hasOwnProperty(shelfID)) {
        libraryList.shelfID[shelfID] = genre;
      }
    } else if (el.includes(": ")) {
      let [bookAndAuthor, genre] = el.split(", ");
      if (Object.values(libraryList.shelfID).includes(genre)) {
        if (libraryList.books.hasOwnProperty(genre) === false) {
          libraryList.books[genre] = [];
        }
        libraryList.books[genre].push(bookAndAuthor);
      }
    }
  }

  // Sort and print final result
  let shelvesWithTheMostBooksSort = Object.entries(libraryList.books)
    .sort((a, b) => b[1].length - a[1].length);

  for (let shelf of shelvesWithTheMostBooksSort) {
    for (let actualShelf of Object.values(libraryList.shelfID)) {
      for (let shelfId of Object.entries(libraryList.shelfID)) {
        if (shelf[0] === actualShelf && shelfId[1] === actualShelf) {
          console.log(`${shelfId[0]} ${actualShelf}: ${shelf[1].length}`);
          for (let book of shelf[1]) {
            console.log(`--> ${book}`);
          }
        }
      }
    }
  }
}

bookShelf([
  "1 -> history",
  "1 -> action",
  "Death in Time: Criss Bell, mystery",
  "2 -> mystery",
  "3 -> sci-fi",
  "Child of Silver: Bruce Rich, mystery",
  "Hurting Secrets: Dustin Bolt, action",
  "Future of Dawn: Aiden Rose, sci-fi",
  "Lions and Rats: Gabe Roads, history",
  "2 -> romance",
  "Effect of the Void: Shay B, romance",
  "Losing Dreams: Gail Starr, sci-fi",
  "Name of Earth: Jo Bell, sci-fi",
  "Pilots of Stone: Brook Jay, history",
]);

bookShelf(['1 -> mystery', '2 -> sci-fi',
  'Child of Silver: Bruce Rich, mystery',
  'Lions and Rats: Gabe Roads, history',
  'Effect of the Void: Shay B, romance',
  'Losing Dreams: Gail Starr, sci-fi',
  'Name of Earth: Jo Bell, sci-fi']
);
