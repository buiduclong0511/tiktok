import styles from './PreviewAccount.module.scss'
import Button from '../../../packages/duclong-button'

export default function PreviewAccount({
    img = '',
    username = '',
    nickname = '',
    followerCount = 0,
    likeCount = 0,
    onFollow = () => {}
}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <img src={img} alt={nickname} className={styles.avatar} />
                <Button title="Follow" type="border" />
            </div>
        </div>
    )
}