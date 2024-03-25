import WelcomeToNest from './WelcomeToNest'
import { css } from '../../../styled-system/css'
import { aboutCont } from '../../style/pages/about/about'

const About = () => {
  return (
    <main className={css(aboutCont)}>
        <WelcomeToNest/>
    </main>
  )
}

export default About