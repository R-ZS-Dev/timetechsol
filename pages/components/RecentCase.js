import Image from "next/image"
import Link from "next/link"
import style from "@/styles/RecentCase.module.css"

const RecentCase = () => {
    return (
        <>
            <div className={style.body}>
            <div className={style.ourser1}>
                <h1 className={style.rcentcase1}>Our Impressive Portfolio</h1>
                <div className={style.txtcen1}>To become an able and successful man in any profession, three things are necessary, nature, three things are</div>
                <div className={style.txtcen1}>necessary study and practice.</div>
            </div>

            <div className={style.center1}>
                <div className={style.card1}>
                    <Image className={style.crdicn1} src="/./images/get_in.jpg" alt="" height={'250'} width={'373'} />
                    <div className={style.container}>
                        <h3><b className={style.txtsocial11}>Web Development</b></h3>
                        <p className={style.txtsocial1}>If you get bored with social media,it’s because you are trying to get
                            more value than you create.</p>
                    </div>
                    <div className={style.readmore11}>
                        <Link className={style.readamor1} href={'/'}> <strong>Read More</strong>
                            <div className={style.rightarrow1}>
                                <label htmlFor="" className={style.rightarr1}>
                                    <label htmlFor="" className={style.right1}></label>
                                </label>
                            </div>
                        </Link>
                    </div>
                    <div className={style.bottompadd1}></div>
                    <div className={style.bluelinebt}></div>
                </div>

                <div className={style.card1}>
                    <Image className={style.crdicn1} src="/./images/saudi.png" alt="" height={'250'} width={'373'} />
                    <div className={style.container}>
                        <h3><b className={style.txtsocial11}>Web Development</b></h3>
                        <p className={style.txtsocial1}>If you get bored with social media,it’s because you are trying to get
                            more value than you create.</p>
                    </div>
                    <div className={style.readmore11}>
                        <Link className={style.readamor1} href={'/'}> <strong>Read More</strong>
                            <div className={style.rightarrow1}>
                                <label htmlFor="" className={style.rightarr1}>
                                    <label htmlFor="" className={style.right1}></label>
                                </label>
                            </div>
                        </Link>
                    </div>
                    <div className={style.bottompadd1}></div>
                    <div className={style.bluelinebt}></div>
                </div>

                <div className={style.card1}>
                    <Image className={style.crdicn1} src="/./images/chinai.png" alt="" height={'250'} width={'373'} />
                    <div className={style.container}>
                        <h3><b className={style.txtsocial11}>Web Development</b></h3>
                        <p className={style.txtsocial1}>If you get bored with social media,it’s because you are trying to get
                            more value than you create.</p>
                    </div>
                    <div className={style.readmore11}>
                        <Link className={style.readamor1} href={'/'}> <strong>Read More</strong>
                            <div className={style.rightarrow1}>
                                <label htmlFor="" className={style.rightarr1}>
                                    <label htmlFor="" className={style.right1}></label>
                                </label>
                            </div>
                        </Link>
                    </div>
                    <div className={style.bottompadd1}></div>
                    <div className={style.bluelinebt}></div>
                </div>

                <div className={style.card1}>
                    <Image className={style.crdicn1} src="/./images/fspublisher.png" alt="" height={'250'} width={'373'} />
                    <div className={style.container}>
                        <h3><b className={style.txtsocial11}>Web Development</b></h3>
                        <p className={style.txtsocial1}>International Journal of Agriculture and Biology</p>
                    </div>
                    <div className={style.readmore11}>
                        <Link className={style.readamor1} href={'/'}> <strong>Read More</strong>
                            <div className={style.rightarrow1}>
                                <label htmlFor="" className={style.rightarr1}>
                                    <label htmlFor="" className={style.right1}></label>
                                </label>
                            </div>
                        </Link>
                    </div>
                    <div className={style.bottompadd1}></div>
                    <div className={style.bluelinebt}></div>
                </div>

                <div className={style.card1}>
                    <Image className={style.crdicn1} src="/./images/educ.png" alt="" height={'250'} width={'373'} />
                    <div className={style.container}>
                        <h3><b className={style.txtsocial11}>Web Development</b></h3>
                        <p className={style.txtsocial1}>Online School Management System</p>
                    </div>
                    <div className={style.readmore11}>
                        <Link className={style.readamor1} href={'/'}> <strong>Read More</strong>
                            <div className={style.rightarrow1}>
                                <label htmlFor="" className={style.rightarr1}>
                                    <label htmlFor="" className={style.right1}></label>
                                </label>
                            </div>
                        </Link>
                    </div>
                    <div className={style.bottompadd1}></div>
                    <div className={style.bluelinebt}></div>
                </div>

                <div className={style.card1}>
                    <Image className={style.crdicn1} src="/./images/karachi.png" alt="" height={'250'} width={'373'} />
                    <div className={style.container}>
                        <h3><b className={style.txtsocial11}>Web Development</b></h3>
                        <p className={style.txtsocial1}>Kitchen Catering</p>
                    </div>
                    <div className={style.readmore11}>
                        <Link className={style.readamor1} href={'/'}> <strong>Read More</strong>
                            <div className={style.rightarrow1}>
                                <label htmlFor="" className={style.rightarr1}>
                                    <label htmlFor="" className={style.right1}></label>
                                </label>
                            </div>
                        </Link>
                    </div>
                    <div className={style.bottompadd1}></div>
                    <div className={style.bluelinebt}></div>
                </div>

                
            </div>
            </div>
        </>
    )
}

export default RecentCase