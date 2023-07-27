'use client'

import AboutPage from '@/components/pages/about'
import HomePage from '@/components/pages/homePage'
import OurCampaignsPage from '@/components/pages/ourCampaigns'
import OurFilms from '@/components/pages/ourFilms'
import OurGamePage from '@/components/pages/ourGame'
import OurServices from '@/components/pages/ourServices'
import OurWebsite from '@/components/pages/ourWebsite'
import Footer from '@/container/footer/Footer'

export default function Home() {
  return (
    <div>
      <HomePage />
      <AboutPage />
      <OurServices />
      <OurGamePage />
      <OurWebsite />
      <OurCampaignsPage />
      <OurFilms />
      <Footer />
    </div>
  )
}
