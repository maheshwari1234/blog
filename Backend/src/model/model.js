const initialData = require("./data.json")
const collection = require("../utilities/connection")
const PostData = require("./newPost.json")

let model = {}

//posts
model.insertScriptPost = () => {
    return collection.getpostsCollection().then((collection) => {
        return collection.deleteMany().then((data) => {
            return collection.insertMany(PostData).then((response) => {
                if (response && response.length > 0) {
                    response.map((i) => {
                        console.log("Posts", i)
                    })
                    return response.length
                } else {
                    let err = new Error("Initial insertion failed")
                    err.status = 500
                    throw new Error
                }
            })
        })
    })
}


//usersetuo
model.userSetup = () => {
    return collection.getCollection().then((collection) => {
        return collection.deleteMany().then((data) => {
            return collection.insertMany(initialData).then((response) => {
                if (response && response.length > 0) {
                    return response.length
                } else {
                    let err = new Error("Initial insertion failed")
                    err.status = 500
                    throw new Error
                }
            })
        })
    })
}


model.generateId = () => {
    return collection.getPostCollection().then((collection) => {
        return collection.distinct("id").then((id) => {
            newId = Math.max(...id)
            return newId > 0 ? newId + 1 : 5
        })
    })
}

model.generateNewId = () => {
    return collection.getpostsCollection().then((collection) => {
        return collection.distinct("Posts.id").then((id) => {
            newId = Math.max(...id)
            return newId > 0 ? newId + 1 : 5
        })
    })
}

model.getUser = (uemail) => {
    return collection.getCollection().then((collection) => {
        return collection.findOne({ email: uemail }, { _id: 0, email: 1, password: 1 })
            .then((data) => {
                return data
            })

    })
}


model.createAccount = (accountObj) => {
    return collection.getCollection().then((collection) => {
        return collection.create(accountObj).then((data) => {
            if (data) {
                return true
            } else {
                return false
            }
        })
    })
}

//getallposts
model.getAllPosts = () => {
    return collection.getpostsCollection().then((collection) => {
        return collection.find({}, { _id: 0 }).then((data) => {
            return data
        })
    })
}

//getpostbyid
model.getIdPost = (id) => {
    return collection.getPostCollection().then((collection) => {
        return collection.find({ id: id }, { _id: 0 }).then((data) => {
            return data
        })
    })
}

//getbyword
model.getByWord = (search) => {
    var word = search
    var word2 = word[0].toUpperCase() +
        word.slice(1)
    return collection.getpostsCollection().then((collection) => {
        return collection.find({}, { _id: 0 }).then((data) => {
            return data.map((found) => {
                return found.Posts.map((newdata) => {
                    if (newdata.Course === word2) {
                        const username=found.name
                        return {newdata,username}
                    }

                })

            })
        })
    })
}


//
model.NewdataForEmail = (username, id) => {
    return collection.getpostsCollection().then((collection) => {
        return collection.findOne({ name: username }, { _id: 0, Posts: 1 }).then((data) => {
            return data.Posts.map((found) => {
                if (found.id == id) {
                    return found
                }

            })
        })
    })
}


//fecthingusername
model.fecthUserName=(username)=>{
    return collection.getCollection().then((collectionUser) => {
        return collectionUser.findOne({email:username},{_id:0,userName:1}).then((name)=>{
            if(name){
                return name.userName
            }
            else{
                console.log("error")
            }
        })

    })
}

//updatedposts
model.updatePosts = (username, postsobj) => {
    return model.fecthUserName(username).then((name)=>{
        return model.generateNewId().then((id) => {
            postsobj.id = id
            postsobj.Image="comman.jpg"
            const newobj={
                username:username,
                name:name,
                Posts:[
                    postsobj
                ]
            }
            return collection.getpostsCollection().then((collection) => {
                return collection.updateOne({ username: username }, { $push: { Posts: postsobj } }, { runValidators: true }).then((response) => {
                    if (response.nModified > 0){
                        return postsobj.id
    
                    }
                    
                    else
                    {
                        return collection.insertMany(newobj).then((response) => {
                            if (response && response.length > 0) {
                                return response.length
                            } else {
                                let err = new Error("Initial insertion failed")
                                err.status = 500
                                throw new Error
                            }
                        })
    
                    }
                       
                })
            })
        })

    })
    
}

//getbytagnew
model.getByTagNew = (tag) => {
    return collection.getpostsCollection().then((collection) => {
        return collection.find({}, { _id: 0 }).then((data) => {
            return data.map((found) => {
                return found.Posts.map((newdata) => {
                    if (newdata.Course === tag) {
                    const username=found.name
                    return {newdata,username}
                        
                    }

                })
            })
        })
    })
}
module.exports = model