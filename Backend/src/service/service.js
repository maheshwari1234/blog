const dbLayer = require("../model/model")

let service = {}

//postssetupdb
service.insertScriptPost = () => {
    return dbLayer.insertScriptPost().then((data) => {
        return data
    })
}

//usersetupdb
service.userSetup = () => {
    return dbLayer.userSetup().then((data) => {
        return data
    })
}


//login
service.validateLogin = (uemail, upass) => {
    return dbLayer.getUser(uemail).then((response) => {
        if (!response) {
            let err = new Error("User does not exist.Please create an account to continue")
            // err.status = 401
            throw err
        }
        else if (response.password != upass) {
            let err = new Error("Incorrect password")
            // err.status = 401
            throw err
        } else {
            return true
        }
    })
}

//register
service.createAccount = (accountObj) => {
    return dbLayer.getUser(accountObj.email).then((data) => {
        if (data) {
            let err = new Error("User already exists")
            err.status = 406
            throw err
        } else {
            return dbLayer.createAccount(accountObj).then((data) => {
                if (data) {
                    return data
                } else {
                    let err = new Error("Account not created")
                    err.status = 500
                    throw err;
                }
            })
        }
    })

}


//getallposts
service.getAllPosts = () => {
    return dbLayer.getAllPosts().then((data) => {
        if (data) {
            return data
        }
    })
}

//getpostid
service.getIdPost = (id) => {
 return dbLayer.getIdPost(id).then((resp) => {
        if (resp) return resp
        else {
            let err = new Error("No post found for this Id");
            err.status = 500;
            throw err;
        }
    })

}

//getbyword
service.getByWord = (data) => {
    return dbLayer.getByWord(data).then((data) => {
        return data
    })
}


//addnewpostfor particular user
service.NewdataForEmail = (email,id) => {
    return dbLayer.NewdataForEmail(email,id).then((resp) => {
        if (resp) {
            return resp
        } else {
            let err = new Error("Failed to fetch posts")
            err.status = 400
            throw err
        }
        
     
    })

}
//
service.updatePosts = (username, postsobj) => {
    return dbLayer.updatePosts(username, postsobj).then((id) => {
        if (id) {
            return id
        } else {
            let err = new Error("Posts details not updated")
            err.status = 400
            throw err
        }
    })
}



//getbytag
service.getByTagNew = (tag) => {
    return dbLayer.getByTagNew(tag).then((resp) => {
        if (resp) return resp
        else {
            let err = new Error("No post found for this Tag");
            err.status = 500;
            throw err;
        }
    })

}

//getProfile
service.getProfile = (name) => {
    return dbLayer.getProfile(name).then((data) => {
        if (data) {
            return data
        }
    })
}
module.exports = service
