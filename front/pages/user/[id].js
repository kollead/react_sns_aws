// user/[id].js
import React, {useEffect} from 'react';
import { END } from 'redux-saga';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link'
import Head from 'next/head';
import { Card, Avatar } from 'antd';
import wrapper from '../../store/configureStore';
import {LOAD_MY_INFO_REQUEST, LOAD_USER_INFO_REQUEST} from '../../reducers/user';
import { LOAD_USER_POSTS_REQUEST } from '../../reducers/post';
import AppLayout from '../../component/AppLayout';
import PostCard from '../../component/PostCard';

const User = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {id} = router.query;
  const {mainPosts, hasMorePost, loadPostsLoading} = useSelector((state) => state.post);
  const {userInfo, user} = useSelector((state) => state.user);

  useEffect(() => {
    function onScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight
        > document.documentElement.scrollHeight - 300) {
        if (hasMorePost && !loadPostsLoading) {
          const lastId = mainPosts[mainPosts.length - 1]?.id;
          console.log('lastId: ', lastId);
          dispatch({
            type: LOAD_USER_POSTS_REQUEST,
            lastId,
            data: id,
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePost, id, mainPosts.length]);

  return (
    <AppLayout>
      {userInfo && (
      <Head>
        <title>
          {userInfo.nickname}
          님의 글
        </title>
        <meta name="description" content={`${userInfo.nickname}님의 게시글`} />
        <meta name="og:title" content={`${userInfo.nickname}님의 게시글`} />
        <meta name="og:description" content={`${userInfo.nickname}님의 게시글`} />
        <meta name="og:url" content={`https://kollid.me/pot.${id}`} />
      </Head>
      )}
      {userInfo && (userInfo.id !== user?.id)
        ? (
          <Card
            style={{marginBottom: 20}}
            actions={[
              <div key="twit">Twit<br />{userInfo.Posts}</div>,
              <div key="followings">Following<br />{userInfo.Following}</div>,
              <div key="followers">Follower<br />{userInfo.Follower}</div>,
            ]}
          >
            <Card.Meta
              title={userInfo.nickname}
              avatar={(
                <Link href={`/user/${userInfo.id}`}>
                  <a><Avatar>{userInfo.nickname[0]}</Avatar></a>
                </Link>
              )}
            />
          </Card>
        )
        : null };
      {mainPosts.map((p) => (
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
  console.log('getState', context.store.getState().post.mainPosts);
  return {props: {}};
});

export default User;
