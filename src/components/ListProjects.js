import React from "react";
import styled from "styled-components";
import ListItemProject from "./ListItemProject";

const findImage = (project, images) => {
  const projectDir = project.node.relativeDirectory;
  const image = images.edges.find(
    e => e.node.relativeDirectory === projectDir && e.node.image
  );
  return image && image.node.image;
};

const List = styled.div``;

export default ({ projects, images }) => (
  <List>
    {projects.map(x => (
      <ListItemProject
        key={x.node.id}
        data={x.node.markdown}
        image={findImage(x, images)}
      />
    ))}
  </List>
);
