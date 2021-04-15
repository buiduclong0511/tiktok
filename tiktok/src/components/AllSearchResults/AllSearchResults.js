import SearchItem from './SearchItem'
import styles from './AllSearchResults.module.scss'

export default function AllSearchResults({ searchResults = [] }) {
    return (
        <div className={styles.wrapper}>
            {searchResults.map(account => <SearchItem 
                key={account.id}
                avatar={account.avatar}
                nickname={account.nickname}
                name={account.first_name + ' ' + account.last_name}
                followersCount={account.followers_count}
                tick={account.tick}
            />)}
        </div>
    )
}