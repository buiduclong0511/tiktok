
import styles from './Profile.module.scss'
import UserInfor from './UserInfor'
import PostList from './PostList'

export default function Profile({
    avatar,
    nickname,
    name,
    followingCount,
    followerCount,
    likeCount,
    isVideoDisplay,
    isPrivateLiked,
    posts
}) {
    return (
        <div className={styles.wrapper}>
            <UserInfor 
                avatar={avatar}
                nickname={nickname}
                name={name}
                followingCount={followingCount}
                followerCount={followerCount}
                likeCount={likeCount}
            />
            <PostList
                isVideoDisplay={isVideoDisplay}
                isPrivateLiked={isPrivateLiked}
                posts={posts}
            />
        </div>
    )
}