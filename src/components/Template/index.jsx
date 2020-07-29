import React from 'react'
import styled from 'styled-components'

import Menu from '../Menu'
import Footer from '../Footer'

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
` 

const Template = (props) => {
  return (
    <React.Fragment>
      <Menu />

      <Main>
        { props.children }
      </Main>

      <Footer />
    </React.Fragment>
  )
}

export default Template