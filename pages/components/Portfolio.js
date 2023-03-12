import style from "@/styles/Portfolio.module.css"
import PortfolioTile from "@/pages/tiles/PortfolioTiles"
import { useState } from "react"

const Portfolio = () => {
    const imageBasePath = "/images/portfolio/";
    const [portfolio, setportfolio] = useState([
        {
            name: "Binance",
            image: imageBasePath + "binance.png",
            link: "https://live.recoveredwallets.com/",
            detail: ""
        },
        {
            name: "Fs Publishers",
            image: imageBasePath + "fspublishers.png",
            link: "http://www.fspublishers.org/",
            detail: ""
        },
        {
            name: "JGIASS",
            image: imageBasePath + "jgiass.png",
            link: "https://jgiass.com/",
            detail: ""
        },
        {
            name: "JSSFN",
            image: imageBasePath + "jssfn.png",
            link: "https://jssfn.com/",
            detail: ""
        },
        {
            name: "Kitchen Management",
            image: imageBasePath + "kitchen.png",
            link: "http://kitichen.rosebuds.pk/",
            detail: ""
        },
        {
            name: "Loan System",
            image: imageBasePath + "loan.png",
            link: "http://loan.timetechsol.com/",
            detail: ""
        },
        {
            name: "Multiple Journals",
            image: imageBasePath + "multi-journal.png",
            link: "https://societyfia.org/journal/PDC",
            detail: ""
        },
        {
            name: "Pakjass",
            image: imageBasePath + "pakjas.png",
            link: "https://pakjas.com.pk/",
            detail: ""
        },
        {
            name: "PSFST",
            image: imageBasePath + "psfst.png",
            link: "https://psfst.org/",
            detail: ""
        },
        {
            name: "Punt Hub",
            image: imageBasePath + "punthub.png",
            link: "https://www.punthub.com.au",
            detail: ""
        },
        {
            name: "QEC UAF",
            image: imageBasePath + "qecuaf.png",
            link: "https://www.qecuaf.com/",
            detail: ""
        },
        {
            name: "Societyfia",
            image: imageBasePath + "societyfia.png",
            link: "https://societyfia.org/",
            detail: ""
        },
        {
            name: "TimeTechSol",
            image: imageBasePath + "timetechsol.png",
            link: "https://timetechsol.com/",
            detail: ""
        },
    ]);
    return (
        <section id="portfolio">
            <div className={style.body}>
                <div className={style.ourser1}>
                    <h1 className={style.rcentcase1}>Our Impressive Portfolio</h1>
                    <div className={style.txtcen1}>To become an able and successful man in any profession, three things are necessary, nature, three things are</div>
                    <div className={style.txtcen1}>necessary study and practice.</div>
                </div>
                <div className={style.center1}>
                    {portfolio.map((p, i) => (
                        <PortfolioTile key={i} image={p.image} name={p.name} link={p.link} detail={p.detail} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio