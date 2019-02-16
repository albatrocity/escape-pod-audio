import React, { Component } from "react";
import LogoType from "./LogoType";
import Helmet from "react-helmet";
import styled from "styled-components";
import { StaticQuery, graphql, Link } from "gatsby";
import AudioPlayer from "./AudioPlayer";
import { connect } from "react-redux";
import audioSetPlaying from "../state/actions/audioSetPlaying";
import audioPlayFile from "../state/actions/audioPlayFile";
import StarBg from "../star_bg.svg";
import WidthConstrainer from "./WidthConstrainer";

const Container = styled.div`
  background: #fff;
  height: 100%;
  width: 100%;
`;

const Header = styled.div`
  background: url(${StarBg}) repeat;
  background-size: 500px;
  background-attachment: fixed;
  padding: 0.1em;
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
            <Header>
              <WidthConstrainer>
                <Link to="/">
                  <LogoType
                    style={{
                      maxWidth: "400px",
                      margin: "0 auto",
                      display: "block"
                    }}
                  />
                </Link>
              </WidthConstrainer>
            </Header>
            <section>{children}</section>
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
