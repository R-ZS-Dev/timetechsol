import Image from 'next/image'
import React from 'react'
import style from '@/styles/ClientFed.module.css'

const ClientFed = () => {
  return (
    <>
      <div className={style.fullcli}>
        <div className={style.tophalfcli}>
          <Image className={style.imgcli} src={'/images/testimonial1.jpg'} height={'450'} width={'500'} alt="image" />
        </div>
        <div className={style.btmhalfcli}>
          <div className={style.towlinecli}>
            <h1 className={style.getyourcli}>Clients Feedback</h1>
            <p className={style.cntnowcli}>" Converting Right Now Converting Right Now Converting Right Now
              Converting Right Now Converting Right NowConverting Right Now Converting Right Now"</p>
            <strong className={style.cliname}>Zubair Shaheen</strong>
            <p className={style.designat}>Seo & Expert</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ClientFed