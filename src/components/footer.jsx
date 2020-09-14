import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import {
  Box, Footer as GrommetFooter, Anchor, Text, ResponsiveContext,
} from 'grommet';
import {
  Instagram, Twitter, Github, Linkedin,
} from 'grommet-icons';
import PropTypes from 'prop-types';

const Footer = ({ background }) => {
  const size = React.useContext(ResponsiveContext);
  const flexDirection = size === 'xsmall' || size === 'small' ? 'column' : 'row';
  const textAlign = size === 'xsmall' || size === 'small' ? 'center' : 'start';
  const bottomMarginText = size === 'xsmall' || size === 'small' ? 'medium' : 'none';
  const navWidth = size === 'xsmall' || size === 'small' ? '100%' : '15%';

  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <GrommetFooter background={background} margin={{ top: 'xlarge' }}>
          <Box direction={flexDirection} justify="between" width="100%">
            <Text textAlign={textAlign} margin={{ bottom: bottomMarginText }}>
              Designed &amp; built by Lindsay Bloom
              {' '}
            </Text>
            <Box direction="row" justify="between" width={navWidth}>
              <Anchor href="https://www.instagram.com/lindsaybloom/">
                <Instagram color="accent-2" />
              </Anchor>
              <Anchor href="https://www.twitter.com/lbloom97/">
                <Twitter color="accent-2" />
              </Anchor>
              <Anchor href="https://www.github.com/lindsaybloom/">
                <Github color="accent-2" />
              </Anchor>
              <Anchor href="https://www.linkedin.com/in/lindsay-bloom/">
                <Linkedin color="accent-2" />
              </Anchor>
            </Box>
          </Box>
        </GrommetFooter>
      )}
    </ResponsiveContext.Consumer>
  );
};

Footer.propTypes = {
  background: PropTypes.string,
};

export default Footer;
