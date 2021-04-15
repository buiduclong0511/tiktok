import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import styles from './SuggestedUserItem.module.scss'
import Button from '../../../packages/duclong-button'
import config from '../../../config'

export default function SuggestedUserItem({
    nickname = '',
    name = '',
    tick = '',
    video = '',
    avatar = ''
}) {
    return (
        <Link to={`${config.routes.home}@${nickname}`} className={styles.wrapper}>
            <video src={video} className={styles.video}></video>
            <div className={styles.userInfor}>
                <img src={avatar} alt={nickname} className={styles.avatar}/>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.nickname}>
                    <span>{nickname}</span>
                    {tick ? <FontAwesomeIcon icon={faCheckCircle} className={styles.tick} /> : <></>}
                </p>
                <Button title="Follow" size="l" />
            </div>
        </Link>
    )
}