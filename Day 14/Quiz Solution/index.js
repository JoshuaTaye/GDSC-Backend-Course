import mongoose from "mongoose";
await mongoose.connect('mongodb://localhost:27017/GDSC');


const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    yearPublished: {
        type: Number,
        required: true,
    },
    genres: [String],
    availableCopies: {
        type: Number,
        default: 5,
    },
});
const Book = mongoose.model('Book', bookSchema);

async function addBook(bookDetails) {
    const book = new Book(bookDetails);
    try {
        const savedBook = await book.save();
        console.log('Book added:', savedBook);
    } catch (error) {
        console.error('Error adding book:', error);
    }
}

async function updateAvailableCopies(title, newCopies) {
    try {
        const updatedBook = await Book.findOne({ title });
        if (updatedBook) {
            updatedBook.availableCopies = newCopies;
            await updatedBook.save();
            console.log('Updated book:', updatedBook);
        } else {
            console.log('Book not found');
        }
    } catch (error) {
        console.error('Error updating book:', error);
    }
}

async function findBooksByAuthor(author) {
    try {
        const books = await Book.find({ author });
        console.log('Books by author:', books);
    } catch (error) {
        console.error('Error finding books:', error);
    }
}

async function deleteBookByTitle(title) {
    try {
        const deletedBook = await Book.findOneAndDelete({ title });
        if (deletedBook) {
            console.log('Deleted book:', deletedBook);
        } else {
            console.log('Book not found');
        }
    } catch (error) {
        console.error('Error deleting book:', error);
    }
}

(async () => {
    // await addBook({
    //     title: 'The Great Gatsby',
    //     author: 'F. Scott Fitzgerald',
    //     yearPublished: 1925,
    //     genres: ['Classic', 'Fiction'],
    // });
    // await updateAvailableCopies('The Great Gatsby', 10);
    // await findBooksByAuthor('F. Scott Fitzgerald');
    await deleteBookByTitle('The Great Gatsby');
    await mongoose.connection.close();
})();
