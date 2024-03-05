import Hero from './Hero'
import { css } from '../../../styled-system/css'
import PopularProduct from './PopularProduct'

const Home = () => {
  return (
    <main className={css({boxSizing: 'border-box', w: '100%'})}>
        <Hero/>
        <PopularProduct/>
    </main>
  )
}

export default Home