import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Card, Avatar, Button} from 'antd';
import {logoutRequestAction} from '../reducers/user';

const UserProfile = () => {
  const dispatch = useDispatch();
  const {user, LogOutLoading} = useSelector((state) => state.user);

  const onLogout = useCallback(
    () => {
      dispatch(logoutRequestAction());
    }, [],
  );

  return (
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
      <Button onClick={onLogout} loading={LogOutLoading}>Logout</Button>
    </Card>
  );
};

export default UserProfile;
