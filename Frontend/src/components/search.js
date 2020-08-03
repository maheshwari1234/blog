import React,{ useEffect} from 'react';
import Navbar from "./Navbar"
import { searchByTagAction } from '../Redux/action/searchAction'
import Post from "./post"
import {useSelector,useDispatch} from 'react-redux'

const Search=(props)=>{
    const searched=useSelector((state)=>state.searchByTag.data)
    const dispatch=useDispatch();

    const tag = props.match.params.tag
    useEffect(() => {
       dispatch(searchByTagAction(tag))
     }, []);

     if(searched!==undefined){
          var arr=[]    
          searched.map((post1) => {
             post1.map((newpost)=>{
                 if(newpost!=null){
                 return arr.push(newpost)
                 }
             })
        })

        const postArray=arr.map((post)=>{
            return <Post id={post.newdata.id} Title={post.newdata.Title} Brief={post.newdata.Brief} Image={post.newdata.Image} name={post.username}/>

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
     else{
         return<h1>not search</h1>
     }

}

export default Search