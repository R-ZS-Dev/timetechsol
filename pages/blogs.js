import Image from 'next/image'
import React from 'react'
import style from '@/styles/BlogView.module.css'
import Link from 'next/link'
import Footer from './components/Footer'
import MainNav from './components/MainNav'

const Blog_View = () => {
  return (
    <>
    <MainNav />

    <div className={style.Blog_View_Navbg}>
        <div className={style.move_center}>
            <Link className={style.link_hover} href={'/'}>Home</Link> 
            <label className={style.slashcol} htmlFor=''> / </label>
            <label className={style.linkcol} htmlFor=''>Blog</label>
            <h2 className={style.latest_blog}>Latest Blog Posts</h2>
        </div>
    </div>

    <div className={style.left_and_right}>
        <div className={style.left_side}>
                <div className={style.pading}>
                <Link className={style.remove_linking} href={'/Blog_Detail'}>
                    <div className={style.blog_one_view}>
                        <Image className={style.seo_new_img} src={'/images/seonews.png'} height='60' width={'400'} ></Image>
                        <span className={style.view_seonews_btn}>
                            <button className={style.view_seonew_btn}>SEO News</button>
                        </span>
                        <h2 className={style.view_title}>Creativity lifey aspects think secret of great</h2>
                        <div className={style.icon_view_left}>
                            <div className={style.left_view_padd}>
                                <span>
                                    <Image src={'/images/user.png'} height='20' width={'20'} alt=''></Image> Lilian Corner
                                    <Image className={style.pad_view_threes} src={'/images/clock.png'} height='20' width={'20'} alt=''></Image> March 15, 2019
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={style.comment_linehr}></div>
                    <p className={style.blog_text_line_height}>
                        As a direct line to human feeling, empathic experience, genuine language and detail poetry is 
                        everything perspective.
                    </p>
                    <div>
                        <Link className={style.view_read_more} href={'/'}>Read More <span className={style.right_arrow}>→</span> </Link>
                        <span className={style.blog_com_img}>13</span>
                        <Image className={style.blog_com_img} src={'/images/blogcomment.png'} height='30' width={'30'} alt=''></Image>
                    </div>
                </Link>
                </div>

            <div className={style.pading}>
                <div className={style.blog_one_view}>
                    <Image className={style.seo_new_img} src={'/images/seonews.png'} height='80' width={'400'} ></Image>
                    <span className={style.view_seonews_btn}>
                        <button className={style.view_seonew_btn}>SEO News</button>
                    </span>
                    <h2 className={style.view_title}>Creativity lifey aspects think secret of great</h2>
                    <div className={style.icon_view_left}>
                        <div className={style.left_view_padd}>
                            <span>
                                <Image src={'/images/user.png'} height='20' width={'20'} alt=''></Image> Lilian Corner
                                <Image className={style.pad_view_threes} src={'/images/clock.png'} height='20' width={'20'} alt=''></Image> March 15, 2019
                            </span>
                        </div>
                    </div>
                </div>
                <div className={style.comment_linehr}></div>
                <p className={style.blog_text_line_height}>
                    As a direct line to human feeling, empathic experience, genuine language and detail poetry is 
                    everything perspective.
                </p>
                <div>
                    <Link className={style.view_read_more} href={'/'}>Read More <span className={style.right_arrow}>→</span> </Link>
                    <span className={style.blog_com_img}>13</span>
                    <Image className={style.blog_com_img} src={'/images/blogcomment.png'} height='30' width={'30'} alt=''></Image>
                </div>
            </div>

            <div className={style.pading}>
                <div className={style.blog_one_view}>
                    <Image className={style.seo_new_img} src={'/images/seonews.png'} height='80' width={'400'} ></Image>
                    <span className={style.view_seonews_btn}>
                        <button className={style.view_seonew_btn}>SEO News</button>
                    </span>
                    <h2 className={style.view_title}>Creativity lifey aspects think secret of great</h2>
                    <div className={style.icon_view_left}>
                        <div className={style.left_view_padd}>
                            <span>
                                <Image src={'/images/user.png'} height='20' width={'20'} alt=''></Image> Lilian Corner
                                <Image className={style.pad_view_threes} src={'/images/clock.png'} height='20' width={'20'} alt=''></Image> March 15, 2019
                            </span>
                        </div>
                    </div>
                </div>
                <div className={style.comment_linehr}></div>
                <p className={style.blog_text_line_height}>
                    As a direct line to human feeling, empathic experience, genuine language and detail poetry is 
                    everything perspective.
                </p>
                <div>
                    <Link className={style.view_read_more} href={'/'}>Read More <span className={style.right_arrow}>→</span> </Link>
                    <span className={style.blog_com_img}>13</span>
                    <Image className={style.blog_com_img} src={'/images/blogcomment.png'} height='30' width={'30'} alt=''></Image>
                </div>
            </div>

            <div className={style.pading}>
                <div className={style.blog_one_view}>
                    <Image className={style.seo_new_img} src={'/images/seonews.png'} height='80' width={'400'} ></Image>
                    <span className={style.view_seonews_btn}>
                        <button className={style.view_seonew_btn}>SEO News</button>
                    </span>
                    <h2 className={style.view_title}>Creativity lifey aspects think secret of great</h2>
                    <div className={style.icon_view_left}>
                        <div className={style.left_view_padd}>
                            <span>
                                <Image src={'/images/user.png'} height='20' width={'20'} alt=''></Image> Lilian Corner
                                <Image className={style.pad_view_threes} src={'/images/clock.png'} height='20' width={'20'} alt=''></Image> March 15, 2019
                            </span>
                        </div>
                    </div>
                </div>
                <div className={style.comment_linehr}></div>
                <p className={style.blog_text_line_height}>
                    As a direct line to human feeling, empathic experience, genuine language and detail poetry is 
                    everything perspective.
                </p>
                <div>
                    <Link className={style.view_read_more} href={'/'}>Read More <span className={style.right_arrow}>→</span> </Link>
                    <span className={style.blog_com_img}>13</span>
                    <Image className={style.blog_com_img} src={'/images/blogcomment.png'} height='30' width={'30'} alt=''></Image>
                </div>
                
            </div>
            <div className={style.pagniation}>
                <div className={style.Blog_View_pagination}>
                    <div className={style.view_page_numbers}>
                        <span className={style.blog_pagniation}>1</span>
                        <span className={style.blog_pagniation}>2</span>
                        <span className={style.blog_pagniation}>3</span>
                        <span className={style.blog_pagniation}>4</span>
                    </div>
                </div>
            </div>            
        </div>        
    </div>
    
    <div className={style.blog_footer_margin}>
        <Footer />
    </div>
    </>
  )
}

export default Blog_View