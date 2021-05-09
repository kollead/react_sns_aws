import React, {useCallback, useState} from 'react'
import {Form, Input, Button} from 'antd'
import {useSelector} from 'react-redux'

function PostForm() {

    const [text, SetText] =  useState("")
    const {imagePaths} = useSelector(state => state.mainPosts)
    const onSubmit = useCallback(
        () => {
            
        },
        [],
    )

    return (
        <Form style={{margin: '10px 0 20px'}} encType="multipart/form-data" onFinish={onSubmit}>
            <Input.TextArea 
             value={text}
             onChange={onChangeText}
             maxLength={140}
             placeholder="Share your story"/>
            <div>
                <input type="file" multiple hidden/>
                <Button>Image Upload</Button>
                <Button 
                 type="primary" 
                 style={{float: 'right'}}
                 htmlType="submit">Twit</Button>
            </div>
            <div>
                {imagePaths.map((v)=>(
                    <div key={v} style={{display: 'inline-block'}}>
                        <img src={v} style={{width: '200px'}} alt={v}/>
                        <div><Button>Remove</Button></div>
                    </div>
                ))}
            </div>
        </Form>
    )
}

export default PostForm
