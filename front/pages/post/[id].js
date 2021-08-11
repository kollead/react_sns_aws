// post/[id].js
import React from 'react';
import { END } from 'redux-saga';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import axios from 'axios';
import Head from 'next/head';
import wrapper from '../../store/configureStore';
import {LOAD_MY_INFO_REQUEST} from '../../reducers/user';
import { LOAD_POST_REQUEST } from '../../reducers/post';
import AppLayout from '../../component/AppLayout';
import PostCard from '../../component/PostCard';

const Post = () => {
  const router = useRouter();
  const {id} = router.query;
  const {singlePost} = useSelector((state) => state.post);

  return (
    <AppLayout>
      <Head>
        <title>
          {singlePost.User.nickname}
          님의 글
        </title>
        <meta name="description" content={singlePost.content} />
        <meta name="og:title" content={`${singlePost.User.nickname}님의 게시글`} />
        <meta name="og:description" content={singlePost.content} />
        <meta name="og:image" content={singlePost.Images[0] ? singlePost.Images[0].src : 'http://nodebird.com/favicon.ico'} />
        <meta name="og:url" content={`https://nodebird.com/pot.${id}`} />
      </Head>
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
    type: LOAD_POST_REQUEST,
    data: context.params.id,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Post;
