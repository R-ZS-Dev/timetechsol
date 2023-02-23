import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const OurServices = () => {
    return (
        <>
            <div className='ourser'>
                <h1 className='mcent'>Our SEO Services</h1>
                <div className='txtcen'>Our users are impatient. They're probably distracted too. Keep it simple and beautiful, fun and functional. Clean</div>
                <div className='txtcen'>aesthetics supported by a strong concept is what we stand for.</div>
            </div>

            <div className='center'>
                <div className="card">
                    <Image className='crdicn' src="/./images/circle.png" alt="Avatar" height={'50'} width={'80'} />
                    <div className="container">
                        <h3><b>Social Marketing</b></h3>
                        <p className='txtsocial'>If you get bored with social media,it’s because you are trying to get
                            more value than you create.</p>
                    </div>
                    <div>
                        <Link className='readamor' href={'/'}> <strong>Read More</strong>
                            <div className="rightarrow">
                                <a className="rightarr" href="#">
                                    <span className="right"></span>
                                </a>
                            </div>
                        </Link>
                    </div>
                    <div className='bottompadd'></div>
                </div>

                <div className="card">
                    <Image className='crdicn' src="/./images/circle.png" alt="Avatar" height={'50'} width={'80'} />
                    <div className="container">
                        <h3><b>Social Marketing</b></h3>
                        <p className='txtsocial'>If you get bored with social media,it’s because you are trying to get
                            more value than you create.</p>
                    </div>
                    <div>
                        <Link className='readamor' href={'/'}> <strong>Read More</strong>
                            <div className="rightarrow">
                                <a className="rightarr" href="#">
                                    <span className="right"></span>
                                </a>
                            </div>
                        </Link>
                    </div>
                    <div className='bottompadd'></div>
                </div>

                <div className="card">
                    <Image className='crdicn' src="/./images/circle.png" alt="Avatar" height={'50'} width={'80'} />
                    <div className="container">
                        <h3><b>Social Marketing</b></h3>
                        <p className='txtsocial'>If you get bored with social media,it’s because you are trying to get
                            more value than you create.</p>
                    </div>
                    <div>
                        <Link className='readamor' href={'/'}> <strong>Read More</strong>
                            <div className="rightarrow">
                                <a className="rightarr" href="#">
                                    <span className="right"></span>
                                </a>
                            </div>
                        </Link>
                    </div>
                    <div className='bottompadd'></div>
                </div>

                <div className="card">
                    <Image className='crdicn' src="/./images/circle.png" alt="Avatar" height={'50'} width={'80'} />
                    <div className="container">
                        <h3><b>Social Marketing</b></h3>
                        <p className='txtsocial'>If you get bored with social media,it’s because you are trying to get
                            more value than you create.</p>
                    </div>
                    <div>
                        <Link className='readamor' href={'/'}> <strong>Read More</strong>
                            <div className="rightarrow">
                                <a className="rightarr" href="#">
                                    <span className="right"></span>
                                </a>
                            </div>
                        </Link>
                    </div>
                    <div className='bottompadd'></div>
                </div>

                <div className="card">
                    <Image className='crdicn' src="/./images/circle.png" alt="Avatar" height={'50'} width={'80'} />
                    <div className="container">
                        <h3><b>Social Marketing</b></h3>
                        <p className='txtsocial'>If you get bored with social media,it’s because you are trying to get
                            more value than you create.</p>
                    </div>
                    <div>
                        <Link className='readamor' href={'/'}> <strong>Read More</strong>
                            <div className="rightarrow">
                                <a className="rightarr" href="#">
                                    <span className="right"></span>
                                </a>
                            </div>
                        </Link>
                    </div>
                    <div className='bottompadd'></div>
                </div>

                <div className="card">
                    <Image className='crdicn' src="/./images/circle.png" alt="Avatar" height={'50'} width={'80'} />
                    <div className="container">
                        <h3><b>Social Marketing</b></h3>
                        <p className='txtsocial'>If you get bored with social media,it’s because you are trying to get
                            more value than you create.</p>
                    </div>
                    <div>
                        <Link className='readamor' href={'/'}> <strong>Read More</strong>
                            <div className="rightarrow">
                                <a className="rightarr" href="#">
                                    <span className="right"></span>
                                </a>
                            </div>
                        </Link>
                    </div>
                    <div className='bottompadd'></div>
                </div>
            </div>
        </>
    )
}

export default OurServices