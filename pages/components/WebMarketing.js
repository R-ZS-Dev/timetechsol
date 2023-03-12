import React from 'react'
import style from '@/styles/WebMarketing.module.css'
import Image from 'next/image'

const WebMarketing = () => {
  return (
    <>
        <div className={style.webdisplay}>
            <div className={style.webmark1}>
                <Image className={style.marktimgsiz} src={'/images/resizeimg2.png'} height={'500'} width={'500'} alt=""/>
            </div>
            <div className={style.webmark2}>
                <div className={style.webmarpp}>
                <h1 className={style.headweb}>We Lead from the Front</h1>
                <div className={style.normwebtxt}>
                    <p>
                        At TimeTechSol, we offer a range of solutions for your web development, app development, graphic 
                        design, stationary design, logo design, and business card design needs. Our dedicated team of 
                        professionals collaborates to deliver top-notch services.
                    </p>
                </div>
                <div className={style.textingweb}>
                <div className={style.rightarrowweb}>
                        <span className={style.rightarrweb}>
                            <span className={style.rightweb}></span>
                        </span> <span className={style.ecosystem}>
                            <b>Experienced team:</b> A software house typically employs a team of experienced developers, 
                            designers, and project managers who can offer a wealth of knowledge and expertise in software 
                            development.
                        </span>
                </div>
                <div className={style.rightarrowweb}>
                        <span className={style.rightarrweb}>
                            <span className={style.rightweb}></span>
                        </span> <span className={style.ecosystem}>
                            <b>Diverse skill set: </b>
                            A software house can offer a range of services, including web and mobile app development, 
                            custom software development, UI/UX design, and quality assurance.
                        </span>
                </div>
                <div className={style.rightarrowweb}>
                        <span className={style.rightarrweb}>
                            <span className={style.rightweb}></span>
                        </span> <span className={style.ecosystem}>
                            <b>Scalability: </b>
                            A software house can scale up or down according to the client's needs, ensuring that they have 
                            the right resources to complete a project on time and within budget.
                        </span>
                </div>
                </div>

                {/* <div className={style.content}>
                    <button className={style.btn}>Read More
                        <div className={style.rightarrow}>
                            <label htmlFor='' className={style.rightarr}>
                                <label htmlFor='' className={style.right}></label>
                            </label>
                        </div>
                    </button>
                </div>   */}
                </div>              
            </div>
        </div>
    </>
  )
}

export default WebMarketing