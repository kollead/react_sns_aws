import React from 'react'
import AppLayout from '../component/AppLayout'
import Head from 'next/head'
import NickNameEditForm from '../component/NickNameEditForm'
import FollowList from '../component/FollowingList'
import { useSelector } from 'react-redux'

const Profile = () => {
    
    const {user} = useSelector((state)=>state.user)
    
    return (
        <>
            <Head>
                <title>Profile | NodeBird</title>
            </Head>
            <AppLayout>
                <NickNameEditForm/>
                <FollowList header="Following List" data={user.Following}/>
                <FollowList header="Follower List" data={user.Follower}/>
            </AppLayout>
        </>
    )
}
export default Profile