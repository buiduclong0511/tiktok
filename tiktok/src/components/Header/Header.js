import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { Grid } from '@mycv/mycv-grid'

import logoTextDark from '../../assets/img/logo-text-dark.svg'
import logoMusiNote from '../../assets/img/logo-music-note.svg'
import styles from './Header.module.scss'
import Button from '../../packages/duclong-button/Button'
import SearchResult from './SearchResult'

export default function Header() {
    return (
        <header className={styles.wrapper}>
            <Grid maxWidth={1100}>
                <div className={styles.body}>
                    <div className={styles.logos}>
                        <img src={logoMusiNote} alt="Tiktok" className={styles.logoMusiNote} />
                        <img src={logoTextDark} alt="Tiktok" className={styles.logoTextDark} />
                    </div>
                    
                    <div className={styles.searchBox}>
                        <input type="text" placeholder="Tìm kiếm tài khoản" />
                        <span className={styles.cleartBtn}>
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </span>
                        <span className={styles.line}></span>
                        <button>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                        <SearchResult />
                    </div>

                    <div>
                        <Button title="Tải lên" type="normal" underline />
                        <Button title="Đăng nhập" />
                        {/* <MenuBar /> */}
                    </div>
                </div>
            </Grid>
        </header>
    )
}