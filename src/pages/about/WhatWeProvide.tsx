import React from 'react'
import WhatWeProvideCard from '../../components/about/WhatWeProvideCard'
import { whatWeProvide } from '../../data/about'
import { css } from '../../../styled-system/css'
import { whatWeProvideCont } from '../../style/pages/about/whatWeProvide'
import { flex } from '../../style/recipe/flex'

const WhatWeProvide = () => {
  return (
    <section className={css(whatWeProvideCont)}>
        <h3>What We Provide?</h3>
        
        <div className={css(flex.raw({gap: 'xlg', type: 'spaceAround', wrap: 'yes'}))}>
          {whatWeProvide.map((data, index) => (<WhatWeProvideCard key={index} {...data}/>))}
        </div>
    </section>
  )
}

export default WhatWeProvide