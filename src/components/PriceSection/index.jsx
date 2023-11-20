import React from "react";
import {
  PriceCardContainer,
  PriceCard,
  Benefits,
  Price,
  Title,
  Btn,
  Badge
} from "./style";
import Cards from "../../Data/PriceCards.json";
import { FaCheck } from "react-icons/fa6";

const PriceSection = () => {
  return (
    <div>
      <h2 className="Heading" >Service Rates and Packages</h2>
      <PriceCardContainer>
        {Cards.map((Card) => {
          return (
            <PriceCard key={Card.id} $recommended={Card.recommended}>
            {Card.recommended && <Badge>Most Popular</Badge>}
            <div>
              <Title>{Card.title}</Title>
              <Price>
                ₹{Card.price}
                <span>/{Card.duration}</span>
              </Price>
              <div>
                {Card.benefits.map((benefit, index) => (
                  <Benefits key={index}>
                    <div>
                      <FaCheck color="#45FFCA" size={14} />{" "}
                    </div>
                    <div>{benefit}</div>
                  </Benefits>
                ))}
                </div>
              </div>
              <Btn>Book Your Demo</Btn>
            </PriceCard>
          );
        })}
      </PriceCardContainer>
    </div>
  );
};

export default PriceSection;
