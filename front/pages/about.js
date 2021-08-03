import React from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import { END } from 'redux-saga';
import { Card, Avatar } from 'antd';
import AppLayout from '../component/AppLayout';
import {LOAD_USER_INFO_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';

const About = () => {
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
                {userInfo.Posts.length}
              </div>,
              <div key="following">
                <br />
                {userInfo.Following.length}
              </div>,
              <div key="follower">
                <br />
                {userInfo.Follower.length}
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

export const getStaticProps = wrapper.getStaticProps(async (context) => {
  context.store.dispatch({
    type: LOAD_USER_INFO_REQUEST,
    data: 1,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default About;
