import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Section from '../components/Section';
import { CardContainer } from '../components/Card';
import Project from '../components/Project';
import { useProjectsQuery } from '../queries/useProjectsQuery';

const Projects = () => {
  const projects = useProjectsQuery();

  return (
    <Section.Container id="projects" >
      <Section.Header name="Projects" icon="💻" label="notebook" />

      <CardContainer minWidth="350px">
        <Fade direction="down" cascade damping={0.5} triggerOnce>
          {projects.map((p, i) => (
            <Project {...p} key={i} />
          ))}
        </Fade>
      </CardContainer>
    </Section.Container>
  );
};

export default Projects;
