import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import styles from './SuggestAccount.module.scss'
import AccountItem from './AccountItem'

export default function SuggestAccount({ data = [] }) {
    return (
        <div className={styles.wrapper}>
            <p className={styles.heading}>Tài khoản được đề xuất</p>
            <div className={styles.listAccount}>
                {data.map(account => <AccountItem 
                    key = {account.id}
                    img = {account.img}
                    nickname = {account.nickname}
                    username = {account.username}
                    tick = {account.tick}
                />)}
            </div>
            <div className={styles.viewAll}>
                <span className={styles.body}>Xem tất cả</span>
                <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
            </div>
        </div>
    )
}