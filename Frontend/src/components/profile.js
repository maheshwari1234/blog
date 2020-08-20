import React, { useEffect } from "react";
import { Profile } from '../Redux/action/ProfileAction'
import Navbar from './Navbar'
import {Image} from "react-bootstrap"
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";

const ProfileComponent = (props) => {
    const posts = useSelector((state) => state.profile.ProfilePosts)
    console.log("posts of profile", posts)
    const dispatch = useDispatch();

    const name = props.match.params.name
    useEffect(() => {
        dispatch(Profile(name))
    }, []);

    if (posts != undefined) {
        const count = posts.length
        return (
            <React.Fragment>
                <Navbar /><br />
                <div className="container">
                    <div className="card">
                        <div className="row">
                            <div className="column">
                        <Image src={process.env.PUBLIC_URL + '/profile.jfif'} alt="image not found" />
                        </div>
                        <div className="column">
                            <center>
                                <h2 >{name}</h2></center>
                                </div>
                        
                        {/* <div className="column">
                        <h3>{posts[0].Course}</h3>
                        </div> */}
                        </div>

                    <h4>
                        {name} published {count} posts
                    </h4><br/>
                    </div>
                    <div className="offset-2 col-sm-6">
                        {posts.map((data) => {
                            return (
                                <div className="card">
                                    <div className="card-title">
                                        <Link to={`/${name}/${data.id}/${data.Title}`} style={{ color: 'deepPink', fontSize: "20px" }}>{data.Title}</Link>

                                    </div>
                                </div>



                            )


                        })}


                    </div>

                </div>

            </React.Fragment>
        )
    }
    else {
        return <h1>not</h1>
    }


}

export default ProfileComponent
