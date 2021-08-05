// post/[id].js
import React from 'react';
import { END } from 'redux-saga';
import { useRouter } from 'next/router';
import axios from 'axios';
import wrapper from '../../store/configureStore';
import {LOAD_MY_INFO_REQUEST} from '../../reducers/user';
import { LOAD_POSTS_REQUEST } from '../../reducers/post';
import AppLayout from '../../component/AppLayout';
import PostCard from '../../component/PostCard';

const Post = () => {
  const router = useRouter();
  const {id} = router.query;
  const {singlePost} = ((state) => state.post);

  return (
    <AppLayout>
      <PostCard post={singlePost} />
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
    data: context.params.id,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Post;
