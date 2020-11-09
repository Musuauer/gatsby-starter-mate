import React from 'react';
import { Box, Image, Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Fade } from 'react-awesome-reveal';
import Section from '../components/Section';
import markdownRenderer from '../components/MarkdownRenderer';
import { useAboutMeQuery } from '../queries/useAboutQuery';

const About = () => {
  const { bio, name } = useAboutMeQuery();

  return (
    <Section.Container id="about">
      <Section.Header name="About me" icon="🙋‍♂️" label="person" />
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]} mt={2}>
          <Fade direction="down" triggerOnce>
            <ReactMarkdown source={bio} renderers={markdownRenderer} />
          </Fade>
        </Box>

        {/* <Box
          width={[1, 1, 2 / 6]}
          style={{ maxWidth: '300px', margin: 'auto' }}
        >
          <Fade direction="right" triggerOnce>
            <ProfilePicture mt={[4, 4, 0]} ml={[0, 0, 1]} {...profile} />
          </Fade>
        </Box> */}
      </Flex>
    </Section.Container>
  );
};

// const ProfilePicture = styled(Image)`
//   border-radius: 50%;
//   transition: all 0.4s ease-out;

//   &:hover {
//     border-radius: 20%;
//   }
// `

export default About
