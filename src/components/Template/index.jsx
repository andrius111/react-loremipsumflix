import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
  ${({ paddingAll }) => paddingAll >= 0 && css`
    padding: ${paddingAll};
  `}
`;

const Template = ({ children, paddingAll }) => (
  <>
    <Menu />

    <Main paddingAll={paddingAll}>
      { children }
    </Main>

    <Footer />
  </>
);

Template.defaultProps = {
  paddingAll: -1,
};

Template.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
  paddingAll: PropTypes.number,
};

export default Template;
