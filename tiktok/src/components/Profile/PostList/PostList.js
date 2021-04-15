import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { Row, Column } from '@mycv/mycv-grid'

import styles from './PostList.module.scss'
import PostItem from '../PostItem'

export default function PostList({
    isVideoDisplay = true,
    isPrivateLiked = true,
    posts = []
}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                <p className={`${styles.headingItem} ${styles.videoHeading} ${isVideoDisplay ? styles.active : ''}`}>
                    Video
                </p>
                <p className={`${styles.headingItem} ${styles.likedHeading} ${!isVideoDisplay ? styles.active : ''}`}>
                    {isPrivateLiked ?(
                        <span className={styles.iconLock}>
                            <FontAwesomeIcon icon={faLock} />
                        </span>
                    ) : <></>}
                    Đã thích
                </p>
            </div>
            <div className={styles.main}>
                {isVideoDisplay ? (
                    <Row>
                        {posts.map(post => <Column
                            size={4}
                            sizeTablet={4}
                            sizeDesktop={4}
                        >
                            <PostItem 
                                fileUrl={post.file_url}
                                viewsCount={post.views_count}
                            />
                        </Column>)}
                    </Row>
                ) : (
                    <h1>liked</h1>
                )}
            </div>
        </div>
    )
}