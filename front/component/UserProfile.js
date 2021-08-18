import React, {useCallback} from 'react';
import Link from 'next/link';
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
        <div key="twit"><Link href={`/user/${user.id}`}><a>Twit<br />{user.Posts.length}</a></Link></div>,
        <div key="followings"><Link href="/profile"><a>Following<br />{user.Following.length}</a></Link></div>,
        <div key="followers"><Link href="/profile"><a>Follower<br />{user.Follower.length}</a></Link></div>,
      ]}
    >
      <Card.Meta
        title={user.nickname}
        avatar={(
          <Link href={`/user/${user.id}`}>
            <Avatar>{user.nickname[0]}</Avatar>
          </Link>
          )}
      />
      <Button onClick={onLogout} loading={LogOutLoading}>Logout</Button>
    </Card>
  );
};

export default UserProfile;
