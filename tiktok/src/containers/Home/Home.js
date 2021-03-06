import { Row, Column } from '@mycv/mycv-grid'
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import MainSidebar from '../../components/MainSidebar'
import PostItem from '../../components/PostItem'

export default function Home() {
    const history = useHistory()
    const [totalPages, setTotalPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [suggestedAccounts, setSuggestedAccounts] = useState([])
    const [posts, setPosts] = useState([])
    const [hideSeeBtn, setHideSeeBtn] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)

    const handleSeeToggle = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
        if (currentPage !== 1 && currentPage === totalPages && isExpanded === true) {
            setIsExpanded(false)
        }
        if (currentPage !== 1 && currentPage === totalPages && isExpanded === false) {
            setIsExpanded(true)
        }
    }

    function getSuggestedAccounts() {
        axios.get(`/api/users/suggested?page=${currentPage}`)
            .then(res => {
                const newAccounts = res.data.data
                setSuggestedAccounts(suggestedAccounts.concat(newAccounts))
                setTotalPages(res.data.meta.pagination.total_pages)
                currentPage === 1 && currentPage === totalPages && (setHideSeeBtn(true))
                currentPage !== 1 && currentPage === totalPages && (setIsExpanded(true))
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(getSuggestedAccounts, [currentPage])


    useEffect(() => {
        axios.get('/api/posts?type=for-you&page=1')
            .then(res => {
                setPosts(res.data.data)
                
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

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
                        suggestedAccounts={suggestedAccounts}
                        onSeeToggle={handleSeeToggle}
                        isExpanded={isExpanded}
                        hideSeeBtn={hideSeeBtn}
                        isHomePage={true}
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
                            avatar={post.user.avatar}
                            nickname={post.user.nickname}
                            name={post.user.first_name + ' ' + post.user.last_name}
                            body={post.description}
                            music={post.music}
                            video={post.file_url}
                            likeCount={post.likes_count}
                            commentCount={post.comments_count}
                            shareCount={post.shares_count}
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