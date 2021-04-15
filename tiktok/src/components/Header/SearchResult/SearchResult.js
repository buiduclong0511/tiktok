import { Link } from 'react-router-dom'

import SearchResultItem from '../SearchResultItem'
import styles from './SearchResult.module.scss'
import config from '../../../config'

export default function SearchResult(
    { 
        data = [
            {
                id: 1,
                name: 'Hiền Hồ',
                username: 'hienhoofficial',
                tick: true
            },
            {
                id: 2,
                name: 'Phước Đỗ',
                username: 'phuocdoofficial',
                tick: false
            },
            {
                id: 3,
                name: 'Bùi Đức Long',
                username: 'buiduclongoffical',
                tick: true
            },
            {
                id: 4,
                name: 'Hoàng Anh',
                username: 'hoanganhvlog',
                tick: false
            }
        ],
        searchKey = ''
}) {
    return (
        <div className={styles.wrapper}>
            {data.map(account => {
                return <SearchResultItem
                            key = {account.id}
                            title = {account.username}
                            description = {account.name}
                            tick = {account.tick}
                            onClick = {() => {}}
                        />
            })}
            <Link to={`/search/${searchKey}`} className={styles.showAllResult}>{`Xem tất cả kết quả dành cho '${searchKey}'`}</Link>
        </div>
    )
}