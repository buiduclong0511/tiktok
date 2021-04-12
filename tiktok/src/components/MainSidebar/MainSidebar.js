import TopSidebar from './TopSidebar'
import SuggestAccount from './SuggestAccount'
import Footer from './Footer'
import styles from './MainSidebar.module.scss'

export default function MainSidebar({ onLogin, data, isLogin }) {
    return (
        <div className={styles.wrapper}>
            <TopSidebar onLogin={onLogin} isLogin={isLogin} />
            <SuggestAccount data={data} />
            <Footer />
        </div>
    )
}