import React,{useEffect} from 'react'
import Navbar from './Navbar'
import Post from './post'
import {useSelector,useDispatch} from 'react-redux'
import {fetch} from '../Redux/action/postAction'


function Home(){
    const posts=useSelector(state=>state.postred.posts)
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(fetch())
      }, []);
    
    const postArray = posts.map((post1,i) => {
        const data=post1.Posts
        const name=post1.name

       return data.map((post)=>{
        return <Post id={post.id} Title={post.Title} Brief={post.Brief} Image={post.Image} name={name} />
        })
    })
    return (
        <React.Fragment>
            <Navbar/>
            <div>
                {postArray}
            </div>
        </React.Fragment>
    )

}
       
    
export default Home