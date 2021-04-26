import React, {useState, useCallback} from 'react'
import {Form, Input, Button} from 'antd'
import Link from 'next/link'
import styled from 'styled-components'

const ButtonWrapper=styled.div`
    margin-top: 10px;
`;

const LoginForm = () => {

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    //const style= useMemo(()=>({marginTop: 10}), []);
    //<ButtonWrapper style={style}>

    const onsubmitForm = useCallback(()=>{
        console.log(id, password)
    },[id, password])

    return (
        <Form onFinish={onsubmitForm}>
            <div>
                <label htmlFor="user-id" >ID</label>
                <br/>
                <Input 
                    name="user-id" 
                    value={id} 
                    onChange={onChangeId} 
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
                <Button type="primary" htmlType="submit" loading={false}>Login</Button>
                <Link href="/signup"><a>Signup</a></Link>
                </ButtonWrapper>
            </div>
        </Form>        
    );
}
export default LoginForm;