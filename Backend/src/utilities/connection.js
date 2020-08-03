const mongoose = require("mongoose")
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema
mongoose.set("useCreateIndex", true)

const UserSchema = Schema({
    
    email: {
        type: String, required: [false, 'email is required']
    },
    password: {
        type: String, required: [false, 'pass is required']
    },
    confirmPassword: {
        type: String, required: [false, 'pass is required']
    },
    userName: {
        type: String,
        required: false
    },
}, { collection: "User", timestamps: true })

const postSchema = Schema({
    id: { type: Number, required: false },
    Course: { type: String },
    Title: { type: String },
    Brief: String,
    Body: String,
    Image: String ,

}, { collection: "postSchema", timestamps: true })

const postNewSchema = Schema({
    username:String,
    name:String,
    Posts:[postSchema]

}, { collection: "postNewSchema", timestamps: true })

let connection = {}
connection.getCollection = () => {
    return mongoose.connect("mongodb://localhost:27017/UserDb", { useNewUrlParser: true, useUnifiedTopology: true }).then((db) => {
        return db.model("User", UserSchema)

    }).catch((err) => {
        console.log(err.message);

        let error = new Error("Could not connect to database")
        error.status = 500
        throw error
    })
}


connection.getPostCollection = () => {
    return mongoose.connect("mongodb://localhost:27017/RrDb", { useNewUrlParser: true, useUnifiedTopology: true }).then((db) => {
        return db.model("posts", postSchema)

    }).catch((err) => {
        console.log(err.message);

        let error = new Error("Could not connect to database")
        error.status = 500
        throw error
    })
}

connection.getpostsCollection = () => {
    return mongoose.connect("mongodb://localhost:27017/postdb", { useNewUrlParser: true, useUnifiedTopology: true }).then((db) => {
        return db.model("newposts", postNewSchema)

    }).catch((err) => {
        console.log(err.message);

        let error = new Error("Could not connect to database")
        error.status = 500
        throw error
    })
}



module.exports = connection