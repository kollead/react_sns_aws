import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import {Card, Popover, Button, Avatar, List, Comment} from 'antd';
import {EllipsisOutlined, HeartOutlined, MessageOutlined, HeartTwoTone, RetweetOutlined} from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import dayjs from 'dayjs';

import PostImages from './PostImages';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import FollowButton from './FollowButton';
import { REMOVE_POST_REQUEST, LIKE_POST_REQUEST, UNLIKE_POST_REQUEST, RETWEET_REQUEST, MODIFY_POST_REQUEST } from '../reducers/post';

const relativeTime = require('dayjs/plugin/relativeTime');

dayjs.extend(relativeTime);
dayjs.locale('ko');

function PostCard({post}) {
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const id = useSelector((state) => state.user.user?.id);
  const {removePostLoading} = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);

  const onLike = useCallback(
    () => {
      if (!id) {
        return alert('로그인이 필요합니다.');
      }
      return dispatch({
        type: LIKE_POST_REQUEST,
        data: post.id,
      });
    }, [id],
  );

  const onUnLike = useCallback(
    () => {
      if (!id) {
        return alert('로그인이 필요합니다.');
      }
      return dispatch({
        type: UNLIKE_POST_REQUEST,
        data: post.id,
      });
    }, [id],
  );

  const onRetweet = useCallback(
    () => {
      if (!id) {
        return alert('로그인이 필요합니다.');
      }
      return dispatch({
        type: RETWEET_REQUEST,
        data: post.id,
      });
    },
    [id],
  );

  const onToggleComment = useCallback(
    () => {
      setCommentFormOpened((prev) => !prev);
    }, [],
  );

  const onRemovePost = useCallback(
    () => {
      if (!id) {
        return alert('로그인이 필요합니다.');
      }
      return dispatch({
        type: REMOVE_POST_REQUEST,
        data: post.id,
      });
    }, [id],
  );

  const onClickModify = useCallback(
    () => {
      setEditMode((prev) => !prev);
    }, [],
  );
  const onModifyPost = useCallback(
    (editText) => () => {
      dispatch({
        type: MODIFY_POST_REQUEST,
        data: {
          postId: post.id,
          content: editText,
        },
      });
    },
    [post],
  );

  const liked = post.Likers.find((v) => v.id === id);
  const now = dayjs();

  return (
    <div style={{marginBottom: 10}}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" onClick={onRetweet} />,
          liked
            ? <HeartTwoTone twoToneColor="eb2f96" key="heart" onClick={onUnLike} />
            : <HeartOutlined key="heart" onClick={onLike} />,
          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover
            key="more"
            content={(
              <Button.Group>
                {id && post.User.id === id
                  ? (
                    <>
                      {!post.RetweetId && <Button onClick={onClickModify}>Modify</Button>}
                      <Button type="danger" loading={removePostLoading} onClick={onRemovePost}>Remove</Button>
                    </>
                  )
                  : <Button>Report</Button>}
              </Button.Group>
            )}
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
        title={post.RetweetId ? `${post.User.nickname} 님이 리트윗 하셨습니다.` : null}
        extra={id && <FollowButton post={post} />}
      >
        {post.RetweetId && post.Retweet
          ? (
            <Card
              cover={post.Retweet.Images[0] && <PostImages images={post.Retweet.Images} />}
            >
              <div style={{float: 'right'}}>
                {dayjs(post.createdAt).diff(now, 'day') >= 2
                  ? dayjs(post.createdAt).format('YYYY.MM.DD')
                  : dayjs(post.createdAt).fromNow()}
              </div>
              <Card.Meta
                avatar={(
                  <Link href={`/user/${post.Retweet.User.id}`}>
                    <a><Avatar>{post.Retweet.User.nickname[0]}</Avatar></a>
                  </Link>
                )}
                title={post.Retweet.User.nickname}
                description={(
                  <PostCardContent
                    postData={post.Retweet.content}
                    onChangePost={onModifyPost}
                    onClickModify={onClickModify}
                  />
                )}
              />
            </Card>
          )
          : (
            <>
              <div style={{float: 'right'}}>
                {dayjs(post.createdAt).diff(now, 'day') >= 2
                  ? dayjs(post.createdAt).format('YYYY.MM.DD')
                  : dayjs(post.createdAt).fromNow()}
              </div>
              <Card.Meta
                avatar={(
                  <Link href={`/user/${post.User.id}`}>
                    <a><Avatar>{post.User.nickname[0]}</Avatar></a>
                  </Link>
                  )}
                title={post.User.nickname}
                description={(
                  <PostCardContent
                    editmode={editMode}
                    postData={post.content}
                    onChangePost={onModifyPost}
                    onClickModify={onClickModify}
                  />
                )}
              />
            </>
          )}
      </Card>
      {commentFormOpened && (
        <div>
          <CommentForm post={post} />
          <List
            header={`${post.Comments.length}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <div style={{float: 'right'}}>
                  {dayjs(post.createdAt).diff(now, 'day') >= 2
                    ? dayjs(post.createdAt).format('YYYY.MM.DD')
                    : dayjs(post.createdAt).fromNow()}
                </div>
                <Comment
                  author={item.User.nickname}
                  avatar={(
                    <Link href={`/user/${item.User}`}>
                      <a><Avatar>{item.User.nickname[0]}</Avatar></a>
                    </Link>
                    )}
                  content={item.content}
                />
              </li>
            )}
          />
        </div>
      )}
      {/* <CommentForm/>
      <Comments/> */}
    </div>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Likers: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
    RetweetId: PropTypes.number,
    Retweet: PropTypes.objectOf(PropTypes.any),
  }).isRequired,
};

export default PostCard;
