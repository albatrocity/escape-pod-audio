import React, { Component } from "react";
import LogoType from "./LogoType";
import Helmet from "react-helmet";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import AudioPlayer from "./AudioPlayer";
import { connect } from "react-redux";
import audioSetPlaying from "../state/actions/audioSetPlaying";
import audioPlayFile from "../state/actions/audioPlayFile";

const Container = styled.div`
  background: #fff;
  height: 100%;
  width: 100%;
  padding-bottom: 100px;
`;

class Layout extends Component {
  render() {
    const {
      isPlaying,
      audioUrl,
      audioTitle,
      audioArtist,
      children,
      audioSetPlaying,
      audioPlayFile
    } = this.props;

    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <Container>
            <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
              <Helmet
                defaultTitle={`Escape Pod Audio`}
                titleTemplate={`%s | GatsbyJS`}
              >
                <meta name="og:type" content="website" />
                <meta name="og:site_name" content="Escape Pod Audio" />
                <html lang="en" />
              </Helmet>
              <header>
                <LogoType
                  style={{
                    maxWidth: "400px",
                    margin: "0 auto",
                    display: "block"
                  }}
                />
              </header>
              {children}
            </div>
            <AudioPlayer
              isPlaying={isPlaying}
              audioTitle={audioTitle}
              audioUrl={audioUrl}
              audioArtist={audioArtist}
              handlePlayFile={audioPlayFile}
              handlePlayPause={audioSetPlaying}
            />
          </Container>
        )}
      />
    );
  }
}

const mapStateToProps = ({ isPlaying, audioTitle, audioUrl, audioArtist }) => ({
  isPlaying,
  audioTitle,
  audioUrl,
  audioArtist
});

export default connect(
  mapStateToProps,
  { audioSetPlaying, audioPlayFile }
)(Layout);
