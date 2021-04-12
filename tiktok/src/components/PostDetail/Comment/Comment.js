import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-solid-svg-icons'

import styles from './Comment.module.scss'
import Button from '../../../packages/duclong-button'
import CommentItem from './CommentItem'

export default function Comment({ comments = [], isLogin = false }) {
    const [disable, setDisable] = useState(true)
    const onCheck = (e) => {
        if (e.target.value) {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }
    if (isLogin) {
        return (
            <div className={styles.wrapperLogin}>
                <div className={styles.listComments}>
                    {comments.map(comment => <CommentItem 
                        key={comment.id}
                        avatar={comment.avatar}
                        username={comment.username}
                        body={comment.body}
                        createAt={comment.createAt}
                        likeCount={comment.likeCount}
                        onLike={comment.onLike}
                        onReply={comment.onReply}
                        onShowMenu={comment.onShowMenu}
                    />)}
                </div>

                <div className={styles.typeComment}>
                    <div className={styles.sendWrapper}>
                        <input type="text" onChange={onCheck} />
                        <span className={styles.tag}>@</span>
                        <span className={styles.emoji}>
                            <FontAwesomeIcon icon={faSmile} />
                        </span>
                    </div>
                    <button className={styles.btnSend} disabled={disable} style={disable ? {color: '#ccc'} : {color: 'var(--primary-color)'}}>Đăng</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.wrapperUnLogin}>
                <h3 className={styles.heading}>Đăng nhập để xem bình luận</h3>
                <p className={styles.subHeading}>Đăng nhập để xem bình luận và thích video</p>
                <Button title="Đăng nhập" size="l" />
                <p className={styles.signUp}>
                    Bạn không có tài khoản?
                    <span>Đăng ký</span>
                </p>
            </div>
        )
    }
}