import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUsers } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

import styles from './TopSidebar.module.scss'
import config from '../../../config'
import Button from '../../../packages/duclong-button'

export default function TopSidebar({ onLogin = () => {}, isLogin = false }) {
    return (
        <div className={styles.wrapper}>
            <NavLink activeClassName={styles.active} to={config.routes.home} className={styles.nav}>
                <FontAwesomeIcon icon={faHome} className={styles.navIcon} />
                <span>Dành cho bạn</span>
            </NavLink>
            <NavLink activeClassName={styles.active} to={config.routes.following} className={styles.nav}>
                <FontAwesomeIcon icon={faUsers} className={styles.navIcon} />
                <span>Đang Follow</span>
            </NavLink>

            {isLogin ? 
            (<></>) : 
            (
                <>
                    <p>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>

                    <Button title="Đăng nhập" size="l" type="border" onClick={onLogin} />
                </>
            )}
        </div>
    )
}