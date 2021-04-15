import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

import styles from './SuggestAccount.module.scss'
import AccountItem from './AccountItem'

export default function SuggestAccount({ 
    suggestedAccounts = [], 
    onSeeToggle = () => {},
    expandedTitle = 'Xem thêm',
    collapsedTitle = 'Thu gọn',
    isExpanded = false,
    hideSeeBtn = false
}) {
    return (
        <div className={styles.wrapper}>
            <p className={styles.heading}>Tài khoản được đề xuất</p>
            <div className={styles.listAccount} style={{height: (!isExpanded && !hideSeeBtn) ? `${5 * 64}px` : "auto"}}>
                {suggestedAccounts.map(account => <AccountItem 
                    key = {account.id}
                    avatar = {account.avatar}
                    nickname = {account.nickname}
                    name = {account.first_name + ' ' + account.last_name}
                    tick = {account.tick}
                />)}
            </div>
            {!hideSeeBtn && (
                <div className={styles.viewAll} onClick={onSeeToggle}>
                    <span className={styles.body}>{isExpanded ? collapsedTitle : expandedTitle}</span>
                    <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} className={styles.icon} />
                </div>
            )}
        </div>
    )
}