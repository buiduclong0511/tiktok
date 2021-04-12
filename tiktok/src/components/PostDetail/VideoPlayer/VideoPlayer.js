
import styles from './VideoPlayer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faVolumeUp, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function VideoPlayer({ video = '', onRequestClose = () => {} }) {
    return (
        <div className={styles.wrapper}>
            <div className={`${styles.button} ${styles.close}`} onClick={onRequestClose}>
                <FontAwesomeIcon icon={faTimes} />
            </div>
            <div className={`${styles.button} ${styles.volume}`}>
                <FontAwesomeIcon icon={faVolumeUp} />
            </div>
            <div className={`${styles.button} ${styles.next}`}>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <video src={video} className={styles.video} controls />
        </div>
    )
}