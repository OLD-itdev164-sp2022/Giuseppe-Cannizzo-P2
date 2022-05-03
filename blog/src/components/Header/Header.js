import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled, { ThemeConsumer } from 'styled-components'
import { H1 } from "../Heading"
import { Section } from "../Section"
import { Flex } from 'rebass'
import "../Navbar.css"
import { SearchButton } from "../Button"
import { Gamepad } from "@styled-icons/fa-solid"
import { Home } from "@styled-icons/boxicons-regular"
import { MehBlank } from "@styled-icons/boxicons-regular"
import { ContactSupport } from "@styled-icons/material-outlined"

const Outer = styled.header`
  background: ${({ theme }) => theme.variants.header.primary.backgroundColor};
  margin-bottom: 1.45rem;
`

const Inner = styled.div`
  margin: 0px;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const StyledLink = styled(Link)`
  color: white;
  font-size: 20px;
  text-decoration: none;
  &:hover {
     background-image: url('https://scottyzen.sirv.com/Images/v/button.png');
        background-size: 100% 100%;
        color: #27262c;
        animation: spring 300ms ease-out;
        text-shadow: 0 -1px 0 #ef816c;
        font-weight: bold;
  }
  &:active {
    transform: translateY(4px);
  }
  margin: 0 15px;
}
`

const Image = styled.img`
  margin: 0;
`

const Nav = styled(Flex)`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const Title = styled(H1)`
  flex: 4;
`

const MediaQuery = styled.div`
  @media (max-width: 450px) {
    display: none;
  }
`

const Header = ({ siteTitle }) => (
  <Outer>
    <Inner>
      <Section flex>
        <Section
          width={1 / 12}
          flex
          flexDirection="column"
          justifyContent="center"
        >
          <ThemeConsumer>
            {theme => <Gamepad size="55" color="red"/>}
          </ThemeConsumer>
        </Section>
        <Section
          width={11 / 12}
          flex
          flexDirection="column"
          justifyContent="center"
        >
          <Nav>
            <Title>
              <StyledLink to="/">{siteTitle}</StyledLink>
            </Title>
            <MediaQuery class = "nav">
                <StyledLink to="/"> <Home size="55" color="red"/> Home</StyledLink>
                <StyledLink to="/about"> <MehBlank size="55" color="red"/> About</StyledLink>
                <StyledLink to="/contact"> <ContactSupport size="55" color="red"/> Contact</StyledLink>
            </MediaQuery>
            <SearchButton variant="contrast" />
          </Nav>
        </Section>
      </Section>
    </Inner>
  </Outer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export { Header } 