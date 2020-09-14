import React from 'react';
import {
  Box, Heading, Stack, ResponsiveContext,
} from 'grommet';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Img from 'gatsby-image';

const Image = styled(Img)`
  img {
    position: static;
  }
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;
const ImageStyle = {
  objectFit: 'contain',
  objectPosition: 'left top',
};

const Overlay = styled(Box)`
  opacity: ${(props) => props.overlayOpacity};
`;

const Underlay = styled(Box)`
  opacity: 0.5;
`;

const About = (props) => {
  const { about, photo } = useStaticQuery(graphql`
    {
      about: contentfulRichText(name: { eq: "who-am-i" }) {
        text {
          json
        }
      }
      photo: contentfulPhoto(contentfulid: { eq: "who-am-i-photo" }) {
        id
        file {
          fixed {
            base64
            tracedSVG
            aspectRatio
            srcWebp
            srcSetWebp
          }
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  `);

  const size = React.useContext(ResponsiveContext);

  const [overlayOpacity, setOverlayOpacity] = React.useState('0.3');
  const mouseOver = (opacity) => {
    setOverlayOpacity(opacity);
  };

  const imgHeight = size === 'xsmall' || size === 'small' ? '250px' : '400px';
  const imgWidth = size === 'xsmall' || size === 'small' ? '200px' : '300px';
  const flexDirection = size === 'xsmall' || size === 'small' ? 'column' : 'row';
  const paragraphWidth = size === 'xsmall' || size === 'small' ? '100%' : '60%';
  const photoMargin = size === 'xsmall' || size === 'small' ? 'large' : 'medium';

  return (
    <section id="about">
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box pad={{ bottom: '150px' }}>
            <Heading>Who am I?</Heading>
            <Box direction={flexDirection} justify="between" align="center">
              <Box direction="column" width={paragraphWidth}>
                {documentToReactComponents(about.text.json)}
              </Box>
              <Stack anchor="bottom-left">
                <Underlay
                  height={imgHeight}
                  width={imgWidth}
                  margin={photoMargin}
                  background="dark-2"
                />
                <Stack anchor="center">
                  <Image
                    fluid={photo.file.fluid}
                    imgStyle={ImageStyle}
                    height={imgHeight}
                    width={imgWidth}
                  />
                  <Overlay
                    background="accent-2"
                    height={imgHeight}
                    width={imgWidth}
                    overlayOpacity={overlayOpacity}
                    onMouseOver={() => mouseOver('0')}
                    onMouseLeave={() => mouseOver('0.3')}
                  />
                </Stack>
              </Stack>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </section>
  );
};

export default About;
