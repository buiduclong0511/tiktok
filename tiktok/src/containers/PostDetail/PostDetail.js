import { useState } from 'react'

import PostDetailComponent from '../../components/PostDetail'
import video from '../../assets/video/video1.mp4'
import avatar1 from '../../assets/img/user1.png'


export default function PostDetail() {
    const data = {
        id: 1,
        avatar: avatar1,
        nickname: 'gamkami',
        username: 'Gấm Kami',
        body: 'Trai đẹp lại đi Gạ kèo và cái kết 😆 #Boxstudio',
        music: 'Bầu trời có riêng ta - 𝒞ℴ̂𝓃ℊ 𝓉𝒽𝓊̛́𝒸 𝓋𝒾𝒹ℯℴ🌻',
        video: video,
        likeCount: 123,
        commentCount: 123,
        onLike() {
            alert('like')
        },
        onComment() {
            alert('comment')
        },
        onShare() {
            alert('share')
        },
        onCopy() {
            alert('copy')
        },
        onFollow() {
            alert('follow')
        },
        comments: [
            {
                id: 1,
                avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/a9c78707f4601652a355c6e791a1b545.jpeg?x-expires=1618225200&x-signature=XYUVAF6BGWPcfFsmVUbvyudfbIc%3D',
                username: 'Henry Bao',
                body: 'Xinh ngất ngây',
                createAt: '6 ngày trước',
                likeCount: 5,
                onLike() {
                    alert('like')
                },
                onReply() {
                    alert('reply')
                },
                onShowMenu() {
                    
                }
            },
            {
                id: 2,
                avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/a9c78707f4601652a355c6e791a1b545.jpeg?x-expires=1618225200&x-signature=XYUVAF6BGWPcfFsmVUbvyudfbIc%3D',
                username: 'Henry Bao',
                body: 'Xinh ngất ngây',
                createAt: '6 ngày trước',
                likeCount: 5,
                onLike() {
                    alert('like')
                },
                onReply() {
                    alert('reply')
                }
            },
            {
                id: 3,
                avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/a9c78707f4601652a355c6e791a1b545.jpeg?x-expires=1618225200&x-signature=XYUVAF6BGWPcfFsmVUbvyudfbIc%3D',
                username: 'Henry Bao',
                body: 'Xinh ngất ngây',
                createAt: '6 ngày trước',
                likeCount: 5,
                onLike() {
                    alert('like')
                },
                onReply() {
                    alert('reply')
                }
            },
            {
                id: 4,
                avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/a9c78707f4601652a355c6e791a1b545.jpeg?x-expires=1618225200&x-signature=XYUVAF6BGWPcfFsmVUbvyudfbIc%3D',
                username: 'Henry Bao',
                body: 'Xinh ngất ngây',
                createAt: '6 ngày trước',
                likeCount: 5,
                onLike() {
                    alert('like')
                },
                onReply() {
                    alert('reply')
                }
            }
        ]
    }
    const [disable, setDisable] = useState(true)
    const onCheck = (e) => {
        if (e.target.value) {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }
    return (
        <PostDetailComponent  
            video={data.video} 
            onRequestClose={() => {
                window.history.back()
            }}
            data={data}
            disable={disable}
            onCheck={onCheck}
        />
    )
}