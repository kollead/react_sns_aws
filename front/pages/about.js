import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Head from 'next/head';
import Router from 'next/router';
import { Card } from 'antd';
import AppLayout from '../component/AppLayout';
import NickNameEditForm from '../component/NickNameEditForm';
import FollowList from '../component/FollowList';
import {LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST, LOAD_USER_INFO_REQUEST } from '../reducers/user';
import Avatar from 'antd/lib/avatar/avatar';
import wrapper from '../store/configureStore';
import { END } from '@redux-saga/core';

const About = () => {
  const dispatch = useDispatch();
  const {userInfo} = useSelector((state) => state.user);

  return (
    <AppLayout>
      <Head>
        <title>About | NodeBird</title>
      </Head>
      {userInfo
        ? (
          <Card
            actions={[
              <div key="twit">
                <br />
                {userInfo.Posts}
              </div>,
              <div key="following">
                <br />
                {userInfo.Following}
              </div>,
              <div key="follower">
                <br />
                {userInfo.Follower}
              </div>,
            ]}
          >
            <Card.Meta
              avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
              title={userInfo.nickname}
              description="sns"
            />
          </Card>
        )
        : null }
    </AppLayout>

  );
};

export const getStaticProps = wrapper.getStaticProps(async(context) => {
  context.store.dispatch({
    type: LOAD_USER_INFO_REQUEST,
    data: 1,
  });
  context.store.dispatch(END);
})

export default About;
