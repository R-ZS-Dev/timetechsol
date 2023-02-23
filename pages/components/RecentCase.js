import Image from "next/image"
import Link from "next/link"

const RecentCase = () => {
    return (
        <>
            <div className="body">
                <div className='ourser1'>
                    <h1 className='rcentcase1'>Recent Case Studies</h1>
                    <div className='txtcen1'>To become an able and successful man in any profession, three things are necessary, nature, three things are</div>
                    <div className='txtcen1'>necessary study and practice.</div>
                </div>

                <div className='center1'>
                    <div className="card1">
                        <Image className='crdicn1' src="/images/case.jpg" alt="Avatar" height={'250'} width={'373'} />
                        <div className="container">
                            <h3><b className="txtsocial11">Social Marketing</b></h3>
                            <p className='txtsocial1'>If you get bored with social media,it’s because you are trying to get
                                more value than you create.</p>
                        </div>
                        <div className="readmore11">
                            <Link className='readamor1' href={'/'}> <strong>Read More</strong>
                                <div className="rightarrow1">
                                    <strong>Read More</strong>
                                    <span className="right1"></span>
                                </div>
                            </Link>
                        </div>
                        <div className='bottompadd1'></div>
                        <div className="bluelinebt"></div>
                    </div>

                    <div className="card1">
                        <Image className='crdicn1' src="/images/case1.jpg" alt="Avatar" height={'250'} width={'373'} />
                        <div className="container">
                            <h3><b className="txtsocial11">Social Marketing</b></h3>
                            <p className='txtsocial1'>If you get bored with social media,it’s because you are trying to get
                                more value than you create.</p>
                        </div>
                        <div className="readmore11">
                            <Link className='readamor1' href={'/'}> <strong>Read More</strong>
                                <div className="rightarrow1">
                                    <strong>Read More</strong>
                                    <span className="right1"></span>
                                </div>
                            </Link>
                        </div>
                        <div className='bottompadd1'></div>
                        <div className="bluelinebt"></div>
                    </div>

                    <div className="card1">
                        <Image className='crdicn1' src="/images/case2.jpg" alt="Avatar" height={'250'} width={'373'} />
                        <div className="container">
                            <h3><b className="txtsocial11">Social Marketing</b></h3>
                            <p className='txtsocial1'>If you get bored with social media,it’s because you are trying to get
                                more value than you create.</p>
                        </div>
                        <div className="readmore11">
                            <Link className='readamor1' href={'/'}> <strong>Read More</strong>
                                <div className="rightarrow1">
                                    <strong>Read More</strong>
                                    <span className="right1"></span>
                                </div>
                            </Link>
                        </div>
                        <div className='bottompadd1'></div>
                        <div className="bluelinebt"></div>
                    </div>

                    <div className="card1">
                        <Image className='crdicn1' src="/images/case.jpg" alt="Avatar" height={'250'} width={'373'} />
                        <div className="container">
                            <h3><b className="txtsocial11">Social Marketing</b></h3>
                            <p className='txtsocial1'>If you get bored with social media,it’s because you are trying to get
                                more value than you create.</p>
                        </div>
                        <div className="readmore11">
                            <Link className='readamor1' href={'/'}> <strong>Read More</strong>
                                <div className="rightarrow1">
                                    <strong>Read More</strong>
                                    <span className="right1"></span>
                                </div>
                            </Link>
                        </div>
                        <div className='bottompadd1'></div>
                        <div className="bluelinebt"></div>
                    </div>

                    <div className="card1">
                        <Image className='crdicn1' src="/images/case1.jpg" alt="Avatar" height={'250'} width={'373'} />
                        <div className="container">
                            <h3><b className="txtsocial11">Social Marketing</b></h3>
                            <p className='txtsocial1'>If you get bored with social media,it’s because you are trying to get
                                more value than you create.</p>
                        </div>
                        <div className="readmore11">
                            <Link className='readamor1' href={'/'}> <strong>Read More</strong>
                                <div className="rightarrow1">
                                    <strong>Read More</strong>
                                    <span className="right1"></span>
                                </div>
                            </Link>
                        </div>
                        <div className='bottompadd1'></div>
                        <div className="bluelinebt"></div>
                    </div>

                    <div className="card1">
                        <Image className='crdicn1' src="/images/case2.jpg" alt="Avatar" height={'250'} width={'373'} />
                        <div className="container">
                            <h3><b className="txtsocial11">Social Marketing</b></h3>
                            <p className='txtsocial1'>If you get bored with social media,it’s because you are trying to get
                                more value than you create.</p>
                        </div>
                        <div className="readmore11">
                            <Link className='readamor1' href={'/'}>
                                <div className="rightarrow1">
                                    <strong>Read More</strong>
                                    <span className="right1"></span>
                                </div>
                            </Link>
                        </div>
                        <div className='bottompadd1'></div>
                        <div className="bluelinebt"></div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default RecentCase