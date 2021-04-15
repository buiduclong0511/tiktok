
import styles from './Content.module.scss'
import PostInfor from '../PostInfor'
import Comment from '../Comment'

export default function Content({ data, isLogin, disable, onCheck }) {
    return (
        <div className={styles.wrapper}>
            <PostInfor data={data} isLogin={isLogin}/>
            <Comment 
                comments={data.comments} 
                isLogin={isLogin} 
                disable={disable} 
                onCheck={onCheck}
            />
        </div>
    )
}