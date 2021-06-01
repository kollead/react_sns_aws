import React, {useCallback, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Form, Input, Button} from 'antd';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import {ADD_COMMENT_REQUEST} from '../reducers/post';

function CommentForm({post}) {
  const dispatch = useDispatch();
  const [commentText, onChangeCommentText, setCommentText] = useInput;
  const id = useSelector((state) => state.user.user?.id);
  const {addCommentDone} = useSelector((state) => state.post.addCommentDone);

  useEffect(() => {
    if (addCommentDone) {
      setCommentText('');
    }
  }, [addCommentDone]);

  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText);
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: {content: commentText, postId: post.id, userId: id},
    });
  },
  [commentText, id]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{position: 'relative', margin: 0}}>
        <Input.TextArea
          value={commentText}
          onChange={onChangeCommentText}
          rows={4}
        />
        <Button
          style={{position: 'absolute', right: 0, bottom: -40}}
          type="primary"
          htmlType="submit"
        >
          Twit
        </Button>
      </Form.Item>
    </Form>
  );
}

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;
