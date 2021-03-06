import styled from "styled-components";

const GridLayout = styled.div`
  height: 100vh;

  display: grid;
  grid-template-areas:
    "head head head"
    "search search search"
    "main main main";

  @media (max-width: 768px) {
    grid-template-areas:
      "head"
      "search"
      "main";
  }
  @media (min-width: 769px) {
    margin-left: 60px;
  }
`;

export default GridLayout;
