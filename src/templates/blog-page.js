import { MDXProvider } from "@mdx-js/react";
import { graphql } from "gatsby";
import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Spacer from "../components/core/spacer";
import ContentStyle from "../components/core/blog-post/content-style";

export default function BlogPage({ data, children }) {
  // Get the frontmatter (metadata) of the blog post
  const { title, date, image } = data.mdx.frontmatter;

  return (
    <>
      <title>{title}</title>
      <p>Placeholder text!</p>
    </>
  );
}

// Query only the current blog post
