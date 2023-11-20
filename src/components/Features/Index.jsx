import React from 'react'
import {FeaturesContainer} from "./Style"
import Feature from './Feature';

const Features = () => {
  const arr = [1,2,3,4,5];
  return (
    <div>
        <h2 className='Heading'>Features</h2>
       
       <FeaturesContainer>
           {
             arr.map(i => (<Feature key={i} />))
           }
       </FeaturesContainer>

    </div>
  )
}

export default Features