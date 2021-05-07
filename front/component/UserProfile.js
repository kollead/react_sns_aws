import React, {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {Card, Avatar, Button} from 'antd'
import PropTypes from 'prop-types'
import {logoutAction} from '../reducers/user'

const UserProfile = () => {

    const dispatch = useDispatch()
    const onLogout = useCallback(
        () => {
            dispatch(logoutAction())
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
                title="UserProfile"
                avatar={<Avatar>ZC</Avatar>}
            />
            <Button onClick={onLogout}>Logout</Button>
        </Card>
    )

}

export default UserProfile;