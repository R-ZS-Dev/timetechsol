import React, { useState } from 'react'
import style from '@/styles/MeetExpertTeam.module.css'
import MeetExpertTeamTile from '../tiles/MeetExpertTeamTile'

const MeetExpertTeam = () => {
    const imageBasePath = "/images/team/";
    const [ourTeam, setourTeam] = useState([
        {
            name: "M. Imran Iqbal",
            image: imageBasePath + "imran.jpg",
            position: "CEO TimeTechSol",
            fbLink: "https://www.facebook.com/imran.iqbal101",
            twLink: "",
            lnLink: "https://www.linkedin.com/in/imran-iqbal-61bb88157/?fbclid=IwAR1BylVeg2VrELnCtW_7_8vzoWU33jA9MxAMY9WIfjTke-d3vKWm63gwJ9U",
            pnLink: "",
        },
        {
            name: "Yasir Mehmood",
            image: imageBasePath + "yasir.jpg",
            position: "Web Programmar",
            fbLink: "https://www.facebook.com/yasirmughal34500",
            twLink: "https://twitter.com/yasirmehmood345",
            lnLink: "https://www.linkedin.com/in/yasirmehmood34500/",
            pnLink: "",
        },
        {
            name: "Zubair Shaheen",
            image: imageBasePath + "team.jpg",
            position: "PHP Developer",
            fbLink: "",
            twLink: "",
            lnLink: "",
            pnLink: "",
        },
        {
            name: "M. Hamza",
            image: imageBasePath + "team.jpg",
            position: "React Developer",
            fbLink: "",
            twLink: "",
            lnLink: "",
            pnLink: "",
        },
        {
            name: "M. Shakeel",
            image: imageBasePath + "shakeel.jpg",
            position: "React Native Developer",
            fbLink: "https://www.facebook.com/sadbox50",
            twLink: "https://twitter.com/sadbox50",
            lnLink: "",
            pnLink: "",
        },
        {
            name: "Mubeen Majeed",
            image: imageBasePath + "mubeen.jpg",
            position: "Android Developer",
            fbLink: "https://web.facebook.com/moon.majeed?_rdc=1&_rdr",
            twLink: "",
            lnLink: "https://www.linkedin.com/in/mubeen-majeed-a26b6b150/",
            pnLink: "",

        },
        {
            name: "Inam Ul Haq",
            image: imageBasePath + "inam.jpg",
            position: "Laravel Developer",
            fbLink: "https://www.facebook.com/Mr.inamulhaq",
            twLink: "",
            lnLink: "",
            pnLink: "",

        },
        {
            name: "Faheem Jameel",
            image: imageBasePath + "team.jpg",
            position: "Graphic Designer",
            fbLink: "",
            twLink: "",
            lnLink: "",
            pnLink: "",

        },
        // {
        //     name: "Anjum Muneer",
        //     image: imageBasePath + "anjum.jpg",
        //     position: "React Developer",
        //     fbLink: "",
        //     twLink: "",
        //     lnLink: "",
        //     pnLink: "",

        // },
    ]);
    return (
        <section id="team">
            <div className={style.body}>
                <div className={style.margintp}>
                    <div>
                        <h2 className={style.meetex}>Meet Our Experts Team</h2>
                        <div className={style.txtcens}>Good business leaders create a vision, articulate the vision, passionately own the vision, and relentlessly drive it to and</div>
                        <div className={style.txtcens}>relentlessly drive it to and relentlessly drive it to completion completion and relentlessly drive it to completion</div>
                        <div className={style.txtcens}>completion.</div>
                    </div>
                </div>

                <div className={style.centerrec}>
                    {ourTeam.map((t, i) => (
                        <MeetExpertTeamTile key={i} name={t.name} image={t.image} position={t.position} fbLink={t.fbLink} twLink={t.twLink} lnLink={t.lnLink} pnLink={t.pnLink} />
                    ))}

                </div>
            </div>
        </section>
    )
}

export default MeetExpertTeam