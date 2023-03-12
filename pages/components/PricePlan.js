import React, { useState } from 'react'
import style from '@/styles/PricePlan.module.css'
import PricePlanTile from '../tiles/PricePlanTile';

const PricePlan = () => {
    const [pricePlan, setpricePlan] = useState([
        {
            name: "Silver",
            price: 29.99,
            packageServices: [
                "Single Page",
                "1 E-mail Address",
                "10 Space Users",
                "15 GB Space",
                "Unlimtied Bandwit",
                "Support Reports",
                "15GB Uploads"
            ]
        },
        {
            name: "GOlden",
            price: 49.99,
            packageServices: [
                "Single Page",
                "1 E-mail Address",
                "10 Space Users",
                "15 GB Space",
                "Unlimtied Bandwit",
                "Support Reports",
                "15GB Uploads"
            ]
        },
        {
            name: "Platinum ",
            price: 89.99,
            packageServices: [
                "Single Page",
                "1 E-mail Address",
                "10 Space Users",
                "15 GB Space",
                "Unlimtied Bandwit",
                "Support Reports",
                "15GB Uploads"
            ]
        }
    ]);
    return (
        <section id="pricing-plan">
            <div className={style.priourser}>
                <h1 className={style.primcent}>Our Pricing Plan</h1>
                <div className={style.pritxtcen}>The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we</div>
                <div className={style.pritxtcen}>have applied the best of ourselves to the task at hand.</div>
            </div>

            <div className={style.centerprc}>
                {pricePlan.map((pp, i) => (
                    <PricePlanTile key={i} name={pp.name} price={pp.price} packageServices={pp.packageServices} />
                ))}
            </div>
        </section>
    )
}

export default PricePlan