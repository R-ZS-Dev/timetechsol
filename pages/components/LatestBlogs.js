import Image from 'next/image'
import React from 'react'
import style from '@/styles/LatestBlogs.module.css'

const LatestBlogs = () => {
    return (
        <section id="latest-blog">
            <div className={style.priourlser}>
                <h1 className={style.primlser}>Our Latest Blogs</h1>
                <div className={style.pritxtlser}>We must not be misled by left-wing incompetent news media that, day after day, feed us a diet of fantasy telling us we</div>
                <div className={style.pritxtlser}>are bigots, racists and hate-mongers.</div>
            </div>

            <div className={style.centerlets}>
                <div className={style.cardlets}>
                    <Image src={'/images/blog.jpg'} width='340' height={'250'} alt='' ></Image>
                    <div className={style.datfile}>
                        <p>july 15, 2023</p>
                        <p>Search Blocking</p>
                    </div>
                    <div>
                        <h3 className={style.txtsociallets}>Simple Ways To Optimize Your Website For Mobile</h3>
                        <p className={style.txtsociallets}>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry...</p>
                    </div>
                    <div className={style.bottompaddlets}></div>
                </div>
                <div className={style.cardlets}>
                    <Image src={'/images/blog1.jpg'} width='340' height={'250'} alt='' ></Image>
                    <div className={style.datfile}>
                        <p>july 15, 2023</p>
                        <p>Search Blocking</p>
                    </div>
                    <div>
                        <h3 className={style.txtsociallets}>Simple Ways To Optimize Your Website For Mobile</h3>
                        <p className={style.txtsociallets}>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry...</p>
                    </div>
                    <div className={style.bottompaddlets}></div>
                </div>

                <div className={style.cardlets}>
                    <Image src={'/images/blog2.jpg'} width='340' height={'250'} alt='' ></Image>
                    <div className={style.datfile}>
                        <p>july 15, 2023</p>
                        <p>Search Blocking</p>
                    </div>
                    <div>
                        <h3 className={style.txtsociallets}>Simple Ways To Optimize Your Website For Mobile</h3>
                        <p className={style.txtsociallets}>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry...</p>
                    </div>
                    <div className={style.bottompaddlets}></div>
                </div>
            </div>
        </section>
    )
}

export default LatestBlogs