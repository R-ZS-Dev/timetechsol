import Link from 'next/link'
import React from 'react'

const MainSlider = () => {
    return (
        <>
            <div className='bgphoto'>
                <div className="content">
                    <p className='toppadd'>The Best Agency For Digital Marketing</p>
                    <h3>Promote Your Website <br></br> With SEO Service</h3>
                    <p>Good business leaders create articulate the vision, passionately </p>
                    <div>vision and relentlessly drive it to completionrt working with an</div>
                    <div>company that can provide everything.</div>
                    <button className="btn" href="">Read More
                        <div className="rightarrow">
                            <Link className="rightarr" href="/">
                                <span className="right"></span>
                            </Link>
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default MainSlider