import React from 'react'
import Layout from '../../layout/Layout'
import IntroSection from './componentsHome/introSection/IntroSection'
import SomeFuturesSection from './componentsHome/someFutures/SomeFuturesSection'
import LastNewsSection from './componentsHome/lastNews/LastNewsSection'
import DummySection from './componentsHome/dummySection/DummySection'

const Home = () => {
  return (
    <Layout>
        <IntroSection/>
        <DummySection/>
        <SomeFuturesSection/>
        <LastNewsSection/>
    </Layout>
  )
}

export default Home