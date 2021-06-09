import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import Router from 'next/router';
import AppLayout from '../component/AppLayout';
import NickNameEditForm from '../component/NickNameEditForm';
import FollowList from '../component/FollowList';

const Profile = () => {
  const {user} = useSelector((state) => state.user);

  useEffect(() => {
    if (!(user && user.id)) {
      Router.push('/');
    }
  }, [user, user.id]);

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
        <FollowList header="Following List" data={user.Following} />
        <FollowList header="Follower List" data={user.Follower} />
      </AppLayout>
    </>
  );
};

export default Profile;
