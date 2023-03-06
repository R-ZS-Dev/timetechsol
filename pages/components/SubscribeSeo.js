import React from 'react'
import style from '@/styles/SubscribeSeo.module.css'

const SubscribeSeo = () => {
    return (
    <>
        <div className={style.submain}>
            <div className={style.subbg}>
                <h1 className={style.seofirst}>Your WebSite’s SEO Score</h1>
                <div className={style.seosec}>Provide us with the following information youer website & email and we'll email you</div>
                <div className={style.seosec}>the SEO score of your website for free</div>
                <div className={style.overfl}>
                    <div className={style.main}>
                        <input className={style.firstinp} type="text" name="" placeholder='Your Web URL...' />
                        <input className={style.firstinp2} type="text" name="" placeholder='Your E-mail Adress...' />
                        <button className={style.subscribe}><strong>SUBSCRIBE</strong></button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default SubscribeSeo