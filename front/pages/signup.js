import React, {useCallback, useState} from 'react'
import AppLayout from '../component/AppLayout'
import Head from 'next/head'
import {Form, Input, Checkbox, Button} from 'antd'
import useInput from '../hooks/useInput'
import Password from 'antd/lib/input/Password'
import styled from 'styled-components'

const ErrorMessage = styled.div`
    color: red;
`;

const Signup = () => {

    const [id, onChangeId] = useInput('')
    const [nickname, onChangeNickname] = useInput('')
    const [password, onChangePassword] = useInput('')
 
    const [passwordCheck, setPasswordCheck] = useState('')
    const [passwordError, setPasswordError] = useState(false)
     const onChangePasswordCheck = useCallback(
        (e) => {
          setPasswordCheck(e.target.value);
          setPasswordError(e.target.value!==password);  
        }, [password],
    );

    const [term, setTerm] = useState('')
    const [termError, setTermError] = useState(false)
    const onChangeTerm = useCallback(
        (e) => {
            setTerm(e.target.checked);
            setTermError(false);
        }, []
    )
    
    
    const onsubmit = useCallback(
        () => {
            if (password !== passwordCheck) {
                return setPasswordError(true);
            }
            if (! term) {
                return setTermError(true);
            }
            console.log(id, nickname, passwordCheck)
        },[password, passwordCheck, term]
    );

    return( 
            <AppLayout>
                <Head>
                    <title>Sign Up | NodeBird</title>
                </Head>
                <Form onFinish={onsubmit}>
                    <div>
                        <label htmlFor="user-id">Id</label>
                        <br/>
                        <Input name="user-id" value={id} required onChange={onChangeId}/>
                    </div>
                    <div>
                        <label htmlFor="user-nickname">Id</label>
                        <br/>
                        <Input name="user-nickname" value={nickname} required onChange={onChangeNickname}/>
                    </div>
                    <div>
                        <label htmlFor="user-password">Id</label>
                        <br/>
                        <Input name="user-password" type="password" value={Password} required onChange={onChangePassword}/>
                    </div>
                    <div>
                        <label htmlFor="user-id">Id</label>
                        <br/>
                        <Input 
                            name="user-password-check" 
                            type="password"
                            value={passwordCheck} 
                            required 
                            onChange={onChangePasswordCheck}/>
                        {passwordError && <ErrorMessage>Password does not match</ErrorMessage>}
                    </div>
                    <div>
                        <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>Be nice</Checkbox>
                        {termError && <ErrorMessage>You need to agree the statement</ErrorMessage>}
                    </div>
                    <div style={{marginTop: 10}}>
                        <Button type="primary" htmlType="submit">Sign up</Button>
                    </div>
                </Form>
            </AppLayout>
            
    )
}
export default Signup