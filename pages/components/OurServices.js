import React, { useState } from 'react'
import style from '@/styles/OurServices.module.css'
import OurServicesTile from '../tiles/OurServicesTile'

const OurServices = () => {
    const imageBasePath = "/images/services/";
    const [ourservices, setourservices] = useState([
        {
            name: "Website Development",
            image: imageBasePath+"web.png",
            detail: "Our web development team with over decades of experience have aim to create simple and easy to use website that will help you win more business."
        },
        {
            name: "App Development",
            image: imageBasePath+"mobile.png",
            detail: "Using solid experience in mobile apps development, We can assist you produce seamless experiences on any device and find the simplest of mobile technology for your business."
        },
        {
            name: "Desktop Application",
            image: imageBasePath+"desktop.png",
            detail: "Our developers have a deep understandings and knowledge of most modern technologies. We have developed modern cross-platform server and desktop applications for a variety of client accross the globe."
        },
        {
            name: "Search Engine Optimization",
            image: imageBasePath+"seo.png",
            detail: "Search Engine Optimization(SEO) is most important part in online business. Our team have prominent experience in website ranking and keyword optimization to help rank your site."
        },
        {
            name: "Logo & Branding",
            image: imageBasePath+"logo.png",
            detail: "Starting a new Business required a unnique brand identity. Our Graphic designer have experience in designing a unique concepts for your business"
        },
        {
            name: "Social Media Marketing",
            image: imageBasePath+"social-media.png",
            detail: "Our Social media team help you to connect with your audience to build your brand, increase sales, and drive website traffic via social media."
        }

    ]);
    return (
        <section id="services">
            <div className={style.ourser}>
                <h1 className={style.mcent}>Our SEO Services</h1>
                <div className={style.txtcen}>Our users are impatient. They're probably distracted too. Keep it simple and
                    beautiful, fun and functional. Clean</div>
                <div className={style.txtcen}>aesthetics supported by a strong concept is what we stand for.</div>
            </div>
            <div className={style.center}>
                {ourservices.map((s, i) => (
                    <OurServicesTile key={i} name={s.name} image={s.image} detail={s.detail} />
                ))}
            </div>
        </section>
    )
}

export default OurServices