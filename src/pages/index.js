import * as React from "react";
import { graphql } from "gatsby";
import Thumbnail from "../components/core/blog/thumbnail";
import Excerpt from "../components/core/blog/excerpt";
import BlogPreview from "../components/core/blog/blog-preview";

const IndexPage = () => {
  return (
    <>
      <title>My Workshop Blog</title>
      <h1>My Workshop Blog</h1>
      <h3>This blog was created as a part of a workshop with Repairify</h3>
      {/* Map the blogposts to a preview and link element */}
    </>
  );
};

export default IndexPage;

// Query all blog posts
