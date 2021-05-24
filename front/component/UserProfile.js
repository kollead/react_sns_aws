import React, {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Card, Avatar, Button} from 'antd'
import {logoutRequestAction} from '../reducers/user'

const UserProfile = () => {

    const dispatch = useDispatch()
    const {user, isLoggingOut} = useSelector((state)=>state.user)

    const onLogout = useCallback(
        () => {
            dispatch(logoutRequestAction())
        },
        [],
    )

    return (
        <Card
            actions={[
                <>
                <div key="twit">twit<br/>0</div>
                <div key="followings">followings<br/>0</div>
                <div key="followers">followers<br/>0</div>
                </>
            ]}
        >
            <Card.Meta
                title={user.nickname}
                avatar={<Avatar>{user.nickname[0]}</Avatar>}
            />
            <Button onClick={onLogout} loading={isLoggingOut}>Logout</Button>
        </Card>
    )

}

export default UserProfile;