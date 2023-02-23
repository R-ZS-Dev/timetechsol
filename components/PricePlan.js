import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PricePlan = () => {
    return (
        <>
            <div className='priourser'>
                <h1 className='primcent'>Our Pricing Plan</h1>
                <div className='pritxtcen'>The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we</div>
                <div className='pritxtcen'>have applied the best of ourselves to the task at hand.</div>
            </div>

            <div className='centerprc'>
                <div className="cardprc">
                    <div className='pkgcol'>
                        <p>Silver Package</p>
                        <h1><b>$39.99</b></h1>
                        <p>/ Per Month</p>
                    </div>
                    <div>
                        <p className='txtsocialprc'>1 E-mail Address</p>
                        <p className='txtsocialprc'>10 Space Users</p>
                        <p className='txtsocialprc'>15 GB Space</p>
                        <p className='txtsocialprc'>Unlimtied Bandwit</p>
                        <p className='txtsocialprc'>Support Reports</p>
                        <p className='txtsocialprc'>15GB Uploads</p>
                    </div>
                    <div className='buybtnm'>
                        <Link className='readamorprc' href={'/'}>
                            <div className="rightarrowprc">
                                <strong>BUY NOW</strong>
                                <span className="rightprc"></span>
                            </div>
                        </Link>
                    </div>
                    <div className='bottompaddprc'></div>
                </div>

                <div className="cardprc">
                    <div className='pkgcol'>
                        <p>Golden Package</p>
                        <h1><b>$59.99</b></h1>
                        <p>/ Per Month</p>
                    </div>
                    <div>
                        <p className='txtsocialprc'>1 E-mail Address</p>
                        <p className='txtsocialprc'>10 Space Users</p>
                        <p className='txtsocialprc'>15 GB Space</p>
                        <p className='txtsocialprc'>Unlimtied Bandwit</p>
                        <p className='txtsocialprc'>Support Reports</p>
                        <p className='txtsocialprc'>15GB Uploads</p>
                    </div>
                    <div className='buybtnm'>
                        <Link className='readamorprc' href={'/'}>
                            <div className="rightarrowprc">
                                <strong>BUY NOW</strong>
                                <span className="rightprc"></span>
                            </div>
                        </Link>
                    </div>
                    <div className='bottompaddprc'></div>
                </div>

                <div className="cardprc">
                    <div className='pkgcol'>
                        <p>Platinum Package</p>
                        <h1><b>$89.99</b></h1>
                        <p>/ Per Month</p>
                    </div>
                    <div>
                        <p className='txtsocialprc'>1 E-mail Address</p>
                        <p className='txtsocialprc'>10 Space Users</p>
                        <p className='txtsocialprc'>15 GB Space</p>
                        <p className='txtsocialprc'>Unlimtied Bandwit</p>
                        <p className='txtsocialprc'>Support Reports</p>
                        <p className='txtsocialprc'>15GB Uploads</p>
                    </div>
                    <div className='buybtnm'>
                        <Link className='readamorprc' href={'/'}>
                            <div className="rightarrowprc">
                                <strong>BUY NOW</strong>
                                <span className="rightprc"></span>
                            </div>
                        </Link>
                    </div>
                    <div className='bottompaddprc'></div>
                </div>
            </div>
        </>
    )
}

export default PricePlan