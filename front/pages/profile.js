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
                <div>profile</div>
            </AppLayout>
        </>
    )
}
export default Profile