import React, { Suspense } from "react"
import "./Home.scss"
import developerImage from '../../../src/developer.svg';
import TopNav from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Container, Row, Col, Image, Button, Carousel } from 'react-bootstrap';
import Cards from "../Cards/Cards";


const OtherComponent = React.lazy(() => import('../Main/main'));

function Home() {
  return (
    <div className="homeMain">
      <Container fluid>
        <Row><TopNav /></Row>
        <Row className="justify-content-md-center topRow">
          <Col xs={12} md={6}>
            <div className="align-items-sm-center topContent">
              JavaScript is a scripting language that’s inserted directly in the HTML of a page. It’s the only programming language of this kind that can be understood by web browsers.
              Browsers can read Javascript, interpret it and then run the program, creating powerful client-side experiences.
                </div>
            <div className="btnLearnMore">
              <Button > <i className="fa fa-chevron-right"></i> Find out more </Button>
            </div>
          </Col>
          <Col xs={12} md={6} className="topImage"><Image src={developerImage} /></Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="titleSection"><h2>Javascript Courses</h2></div>
            <hr></hr>
            <Cards />
          </Col>
        </Row>
        <Row className="rowfour">
          <Col xs={12} md={6}>
            <div className="container"><h2 id="what-you-will-learn" className="subtitle-big">What you will learn</h2>
              <p>This course covers the fundamentals of JavaScript. It is the best way to learn JavaScript in 2021.<br /><br />
            The lessons &amp;
            challenges will guide you through these topics step by step and its project-based approach will help you reinforce these concepts.</p><p>The course assumes that you are familiar with the basics such as variables, functions, arrays, objects, classes as well as some HTML &amp; CSS experience.</p></div>
          </Col>
          <Col xs={12} md={6}>
            <div><ul id="topics-list" className="secondary-bullets"><li>Strings</li><li>Numbers</li><li>Variables</li><li>Conditions</li><li>Arrays</li><li>Functions</li><li>Arrow functions</li><li>Objects</li><li>Classes</li><li>Lexical scope</li><li>Web Components</li><li>HTML Templates</li><li>Package Managers</li><li>EcmaScript</li><li>Control Flow</li><li>Import/Export</li><li>JSON</li><li>Promises</li><li>Fetch</li><li>APIs</li><li>Async/await</li><li>DOM</li><li>Events</li><li>Forms</li><li>Custom Elements</li><li>Shadow DOM</li><li>Module Bundlers</li><li>Legacy topics</li></ul></div>
          </Col>
        </Row>
        <Row className="rowfive justify-content-center">
          <Col xs={12} md={6}>
            <video controls autoPlay="true" className="practice">
              <source src="https://res.cloudinary.com/dbfn5lnvx/video/upload/w_1400,q_60/v1603108174/learnjavascript/learn-js-2.mp4" type="video/mp4" />
            </video>
          </Col>
          <Col xs={12} md={6}>
            <div className="container">
              <h2 id="time-to-learn" className="color">It's time to learn practical
            JavaScript the modern way</h2>
              <p>Learn modern JavaScript from scratch,
              and practice in an intuitive environment.
                 The challenges are inspired by real-world projects to make sure that you're learning the best</p>  </div>      </Col>
        </Row>
        <Row className="rowfive justify-content-center">
          <Col xs={12} md={6} sm={3} className="prerequisites">
            <h4 className="prerequisites"> Prerequisites and Requirements</h4>
            This course is ideal for beginners who are looking to add a new programming language to their toolbelt. JavaScript is also foundational for developers who want to pursue a career in web development. No prior experience is necessary for this course.
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
export default Home;