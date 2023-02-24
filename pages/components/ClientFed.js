import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ClientFed = () => {
  return (
    <>
      <div className='fullcli'>
        <div className='tophalfcli'>
          {/* <Image className='imgcli' src={'/./images/testimonial1.jpg'} height={'450'} width={'500'} alt="" /> */}
        </div>
        <div className='btmhalfcli'>
          <div className='towlinecli'>
            <h1 className='getyourcli'>Clients Feedback</h1>
            <p className='cntnowcli'>" Converting Right Now Converting Right Now Converting Right Now
              Converting Right Now Converting Right NowConverting Right Now Converting Right Now"</p>
            <strong className='cliname'>Zubair Shaheen</strong>
            <p className='designat'>Seo & Expert</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ClientFed