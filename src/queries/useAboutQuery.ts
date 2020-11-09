import { graphql, useStaticQuery } from 'gatsby';

export type QueryResponse = {
  contentfulAbout: {
    bio: {
      childMarkdownRemark: {
        rawMarkdownBody: string;
      };
    };
    name: string;
  };
};

export const useAboutMeQuery = () => {
  const {
    contentfulAbout: { bio, name },
  } = useStaticQuery<QueryResponse>(graphql`
    query AboutMeQuery {
      contentfulAbout {
        bio {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
        name
      }
    }
  `);

  return {
    bio: bio.childMarkdownRemark.rawMarkdownBody,
    name: name,
  };
};
