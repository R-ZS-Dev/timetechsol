import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from '@/styles/OurServices.module.css'

const OurServices = () => {
    return (
        <>
            <div className={style.ourser}>
                <h1 className={style.mcent}>Our SEO Services</h1>
                <div className={style.txtcen}>Our users are impatient. They're probably distracted too. Keep it simple and beautiful, fun and functional. Clean</div>
                <div className={style.txtcen}>aesthetics supported by a strong concept is what we stand for.</div>
            </div>

            <div className={style.center}>
                <div className={style.card}>
                    <Image className={style.crdicn} src="/./images/circle.png" alt="" height={'50'} width={'80'} />
                    <div className={style.container}>
                        <h3><b>Social Marketing</b></h3>
                        <p className={style.txtsocial}>If you get bored with social media,it’s because you are trying to get
                            more value than you create.</p>
                    </div>
                    <div>
                        <Link className={style.readamor} href={'/'}> <strong>Read More</strong>
                            <div className={style.rightarrow}>
                                <label htmlFor='' className={style.rightarr}>
                                    <label htmlFor='' className={style.right}></label>
                                </label>
                            </div>
                        </Link>
                    </div>
                    <div className={style.bottompadd}></div>
                </div>

                <div className={style.card}>
                    <Image className={style.crdicn} src="/./images/circle.png" alt="" height={'50'} width={'80'} />
                    <div className={style.container}>
                        <h3><b>Social Marketing</b></h3>
                        <p className={style.txtsocial}>If you get bored with social media,it’s because you are trying to get
                            more value than you create.</p>
                    </div>
                    <div>
                        <Link className={style.readamor} href={'/'}> <strong>Read More</strong>
                            <div className={style.rightarrow}>
                                <label className={style.rightarr} htmlFor=''>
                                    <label htmlFor='' className={style.right}></label>
                                </label>
                            </div>
                        </Link>
                    </div>
                    <div className={style.bottompadd}></div>
                </div>

                <div className={style.card}>
                    <Image className={style.crdicn} src="/./images/circle.png" alt="" height={'50'} width={'80'} />
                    <div className={style.container}>
                        <h3><b>Social Marketing</b></h3>
                        <p className={style.txtsocial}>If you get bored with social media,it’s because you are trying to get
                            more value than you create.</p>
                    </div>
                    <div>
                        <Link className={style.readamor} href={'/'}> <strong>Read More</strong>
                            <div className={style.rightarrow}>
                                <label className={style.rightarr} htmlFor=''>
                                    <label htmlFor='' className={style.right}></label>
                                </label>
                            </div>
                        </Link>
                    </div>
                    <div className={style.bottompadd}></div>
                </div>

                <div className={style.card}>
                    <Image className={style.crdicn} src="/./images/circle.png" alt="" height={'50'} width={'80'} />
                    <div className={style.container}>
                        <h3><b>Social Marketing</b></h3>
                        <p className={style.txtsocial}>If you get bored with social media,it’s because you are trying to get
                            more value than you create.</p>
                    </div>
                    <div>
                        <Link className={style.readamor} href={'/'}> <strong>Read More</strong>
                            <div className={style.rightarrow}>
                                <label className={style.rightarr} htmlFor=''>
                                    <label htmlFor='' className={style.right}></label>
                                </label>
                            </div>
                        </Link>
                    </div>
                    <div className={style.bottompadd}></div>
                </div>

                <div className={style.card}>
                    <Image className={style.crdicn} src="/./images/circle.png" alt="" height={'50'} width={'80'} />
                    <div className={style.container}>
                        <h3><b>Social Marketing</b></h3>
                        <p className={style.txtsocial}>If you get bored with social media,it’s because you are trying to get
                            more value than you create.</p>
                    </div>
                    <div>
                        <Link className={style.readamor} href={'/'}> <strong>Read More</strong>
                            <div className={style.rightarrow}>
                                <label className={style.rightarr} htmlFor=''>
                                    <label htmlFor='' className={style.right}></label>
                                </label>
                            </div>
                        </Link>
                    </div>
                    <div className={style.bottompadd}></div>
                </div>

                <div className={style.card}>
                    <Image className={style.crdicn} src="/./images/circle.png" alt="" height={'50'} width={'80'} />
                    <div className={style.container}>
                        <h3><b>Social Marketing</b></h3>
                        <p className={style.txtsocial}>If you get bored with social media,it’s because you are trying to get
                            more value than you create.</p>
                    </div>
                    <div>
                        <Link className={style.readamor} href={'/'}> <strong>Read More</strong>
                            <div className={style.rightarrow}>
                                <label className={style.rightarr} htmlFor=''>
                                    <label htmlFor='' className={style.right}></label>
                                </label>
                            </div>
                        </Link>
                    </div>
                    <div className={style.bottompadd}></div>
                </div>
            </div>
        </>
    )
}

export default OurServices