import React from 'react';
import {
  Box, Heading, Anchor, Text,
} from 'grommet';
import styled from 'styled-components';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const Image = styled(Img)`
  img {
    position: static;
  }
  height: 300px;
  width: 500px;
`;

const ImageStyle = {
  objectFit: 'contain',
  objectPosition: 'left top',
};

// const StyledGrid = styled()`
//   margin-top: 50px;
//   .projects {
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//     grid-gap: 15px;
//     position: relative;
//     ${media.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
//   }
// `

const Projects = ({ projects }) => (
  <section id="projects">
    <Heading>Projects</Heading>
    {projects.map((p) => (
      <Box key={p.node.name}>
        <Box direction="row" justify="evenly" align="center">
          {p.node.media ? <Image fluid={p.node.media.fluid} imgStyle={ImageStyle} /> : null}
        </Box>
        <Text size="large" margin={{ left: 'xlarge', top: 'large' }}>
          {p.node.name}
        </Text>
        {p.node.url ? (
          <Anchor size="large" margin={{ left: 'xlarge', top: 'large' }} href={p.node.url}>
            {p.node.url}
          </Anchor>
        ) : null}
      </Box>
    ))}
  </section>
);

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default Projects;
