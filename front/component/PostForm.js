import React, {useCallback, useRef, useEffect} from 'react';
import { Form, Input, Button} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {addPost, UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE, ADD_POST_REQUEST} from '../reducers/post';
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
      if (!text || text.trim()) {
        return alert('게시글을 작성하세요');
      }
      const formData = new FormData();
      imagePaths.forEach((p) => {
        formData.append('image', p);
      });
      formData.append('content', text);
      return dispatch({
        type: ADD_POST_REQUEST,
        data: formData,
      });
    },
    [text, imagePaths],
  );
  const onClickImageUpload = useCallback(
    () => {
      imageInput.current.click();
    },
    [imageInput.current],
  );

  const onChangeImages = useCallback(
    (e) => {
      console.log('images', e.target.files);
      const imageFormData = new FormData();
      [].forEach.call(e.target.files, (f) => {
        imageFormData.append('image', f);
      });
      dispatch({
        type: UPLOAD_IMAGES_REQUEST,
        data: imageFormData,
      });
    },
    [],
  );

  const imageOnClick = useCallback(
    (index) => () => {
      dispatch({
        type: REMOVE_IMAGE,
        data: index,
      });
    },
    [],
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
        <input type="file" name="image" multiple hidden ref={imageInput} onChange={onChangeImages} />
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
        {imagePaths && imagePaths.map((v, i) => (
          <div key={v} style={{display: 'inline-block'}} onClick={imageOnClick(i)} onKeyDown={imageOnClick(i)} role="presentation">
            <img
              src={`http://localhost:3065/${v}`}
              style={{width: '200px'}}
              alt={v}
            />
            <div><Button>Remove</Button></div>
          </div>
        ))}
      </div>
    </Form>
  );
}

export default PostForm;
