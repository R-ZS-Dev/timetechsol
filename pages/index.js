import MainNav from './components/MainNav'
import MainSlider from './components/MainSlider'
import OurServices from './components/OurServices'
import SubscribeSeo from './components/SubscribeSeo'
import WebMarketing from './components/WebMarketing'
import Head from 'next/head'
import Portfolio from './components/Portfolio'
import MeetExpertTeam from './components/MeetExpertTeam'
import AboutUs from './components/AboutUs'
import PricePlan from './components/PricePlan'
import ClientFed from './components/ClientFed'
import LatestBlogs from './components/LatestBlogs'
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
      < OurServices />
      < SubscribeSeo />      
      < WebMarketing />
      < Portfolio />
      < MeetExpertTeam />
      < AboutUs />
      < PricePlan />
      < ClientFed />
      < LatestBlogs />
      < BrandBar />
      < Footer />
    </div>
    </>
  )
}

export default index