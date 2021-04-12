import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import styles from './SearchResultItem.module.scss'

export default function SearchResultItem(
    {
        title = '',
        description = '',
        tick = false,
        onClick = () => {}
    }
) {
    return (
        <div className={styles.wrapper} onClick={onClick()}>
            <p className={`${styles.title} ${tick ? styles.ticked : ''}`}>
                <span className={styles.body}>{title}</span>
                <span className={styles.tick}>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </span>
            </p>
            <p className={styles.description}>{description}</p>
        </div>
    )
}