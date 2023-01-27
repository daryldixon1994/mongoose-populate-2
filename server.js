const mongoose = require("mongoose");
const express = require("express");
const app = express();
const Model = require("./models");
// const Post = require("./models");
mongoose
    .connect(
        "mongodb+srv://gomycode:gomycode2023@cluster0.xu8jhiq.mongodb.net/MYAPP?retryWrites=true&w=majority"
    )
    .then(() => console.log("connected to database"))
    .catch((err) => console.log(err));
//create user

const createUser = async () => {
    try {
        const newUser = new Model.User({
            username: "Anwar",
            email: "anwar@gmail.com",
        });
        const user = await newUser.save();
        console.log(user);
    } catch (error) {
        if (error) throw error;
    }
};
// createUser();
const createPost = async () => {
    try {
        const newPost = new Model.Post({
            title: "New post",
            postedBy: "63d3d1f20e6f9b75513726ec",
        });
        const post = await newPost.save();
        console.log(post);
    } catch (error) {
        if (error) throw error;
    }
};
// createPost();
const createAuthor = async () => {
    try {
        const newAuthor = new Model.Author({
            fullName: "Stephen King",
            bio: "Best steller of all time",
            birthDate: "1950-10-12",
        });
        const author = await newAuthor.save();
        console.log(author);
    } catch (error) {
        if (error) throw error;
    }
};
// createAuthor();
const createBook = async () => {
    try {
        const newBook = new Model.Book({
            title: "Ne book",
            rating: 8,
            author: "63d3ec08fbd54faa6c67086e",
        });
        const book = await newBook.save();
        console.log(book);
    } catch (error) {
        if (error) throw error;
    }
};
// createBook();
const addComment = async () => {
    try {
        const newComment = new Model.Comment({
            comment: "This is an amazing book",
            user: "63d3d1f20e6f9b75513726ec",
            book: "63d3f2d6a9e0a287aca2078f",
        });
        const comment = await newComment.save();
        console.log(comment);
    } catch (error) {
        if (error) throw error;
    }
};
// addComment();
//
Model.Comment.find({
    book: {
        $in: {
            _id: ["63d3f2d6a9e0a287aca2078f"],
        },
    },
})
    .populate("user")
    .populate("book")
    .then((p) => console.log(p))
    .catch((error) => console.log(error));

app.listen(5000, (err) => {
    if (err) throw err;
    console.log("server is up and running");
});
