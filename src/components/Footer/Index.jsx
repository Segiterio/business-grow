import React, { useState } from "react";
import FooterData from "../../Data/footer.json";
import {
  FaInstagram,
  FaSquareFacebook,
  FaSquareTwitter,
} from "react-icons/fa6";
import {
  FooterContainer,
  NewsLetterContainer,
  SubscribeBtn,
  Input,
  Form,
  LetterDescription,
  ContactInformation,
  Heading,
  SubHeading,
  QuickLink,
  LinkContainer,
  FooterLinksContainer,
  SocialLink,
  LegalInformation
} from "./Style";

const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <FooterContainer>
      <div className="container">
        <NewsLetterContainer>
          <Heading>{FooterData.newsletter.heading}</Heading>
          <LetterDescription>
            {FooterData.newsletter.description}
          </LetterDescription>

          <Form>
            <Input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder={FooterData.newsletter.form.placeholder}
              onChange={(e) => setEmail(e.target.value)}
            />
            <SubscribeBtn>
              {FooterData.newsletter.form.button_text}
            </SubscribeBtn>
          </Form>
        </NewsLetterContainer>
        <ContactInformation>
          <Heading>Company</Heading>
          <SubHeading $align={"center"}>
            {FooterData.contact.address}
          </SubHeading>
          <SubHeading $align={"center"}>{FooterData.contact.email}</SubHeading>
          <SubHeading $align={"center"}>{FooterData.contact.phone}</SubHeading>
        </ContactInformation>
      </div>

      <FooterLinksContainer>
        <div className="container">
          <LegalInformation>
            <p>Privacy Policy</p>
            <p>Copyright: <code>© 2023 Your Company. All Rights Reserved.</code></p>
          </LegalInformation>

          <div>
            <SubHeading $border $align={"start"}>
              {FooterData.quick_links.heading}
            </SubHeading>
            <LinkContainer>
              {FooterData.quick_links.links.map((link, ind) => (
                <QuickLink key={ind}>{link.text}</QuickLink>
              ))}
            </LinkContainer>
          </div>

          <div>
            <SubHeading $border $align={"start"}>
              {FooterData.social_media.heading}
            </SubHeading>
            <LinkContainer>
              <SocialLink>
                <FaInstagram />
                <QuickLink>Instagram</QuickLink>
              </SocialLink>
              <SocialLink>
                <FaSquareFacebook />
                <QuickLink>Facebook</QuickLink>
              </SocialLink>
              <SocialLink>
                <FaSquareTwitter />
                <QuickLink>Twitter</QuickLink>
              </SocialLink>
            </LinkContainer>
          </div>

          <div>
            <SubHeading $border $align={"start"}>
              {FooterData.services.heading}
            </SubHeading>
            <LinkContainer>
              {FooterData.services.list.map((list, ind) => (
                <QuickLink key={ind}>{list.text}</QuickLink>
              ))}
            </LinkContainer>
          </div>
        </div>
      </FooterLinksContainer>
    </FooterContainer>
  );
};

export default Footer;
