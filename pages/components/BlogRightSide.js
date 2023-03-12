import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from '@/styles/BlogRight.module.css'

const BlogRightSide = () => {
  return (
    <>
    <div className={style.right_side_makecenter}>
    
    <input className={style.right_search} type={'text'} placeholder='Search Here...' />
            <Image className={style.right_search_icon} src={'/images/search.png'} width='30' height={'30'}></Image>

            <div className={style.right_categories}>
                <h3 className={style.right_cate_Si}>Categories</h3>
                <div className={style.comment_orangel_line}></div>
                <div className={style.category_items}>
                    <label htmlFor='' className={style.right_side_arrow}></label><span className={style.right_seo}>
                        <Link className={style.link_dec} href={''}>SEO</Link>
                    </span>
                    <div>
                        <label htmlFor='' className={style.right_side_arrow}></label><span className={style.right_seo}>
                            <Link className={style.link_dec} href={''}>Traffic</Link></span>
                    </div>
                    <label htmlFor='' className={style.right_side_arrow}></label><span className={style.right_seo}>
                        <Link className={style.link_dec} href={''}>Digital</Link></span>
                    <div>
                        <label htmlFor='' className={style.right_side_arrow}></label><span className={style.right_seo}>
                            <Link className={style.link_dec} href={''}>Marketing</Link></span>
                    </div>
                    <label htmlFor='' className={style.right_side_arrow}></label><span className={style.right_seo}>
                        <Link className={style.link_dec} href={''}>Link Building</Link></span>
                    <div>
                        <label htmlFor='' className={style.right_side_arrow}></label><span className={style.right_seo}>
                            <Link className={style.link_dec} href={''}>Pay Per Click</Link></span>
                    </div>
                </div>
            </div>

            <div className={style.right_recent_post}>
                <h2 className={style.right_rec_posting}>Recent Posts</h2>
                <div className={style.comment_orangel_line}></div>
                <div className={style.right_image_text}>
                    <div>
                        <Image className={style.rec_right_img} src={'/images/seeseo.jpg'} height='100' width={'100'}></Image>
                    </div>
                    <div className={style.recent_date_text}>
                        <label htmlFor='' className={style.blg_righ_dat}>11 March, 2019</label>
                        <h3>
                            <Link className={style.recent_lnk_title} href={''}>Top 5 Scariest Web Design Mistakes</Link>
                        </h3>
                    </div>
                </div>

                <div className={style.right_image_text}>
                    <div>
                        <Image className={style.rec_right_img} src={'/images/seonews.jpg'} height='100' width={'100'}></Image>
                    </div>
                    <div className={style.recent_date_text}>
                        <label htmlFor='' className={style.blg_righ_dat}>11 March, 2019</label>
                        <h3>
                            <Link className={style.recent_lnk_title} href={''}>Top 5 Scariest Web Design Mistakes</Link>
                        </h3>
                    </div>
                </div>

                <div className={style.right_image_text}>
                    <div>
                        <Image className={style.rec_right_img} src={'/images/marketing.jpg'} height='100' width={'100'}></Image>
                    </div>
                    <div className={style.recent_date_text}>
                        <label htmlFor='' className={style.blg_righ_dat}>11 March, 2019</label>
                        <h3>
                            <Link className={style.recent_lnk_title} href={''}>Top 5 Scariest Web Design Mistakes</Link>
                        </h3>
                    </div>
                </div>
            </div>

            <div className={style.right_archives}>
                <h3 className={style.rightarchiv_fnt}>Archives</h3>
                <div className={style.comment_orangel_line}></div>
                <div className={style.category_items}>
                    <label htmlFor='' className={style.right_side_arrow}></label><span className={style.right_seo}>
                        <Link className={style.link_dec} href={''}>January 2019 (12)</Link>
                    </span>
                    <div>
                        <label htmlFor='' className={style.right_side_arrow}></label><span className={style.right_seo}>
                            <Link className={style.link_dec} href={''}>February 2019 (05)</Link></span>
                    </div>
                    <label htmlFor='' className={style.right_side_arrow}></label><span className={style.right_seo}>
                        <Link className={style.link_dec} href={''}>March 2019 (12)</Link></span>
                    <div>
                        <label htmlFor='' className={style.right_side_arrow}></label><span className={style.right_seo}>
                            <Link className={style.link_dec} href={''}>April 2018 (22)</Link></span>
                    </div>
                    <label htmlFor='' className={style.right_side_arrow}></label><span className={style.right_seo}>
                        <Link className={style.link_dec} href={''}>May 2018 (06)</Link></span>
                    <div>
                        <label htmlFor='' className={style.right_side_arrow}></label><span className={style.right_seo}>
                            <Link className={style.link_dec} href={''}>June 2018 (05)</Link></span>
                    </div>
                </div>
            </div>

            <div className={style.right_archives}>
                <h3 className={style.right_tag_font}>Tags</h3>
                <div className={style.comment_orangel_line}></div>
                <div className={style.tags_btns}>
                    <button className={style.consult_btn}>Consult</button>
                    <button className={style.consult_btn}>Business Plan</button>
                    <button className={style.consult_btn}>Digital</button>
                    <button className={style.consult_btn}>Popular</button>
                    <button className={style.consult_btn}>Mobile</button>
                    <button className={style.consult_btn}>Business Service</button>
                    <button className={style.consult_btn}>Trade</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default BlogRightSide