import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import styles from './CommentItem.module.scss'

export default function CommentItem({
    avatar = '',
    username = '',
    body = '',
    createAt = '',
    likeCount = 0,
    onLike = () => {},
    onReply = () => {},
}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.user}>
                <img src={avatar} alt={username} className={styles.avatar}/>
                <div className={styles.body}>
                    <p className={styles.username}>{username}</p>
                    <p className={styles.comment}>{body}</p>
                    <p className={styles.time}>
                        <span>{createAt}</span>
                        <button className={styles.reply} onClick={onReply}>Trả lời</button>
                    </p>
                </div>
            </div>
            <div className={styles.interactive} onClick={onLike}>
                <FontAwesomeIcon icon={faHeart} className={styles.icon} />
                <span>{likeCount}</span>
            </div>
        </div>
    )
}