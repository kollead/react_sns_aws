import React, {useCallback} from 'react';
import {Form, Input, Button} from 'antd';
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
  const {LogInLoading} = useSelector((state) => state.user);

  // const style= useMemo(()=>({marginTop: 10}), []);
  // <ButtonWrapper style={style}>

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
                    required/>
            </div>
            <div>
                <label htmlFor="user-password">PASSWORD</label>
                <br/>
                <Input 
                    name="user-password" 
                    type="password" 
                    value={password} 
                    onChange={onChangePassword} 
                    required/>
            </div>
            <div>
                <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={LogInLoading}>Login</Button>
                <Link href="/signup"><a>Signup</a></Link>
                </ButtonWrapper>
            </div>
        </FormWrapper>        
    );
}



export default LoginForm;