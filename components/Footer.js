import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from '@/styles/Footer.module.css'

const Footer = () => {
    return (
        <>
            <div className={style.fotone}>
                <div className={style.thirecns}>
                    <div className={style.thirecns}>
                        <h3>(123) 0800 567890</h3>
                        <div className={style.monfri}>  Mon-Fri : 9.00 am - 6.00 pm </div>
                    </div>
                </div>
                <div>
                    <h3>info@seosight.com</h3>
                    <label htmlFor=''>15 Hours Real Time Support</label>
                </div>
                <div>
                    <h3>Newyork City</h3>
                    <label>55 street South Park Avenue</label>
                </div>
            </div>
            <div className={style.mainfooter}>
                <div className={style.fotleft}>
                    <Image src={'/images/footer-logo.png'} width='200' height={'50'} alt='image' />
                    <p className={style.leftstxt}>Our users are impatient. They're probably distracted too. Keep it simple and beautiful, fun and
                        functional. Clean aesthetics supported by a strong concept is what we stand for...</p>
                    <div>
                        <Image className={style.foticn} src={'/images/fb.png'} width='25' height={'25'} alt="image" />
                        <Image className={style.foticn} src={'/images/tw.png'} width='25' height={'25'} alt="image" />
                        <Image className={style.foticn} src={'/images/ln.png'} width='25' height={'25'} alt="image" />
                        <Image className={style.foticn} src={'/images/pn.png'} width='25' height={'25'} alt="image" />
                    </div>
                </div>
                <div className={style.fotcentone}>
                    <h2>Our Services</h2>
                    <hr className={style.lineserv}></hr>
                    <div className={style.fotcenlinfr}>
                        <div className={style.lnkpad}><Link className={style.dectxt} href={'/'} ><span className={style.fotlnkcol}>Local SEO</span></Link></div>
                        <div className={style.lnkpad}><Link className={style.dectxt} href={'/'} ><span className={style.fotlnkcol}>Social Marketing</span></Link></div>
                        <div className={style.lnkpad}><Link className={style.dectxt} href={'/'} ><span className={style.fotlnkcol}>Pay Per Click</span></Link></div>
                        <div className={style.lnkpad}><Link className={style.dectxt} href={'/'} ><span className={style.fotlnkcol}>Image Optimization</span></Link></div>
                        <div className={style.lnkpad}><Link className={style.dectxt} href={'/'} ><span className={style.fotlnkcol}>Free SEO Analysis</span></Link></div>
                    </div>
                </div>
                <div className={style.fotcentwo}>
                    <div className={style.fotcenlin}>
                        <div className={style.lnkpad}><Link className={style.dectxt} href={'/'} ><span className={style.fotlnkcol}>Email Marketing</span></Link></div>
                        <div className={style.lnkpad}><Link className={style.dectxt} href={'/'} ><span className={style.fotlnkcol}>Offline SEO</span></Link></div>
                        <div className={style.lnkpad}><Link className={style.dectxt} href={'/'} ><span className={style.fotlnkcol}>Lead Generation</span></Link></div>
                        <div className={style.lnkpad}><Link className={style.dectxt} href={'/'} ><span className={style.fotlnkcol}>Growth Hacking</span></Link></div>
                    </div>
                </div>
                <div className={style.fotcenthre}>
                    <h2 className={style.getquo}>Get A Quote</h2>
                    <hr className={style.lineserv}></hr>
                    <div>
                        <input type='text' className={style.emailfomrat} placeholder='Your E-mail *' />
                        <textarea type='text' rows={'4'} className={style.tmsgformt} placeholder='Your Message *' />

                        <div className={style.contentfot}>
                            <button className={style.btnfot} href=""><strong>SEND MESSAGE</strong>
                                <div className={style.rightarrowfot}>
                                    <Link className={style.rightarrfot} href="/">
                                        <span className={style.rightfot}></span>
                                    </Link>
                                </div>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className={style.fotbgcl}>
                <hr></hr>
                <div className={style.fotenpp}>
                    <label className={style.copycol} htmlFor=''>Copyright © 2019 Optimax by <Link className={style.fotwhite} href={'/'}>RadiusTheme</Link>. All Rights Reserved.</label>
                </div>
            </div>
        </>
    )
}

export default Footer