import { graphql, useStaticQuery } from 'gatsby';
import { Favicon } from '../types';

type QueryResponse = {
  contentfulwebsiteInfo: {
    siteTitle: string
    siteDescription: string
    icon: {
      favicon16: Favicon
      favicon32: Favicon
      bigIcon: Favicon
      appleIcon: Favicon
    }
  }
}

export const useHelmetQuery = () => {
  const { contentfulwebsiteInfo } = useStaticQuery<QueryResponse>(graphql`
    query HelmetQuery {
      contentfulwebsiteInfo {
        siteTitle
        siteDescription
        icon {
          favicon16: resize(width: 16) {
            src
          }
          favicon32: resize(width: 32) {
            src
          }
          bigIcon: resize(width: 192) {
            src
          }
          appleIcon: resize(width: 180) {
            src
          }
        }
      }
    }
  `)

  return contentfulwebsiteInfo
}
