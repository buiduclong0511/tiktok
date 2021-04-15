import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import styles from './SuggestAccount.module.scss'
import config from '../../../config'

export default function AccountItem({
    avatar = '',
    nickname = '',
    name = '',
    tick = false
}) {
    const className = [styles.accountWrapper, tick ? styles.ticked : '']
    return (
        <Link to={`${config.routes.home}@${nickname}`} className={className.join(' ')}>
            <img src={avatar} alt={nickname} className={styles.avatar} />
            <div className={styles.body}>
                <h3 className={styles.nickname}>
                    <span className={styles.nicknameBody}>{nickname}</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={styles.tick} />
                </h3>
                <p className={styles.name}>{name}</p>
            </div>
        </Link>
    )
}