import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='fotone'>
            <div className='thirecns'>
                <div className='thirecns'>
                    {/* <Image className='radiousmg' src={'/./images/phone.jpg'} height='30' width={'30'} /> */}
                    <h3>(123) 0800 567890</h3>
                    <div className='monfri'>  Mon-Fri : 9.00 am - 6.00 pm </div>
                </div>
            </div>
            <div>
                {/* <Image className='radiousmg' src={'/./images/email.jpg'} height='30' width={'30'} /> */}
                <h3>info@seosight.com</h3>
                <label htmlFor=''>15 Hours Real Time Support</label>
            </div>
            <div>
                {/* <Image className='radiousmg' src={'/./images/location.jpg'} height='30' width={'30'} /> */}
                <h3>Newyork City</h3>
                <label>55 street South Park Avenue</label>
            </div>
        </div>
        <div className='mainfooter'>
            <div className='fotleft'>
                <Image src={'/./images/footer-logo.png'} width='200' height={'50'} />
                <p className='leftstxt'>Our users are impatient. They're probably distracted too. Keep it simple and beautiful, fun and 
                    functional. Clean aesthetics supported by a strong concept is what we stand for...</p>
                <div>
                    <Image className='foticn' src={'/./images/fb.png'} width='25' height={'25'} />
                    <Image className='foticn' src={'/./images/tw.png'} width='25' height={'25'} />
                    <Image className='foticn' src={'/./images/ln.png'} width='25' height={'25'} />
                    <Image className='foticn' src={'/./images/pn.png'} width='25' height={'25'} />
                </div>
            </div>
            <div className='fotcentone'>
                <h2>Our Services</h2>
                <hr className='lineserv'></hr>
                <div className='fotcenlinfr'>
                    <div className='lnkpad'><Link className='dectxt' href={'/'} ><span className='fotlnkcol'>Local SEO</span></Link></div>
                    <div className='lnkpad'><Link className='dectxt' href={'/'} ><span className='fotlnkcol'>Social Marketing</span></Link></div>
                    <div className='lnkpad'><Link className='dectxt' href={'/'} ><span className='fotlnkcol'>Pay Per Click</span></Link></div>
                    <div className='lnkpad'><Link className='dectxt' href={'/'} ><span className='fotlnkcol'>Image Optimization</span></Link></div>
                    <div className='lnkpad'><Link className='dectxt' href={'/'} ><span className='fotlnkcol'>Free SEO Analysis</span></Link></div>
                </div>
            </div>
            <div className='fotcentwo'>
                <div className='fotcenlin'>
                    <div className='lnkpad'><Link className='dectxt' href={'/'} ><span className='fotlnkcol'>Email Marketing</span></Link></div>
                    <div className='lnkpad'><Link className='dectxt' href={'/'} ><span className='fotlnkcol'>Offline SEO</span></Link></div>
                    <div className='lnkpad'><Link className='dectxt' href={'/'} ><span className='fotlnkcol'>Lead Generation</span></Link></div>
                    <div className='lnkpad'><Link className='dectxt' href={'/'} ><span className='fotlnkcol'>Growth Hacking</span></Link></div>
                </div>
            </div>
            <div className='fotcenthre'>
                <h2 className='getquo'>Get A Quote</h2>
                <hr className='lineserv'></hr>
                <div>
                    <input type='text' className='emailfomrat' placeholder='Your E-mail *' />
                    <textarea type='text' rows={'4'} className='tmsgformt' placeholder='Your Message *' />

                    <div className='contentfot'>
                        <button className="btnfot" href=""><strong>SEND MESSAGE</strong>
                            <div className="rightarrowfot">
                                <a className="rightarrfot" href="#">
                                    <span className="rightfot"></span>
                                </a>
                            </div>
                        </button>
                    </div>

                </div>
            </div>
        </div>

        <div className='fotbgcl'>
            <hr></hr>
            <div className='fotenpp'>
                <label className='copycol' htmlFor=''>Copyright ?? 2019 Optimax by <Link className='fotwhite' href={'/'}>RadiusTheme</Link>. All Rights Reserved.</label>
            </div>
        </div>
    </>
  )
}

export default Footer