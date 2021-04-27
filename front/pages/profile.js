import React from 'react'
import AppLayout from '../component/AppLayout'
import Head from 'next/head'

const Profile = () => {
    return (
        <>
            <Head>
                <title>Profile | NodeBird</title>
            </Head>
            <AppLayout>
                <NickNameEditForm/>
                <FollowList header="Following List" data={followingList}/>
                <FollowerList header="Follower List" data={followerList}/>
            </AppLayout>
        </>
    )
}
export default Profile