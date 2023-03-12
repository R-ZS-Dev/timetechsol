import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import style from '@/styles/MainNav.module.css'

const MainNav = () => {
    // const [isChecked, setIsChecked] = useState(false);
  
    // function handleCheckboxChange() {
    //   setIsChecked(!isChecked);
    // }
    return (
        <>
            {/* <div className={style.topnav}> */}
                {/* <input type="checkbox" checked={isChecked} className={style.navcheck} onChange={handleCheckboxChange} /> */}

                {/* <Image className={style.logopad} src={"/images/logo2.png"} height="35" width={"110"} alt="TimeSol" /> */}
            {/* <div className={style.navlinks}> */}
                {/* <Link href="#"><label htmlFor=''>Blog</label></Link>
                <Link href="#"><label htmlFor=''>Team</label></Link>
                <Link href="#"><label htmlFor=''>About</label></Link>
                <Link href="#"><label htmlFor=''>Portfolio</label></Link>
                <span className={style.dropdown} href={"#"}>
                    <label htmlFor=''>
                        <button className={style.dropbtn}>Services <i className="arrowdown"></i></button>
                        <div className={style.dropdowncontent}> 
                            <label htmlFor='' className={style.bluelin}></label>
                            <Link className={style.txtdec} href={"/"}><label htmlFor=''>Website Development</label></Link>
                            <Link className={style.txtdec} href={"/"}><label htmlFor=''>Mobile App Design</label></Link>
                            <Link className={style.txtdec} href={"/"}><label htmlFor=''>Logo & Branding</label></Link>
                            <Link className={style.txtdec} href={"/"}><label htmlFor=''>Search Engine Optimization</label></Link>
                        </div>
                    </label>
                </span>
                <Link href="#"><label htmlFor=''>Home</label></Link> */}
            {/* </div> */}
                
            {/* </div> */}

            <div className="nav">
                <input type="checkbox" id="nav-check" />
                <div className="nav-header">
                    <div className="nav-title px-">
                        <Link className='ijvsnavtitle px-3' href='/'>
                            <Image className={style.logopad} src={"/images/logo2.png"} height="60" width={"120"} alt="TimeSol" />
                        </Link>
                    </div>
                </div>
                <div className="nav-btn">
                    <label htmlFor="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div className="nav-links">
                    <Link href="/"><b>Home</b></Link>
                    <Link href="/#services"><b>Services</b></Link>

                    {/* <span className={style.dropdown} href={"/"}>
                    <label htmlFor=''>
                        <button className={style.dropbtn}>Services</button>
                        <div className={style.dropdowncontent}> 
                            <Link className={style.txtdec} href={"/"}><label htmlFor=''>Website Development</label></Link>
                            <Link className={style.txtdec} href={"/"}><label htmlFor=''>Mobile App Design</label></Link>
                            <Link className={style.txtdec} href={"/"}><label htmlFor=''>Logo & Branding</label></Link>
                            <Link className={style.txtdec} href={"/"}><label htmlFor=''>Search Engine Optimization</label></Link>
                        </div>
                    </label>
                    </span> */}

                    <Link href="/#portfolio"><b>Portfolio</b></Link>
                    <Link href="/#about-us"><b>About</b></Link>
                    <Link href="/#team"><b>Team</b></Link>
                    <Link href="/#pricing-plan"><b>Plans</b></Link>
                    <Link href="/#latest-blog"><b>Latest Blogs</b></Link>
                    <Link href="/blogs"><b>Blog</b></Link>
                </div>
            </div>
        </>
    )
}

export default MainNav