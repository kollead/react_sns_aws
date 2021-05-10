import React from 'react'
import {Card} from 'antd'

function PostCard() {
    return (
        <div>
            <Card>
                <Image/>
                <Content/>
                <Buttons></Buttons>
            </Card>
            <CommentForm/>
            <Comments/>
        </div>
    )
}

export default PostCard
