import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimesCircle, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Grid } from '@mycv/mycv-grid'
import { Link } from 'react-router-dom'

import logoTextDark from '../../assets/img/logo-text-dark.svg'
import logoMusiNote from '../../assets/img/logo-music-note.svg'
import styles from './Header.module.scss'
import Button from '../../packages/duclong-button/Button'
import SearchResult from './SearchResult'
import config from '../../config'

export default function Header({
    searchValue = '',
    isSearching = false,
    onSearchChange = () => {},
}) {
    return (
        <header className={styles.wrapper}>
            <Grid maxWidth={1100}>
                <div className={styles.body}>
                    <Link to={config.routes.home} className={styles.logos}>
                        <img src={logoMusiNote} alt="Tiktok" className={styles.logoMusiNote} />
                        <img src={logoTextDark} alt="Tiktok" className={styles.logoTextDark} />
                    </Link>
                    
                    <div className={styles.searchBox}>
                        <input value={searchValue} onChange={onSearchChange} type="text" placeholder="Tìm kiếm tài khoản" />
                        {!!searchValue && (
                            <span className={styles.cleartBtn}>
                                {isSearching ? <FontAwesomeIcon icon={faSpinner} className={styles.spinner} /> : <FontAwesomeIcon icon={faTimesCircle} />}
                            </span>
                        )}
                        <span className={styles.line}></span>
                        <button>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                        {searchValue ? (
                            <SearchResult 
                                searchKey={searchValue}
                            />
                        ) : <></>}
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