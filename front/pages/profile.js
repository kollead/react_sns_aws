import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Head from 'next/head';
import Router from 'next/router';
import AppLayout from '../component/AppLayout';
import NickNameEditForm from '../component/NickNameEditForm';
import FollowList from '../component/FollowList';
import {LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST } from '../reducers/user';

const Profile = () => {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.user);

  useEffect(() => {
    if (!(user && user.id)) {
      Router.push('/');
    }
  }, [user && user.id]);

  useEffect(() => {
    dispatch({
      type: LOAD_FOLLOWERS_REQUEST,
    });
    dispatch({
      type: LOAD_FOLLOWINGS_REQUEST,
    });
  }, []);

  if (!user) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Profile | NodeBird</title>
      </Head>
      <AppLayout>
        <NickNameEditForm />
        <FollowList header="Following" data={user.Following} />
        <FollowList header="Follower" data={user.Follower} />
      </AppLayout>
    </>
  );
};

export default Profile;
