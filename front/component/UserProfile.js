import React, {useCallback} from 'react'
import {Card, Avatar, Button} from 'antd'
import PropTypes from 'prop-types'

const UserProfile = ({setIsLoggedIn}) => {

    const onLogout = useCallback(
        () => {
            setIsLoggedIn(false)
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

UserProfile.propTypes = {
    setIsLoggedIn : PropTypes.bool.isRequired
}

export default UserProfile;