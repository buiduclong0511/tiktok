import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faLink } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import styles from './PostInfor.module.scss'
import Button from '../../../packages/duclong-button'
import config from '../../../config'

export default function PostInfor({ data, isLogin }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.user}>
                <img src={data.avatar} alt={data.nickname} className={styles.avatar} />
                <Link to={`${config.routes.home}@${data.nickname}`} className={styles.name}>
                    <p className={styles.nickname}>{data.nickname}</p>
                    <p className={styles.username}>{data.username}</p>
                </Link>
            </div>
            <p className={styles.body}>{data.body}</p>
            <p className={styles.music}>{data.music}</p>

            <div className={styles.btnFollow} onClick={data.onFollow}>
                <Button title="Follow" type="border" size="s" />
            </div>

            <div className={styles.interactive}>
                <div className={`${styles.interactiveItem} ${styles.like}`}>
                    <div className={styles.iconWrapper} onClick={isLogin ? data.onLike : () => {}}>
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <span className={styles.number}>{data.likeCount}</span>
                </div>
                <div className={`${styles.interactiveItem} ${styles.comment}`}>
                    <div className={styles.iconWrapper}>
                        <FontAwesomeIcon icon={faComment} />
                    </div>
                    <span className={styles.number}>{data.commentCount}</span>
                </div>
                <div className={styles.shareGroup}>
                    <span>Chia sẻ với</span>
                    <i className={styles.icon} onClick={data.onShare}>
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 47C36.7025 47 47 36.7025 47 24C47 11.2975 36.7025 1 24 1C11.2975 1 1 11.2975 1 24C1 36.7025 11.2975 47 24 47Z" fill="white"></path><path d="M24 1C11.2964 1 1 11.2964 1 24C1 35.4775 9.40298 44.9804 20.3846 46.7205L20.3936 30.6629H14.5151V24.009H20.3936C20.3936 24.009 20.3665 20.2223 20.3936 18.5363C20.4206 16.8503 20.7542 15.2274 21.6288 13.7487C22.9722 11.4586 25.0639 10.3407 27.6335 10.0251C29.7432 9.76362 31.826 10.0521 33.9087 10.3407C34.0529 10.3587 34.125 10.3767 34.2693 10.4038C34.2693 10.4038 34.2783 10.6472 34.2693 10.8005C34.2603 12.4053 34.2693 16.0839 34.2693 16.0839C33.2685 16.0659 31.6096 15.9667 30.5096 16.138C28.6884 16.4175 27.6425 17.5806 27.6064 19.4108C27.5704 20.8354 27.5884 24.009 27.5884 24.009H33.9988L32.962 30.6629H27.5974V46.7205C38.597 44.9984 47.009 35.4775 47.009 24C47 11.2964 36.7036 1 24 1Z" fill="#0075FA"></path></svg>
                    </i>
                    <i className={styles.icon} onClick={data.onShare}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 24C5.3736 24 0 18.6264 0 12C0 5.3736 5.3736 0 12 0C18.6264 0 24 5.3736 24 12C24 18.6264 18.6264 24 12 24Z" fill="#FF4500"></path><path d="M14.5765 14.4872C13.9304 14.4872 13.4036 13.9552 13.4036 13.3027C13.4036 12.6502 13.9304 12.1182 14.5765 12.1182C15.2226 12.1182 15.7494 12.6502 15.7494 13.3027C15.7494 13.9552 15.2226 14.4872 14.5765 14.4872ZM14.7837 16.431C13.9822 17.2381 12.4491 17.3018 11.9989 17.3018C11.5486 17.3018 10.0133 17.2381 9.21409 16.431C9.09478 16.3105 9.09478 16.1173 9.21409 15.9968C9.33341 15.8763 9.52476 15.8763 9.64408 15.9968C10.1484 16.5061 11.2267 16.6879 11.9989 16.6879C12.7688 16.6879 13.8494 16.5061 14.3537 15.9968C14.473 15.8763 14.6643 15.8763 14.7837 15.9968C14.9007 16.1173 14.9007 16.3105 14.7837 16.431ZM8.24381 13.3027C8.24381 12.6502 8.7706 12.1182 9.4167 12.1182C10.0628 12.1182 10.5896 12.6502 10.5896 13.3027C10.5896 13.9552 10.0628 14.4872 9.4167 14.4872C8.7706 14.4872 8.24381 13.9552 8.24381 13.3027ZM19.5 12.1182C19.5 11.202 18.7661 10.4608 17.8588 10.4608C17.4154 10.4608 17.0146 10.6382 16.7197 10.9269C15.5986 10.1085 14.052 9.581 12.3298 9.51962L13.0772 5.96615L15.5198 6.49133C15.5491 7.11881 16.0579 7.61898 16.686 7.61898C17.3343 7.61898 17.8588 7.08926 17.8588 6.43449C17.8588 5.77972 17.3343 5.25 16.686 5.25C16.2244 5.25 15.8305 5.52055 15.6391 5.91159L12.9106 5.32503C12.8341 5.30911 12.7553 5.32275 12.69 5.36595C12.6247 5.40914 12.5797 5.47508 12.5639 5.55237L11.7445 9.45141C11.74 9.47415 11.7445 9.49461 11.7445 9.51735C9.99077 9.56282 8.4149 10.0925 7.27578 10.9224C6.98086 10.6359 6.5824 10.4608 6.14115 10.4608C5.2339 10.4608 4.5 11.2043 4.5 12.1182C4.5 12.7912 4.89847 13.3709 5.47028 13.6301C5.44552 13.7938 5.43201 13.962 5.43201 14.1325C5.43201 16.6834 8.37213 18.75 11.9989 18.75C15.6256 18.75 18.5657 16.6834 18.5657 14.1325C18.5657 13.9643 18.5522 13.7983 18.5275 13.6346C19.097 13.3755 19.5 12.7957 19.5 12.1182Z" fill="white"></path></svg>
                    </i>
                    <i className={styles.icon} onClick={data.onShare}>
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.0173 3C12.4102 3 3 12.3947 3 23.9827C3 32.8766 8.53541 40.4753 16.3542 43.5321C16.1639 41.8742 16.0082 39.3183 16.4234 37.5049C16.8039 35.8643 18.8797 27.074 18.8797 27.074C18.8797 27.074 18.257 25.8133 18.257 23.9655C18.257 21.0469 19.9522 18.8709 22.0626 18.8709C23.8616 18.8709 24.7265 20.2179 24.7265 21.824C24.7265 23.6201 23.5848 26.3141 22.9794 28.8183C22.4777 30.9079 24.0345 32.6176 26.093 32.6176C29.8294 32.6176 32.7009 28.6801 32.7009 23.0156C32.7009 17.9901 29.0856 14.4844 23.9135 14.4844C17.9283 14.4844 14.4168 18.9572 14.4168 23.5855C14.4168 25.3816 15.1087 27.3158 15.9736 28.3692C16.1466 28.5765 16.1639 28.7664 16.112 28.9737C15.9563 29.6299 15.5931 31.0633 15.5239 31.3569C15.4374 31.7368 15.2125 31.8232 14.8146 31.6332C12.1853 30.4071 10.542 26.5905 10.542 23.4992C10.542 16.8849 15.3509 10.8059 24.4324 10.8059C31.7149 10.8059 37.3887 15.9868 37.3887 22.9293C37.3887 30.1653 32.822 35.9852 26.4909 35.9852C24.3632 35.9852 22.3566 34.8799 21.682 33.5674C21.682 33.5674 20.6268 37.574 20.3673 38.5584C19.9003 40.389 18.6202 42.6686 17.7553 44.0674C19.7273 44.6719 21.8031 45 23.9827 45C35.5897 45 44.9999 35.6053 44.9999 24.0173C45.0345 12.3947 35.6243 3 24.0173 3Z" fill="#E60019"></path></svg>
                    </i>
                    <i className={styles.icon} onClick={data.onShare}>
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.0002 47.001C36.7028 47.001 47.0002 36.7035 47.0002 24.001C47.0002 11.2984 36.7028 1.00098 24.0002 1.00098C11.2977 1.00098 1.00024 11.2984 1.00024 24.001C1.00024 36.7035 11.2977 47.001 24.0002 47.001Z" fill="#1DA1F2"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M38.2029 13.5327C37.3894 14.0824 35.5215 14.8813 34.6003 14.8813V14.8829C33.5484 13.7237 32.0675 13 30.4252 13C27.2353 13 24.6488 15.7287 24.6488 19.0925C24.6488 19.5598 24.7001 20.0157 24.795 20.4529H24.794C20.4671 20.3331 15.7348 18.0452 12.886 14.1294C11.1344 17.3277 12.6501 20.8848 14.6378 22.1809C13.9574 22.235 12.7049 22.0982 12.1153 21.4913C12.0758 23.6142 13.0434 26.4269 16.5714 27.4473C15.8919 27.8329 14.6892 27.7223 14.1662 27.6402C14.3497 29.4322 16.7285 31.775 19.3297 31.775C18.4026 32.9063 14.9144 34.9582 11 34.3054C13.6584 36.0118 16.7568 37 20.0362 37C29.3556 37 36.5929 29.0322 36.2034 19.2027C36.2019 19.1919 36.2019 19.1811 36.2009 19.1693C36.2019 19.144 36.2034 19.1187 36.2034 19.0925C36.2034 19.0619 36.2009 19.0331 36.2 19.0035C37.0484 18.3914 38.1868 17.3087 39 15.8836C38.5284 16.1577 37.1134 16.7064 35.7968 16.8426C36.6418 16.3615 37.8937 14.7858 38.2029 13.5327Z" fill="white"></path></svg>
                    </i>
                    <i className={styles.icon} onClick={data.onShare}>
                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 47C36.7025 47 47 36.7025 47 24C47 11.2975 36.7025 1 24 1C11.2975 1 1 11.2975 1 24C1 36.7025 11.2975 47 24 47Z" fill="#25D366"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M30.9028 25.6129C30.5802 25.4515 28.9944 24.6713 28.6988 24.5635C28.4031 24.4559 28.1881 24.4021 27.9731 24.7249C27.758 25.0478 27.1399 25.7744 26.9517 25.9897C26.7636 26.2049 26.5754 26.2319 26.2529 26.0704C25.9303 25.909 24.891 25.5684 23.659 24.4694C22.7002 23.6141 22.0528 22.5579 21.8647 22.235C21.6765 21.9121 21.8446 21.7375 22.0061 21.5767C22.1512 21.4321 22.3287 21.2 22.4899 21.0116C22.6512 20.8233 22.705 20.6887 22.8125 20.4735C22.92 20.2582 22.8663 20.0699 22.7855 19.9085C22.7049 19.747 22.0599 18.1593 21.7911 17.5134C21.5293 16.8845 21.2634 16.9697 21.0654 16.9598C20.8774 16.9504 20.6622 16.9484 20.4472 16.9484C20.2322 16.9484 19.8827 17.0291 19.587 17.352C19.2914 17.6749 18.4581 18.4553 18.4581 20.0428C18.4581 21.6306 19.6139 23.1643 19.7752 23.3795C19.9365 23.5949 22.0496 26.8528 25.2853 28.2499C26.0548 28.5823 26.6557 28.7807 27.1241 28.9293C27.8968 29.1749 28.5999 29.1402 29.1557 29.0572C29.7754 28.9646 31.064 28.277 31.3328 27.5235C31.6016 26.7699 31.6016 26.1242 31.521 25.9897C31.4404 25.8551 31.2253 25.7744 30.9028 25.6129ZM25.0178 33.6472H25.0134C23.0881 33.6465 21.1998 33.1292 19.5524 32.1517L19.1606 31.9191L15.0998 32.9844L16.1837 29.0251L15.9286 28.6191C14.8546 26.9109 14.2873 24.9365 14.2881 22.9091C14.2905 16.9934 19.1037 12.1805 25.022 12.1805C27.8879 12.1815 30.5817 13.299 32.6076 15.3271C34.6333 17.3551 35.7482 20.0509 35.7471 22.9178C35.7447 28.8339 30.9315 33.6472 25.0178 33.6472ZM34.1489 13.7858C31.7117 11.3458 28.4706 10.0014 25.0173 10C17.902 10 12.111 15.7906 12.1082 22.908C12.1073 25.1832 12.7017 27.4039 13.8313 29.3617L12 36.0509L18.8432 34.2559C20.7287 35.2843 22.8516 35.8264 25.0121 35.827H25.0174H25.0174C32.132 35.827 37.9234 30.0359 37.9263 22.9184C37.9276 19.4691 36.5861 16.2258 34.1489 13.7858Z" fill="white"></path></svg>
                    </i>
                    <i className={styles.icon} onClick={data.onShare}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#161823" fill-opacity="0.75"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.313 7.96568C12.3665 7.65966 12.658 7.45498 12.964 7.50851C13.27 7.56203 13.4747 7.8535 13.4211 8.15951L12.0506 15.9952C11.997 16.3012 11.7056 16.5059 11.3996 16.4523C11.0936 16.3988 10.8889 16.1073 10.9424 15.8013L12.313 7.96568ZM16.2402 8.77448C15.96 8.48453 15.5058 8.48453 15.2256 8.77448C14.9454 9.06443 14.9454 9.53454 15.2256 9.82449L17.454 12.1307L15.2262 14.4364C14.946 14.7263 14.946 15.1964 15.2262 15.4864C15.5063 15.7763 15.9606 15.7763 16.2407 15.4864L19.4551 12.1598C19.4704 12.1439 19.4704 12.1182 19.4551 12.1023L19.2233 11.8623L19.2201 11.8586L19.2158 11.854L16.2402 8.77448ZM8.88972 15.4867C8.59977 15.7766 8.12966 15.7766 7.83971 15.4867L5.4207 13.0677L4.76017 12.4071L4.51191 12.1589C4.49603 12.143 4.49603 12.1173 4.51191 12.1014L7.83853 8.77477C8.12848 8.48482 8.59859 8.48482 8.88854 8.77477C9.17849 9.06472 9.17849 9.53482 8.88854 9.82478L6.58318 12.1301L8.88972 14.4367C9.17967 14.7266 9.17967 15.1967 8.88972 15.4867Z" fill="white"></path></svg>
                    </i>
                </div>
            </div>

            <p className={styles.copyLinkContainer}>
                <span className={styles.link}>{window.location.href}</span>
                <span className={styles.copy} onClick={data.onCopy}>
                    <FontAwesomeIcon icon={faLink} className={styles.icon} />
                    <span>Sao chép liên kết</span>
                </span>
            </p>
        </div>
    )
}