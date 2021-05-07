import React, {useCallback} from 'react'
import {Form, Input, Button} from 'antd'
import Link from 'next/link'
import styled from 'styled-components'
import {useDispatch} from 'react-redux'
import useInput from '../hooks/useInput'
import {loginAction} from '../reducers/user'


const ButtonWrapper=styled.div`
    margin-top: 10px;
`;

const FormWrapper = styled(Form)`
    padding: 10px;
`;

const LoginForm = () => {

    const dispatch = useDispatch();
    const [id, onChangeId] = useInput('')
    const [password, onChangePassword]=useInput('') 
    
    //const style= useMemo(()=>({marginTop: 10}), []);
    //<ButtonWrapper style={style}>

    const onsubmitForm = useCallback(()=>{
        console.log(id, password)
        dispatch(loginAction({id, password}));
        //setIsLoggedIn(true)
    },[id, password])

    return (
        <FormWrapper onFinish={onsubmitForm}>
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
        </FormWrapper>        
    );
}



export default LoginForm;