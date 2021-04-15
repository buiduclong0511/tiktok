import TopSidebar from './TopSidebar'
import SuggestAccount from './SuggestAccount'
import Footer from './Footer'
import styles from './MainSidebar.module.scss'

export default function MainSidebar({ 
    onLogin, 
    suggestedAccounts, 
    isLogin, 
    onSeeToggle,
    isExpanded,
    hideSeeBtn,
    isFollowingPage,
    isHomePage
}) {
    return (
        <div className={styles.wrapper}>
            <TopSidebar 
                onLogin={onLogin} 
                isLogin={isLogin} 
                isFollowingPage={isFollowingPage}
                isHomePage={isHomePage}
            />
            {isHomePage || !isFollowingPage ? (
                <SuggestAccount 
                    suggestedAccounts={suggestedAccounts} 
                    onSeeToggle={onSeeToggle}
                    isExpanded={isExpanded}
                    hideSeeBtn={hideSeeBtn}
                />
            ) : (
                <></>
            )}
            <Footer />
        </div>
    )
}