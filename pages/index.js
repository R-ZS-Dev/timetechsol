import BrandBar from '@/components/BrandBar'
import ClientFed from '@/components/ClientFed'
import Footer from '@/components/Footer'
import LatestService from '@/components/LatestService'
import MainNav from '@/components/MainNav'
import MainSlider from '@/components/MainSlider'
import MeetExpert from '@/components/MeetExpert'
import OurServices from '@/components/OurServices'
import PricePlan from '@/components/PricePlan'
import RecentCase from '@/components/RecentCase'
import SiteOptimiz from '@/components/SiteOptimiz'
import SubscribeSeo from '@/components/SubscribeSeo'
import WebMarketing from '@/components/WebMarketing'
import Head from 'next/head'

const index = () => {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
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