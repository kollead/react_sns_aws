import React, {useCallback, useState} from 'react'
import AppLayout from '../component/AppLayout'
import Head from 'next/head'
import {Form, Input} from 'antd'
import useInput from '../hooks/useInput'

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
        },[password],
    );
    
    
    const onsubmit = useCallback(
        () => {
            
        },[],
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
                        <label htmlFor="user-id">Id</label>
                        <br/>
                        <Input name="user-id" value={id} required onChange={onChangeId}/>
                    </div>
                    <div>
                        <label htmlFor="user-id">Id</label>
                        <br/>
                        <Input name="user-id" value={id} required onChange={onChangeId}/>
                    </div>
                    <div>
                        <label htmlFor="user-id">Id</label>
                        <br/>
                        <Input name="user-id" value={id} required onChange={onChangeId}/>
                        {passwordError && <div></div>}
                    </div>

                </Form>
            </AppLayout>
            
    )
}
export default Signup