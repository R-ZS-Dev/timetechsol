import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MainNav = () => {
    return (
        <>
            <div className="topnav">
                {/* <Image className='logopad' src={"/images/logo2.png"} height="35" width={"110"} alt="TimeSol" />
                <Link href="#"><span>Blog</span></Link>
                <Link href="#"><span>Team</span></Link>
                <Link href="#"><span>About</span></Link>
                <Link href="#"><span>Portfolio</span></Link>
                <Link className='dropdown' href={"#"}>
                    <span>
                        <button className='dropbtn'>Services <i className="arrow down"></i></button>
                        <div className='dropdown-content'> 
                            <label htmlFor='' className='bluelin'></label>
                            <Link className='txtdec' href={"/"}><span>Website Development</span></Link>
                            <Link className='txtdec' href={"/"}><span>Mobile App Design</span></Link>
                            <Link className='txtdec' href={"/"}><span>Logo & Branding</span></Link>
                            <Link className='txtdec' href={"/"}><span>Search Engine Optimization</span></Link>
                        </div>
                    </span>
                </Link>
                <Link href="#"><span>Home</span></Link> */}
            </div>
        </>
    )
}

export default MainNav