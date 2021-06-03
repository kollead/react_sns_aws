import React, {useCallback, useRef, useEffect} from 'react';
import { Form, Input, Button} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {addPost} from '../reducers/post';
import useInput from '../hooks/useInput';

function PostForm() {
  const dispatch = useDispatch();
  const [text, onChangeText, SetText] = useInput();
  const {imagePaths, addPostDone} = useSelector((state) => state.post);
  const imageInput = useRef();

  useEffect(() => {
    if (addPostDone) {
      SetText('');
    }
  }, [addPostDone]);

  const onSubmit = useCallback(
    () => {
      dispatch(addPost(text));
    },
    [text],
  );
  const onClickImageUpload = useCallback(
    () => {
      imageInput.current.click();
    },
    [imageInput.current],
  );

  return (
    <Form style={{margin: '10px 0 20px'}} encType="multipart/form-data" onFinish={onSubmit}>
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="Share your story"
      />
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>Image Upload</Button>
        <Button
          type="primary"
          style={{float: 'right'}}
          htmlType="submit"
        >
          Twit
        </Button>
      </div>
      <div>
        {imagePaths && imagePaths.map((v) => (
          <div key={v} style={{display: 'inline-block'}}>
            <img src={v} style={{width: '200px'}} alt={v} />
            <div><Button>Remove</Button></div>
          </div>
        ))}
      </div>
    </Form>
  );
}

export default PostForm;
