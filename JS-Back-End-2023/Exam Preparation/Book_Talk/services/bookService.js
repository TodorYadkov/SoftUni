const { Book } = require('../models/Book.js');

const addNewBook = (data) => Book.create(data);

const getAllBooks = () => Book.find();

const getBookById = (bookId) => Book.findById(bookId);

const deleteBookById = (bookId) => Book.findByIdAndDelete(bookId);

const updateBookById = (bookId, data) => Book.findByIdAndUpdate(bookId, data, { runValidators: true });

const getMyBooks = (userId) => Book.find({ owner: userId });

const wishBook = async (bookId, userId) => {
    const book = await getBookById(bookId);
    if (book.wishingList.includes(userId)) {
        throw new Error('Book is already wished!');
    }

    book.wishingList.push(userId);
    await book.save();
};

const hasWished = async (bookId, userId) => {
    const book = await getBookById(bookId);
    return book.wishingList.includes(userId);
};

module.exports = {
    addNewBook,
    getAllBooks,
    getBookById,
    deleteBookById,
    updateBookById,
    getMyBooks,
    wishBook,
    hasWished,
};