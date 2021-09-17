import React, {useEffect, useState, useCallback} from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import axios from 'axios';
import { END } from 'redux-saga';
import Router from 'next/router';
import useSWR from 'swr';

import wrapper from '../store/configureStore';
import AppLayout from '../component/AppLayout';
import NickNameEditForm from '../component/NickNameEditForm';
import FollowList from '../component/FollowList';
import {LOAD_MY_INFO_REQUEST } from '../reducers/user';
import {backUrl} from '../config/config';

const fetcher = (url) => axios.get(url, {withCredentials: true}).then((result) => result.data);

const Profile = () => {
  // const dispatch = useDispatch();
  const {user} = useSelector((state) => state.user);
  const [followerLimit, setFollowerLimit] = useState(3);
  const [followingLimit, setFollowingLimit] = useState(3);

  const {data: followersData = [], error: followerError, mutate: mutateFollower} = useSWR(`${backUrl}/user/followers?limit=${followerLimit}`, fetcher);
  const {data: followingsData = [], error: followingError, mutate: mutateFollowing} = useSWR(`${backUrl}/user/followings?limit=${followingLimit}`, fetcher);

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
        <title>Profile | react_sns</title>
      </Head>
      <AppLayout>
        <NickNameEditForm />
        <FollowList header="Following" followData={followingsData} mutate={mutateFollowing} onClickMore={loadMoreFollowing} loading={!followingsData && !followingError} />
        <FollowList header="Follower" followData={followersData} mutate={mutateFollower} onClickMore={loadMoreFollower} loading={!followersData && !followerError} />
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
