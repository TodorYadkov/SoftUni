class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw new Error('Not enough space in the collection.');
        }

        this.books.push({ bookName, bookAuthor, payed: false });
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        const wantedBook = this.books.find(b => b.bookName === bookName);
        if (wantedBook === undefined) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if (wantedBook.payed) {
            throw new Error(`${bookName} has already been paid.`);
        }

        wantedBook.payed = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        const wantedBook = this.books.find(b => b.bookName === bookName);
        if (wantedBook === undefined) {
            throw new Error('The book, you\'re looking for, is not found.');
        }

        if (wantedBook.payed === false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        const indexOfBook = this.books.findIndex(b => b === wantedBook);
        this.books.splice(indexOfBook, 1);
        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        const printLineArr = [];
        if (bookAuthor) {
            const wantedAuthor = this.books.filter(a => a.bookAuthor === bookAuthor);
            if (wantedAuthor.length === 0) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }

            wantedAuthor.forEach(b => printLineArr.push(`${b.bookName} == ${bookAuthor} - ${b.payed === true ? 'Has Paid' : 'Not Paid'}.`));
            return [
                printLineArr.join('\n')
            ].join('\n');
        }

        this.books
            .sort((a, b) => a.bookName.localeCompare(b.bookName))
            .forEach(b => printLineArr.push(`${b.bookName} == ${b.bookAuthor} - ${b.payed === true ? 'Has Paid' : 'Not Paid'}.`));
        return [
            `The book collection has ${this.capacity - this.books.length} empty spots left.`,
            printLineArr.join('\n')
        ].join('\n');
    }
}

const library = new LibraryCollection(2);
console.log(library.addBook('In Search of Lost Time', 'Marcel Proust')); // The In Search of Lost Time, with an author Marcel Proust, collect.
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));      // The Don Quixote, with an author Miguel de Cervantes, collect.
console.log(library.addBook('Ulysses', 'James Joyce'));                  // Not enough space in the collection.

// const library = new LibraryCollection(2);
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time')); // In Search of Lost Time has been successfully paid.
// console.log(library.payBook('Don Quixote'));            // Don Quixote is not in the collection.

// const library = new LibraryCollection(2);
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));             // Don Quixote remove from the collection.
// console.log(library.removeBook('In Search of Lost Time'));  // In Search of Lost Time need to be paid before removing from the collection.

// const library = new LibraryCollection(2);
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes')); // The Don Quixote, with an author Miguel de Cervantes, collect.
// console.log(library.getStatistics('Miguel de Cervantes'));          // Don Quixote == Miguel de Cervantes - Not Paid.

// const library = new LibraryCollection(5);
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Ulysses', 'James Joyce');
// console.log(library.getStatistics());   // The book collection has 2 empty spots left.
//                                         // Don Quixote == Miguel de Cervantes - Has Paid.
//                                         // In Search of Lost Time == Marcel Proust - Not Paid.
//                                         // Ulysses == James Joyce - Not Paid.





