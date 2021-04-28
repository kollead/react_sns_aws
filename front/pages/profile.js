import React from 'react'
import AppLayout from '../component/AppLayout'
import Head from 'next/head'
import NickNameEditForm from '../component/NickNameEditForm'
import FollowList from '../component/FollowingList'

const Profile = () => {
    const followerList = [{nickname: "dummy01"},{nickname: "dummy02"},{nickname: "dummy03"}]
    const followingList = [{nickname: "dummy01"},{nickname: "dummy02"},{nickname: "dummy03"}]
    return (
        <>
            <Head>
                <title>Profile | NodeBird</title>
            </Head>
            <AppLayout>
                <NickNameEditForm/>
                <FollowList header="Following List" data={followingList}/>
                <FollowList header="Follower List" data={followerList}/>
            </AppLayout>
        </>
    )
}
export default Profile