import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import ScaledImage from "./ScaledImage";
import Button from "./Button";
import styled from "styled-components";
import audioSetPlaying from "../state/actions/audioSetPlaying";
import audioPlayFile from "../state/actions/audioPlayFile";

const Container = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-basis: 200px;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px dashed rgba(41, 33, 89, 0.4);

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
const Title = styled.div`
  h3 {
    margin-bottom: 0;
    margin-top: 0.8rem;
  }
  cite {
    color: rgba(41, 33, 89, 0.5);
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;
const Art = styled.div`
  width: 200px;
  flex-shrink: 0;
`;
const Details = styled.div`
  flex-grow: 1;
  padding: 0 0 0 1rem;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

class ListItemProject extends Component {
  render() {
    const { data, image, isPlaying, audioUrl, audioPlayFile, audioSetPlaying } =
      this.props;
    const isCurrentTrack = data && audioUrl === data.frontmatter.audioUrl;

    const handlePlay = () =>
      isCurrentTrack
        ? audioSetPlaying(!isPlaying)
        : audioPlayFile({
            url: data.frontmatter.audioUrl,
            title: data.frontmatter.audioTitle,
            artist: data.frontmatter.client,
          });

    return (
      <Fragment>
        {data && (
          <Container>
            <Art>
              {image && (
                <ScaledImage
                  borderColor="#fff"
                  src={image.resize.src}
                  size={image.resize.width}
                  alt={`${data.frontmatter.title} by ${data.frontmatter.client}`}
                />
              )}
              {data.frontmatter.audioUrl && (
                <div style={{ padding: "0.6rem 0" }}>
                  <Button block onClick={handlePlay}>
                    {isCurrentTrack
                      ? isPlaying
                        ? `Pause`
                        : `Play "${data.frontmatter.audioTitle}"`
                      : `Play "${data.frontmatter.audioTitle}"`}
                  </Button>
                </div>
              )}
            </Art>
            <Details>
              <Title>
                <h3>{data.frontmatter.title}</h3>
                <p>
                  {data.frontmatter.client}
                  <br />
                  <cite>Released {data.frontmatter.date}</cite>
                </p>
              </Title>
              <div dangerouslySetInnerHTML={{ __html: data.html }} />
              <Actions>
                <a
                  href={data.frontmatter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check out the release
                </a>
              </Actions>
            </Details>
          </Container>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ isPlaying, audioUrl }) => ({
  isPlaying,
  audioUrl,
});

export default connect(mapStateToProps, { audioPlayFile, audioSetPlaying })(
  ListItemProject
);
