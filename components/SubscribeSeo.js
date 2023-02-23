import React from 'react'

const SubscribeSeo = () => {
    return (
    <>
        <div className='subbg'>
            <h1 className='seofirst'>Your WebSite’s SEO Score</h1>
            <div className='seosec'>Provide us with the following information youer website & email and we'll email you</div>
            <div className='seosec'>the SEO score of your website for free</div>
            <div className="overfl">
                <div className="main">
                    <input className='firstinp' type="text" name="" placeholder='Your Web URL...' />
                    <input className='firstinp' type="text" name="" placeholder='Your E-mail Adress...' />
                    <button className="subscribe"><strong>SUBSCRIBE</strong></button>
                </div>
            </div>
        </div>
    </>
    )
}

export default SubscribeSeo