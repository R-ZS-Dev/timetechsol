import Image from 'next/image'
import React from 'react'
import style from '@/styles/SiteOptimiz.module.css'

const SiteOptimiz = () => {
    return (
        <>
            <div className={style.fullopti}>
                <div className={style.tophalf}>
                    <Image className={style.imgcnt} src={'/./images/optipic.png'} height={'400'} width={'500'} alt="" />
                </div>
                <div className={style.btmhalf}>
                    <div className={style.towline}>
                        <h1 className={style.getyour}>Get Your Site Optimized &</h1>
                        <p className={style.cntnow}>Converting Right Now</p>
                    </div>
                    <div className={style.contentopt}>
                        <button className={style.btnopt} href="">GET A FREE AUDIT
                            <div className={style.rightarrowopt}>
                                <label htmlFor='' className={style.rightarropt}>
                                    <label htmlFor='' className={style.rightopt}></label>
                                </label>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SiteOptimiz