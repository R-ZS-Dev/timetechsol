import React from 'react'
import style from '@/styles/WebMarketing.module.css'
import Image from 'next/image'

const WebMarketing = () => {
  return (
    <>
        <div className={style.webdisplay}>
            <div className={style.webmark1}>
                <Image className={style.marktimgsiz} src={'/./images/resizeimg2.png'} height={'500'} width={'500'} alt=""/>
            </div>
            <div className={style.webmark2}>
                <div className={style.webmarpp}>
                <h1 className={style.headweb}>We Are The Best Solution For</h1>
                <h1 className={style.headweb}>Your Better Web Marketing</h1>
                <div className={style.normwebtxt}>
                    <p>
                        Our philosophy is that we want to be an ecosystem. Our philosophy is to empower others to sell, empower others to service, making sure the other people are more powerful than us. With our technology,of opportunity are collaboration and partnership.
                    </p>
                </div>
                <div className={style.textingweb}>
                <div className={style.rightarrowweb}>
                        <span className={style.rightarrweb}>
                            <span className={style.rightweb}></span>
                        </span> <span className={style.ecosystem}>Our philosophy is that we want to ecosystem.</span>
                </div>
                <div className={style.rightarrowweb}>
                        <span className={style.rightarrweb}>
                            <span className={style.rightweb}></span>
                        </span> <span className={style.ecosystem}>Making sure the other people than us.</span>
                </div>
                <div className={style.rightarrowweb}>
                        <span className={style.rightarrweb}>
                            <span className={style.rightweb}></span>
                        </span> <span className={style.ecosystem}>Best Solution For Your Better Web Marketing.</span>
                </div>
                </div>

                <div className={style.content}>
                    <button className={style.btn}>Read More
                        <div className={style.rightarrow}>
                            <label htmlFor='' className={style.rightarr}>
                                <label htmlFor='' className={style.right}></label>
                            </label>
                        </div>
                    </button>
                </div>  
                </div>              
            </div>
        </div>
    </>
  )
}

export default WebMarketing