import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MeetExpert = () => {
    return (
        <>
            <div className='body'>
                <div className='margintp'>
                    <div>
                        <h1 className='meetex'><strong>Meet Our Experts</strong></h1>
                        <div className='txtcens'>Good business leaders create a vision, articulate the vision, passionately own the vision, and relentlessly drive it to and</div>
                        <div className='txtcens'>relentlessly drive it to and relentlessly drive it to completion completion and relentlessly drive it to completion</div>
                        <div className='txtcens'>completion.</div>
                    </div>
                </div>

                <div className='centerrec'>
                    <div className="cardrec">
                        <Image className='crdicnrec' src="/images/team.jpg" alt="Avatar" height={'200'} width={'200'} />
                        <div className="containerrec">
                            <h3>Julian Silva</h3>
                            <label className='analyst'>Analyst</label>
                            <div className='mrtp'>
                                <Link href={'/'}>
                                    <Image className='icnp' src={"/images/fb.png"} height="20" width={'20'}></Image>
                                    <Image className='icnp' src={"/images/tw.png"} height="20" width={'20'}></Image>
                                    <Image className='icnp' src={"/images/ln.png"} height="20" width={'20'}></Image>
                                    <Image className='icnp' src={"/images/pn.png"} height="20" width={'20'}></Image>
                                </Link>
                            </div>
                            <div className='bottompadd'></div>
                        </div>
                    </div>

                    <div className="cardrec">
                        <Image className='crdicnrec' src="/images/team.jpg" alt="Avatar" height={'200'} width={'200'} />
                        <div className="containerrec">
                            <h3>Julian Silva</h3>
                            <label className='analyst'>Analyst</label>
                            <div className='mrtp'>
                                <Link href={'/'}>
                                    <Image className='icnp' src={"/images/fb.png"} height="20" width={'20'}></Image>
                                    <Image className='icnp' src={"/images/tw.png"} height="20" width={'20'}></Image>
                                    <Image className='icnp' src={"/images/ln.png"} height="20" width={'20'}></Image>
                                    <Image className='icnp' src={"/images/pn.png"} height="20" width={'20'}></Image>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="cardrec">
                        <Image className='crdicnrec' src="/images/team.jpg" alt="Avatar" height={'200'} width={'200'} />
                        <div className="containerrec">
                            <h3>Julian Silva</h3>
                            <label className='analyst'>Analyst</label>
                            <div className='mrtp'>
                                <Link href={'/'}>
                                    <Image className='icnp' src={"/images/fb.png"} height="20" width={'20'}></Image>
                                    <Image className='icnp' src={"/images/tw.png"} height="20" width={'20'}></Image>
                                    <Image className='icnp' src={"/images/ln.png"} height="20" width={'20'}></Image>
                                    <Image className='icnp' src={"/images/pn.png"} height="20" width={'20'}></Image>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="cardrec">
                        <Image className='crdicnrec' src="/images/team.jpg" alt="Avatar" height={'200'} width={'200'} />
                        <div className="containerrec">
                            <h3>Julian Silva</h3>
                            <label className='analyst'>Analyst</label>
                            <div className='mrtp'>
                                <Link href={'/'}>
                                    <Image className='icnp' src={"/images/fb.png"} height="20" width={'20'}></Image>
                                    <Image className='icnp' src={"/images/tw.png"} height="20" width={'20'}></Image>
                                    <Image className='icnp' src={"/images/ln.png"} height="20" width={'20'}></Image>
                                    <Image className='icnp' src={"/images/pn.png"} height="20" width={'20'}></Image>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MeetExpert