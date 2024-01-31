import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

// Thumbnail displayed next to blog post information on the blog page
const Thumbnail = styled(GatsbyImage)`
  /* Set a fixed size, margin for spacing */

  /* Scale with smaller screens */
`;

export default Thumbnail;
