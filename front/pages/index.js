import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import AppLayout from '../component/AppLayout';
import PostForm from '../component/PostForm';
import PostCard from '../component/PostCard';
import {LOAD_POSTS_REQUEST} from '../reducers/post';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: LOAD_POSTS_REQUEST});
  }, []);
  const {user} = useSelector((state) => state.user);
  const {mainPosts} = useSelector((state) => state.post);
  return (
    <AppLayout>
      {user && <PostForm />}
      {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
    </AppLayout>
  );
};
export default Home;
