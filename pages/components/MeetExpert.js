import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from '@/styles/MeetExpert.module.css'

const MeetExpert = () => {
    return (
        <>
            <div className={style.body}>
                <div className={style.margintp}>
                    <div>
                        <h1 className={style.meetex}><strong>Meet Our Experts</strong></h1>
                        <div className={style.txtcens}>Good business leaders create a vision, articulate the vision, passionately own the vision, and relentlessly drive it to and</div>
                        <div className={style.txtcens}>relentlessly drive it to and relentlessly drive it to completion completion and relentlessly drive it to completion</div>
                        <div className={style.txtcens}>completion.</div>
                    </div>
                </div>

                <div className={style.centerrec}>
                    <div className={style.cardrec}>
                        <Image className={style.crdicnrec} src="/./images/team.jpg" alt="" height={'200'} width={'200'} />
                        <div className={style.containerrec}>
                            <h3>Julian Silva</h3>
                            <label className={style.analyst}>Analyst</label>
                            <div className={style.mrtp}>
                                <Link href={'/'}>
                                    <Image className={style.icnp} src={"/./images/fb.png"} height="20" width={'20'} alt='' ></Image>
                                    <Image className={style.icnp} src={"/./images/tw.png"} height="20" width={'20'} alt='' ></Image>
                                    <Image className={style.icnp} src={"/./images/ln.png"} height="20" width={'20'} alt='' ></Image>
                                    <Image className={style.icnp} src={"/./images/pn.png"} height="20" width={'20'} alt='' ></Image>
                                </Link>
                            </div>
                            <div className={style.bottompadd}></div>
                        </div>
                    </div>

                    <div className={style.cardrec}>
                        <Image className={style.crdicnrec} src="/./images/team.jpg" alt="" height={'200'} width={'200'} />
                        <div className={style.containerrec}>
                            <h3>Julian Silva</h3>
                            <label className={style.analyst}>Analyst</label>
                            <div className={style.mrtp}>
                                <Link href={'/'}>
                                    <Image className={style.icnp} src={"/./images/fb.png"} height="20" width={'20'} alt='' ></Image>
                                    <Image className={style.icnp} src={"/./images/tw.png"} height="20" width={'20'} alt='' ></Image>
                                    <Image className={style.icnp} src={"/./images/ln.png"} height="20" width={'20'} alt='' ></Image>
                                    <Image className={style.icnp} src={"/./images/pn.png"} height="20" width={'20'} alt='' ></Image>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={style.cardrec}>
                        <Image className={style.crdicnrec} src="/./images/team.jpg" alt="" height={'200'} width={'200'} />
                        <div className={style.containerrec}>
                            <h3>Julian Silva</h3>
                            <label className={style.analyst}>Analyst</label>
                            <div className={style.mrtp}>
                                <Link href={'/'}>
                                    <Image className={style.icnp} src={"/./images/fb.png"} height="20" width={'20'} alt='' ></Image>
                                    <Image className={style.icnp} src={"/./images/tw.png"} height="20" width={'20'} alt='' ></Image>
                                    <Image className={style.icnp} src={"/./images/ln.png"} height="20" width={'20'} alt='' ></Image>
                                    <Image className={style.icnp} src={"/./images/pn.png"} height="20" width={'20'} alt='' ></Image>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={style.cardrec}>
                        <Image className={style.crdicnrec} src="/./images/team.jpg" alt="" height={'200'} width={'200'} />
                        <div className={style.containerrec}>
                            <h3>Julian Silva</h3>
                            <label className={style.analyst}>Analyst</label>
                            <div className={style.mrtp}>
                                <Link href={'/'}>
                                    <Image className={style.icnp} src={"/./images/fb.png"} height="20" width={'20'} alt='' ></Image>
                                    <Image className={style.icnp} src={"/./images/tw.png"} height="20" width={'20'} alt='' ></Image>
                                    <Image className={style.icnp} src={"/./images/ln.png"} height="20" width={'20'} alt='' ></Image>
                                    <Image className={style.icnp} src={"/./images/pn.png"} height="20" width={'20'} alt='' ></Image>
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