import React, {useEffect} from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {END} from 'redux-saga';
import wrapper from '../store/configureStore';
import AppLayout from '../component/AppLayout';
import PostForm from '../component/PostForm';
import PostCard from '../component/PostCard';
import {LOAD_POSTS_REQUEST} from '../reducers/post';
import {LOAD_MY_INFO_REQUEST} from '../reducers/user';

const Home = () => {
  const {user} = useSelector((state) => state.user);
  const {mainPosts, hasMorePost, loadPostsLoading,
    retweetError} = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    if (retweetError) {
      alert(retweetError);
    }
  }, [retweetError]);

  useEffect(() => {
    function onScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight
        > document.documentElement.scrollHeight - 300) {
        if (hasMorePost && !loadPostsLoading) {
          const lastId = mainPosts[mainPosts.length - 1]?.id;
          console.log('lastId: ', lastId);
          dispatch({
            type: LOAD_POSTS_REQUEST,
            lastId,
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePost, loadPostsLoading, mainPosts]);

  return (
    <AppLayout>
      {user && <PostForm />}
      {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  context.store.dispatch({
    type: LOAD_POSTS_REQUEST,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Home;
