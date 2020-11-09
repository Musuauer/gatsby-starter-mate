import { graphql, useStaticQuery } from 'gatsby';
import { Project } from '../types';

export type QueryResponse = {
  allcontentfulProject: {
    projects: {
      id: string;
      title: string;
      description: string;
      order: number;
      label: string;
      slug: string;
      images: any;
      thumbnail: any;

    }[];
  };
};

export const useProjectsQuery = (): Project[] => {
  const { allcontentfulProject } = useStaticQuery<QueryResponse>(graphql`
    query ProjectsQuery {
      allcontentfulProject {
        projects {
          id
          title
          description
          order
          label
          slug
          images {
            id
           localFile {
              childImageSharp {
               fluid(maxWidth: 960, quality: 85) {
                ...GatsbyImageSharpFluid_withWebp
                }
             }
            }
          }
          thumbnail {
            id
            localFile {
               childImageSharp {
                fluid(maxWidth: 960, quality: 85) {
                 ...GatsbyImageSharpFluid_withWebp
                 }
              }
             }
          }

        }
      }
    }
  `);

  return allcontentfulProject.projects.map( project => project )
};
