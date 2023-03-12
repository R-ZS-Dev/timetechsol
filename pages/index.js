import MainNav from './components/MainNav'
import MainSlider from './components/MainSlider'
import OurServices from './components/OurServices'
import SubscribeSeo from './components/SubscribeSeo'
import WebMarketing from './components/WebMarketing'
import Head from 'next/head'
import RecentCase from './components/RecentCase'
import MeetExpert from './components/MeetExpert'
import SiteOptimiz from './components/SiteOptimiz'
import PricePlan from './components/PricePlan'
import ClientFed from './components/ClientFed'
import LatestService from './components/LatestService'
import BrandBar from './components/BrandBar'
import Footer from './components/Footer'
// import PracticeModule from './components/PracticeModule'

const index = () => {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <title>TimeTechSol</title>
    </Head>
    <div>
      < MainNav />
      < MainSlider />
      < SubscribeSeo />
      < OurServices />
      < WebMarketing />
      < RecentCase />
      < MeetExpert />
      < SiteOptimiz />
      < PricePlan />
      < ClientFed />
      < LatestService />
      < BrandBar />
      < Footer />
    </div>
    </>
  )
}

export default index