import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SiteOptimiz = () => {
    return (
        <>
            <div className='fullopti'>
                <div className='tophalf'>
                    <Image className='imgcnt' src={'/./images/optipic.png'} height={'300'} width={'400'} alt="" />
                </div>
                <div className='btmhalf'>
                    <div className='towline'>
                        <h1 className='getyour'>Get Your Site Optimized &</h1>
                        <p className='cntnow'>Converting Right Now</p>
                    </div>
                    <div className='contentopt'>
                        <button className="btnopt" href="">GET A FREE AUDIT
                            <div className="rightarrowopt">
                                <a className="rightarropt" href="#">
                                    <span className="rightopt"></span>
                                </a>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SiteOptimiz