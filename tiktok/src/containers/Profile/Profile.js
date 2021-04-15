import { Row, Column } from '@mycv/mycv-grid'
import { useEffect, useState } from 'react'
import axios from 'axios'

import MainSidebar from '../../components/MainSidebar'
import ProfileComponent from '../../components/Profile'

export default function Profile() {
    const [totalPages, setTotalPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [suggestedAccounts, setSuggestedAccounts] = useState([])
    const [hideSeeBtn, setHideSeeBtn] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)
    const [user, setUser] = useState({})

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
        const nickname = window.location.pathname
        axios.get(`/api/users${nickname}`)
            .then(res => {
                setUser(res.data.data)
            })
            .catch(err => console.log(err))
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
                    />
                </Column>

                <Column 
                    size={12}
                    sizeTablet={8}
                    sizeDesktop={9}
                >
                    <ProfileComponent
                        avatar={user.avatar}
                        nickname={user.nickname}
                        name={user.first_name + ' ' + user.last_name}
                        followingCount={user.followings_count}
                        followerCount={user.followers_count}
                        likeCount={user.likes_count}
                        isVideoDisplay={true}
                        isPrivateLiked={true}
                        posts={user.posts}
                    />
                </Column>
            </Row>
        </div>
    )
}