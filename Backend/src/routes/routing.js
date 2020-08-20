const express = require('express');
const routing = express.Router();
const service = require("../service/service");
const Post = require("../model/Posts")


routing.get("/postsset", (req, res, next) => {
    service.insertScriptPost().then((data) => {
        if (data) {
            res.status(201)
            res.json({ message: "Inserted " + data + " document in database" })
        }
    })
})



routing.get("/setupDB", (req, res, next) => {
    service.userSetup().then((data) => {
        if (data) {
            res.status(201)
            res.json({ message: "Inserted " + data + " document in database" })
        }
    })
})

routing.post("/login", (req, res, next) => {

    var email = req.body.email
    var password = req.body.password
    service.validateLogin(email, password).then((resp) => {
        if (resp) {
            res.status(200)
            res.json({ message: "Logged in Successfully" })
        }
    }).catch((err) => {
        next(err)
    })
})



routing.post("/register", (req, res, next) => {
    let accountObj = req.body.newUserDetails
    service.createAccount(accountObj).then((data) => {
        res.json({ message: "Account Created Successfully" })
    }).catch((err) => {
        next(err)
    })
})

//getallPost
routing.get("/getPosts", (req, res, next) => {
    service.getAllPosts().then((data) => {
        res.json(data)
    }).catch((err) => {
        next(err)
    })
})

//search by course name
routing.get("/search/:word", (req, res, next) => {
    const word = req.params.word
    service.getByWord(word).then((data) => {
        res.json(data)
    }).catch((err) => {
        next(err)
    })
})


//search by course name
routing.get("/posts/:email/:id", (req, res, next) => {
    let email=req.params.email
    let id=req.params.id
    service.NewdataForEmail(email,id).then((data) => {
        data.map((found)=>{
            if(found!=null){
        res.json(found)
            }
        })
    }).catch((err) => {
        next(err)
    })
})

//Routing to update Posts
routing.put("/newpost/:username", (req, res, next) => {
    let postObj = new Post(req.body)
    let username = req.params.username
postObj.Image="comman.jpg"
    service.updatePosts(username, postObj).then((id) => {
        res.json({ message: "Posts updated with id : " + id })
    }).catch((err) => {
        next(err)
    })
})


//search by tags
routing.get("/t/:tag", (req, res, next) => {
    const tag = req.params.tag
    service.getByTagNew(tag).then((data) => {
       res.json(data)
    }).catch((err) => {
        next(err)
    })
})

//search by user
routing.get("/profile/:name", (req, res, next) => {
    const name = req.params.name
    service.getProfile(name).then((data) => {
       res.json(data)
    }).catch((err) => {
        next(err)
    })
})
module.exports = routing;
