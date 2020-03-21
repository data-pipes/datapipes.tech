import React from 'react';
import styled from 'styled-components';
import Wrapper from 'src/components/common/Wrapper';

import logo from 'src/static/logo_white.svg';

const FooterWrapper = styled.footer`
  width: 100vw;
  padding: 10px;
  background: ${p => p.theme.dark ? p.theme.secondaryColor : p.theme.gradient};
  
  p {
    font-size: 1rem;
    line-height: 35px;
    color: white;
  }
`

const Footer = () => (
  <FooterWrapper>
    <Wrapper>

      <img width="35px" src={logo} alt="Datapipes" />

      <p style={{ float: 'right' }}>Copyright © 2020 The Datapipes Authors</p>
    </Wrapper>
  </FooterWrapper>
)

export default Footer;