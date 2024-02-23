import { css } from '../../styled-system/css'

type FooterInfoProps = {
    text: string
    list: string[]
}

const FooterInfo = ({text, list}: FooterInfoProps) => {
  return (
    <section className={css({textAlign: ['center', 'center', 'left']})}>
          <h3 className={css({fontFamily: 'quicksand', fontSize: '1.5rem', fontWeight: 'bold', mb: '1rem'})}>{text}</h3>
          <nav>
            <ul>
              {list.map((data, index) => (
                <li key={index} className={css({mb: '.6rem', fontSize: '.9rem'})}>{data}</li>
              ))}
            </ul>
          </nav>
        </section>
  )
}

export default FooterInfo