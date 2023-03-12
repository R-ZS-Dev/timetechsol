import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from '@/styles/OurServices.module.css'

const OurServices = () => {
    return (
        <>
            <div className={style.ourser}>
                <h1 className={style.mcent}>Our SEO Services</h1>
                <div className={style.txtcen}>Our users are impatient. They're probably distracted too. Keep it simple and 
                beautiful, fun and functional. Clean</div>
                <div className={style.txtcen}>aesthetics supported by a strong concept is what we stand for.</div>
            </div>

            <div className={style.center}>
                <div className={style.card}>
                    <Image className={style.crdicn} src="/./images/circle.png" alt="" height={'50'} width={'80'} />
                    <div className={style.container}>
                        <h3><b>Website Development</b></h3>
                        <p className={style.txtsocial}>Our web development team with over decades of experience have aim 
                        to create simple and easy to use website that will help you win more business.</p>
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
                        <h3><b>App Development</b></h3>
                        <p className={style.txtsocial}>Using solid experience in mobile apps development, We can assist 
                        you produce seamless experiences on any device and find the simplest of mobile technology for 
                        your business.</p>
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
                        <h3><b>Desktop Application</b></h3>
                        <p className={style.txtsocial}>Our developers have a deep understandings and knowledge of most 
                        modern technologies. We have developed modern cross-platform server and desktop applications for 
                        a variety of client accross the globe.</p>
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
                        <h3><b>Search Engine Optimization</b></h3>
                        <p className={style.txtsocial}>Search Engine Optimization(SEO) is most important part in online 
                        business. Our team have prominent experience in website ranking and keyword optimization to help 
                        rank your site.</p>
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
                        <h3><b>Logo & Branding</b></h3>
                        <p className={style.txtsocial}>Starting a new Business required a unnique brand identity. Our 
                        Graphic designer have experience in designing a unique concepts for your business</p>
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
                        <h3><b>Social Media Marketing</b></h3>
                        <p className={style.txtsocial}>Our Social media team help you to connect with your audience to 
                        build your brand, increase sales, and drive website traffic via social media.</p>
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