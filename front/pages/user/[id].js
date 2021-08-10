// user/[id].js
import React from 'react';
import { END } from 'redux-saga';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import axios from 'axios';
import Head from 'next/head';
import { Card, Avatar } from 'antd';
import wrapper from '../../store/configureStore';
import {LOAD_MY_INFO_REQUEST, LOAD_USER_INFO_REQUEST} from '../../reducers/user';
import { LOAD_USER_POSTS_REQUEST } from '../../reducers/post';
import AppLayout from '../../component/AppLayout';
import PostCard from '../../component/PostCard';

const Post = () => {
  const router = useRouter();
  const {id} = router.query;
  const {mainPosts} = useSelector((state) => state.post);
  const {userInfo, user} = useSelector((state) => state.user); 

  return (
    <AppLayout>
      <Head>
        <title>
          {userInfo.nickname}
          님의 글
        </title>
        <meta name="description" content={`${userInfo.User.nickname}님의 게시글`} />
        <meta name="og:title" content={`${userInfo.User.nickname}님의 게시글`} />
        <meta name="og:description" content={`${userInfo.User.nickname}님의 게시글`} />
        <meta name="og:image" content="http://nodebird.com/favicon.ico" />
        <meta name="og:url" content={`https://nodebird.com/pot.${id}`} />
      </Head>
      {userInfo
        ? (
          <Card
            actions={[
              <div key="twit">Twit<br />{user.Posts.length}</div>,
              <div key="followings">Following<br />{user.Following.length}</div>,
              <div key="followers">Follower<br />{user.Follower.length}</div>,
            ]}
          >
            <Card.Meta
              title={user.nickname}
              avatar={<Avatar>{user.nickname[0]}</Avatar>}
            />
          </Card>
        )
        : null };
      {mainPosts.mainPosts((p) => (
        <PostCard key={p.id} post={p} />
      ))}
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
    type: LOAD_USER_POSTS_REQUEST,
    data: context.params.id,
  });
  context.store.dispatch({
    type: LOAD_USER_INFO_REQUEST,
    data: context.params.id,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Post;