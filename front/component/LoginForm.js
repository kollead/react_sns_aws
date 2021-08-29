import React, {useCallback, useEffect} from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import Link from 'next/link';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import useInput from '../hooks/useInput';
import {loginRequestAction} from '../reducers/user';

const ButtonWrapper = styled.div`
    margin-top: 10px;
`;

const FormWrapper = styled(Form)`
    padding: 10px;
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const {logInLoading, logInError} = useSelector((state) => state.user);

  // const style= useMemo(()=>({marginTop: 10}), []);
  // <ButtonWrapper style={style}>

  useEffect(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);

  const onsubmitForm = useCallback(() => {
    console.log(email, password);
    dispatch(loginRequestAction({email, password}));
    // setIsLoggedIn(true)
  },
  [email, password]);

  return (
    <FormWrapper onFinish={onsubmitForm}>
      <div>
        <label htmlFor="user-email">E-Mail</label>
        <br />
        <Input
          name="user-email"
          value={email}
          type="email"
          onChange={onChangeEmail}
          required
        />
      </div>
      <div>
        <label htmlFor="user-password">PASSWORD</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <div>
        <ButtonWrapper>
          <Button type="primary" htmlType="submit" loading={logInLoading}> Login </Button>
          <Link href="/signup"><a> Signup </a></Link>
        </ButtonWrapper>
      </div>
    </FormWrapper>
  );
};

export default LoginForm;
