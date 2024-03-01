import TopNavBar from '../../layouts/TopNav'
import SmallNav from '../../layouts/SmallNav'
import Footer from '../../layouts/Footer'
import Hero from './Hero'
import { css } from '../../../styled-system/css'
import { paddingView } from '../../style/global'
import PopularProduct from './PopularProduct'

const Home = () => {
  return (
    <main className={css({boxSizing: 'border-box', w: '100%'}, paddingView)}>
        <TopNavBar/>
        <SmallNav/>
        <Hero/>
        <PopularProduct/>
        <Footer/>
    </main>
  )
}

export default Home