import React from 'react'
import style from '@/styles/BlogDetail.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Footer from './components/Footer'
import BlogRightSide from './components/BlogRightSide'
import MainNav from './components/MainNav'

const Blog_Detail = () => {
  return (
    <>
    <MainNav/>

    <div className={style.Blog_View_Navbg}>
        <div className={style.move_center}>
            <Link className={style.link_hover} href={'/'}>Home</Link> 
            <label className={style.slashcol} htmlFor=''> / </label>
            <label className={style.linkcol} htmlFor=''>Blog</label>
            <h2 className={style.latest_blog}>Real Data Management & Consulting</h2>
        </div>
    </div>

    <div className={style.left_and_right}>
        <div className={style.left_side}>
            <div className={style.pading}>
                <div >
                    <Image className={style.seo_new_img} src={'/images/seeseo.jpg'} height='420' width={'500'} alt=''></Image>
                </div>
                <span className={style.seo_new_btn}><button className={style.btn_seo_news}>SEO News</button></span>
                <div>
                    <h2 className={style.latest_blog1}>Real Data Management & Consulting</h2>
                </div>
                <div className={style.icon_div_width}>
                    <div className={style.icon_div_left}>
                        <div className={style.left_padd}>
                            <span>
                            <Image className={style.pad_three} src={'/images/user.png'} height='20' width={'20'} alt=''></Image> Lilian Corner
                            <Image className={style.pad_three} src={'/images/clock.png'} height='20' width={'20'} alt=''></Image> March 15, 2019
                            <Image className={style.pad_three} src={'/images/comment.png'} height='20' width={'20'} alt=''></Image> 13
                            </span>
                        </div>
                    </div>
                    <p className={style.icon_div_right}>
                        <Image className={style.soc_icon} src={'/images/fb.png'} height='30' width={'30'} alt=''></Image>
                        <Image className={style.soc_icon} src={'/images/tw.png'} height='30' width={'30'} alt=''></Image>
                        <Image className={style.soc_icon} src={'/images/gplus.png'} height='30' width={'30'} alt=''></Image>
                        <Image className={style.soc_icon} src={'/images/lin.png'} height='30' width={'30'} alt=''></Image>
                        <Image className={style.soc_icon} src={'/images/pn.png'} height='30' width={'30'} alt=''></Image>
                    </p>
                </div>
            </div>
            <div className={style.linehr}></div>
            <div className={style.pading_left_right}>
                <p>As a direct line to human feeling, empathic experience, genuine language and detail poetry standard 
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                    make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
                    typesetting, remaining essentiall year unchanged. It was popularised in the with the release of 
                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                </p>
                <blockquote className={style.blockquote_css}>
                    Borem ipsum dolor sit amet, adhuc iriure dissentias est in, est ne diam graece tincidunt. Sit et liber 
                    minimum tacimates, sea no docAas mela mine.
                </blockquote>
                <div className={style.auth_name}>STEVEN WILLY</div>
                <p className={style.p_lin_height}>
                    As a direct line to human feeling, empathic experience, genuine language and detail poetry standard 
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                    make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
                    typesetting, remaining essentiall year unchanged. It was popularised in the with the release of 
                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                </p>
            </div>
            <div className={style.content_img_width}>
                    <div className={style.content_img_left}>
                        <h3 className={style.hthree}>Demonstrate The Differences</h3>
                        <p className={style.p_lin_height}>
                            Direct line to human feeling, empathic experience, genuine language and detail poetry standardummy 
                            text ever since t, when an unknown printer took a galley of type and scrambled it t a 
                            ypepecimen book. It has survived not onlcenturies, but also the leap into electronic 
                            tyessentiall year unchanged. It was popularised in the with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        </p>
                    </div>
                    <div className={style.content_img_right}>
                        <span>
                            <Image className={style.content_img_sizing} src={'/images/blog24.jpg'} height='250' width={'150'} alt=''></Image>
                        </span>
                    </div>
            </div>
            
            <div className={style.heading_two}>
                <div className={style.heading_two_text}>
                    What’s the goal you have when it comes to your website?
                </div>
                <p className={style.heading_line_height}>
                    Direct line to human feeling, empathic experience, genuine language and detail poetry standardummy 
                    text ever since t, when an unknown printer took a galley of type and scrambled it t a ypepecimen book. 
                    It has survived not onlcenturies, but also the leap into electronic tyessentiall year unchanged. It was 
                    popularised in the with the release of Letraset sheets containing and more.
                </p>                
                    
                <label className={style.heading_three_tick} htmlFor=''>
                    <Image className={style.tick_icon} src={'/images/tick.png'} height='20' width={'20'} alt=''></Image>
                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                </label>

                <div>
                    <label className={style.heading_three_tick} htmlFor=''>
                        <Image className={style.tick_icon} src={'/images/tick.png'} height='20' width={'20'} alt=''></Image>
                        Eirmod perfecto id Nemore vivendo detey.
                    </label>
                </div>
                
                <label className={style.heading_three_tick} htmlFor=''>
                    <Image className={style.tick_icon} src={'/images/tick.png'} height='20' width={'20'} alt=''></Image>
                    Survived not only five centuries
                </label>

                <p className={style.heading_line_height}>
                    Human feeling, empathic experience, genuine language and detail poetry standardummy text ever since 
                    t, when an unknown printer took a galley of type and scrambled it t a ypepecimen book. It has survived 
                    not onlcenturies, but also the leap into electronic tyessentiall year unchanged.
                </p>
            </div>
            <div className={style.linehr}></div>
            <div className={style.tag_padding}>
                <Image className={style.tag_img} src={'/images/tag.png'} height='30' width={'30'}></Image>
                <Link className={style.tag_links} href={''}>Analysis,</Link>
                <Link className={style.tag_links} href={''}>Branding,</Link>
                <Link className={style.tag_links} href={''}>Optimization</Link>
            </div>
            <div className={style.author_box}>
                <Image className={style.author_pic} src={'/images/authorpic.jpg'} height='80' width={'80'} alt=''></Image>
                <div className={style.author_name}>
                    <label htmlFor=''><strong className={style.author_nam}>Lora Zaman</strong>
                        <span className={style.author_icons}>
                            <Image className={style.auth_circle} src={'/images/fb.png'} height='30' width={'30'} alt=''></Image>
                            <Image className={style.auth_circle} src={'/images/tw.png'} height='30' width={'30'} alt=''></Image>
                            <Image className={style.auth_circle} src={'/images/lin.png'} height='30' width={'30'} alt=''></Image>
                            <Image className={style.auth_circle} src={'/images/gplus.png'} height='30' width={'30'} alt=''></Image>
                        </span>
                    </label>
                    <div>Author</div>
                    <p className={style.author_text}>
                        Dorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
                    </p>
                </div>
            </div>
            <div className={style.next_previous}>
                <div className={style.previous_side}>
                    <Image className={style.previous_radious} src={'/images/blog13.jpg'} height='140' width={'160'} alt=''></Image>
                    <div className={style.previous_side_padding}>
                        <strong className={style.next_pre_tit}>How an Island Formsn And Stones</strong>
                        <div className={style.previous_topmargin}>
                            <Image className={style.previous_clock} src={'/images/clock.png'} height='30' width={'30'}></Image>
                            <label className={style.previous_date} htmlFor=''>July 15, 2019</label>
                            <div>
                                <button className={style.previous_post}>
                                    <label className={style.previous_left_arrow}>&lt;</label>Previous Post
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.next_side}>
                    <div className={style.right_half_width}>
                        <div className={style.right_width_less}>
                            <strong className={style.next_pre_tit}>How an Island Forms And Stones</strong>
                            <div>
                                <Image className={style.Next_clock} src={'/images/clock.png'} height='30' width={'30'}></Image>
                                <label className={style.Next_date} htmlFor=''> July 15, 2019</label>
                            </div>
                            <div>
                                <button className={style.Next_post}> Next Post
                                    <label className={style.Next_left_arrow}>&gt;</label>
                                </button>
                            </div>
                        </div>
                        <Image className={style.next_radious} src={'/images/blog13.jpg'} height='140' width={'160'} alt=''></Image>
                    </div>
                </div>
            </div>
            <div className={style.comment_linehr}></div>

            <div className={style.comment_section}>
                <div>
                    <h3 className={style.comment_heading}><span>(03) </span>Event Discussion</h3>
                    <div className={style.comment_orangel_line}></div>
                    <div className={style.comment_reply}>
                        <div className={style.comment_right_side}>
                            <Image className={style.com_img_radius} src={'/images/user1.jpg'} height='100' width={'100'}></Image>
                        </div>
                        <div className={style.comment_left_side}>
                            <strong>John Doe <Link className={style.comment_reply_right} href={''}>Reply</Link></strong>
                            <div>
                                <label htmlFor=''>November 16, 2018, 5:33 pm</label>
                            </div>
                            <p>
                                Ahen an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries.
                            </p>
                        </div>
                    </div>
                    <div className={style.comment_reply1}>
                        <div className={style.comment_right_side}>
                            <Image className={style.com_img_radius} src={'/images/user2.jpg'} height='100' width={'100'}></Image>
                        </div>
                        <div className={style.comment_left_side}>
                            <strong>Maria Jaman <Link className={style.comment_reply_right} href={''}>Reply</Link></strong>
                            <div>
                                <label htmlFor=''>November 16, 2018, 5:33 pm</label>
                            </div>
                            <p>
                                Ahen an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.comment_linehr}></div>

            <div className={style.write_comment}>
                <div>
                    <h3 className={style.comment_heading}>Write a Comments</h3>
                    <div className={style.comment_orangel_line}></div>
                </div>
                <div className={style.write_comm_form}>
                    <input className={style.comm_name} type={'text'} name='' placeholder='Name*' />
                    <input className={style.comm_name} type={'text'} name='' placeholder='Email*' />
                    <input className={style.comm_name} type={'text'} name='' placeholder='Website*' />
                    <textarea className={style.comm_textarea} rows='8' cols={'50'} placeholder='Type your Comment'></textarea>
                    <div>
                        <button className={style.comm_submit_btn}>SUBMIT NOW <span className={style.comm_arrow}>&gt;</span> </button>
                    </div>
                </div>
            </div>
        </div>

        <div className={style.right_side}>
            < BlogRightSide />
        </div>
    </div>

    <div className={style.blog_det_footer}>
        < Footer />
    </div>
    </>
  )
}

export default Blog_Detail