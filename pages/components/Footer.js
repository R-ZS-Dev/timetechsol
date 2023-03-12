import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from '@/styles/Footer.module.css'

const Footer = () => {
    return (
        <>
            <div className={style.fotone}>
                <div className={style.thirecns}>
                    <Image className='radiousmg' src={'/./images/phone.jpg'} height='30' width={'30'} alt='' />

                    <div className={style.monfri}>
                        <h3>(123) 0800 567890</h3>
                        Mon-Fri : 9.00 am - 6.00 pm
                    </div>
                </div>
                <div className={style.thirecns}>
                        <Image className='radiousmg' src={'/./images/email.jpg'} height='30' width={'30'} alt='' />
                        
                    <div className={style.monfri}>
                    <h3>info@seosight.com </h3>
                    15 Hours Real Time Support
                    </div>

                </div>
                <div className={style.thirecns}>
                        <Image className='radiousmg' src={'/./images/location.jpg'} height='30' width={'30'} alt='' />
                        <div className={style.monfri}>
                    <h3>Newyork City</h3>
                    55 street South Park Avenue
                    </div>
                </div>
            </div>
            <div className={style.mainfooter}>
                <div className={style.fotleft}>
                    <Image src={'/./images/footer-logo.png'} width='200' height={'50'} alt='' />
                    <p className={style.leftstxt}>Our users are impatient. They're probably distracted too. Keep it simple and beautiful, fun and
                        functional. Clean aesthetics supported by a strong concept is what we stand for...</p>
                    <div>
                        <Image className={style.foticn} src={'/./images/fb.png'} width='25' height={'25'} alt='' />
                        <Image className={style.foticn} src={'/./images/tw.png'} width='25' height={'25'} alt='' />
                        <Image className={style.foticn} src={'/./images/ln.png'} width='25' height={'25'} alt='' />
                        <Image className={style.foticn} src={'/./images/pn.png'} width='25' height={'25'} alt='' />
                    </div>
                </div>
                <div className={style.fotcentone}>
                    <h2>Our Services</h2>
                    <hr className={style.lineserv}></hr>
                    <div className={style.acol}>a</div>
                    <div>
                        <div className={style.lnkpad}><Link className={style.dectxt} href={'/'} ><label htmlFor='' className={style.fotlnkcol}>Local SEO</label></Link></div>
                        <div className={style.lnkpad}><Link className={style.dectxt} href={'/'} ><label htmlFor='' className={style.fotlnkcol}>Social Marketing</label></Link></div>
                        <div className={style.lnkpad}><Link className={style.dectxt} href={'/'} ><label htmlFor='' className={style.fotlnkcol}>Pay Per Click</label></Link></div>
                        <div className={style.lnkpad}><Link className={style.dectxt} href={'/'} ><label htmlFor='' className={style.fotlnkcol}>Image Optimization</label></Link></div>
                        <div className={style.lnkpad}><Link className={style.dectxt} href={'/'} ><label htmlFor='' className={style.fotlnkcol}>Free SEO Analysis</label></Link></div>
                    </div>
                </div>
                <div className={style.fotcentwo}>
                    <div>
                        <div className={style.lnkpad}><Link className={style.dectxt} href={'/'} ><label htmlFor='' className={style.fotlnkcol}>Email Marketing</label></Link></div>
                        <div className={style.lnkpad}><Link className={style.dectxt} href={'/'} ><label htmlFor='' className={style.fotlnkcol}>Offline SEO</label></Link></div>
                        <div className={style.lnkpad}><Link className={style.dectxt} href={'/'} ><label htmlFor='' className={style.fotlnkcol}>Lead Generation</label></Link></div>
                        <div className={style.lnkpad}><Link className={style.dectxt} href={'/'} ><label htmlFor='' className={style.fotlnkcol}>Growth Hacking</label></Link></div>
                    </div>
                </div>
                <div className={style.fotcenthre}>
                    <h2 className={style.getquo}>Get A Quote</h2>
                    <hr className={style.lineserv}></hr>
                    <div className={style.footer_message}>
                        <input type='text' className={style.emailfomrat} placeholder='Your E-mail *' />
                        <textarea type='text' rows={'4'} className={style.tmsgformt} placeholder='Your Message *' />

                        {/* <div className={style.contentfot}> */}
                            <button className={style.btnfot}>Send Message
                                <div className={style.rightarrowfot}>
                                    <label htmlFor='' className={style.rightarrfot}>
                                        <label htmlFor='' className={style.rightfot}></label>
                                    </label>
                                </div>
                            </button>
                        {/* </div> */}

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