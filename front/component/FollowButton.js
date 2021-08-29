import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Button from 'antd/lib/button';
import PropTypes from 'prop-types';
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from '../reducers/user';

const FollowButton = ({post}) => {
  const dispatch = useDispatch();
  const {user, followLoading, unfollowLoading} = useSelector((state) => state.user);

  const isFollowing = user?.Following?.find((v) => v.id === post.User.id);
  const onClickButton = useCallback(
    () => {
      if (isFollowing) {
        dispatch({
          type: UNFOLLOW_REQUEST,
          data: post.User.id,
        });
        console.log('isFollowing: ', isFollowing);
        console.log('isFollowing2: ', user?.Following.find((v) => v.id === post.User.id));
        console.log('user: ', user.Following);
      } else {
        dispatch({
          type: FOLLOW_REQUEST,
          data: post.User.id,
        });
        console.log('isFollowing: ', isFollowing);
        console.log('isFollowing2: ', user?.Following.find((v) => v.id === post.User.id));
        console.log('user: ', user.Following);
      }
    }, [isFollowing],
  );
  if (post.User.id === user.id) {
    return null;
  }
  return (
    <Button loading={followLoading || unfollowLoading} onClick={onClickButton}>
      {isFollowing ? '언팔로우' : '팔로우'}
    </Button>
  );
};

FollowButton.propTypes = {
  post: PropTypes.object.isRequired,
};

export default FollowButton;
