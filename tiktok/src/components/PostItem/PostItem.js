import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons'

import styles from './PostItem.module.scss'
import Button from '../../packages/duclong-button'

export default function PostItem({
    avatar = '',
    nickname = '',
    username = '',
    body = '',
    music = '',
    video = '',
    likeCount = 0,
    commentCount = 0,
    shareCount = 0,
    onLike = () => {},
    onComment = () => {},
    onShare = () => {},
    onShowDetail = () => {}
}) {
    return (
        <div className={styles.wrapper}>
            <img src={avatar} alt={nickname} className={styles.avatar} />
            <div className={styles.mainPost}>
                <div className={styles.user}>
                    <h3 className={styles.nickname}>{nickname}</h3>
                    <span className={styles.username}>{username}</span> 
                </div>
                <p className={styles.body}>{body}</p>
                <p className={styles.music}>{music}</p>
                <div className={styles.post}>
                    <video src={video} controls className={styles} onClick={onShowDetail} autoPlay />
                    <div className={styles.interactive}>
                        <div className={styles.heart} onClick={onLike}>
                            <div className={styles.iconWrapper}>
                                <FontAwesomeIcon icon={faHeart} className={styles.icon} />
                            </div>
                            <p className={styles.number}>{likeCount}</p>
                        </div>
                        <div className={styles.comment} onClick={onComment}>
                            <div className={styles.iconWrapper}>
                                <FontAwesomeIcon icon={faComment} className={styles.icon} />
                            </div>
                            <p className={styles.number}>{commentCount}</p>
                        </div>
                        <div className={styles.share} onClick={onShare}>
                            <div className={styles.iconWrapper}>
                                <FontAwesomeIcon icon={faShare} className={styles.icon} />
                            </div>
                            <p className={styles.number}>{shareCount}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.buttonFollow}>
                <Button title="Follow" type="border" size="s" />
            </div>
        </div>
    )
}