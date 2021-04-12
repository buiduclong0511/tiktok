import { Row, Column } from '@mycv/mycv-grid'
import { useHistory } from 'react-router-dom'

import MainSidebar from '../../components/MainSidebar'
import avatar1 from '../../assets/img/user1.png'
import video1 from '../../assets/video/video1.mp4'
import PostItem from '../../components/PostItem'

export default function Home() {
    const history = useHistory()
    const data = [
        {
            id: 1,
            img: avatar1,
            nickname: 'GamKamisdfsdfdsfsdfsfd',
            username: 'Gấm Kami',
            tick: true
        },
        {
            id: 2,
            img: avatar1,
            nickname: 'GamKami',
            username: 'Gấm Kami',
            tick: true
        },
        {
            id: 3,
            img: avatar1,
            nickname: 'GamKami',
            username: 'Gấm Kami',
            tick: false
        },
        {
            id: 4,
            img: avatar1,
            nickname: 'GamKami',
            username: 'Gấm Kami',
            tick: false
        },
        {
            id: 5,
            img: avatar1,
            nickname: 'GamKami',
            username: 'Gấm Kami',
            tick: false
        }
    ]

    const posts = [
        {
            id: 1,
            img: avatar1,
            nickname: 'gamkami',
            username: 'Gấm Kami',
            body: 'Trai đẹp lại đi Gạ kèo và cái kết 😆 #Boxstudio',
            music: 'Bầu trời có riêng ta - 𝒞ℴ̂𝓃ℊ 𝓉𝒽𝓊̛́𝒸 𝓋𝒾𝒹ℯℴ🌻',
            video: video1,
            likeCount: 123,
            commentCount: 123,
            shareCount: 123
        }
    ]
    return (
        <div>
            <Row>
                <Column 
                    size={0}
                    sizeTablet={4}
                    sizeDesktop={3}
                >
                    <MainSidebar 
                        onLogin={() => {
                            alert("login")
                        }}
                        data={data}
                        
                    />
                </Column>

                <Column 
                    size={12}
                    sizeTablet={8}
                    sizeDesktop={9}
                >
                    {posts.map(post => {
                        return <PostItem 
                            key={post.id}
                            img={post.img}
                            nickname={post.nickname}
                            username={post.username}
                            body={post.body}
                            music={post.music}
                            video={post.video}
                            likeCount={post.likeCount}
                            commentCount={post.commentCount}
                            shareCount={post.shareCount}
                            onLike={() => {alert('like')}}
                            onComment={() => {alert('comment')}}
                            onShare={() => {alert('share')}}
                            onShowDetail={() => history.push('/@baoboii_002/video/6948366460460764418')}
                        />
                    })}
                </Column>
            </Row>
        </div>
    )
}