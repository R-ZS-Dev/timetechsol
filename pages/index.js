import MainNav from '@/pages/components/MainNav'
import MainSlider from '@/pages/components/MainSlider'
import OurServices from '@/pages/components/OurServices'
import SubscribeSeo from '@/pages/components/SubscribeSeo'
import WebMarketing from '@/pages/components/WebMarketing'
import Head from 'next/head'
import Portfolio from '@/pages/components/Portfolio'
import MeetExpertTeam from '@/pages/components/MeetExpertTeam'
import AboutUs from '@/pages/components/AboutUs'
import PricePlan from '@/pages/components/PricePlan'
import ClientFed from '@/pages/components/ClientFed'
import LatestBlogs from '@/pages/components/LatestBlogs'
import BrandBar from '@/pages/components/BrandBar'
import Footer from '@/pages/components/Footer'
// import PracticeModule from '@/pages/components/PracticeModule'

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