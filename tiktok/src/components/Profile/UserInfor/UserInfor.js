import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'

import styles from './UserInfor.module.scss'
import Button from '../../../packages/duclong-button'

export default function UserInfor({
    avatar = '',
    nickname = '',
    name = '',
    followingCount = 0,
    followerCount = 0,
    likeCount = 0
}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.body}>
                <img src={avatar} alt={nickname} className={styles.avatar}/>
                <div className={styles.infor}>
                    <h2 className={styles.nickname}>{nickname}</h2>
                    <h1 className={styles.name}>{name}</h1>
                    <span className={styles.btnFollow}>
                        <Button title="Follow" size="l" />
                    </span>
                </div>
                <button className={styles.btnMore}>
                    <FontAwesomeIcon icon={faEllipsisH} />
                </button>
            </div>
            <div className={styles.interactive}>
                <p className={styles.interactiveItem}><strong className={styles.number}>{followingCount}</strong><span>Đang Follow</span></p>
                <p className={styles.interactiveItem}><strong className={styles.number}>{followerCount}</strong><span>Follower</span></p>
                <p className={styles.interactiveItem}><strong className={styles.number}>{likeCount}</strong><span>Thích</span></p>
            </div>
        </div>
    )
}