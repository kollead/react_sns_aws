import React from "react"
import {useSelector} from 'react-redux'
import AppLayout from "../component/AppLayout"
import PostForm from ""
import PostCard from ""

const Home = () => {
    const {isLoggedIn} = useSelector((state)=>state.user);
    const {mainPosts} = useSelector((state)=>state.post);
    return (        
        
        <AppLayout>
            {isLoggedIn && <PostForm/>}
            {mainPosts.map((post)=><PostCard key={post.id} post={post}/>)}
        </AppLayout>
    )
}
export default Home