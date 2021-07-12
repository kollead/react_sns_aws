import React, {useMemo, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Form, Input} from 'antd';
import useInput from '../hooks/useInput';
import { CHANGE_NICKNAME_REQUEST } from '../reducers/user';

function NickNameEditForm() {
  const style = useMemo(() => ({
    marginBottom: '20px', border: '1px solid #d9d9d9', padding: '10px',
  }), []);
  const {user} = useSelector((state) => state.user);
  const [nickname, onChangeNickname] = useInput(user?.nickname || '');
  const dispatch = useDispatch();

  const onSubmit = useCallback(() => {
    dispatch({
      type: CHANGE_NICKNAME_REQUEST,
      data: nickname,
    });
  }, [nickname]);

  return (
    <Form
      style={style}
    >
      <Input.Search
        value={nickname}
        onChange={onChangeNickname}
        addonBefore="nickName"
        enterButton="Modify"
        onSearch={onSubmit}
      />
    </Form>
  );
}

export default NickNameEditForm;
