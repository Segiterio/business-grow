import React from 'react'
import {FeatureWrapper,Icon,Title,Para,LearnMore} from "./FeatureStyle"
import { AiOutlineHtml5 } from "react-icons/ai";

const Feature = () => {
  return (
    <FeatureWrapper>
        <Icon><AiOutlineHtml5 size={30} color='#89CFF3'/></Icon>
        <Title>Lorem, ipsum.</Title>
        <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus numquam hic porro ducimus, et architecto, voluptas omnis quis culpa, minima rem animi nesciunt excepturi.</Para>
        <LearnMore>Learn More</LearnMore>
    </FeatureWrapper>
  )
}

export default Feature