import Image from 'next/image'
import React from 'react'

const LatestService = () => {
    return (
        <>
            <div className='priourlser'>
                <h1 className='primlser'>Our Latest News</h1>
                <div className='pritxtlser'>We must not be misled by left-wing incompetent news media that, day after day, feed us a diet of fantasy telling us we</div>
                <div className='pritxtlser'>are bigots, racists and hate-mongers.</div>
            </div>

            <div className='centerlets'>
                <div className="cardlets">
                    <Image src={'/./images/blog.jpg'} width='340' height={'250'} alt='' ></Image>
                    <div className='datfile'>
                        <p>july 15, 2023</p>
                        <p>Search Blocking</p>
                    </div>
                    <div>
                        <h3 className='txtsociallets'>Simple Ways To Optimize Your Website For Mobile</h3>
                        <p className='txtsociallets'>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry...</p>
                    </div>
                    <div className='bottompaddlets'></div>
                </div>
                <div className="cardlets">
                    <Image src={'/./images/blog1.jpg'} width='340' height={'250'} alt='' ></Image>
                    <div className='datfile'>
                        <p>july 15, 2023</p>
                        <p>Search Blocking</p>
                    </div>
                    <div>
                        <h3 className='txtsociallets'>Simple Ways To Optimize Your Website For Mobile</h3>
                        <p className='txtsociallets'>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry...</p>
                    </div>
                    <div className='bottompaddlets'></div>
                </div>

                <div className="cardlets">
                    <Image src={'/./images/blog2.jpg'} width='340' height={'250'} alt='' ></Image>
                    <div className='datfile'>
                        <p>july 15, 2023</p>
                        <p>Search Blocking</p>
                    </div>
                    <div>
                        <h3 className='txtsociallets'>Simple Ways To Optimize Your Website For Mobile</h3>
                        <p className='txtsociallets'>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry...</p>
                    </div>
                    <div className='bottompaddlets'></div>
                </div>
            </div>
        </>
    )
}

export default LatestService