import React, {useEffect, useState, useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Head from 'next/head';
import axios from 'axios';
import { END } from 'redux-saga';
import Router from 'next/router';
import useSWR from 'swr';

import wrapper from '../store/configureStore';
import AppLayout from '../component/AppLayout';
import NickNameEditForm from '../component/NickNameEditForm';
import FollowList from '../component/FollowList';
import {LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST, LOAD_MY_INFO_REQUEST } from '../reducers/user';

const fetcher = (url) => axios.get(url, {withCredentials: true}).then((result) => result.data);

const Profile = () => {
  // const dispatch = useDispatch();
  const {user} = useSelector((state) => state.user);
  const [followerLimit, setFollowerLimit] = useState(3);
  const [followingLimit, setFollowingLimit] = useState(3);

  const {data: followersData = [], error: followerError} = useSWR(`http://localhost:3065/user/followers?limit=${followerLimit}`, fetcher);
  const {data: followingsData = [], error: followingError} = useSWR(`http://localhost:3065/user/followings?limit=${followingLimit}`, fetcher);

  useEffect(() => {
    if (!(user && user.id)) {
      Router.push('/');
    }
  }, [user && user.id]);

  /*  useEffect(() => {
    dispatch({
      type: LOAD_FOLLOWERS_REQUEST,
    });
    dispatch({
      type: LOAD_FOLLOWINGS_REQUEST,
    });
  }, []); */

  const loadMoreFollowing = useCallback(
    () => {
      setFollowingLimit((prev) => prev + 3);
    },
    [],
  );
  const loadMoreFollower = useCallback(
    () => {
      setFollowerLimit((prev) => prev + 3);
    },
    [],
  );

  if (!user) {
    return '내 정보 로딩 중...';
  }

  if (followerError || followingError) {
    console.error(followerError || followingError);
    return '팔로윙||팔로워 로딩 중 에러가 발생합니다';
  }

  return (
    <>
      <Head>
        <title>Profile | NodeBird</title>
      </Head>
      <AppLayout>
        <NickNameEditForm />
        <FollowList header="Following" data={followingsData} onClickMore={loadMoreFollowing} loading={!followingsData && !followingError} />
        <FollowList header="Follower" data={followersData} onClickMore={loadMoreFollower} loading={!followersData && !followerError} />
      </AppLayout>
    </>
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
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Profile;
