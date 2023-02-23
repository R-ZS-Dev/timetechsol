import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WebMarketing = () => {
  return (
    <>
        <div className='webdisplay'>
            <div className='webmark1'>
                <Image src={'/images/resizeimg2.png'} height={'500'} width={'700'} alt=""/>
            </div>
            <div className=''>
                <h1 className='headweb'>We Are The Best Solution For</h1>
                <h1 className='headweb'>Your Better Web Marketing</h1>
                <div className='normwebtxt'>
                    <p>
                    Our philosophy is that we want to be an ecosystem. Our philosophy is to empower others to sell, empower others to service, making sure the other people are more powerful than us. With our technology,of opportunity are collaboration and partnership.
                    </p>
                </div>
                <div>
                <div className="rightarrowweb">
                        <span className="rightarrweb" href="/">
                            <span className="rightweb"></span>
                        </span> <span className='ecosystem'>Our philosophy is that we want to ecosystem.</span>
                </div>
                <div className="rightarrowweb">
                        <span className="rightarrweb" href="/">
                            <span className="rightweb"></span>
                        </span> <span className='ecosystem'>Making sure the other people than us.</span>
                </div>
                <div className="rightarrowweb">
                        <span className="rightarrweb" href="/">
                            <span className="rightweb"></span>
                        </span> <span className='ecosystem'>Best Solution For Your Better Web Marketing.</span>
                </div>
                </div>

                <div className='content'>
                    <button className="btn" href="">Read More
                        <div className="rightarrow">
                            <Link className="rightarr" href="/">
                                <span className="right"></span>
                            </Link>
                        </div>
                    </button>
                </div>                
            </div>
        </div>
    </>
  )
}

export default WebMarketing