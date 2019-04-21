import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <HeaderContainer>
      <SiteHeading>
        <Link to="/">{siteTitle}</Link>
      </SiteHeading>
    </HeaderContainer>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

const StyledHeader = styled.header`
  background: #1d1821;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`;

const SiteHeading = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 4rem;

  a {
    color: #f6f6f6;
    text-decoration: none;
  }
`;

export default Header;
