import { Row, Column } from '@mycv/mycv-grid'

import VideoPlayer from './VideoPlayer'
import Content from './Content'
import styles from './PostDetail.module.scss'

export default function PostDetail({
    video,
    onRequestClose,
    data,
    isLogin
}) {
    return (
        <div className={styles.wrapper}>
            <Row>
                <Column sizeDesktop={7}>
                    <VideoPlayer video={video} onRequestClose={onRequestClose} />
                </Column>
                <Column sizeDesktop={5}>
                    <Content data={data} isLogin={isLogin} />
                </Column>
            </Row>
        </div>
    )
}