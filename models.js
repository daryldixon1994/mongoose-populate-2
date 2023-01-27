const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
});
const postSchema = new mongoose.Schema({
    title: String,
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

const authorSchema = new mongoose.Schema({
    fullName: String,
    bio: String,
    birthDate: String,
});
const bookSchema = new mongoose.Schema({
    title: String,
    rating: Number,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author",
    },
    // comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});
const commentSchema = new mongoose.Schema({
    comment: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
    },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);
const Author = mongoose.model("Author", authorSchema);
const Book = mongoose.model("Book", bookSchema);
const Comment = mongoose.model("Comment", commentSchema);
module.exports = {
    User,
    Post,
    Author,
    Book,
    Comment,
};
