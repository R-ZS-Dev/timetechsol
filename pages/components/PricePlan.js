import Link from 'next/link'
import React from 'react'
import style from '@/styles/PricePlan.module.css'

const PricePlan = () => {
    return (
        <>
            <div className={style.priourser}>
                <h1 className={style.primcent}>Our Pricing Plan</h1>
                <div className={style.pritxtcen}>The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we</div>
                <div className={style.pritxtcen}>have applied the best of ourselves to the task at hand.</div>
            </div>

            <div className={style.centerprc}>
                <div className={style.cardprc}>
                    <div className={style.pkgcol}>
                        <p>Silver Package</p>
                        <h1><b>$39.99</b></h1>
                        <p>/ Per Month</p>
                    </div>
                    <div>
                        <p className={style.txtsocialprc}>1 E-mail Address</p>
                        <p className={style.txtsocialprc}>10 Space Users</p>
                        <p className={style.txtsocialprc}>15 GB Space</p>
                        <p className={style.txtsocialprc}>Unlimtied Bandwit</p>
                        <p className={style.txtsocialprc}>Support Reports</p>
                        <p className={style.txtsocialprc}>15GB Uploads</p>
                    </div>
                    <div className={style.buybtnm}>
                        <Link className={style.readamorprc} href={'/'}> <strong>BUY NOW</strong>
                            <div className={style.rightarrowprc}>
                                <label htmlFor='' className={style.rightarrprc} >
                                    <label htmlFor='' className={style.rightprc}></label>
                                </label>
                            </div>
                        </Link>
                    </div>
                    <div className={style.bottompaddprc}></div>
                </div>

                <div className={style.cardprc}>
                    <div className={style.pkgcol}>
                        <p>Golden Package</p>
                        <h1><b>$59.99</b></h1>
                        <p>/ Per Month</p>
                    </div>
                    <div>
                        <p className={style.txtsocialprc}>1 E-mail Address</p>
                        <p className={style.txtsocialprc}>10 Space Users</p>
                        <p className={style.txtsocialprc}>15 GB Space</p>
                        <p className={style.txtsocialprc}>Unlimtied Bandwit</p>
                        <p className={style.txtsocialprc}>Support Reports</p>
                        <p className={style.txtsocialprc}>15GB Uploads</p>
                    </div>
                    <div className={style.buybtnm}>
                        <Link className={style.readamorprc} href={'/'}> <strong>BUY NOW</strong>
                            <div className={style.rightarrowprc}>
                                <label htmlFor='' className={style.rightarrprc} >
                                    <label htmlFor='' className={style.rightprc}></label>
                                </label>
                            </div>
                        </Link>
                    </div>
                    <div className={style.bottompaddprc}></div>
                </div>

                <div className={style.cardprc}>
                    <div className={style.pkgcol}>
                        <p>Platinum Package</p>
                        <h1><b>$89.99</b></h1>
                        <p>/ Per Month</p>
                    </div>
                    <div>
                        <p className={style.txtsocialprc}>1 E-mail Address</p>
                        <p className={style.txtsocialprc}>10 Space Users</p>
                        <p className={style.txtsocialprc}>15 GB Space</p>
                        <p className={style.txtsocialprc}>Unlimtied Bandwit</p>
                        <p className={style.txtsocialprc}>Support Reports</p>
                        <p className={style.txtsocialprc}>15GB Uploads</p>
                    </div>
                    <div className={style.buybtnm}>
                        <Link className={style.readamorprc} href={'/'}> <strong>BUY NOW</strong>
                            <div className={style.rightarrowprc}>
                                <label htmlFor='' className={style.rightarrprc} >
                                    <label htmlFor='' className={style.rightprc}></label>
                                </label>
                            </div>
                        </Link>
                    </div>
                    <div className={style.bottompaddprc}></div>
                </div>
            </div>
        </>
    )
}

export default PricePlan