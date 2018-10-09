import React from "react";
import styled from "styled-components";
import GridItemProject from "./GridItemProject";

const findImage = (project, images) => {
  const projectDir = project.node.relativeDirectory;
  const image = images.edges.find(
    e => e.node.relativeDirectory === projectDir && e.node.image
  );
  return image && image.node.image;
};

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  flex-basis: 200px;
`;

export default ({ projects, images }) => (
  <Grid>
    {projects.map(x => (
      <GridItemProject
        key={x.node.id}
        data={x.node.markdown}
        image={findImage(x, images)}
      />
    ))}
  </Grid>
);
