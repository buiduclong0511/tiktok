import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

import styles from './PostItem.module.scss'

export default function PostItem({
    fileUrl = '',
    viewsCount = 0,
}) {
    return (
        <div className={styles.wrapper}>
            <video src={fileUrl} className={styles.video}></video>
            <div className={styles.viewsCount}>
                <span className={styles.icon}>
                    <FontAwesomeIcon icon={faPlay} />
                </span>
                <span className={styles.number}>{viewsCount}</span>
            </div>
        </div>
    )
}