import React from "react";
import ReactHowler from "react-howler";
import { Link } from "gatsby";
import styled from "styled-components";
import IconPause from "./IconPause";
import IconPlay from "./IconPlay";

const Container = styled.div`
  background: #ffcd00;
  width: 100%;
  padding: 0.3rem 0.4rem;
  position: fixed;
  bottom: 0;
  display: ${p => (p.audioUrl ? "flex" : "none")};
  align-items: center;
`;

const Info = styled.span`
  font-size: 1rem;
  font-family: "Maven Pro";
  flex-grow: 1;
`;

const Controls = styled.div`
  display: flex;
  padding-right: 0.4rem;
`;

const Button = styled.div`
  display: inline-block;
  cursor: pointer;
  width: 20px;
  height: 20px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export default ({
  isPlaying,
  audioTitle,
  audioArtist,
  audioUrl,
  handlePlayPause
}) => (
  <Container audioUrl={audioUrl}>
    <Controls>
      {isPlaying ? (
        <Button>
          <IconPause onClick={() => handlePlayPause(false)} />
        </Button>
      ) : (
        <Button>
          <IconPlay onClick={() => handlePlayPause(true)} />
        </Button>
      )}
    </Controls>
    <Info>
      {audioTitle} - {audioArtist}
    </Info>
    {audioUrl && <ReactHowler src={audioUrl} playing={isPlaying} />}
  </Container>
);
