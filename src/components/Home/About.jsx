import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow">Shashank Gupta </span>
                 and I'm from <span className="yellow"> INDIA.</span>
                <br />
                <br />
                I'm a <span className="yellow">Backend Engineering intern</span> at <span className="yellow">TickerTape(SmallCase)</span> and <span className="yellow">Final-Year undergraduated </span> pursuing my Bachelor's degree in <span className="yellow">Information Technology </span>.
                <br />
                <br />
                I love <span className="yellow">solving problems </span>that involve complex real-world scenarios, hence interested in 
                <span className="yellow">algorithms and data structures </span> and actively participated in various coding competitions across multiple platforms and have earned various achievements.
                  <br />
                  <br />I have an experience with <span className="yellow">WEB Development</span> with technologies - <span className="yellow">HTML, CSS, Javascript, NodeJs, Expressjs, MongoDB, Reactjs,Rest Api</span> and made a couple of projects in the same.
                  <br />
                  <br />
                  I am a dedicated and driven individual known for my <span className="yellow">consistent approach and ability to adapt and learn quickly</span>, I am highly motivated to work with an organization that allows me to work on <span className="yellow"> complex problems</span>, and helps me define new boundaries for myself.
                  <br />
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/theShashankGupta"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://twitter.com/cd_Shashank"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="twitter"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/shashank-gupta-a91035218/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
              
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About
