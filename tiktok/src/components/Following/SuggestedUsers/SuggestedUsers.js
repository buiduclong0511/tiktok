import { Row, Column } from '@mycv/mycv-grid'

import styles from './SuggestedUsers.module.scss'
import SuggestedUserItem from '../SuggestedUserItem'

export default function SuggestedUsers({ suggestedUsers = [] }) {
    console.log(suggestedUsers)
    return (
        <div className={styles.wrapper}>
            <Row>
                {suggestedUsers.map(user => (<Column
                    size={4}
                    sizeDesktop={4}
                    sizeTablet={4}
                    key={user}
                >
                    <SuggestedUserItem 
                        key={user.id}
                        nickname={user.nickname}
                        name={user.first_name + ' ' + user.last_name}
                        tick={user.tick}
                        video={user.popular_post.file_url}
                        avatar={user.avatar}
                    />
                </Column>))}
            </Row>
        </div>
    )
}