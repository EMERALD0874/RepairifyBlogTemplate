import { createFilePath } from "gatsby-source-filesystem";
import { resolve } from "path";

export function onCreateNode({ node, actions, getNode }) {
  const { createNodeField } = actions;

  // If a file is a Markdown file, add a slug for later use
}

export async function createPages({ graphql, actions }) {
  const { createPage } = actions;

  // Query all Markdown files

  // Import the blog post template which we fill with Markdown data

  // Create a page for every blog post
}
