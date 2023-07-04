import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import todo from "../assets/projects/todo.png";
import visualizer from "../assets/projects/visualizer.png";
import blog from "../assets/projects/blog.png";
import pdfviewer from "../assets/projects/pdfviewer.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="CP Tutorial"
              description="• Built a Responsive web platform for sharing technical contents where anyone can post/save as draft, edit, delete,
              comment on a blog and can filter the blogs on the basis of author and/or tag of the blog.
              • Implemented RESTful API endpoints using Express.js to handle HTTP requests for CRUD operations which
              enabled efficient communication between the client-side and server-side of the application.
              • Tech Stack - Bootstrap, JavaScript, Express, NodesJs, MongoDB."
              ghLink="https://github.com/theShashankGupta/cpTutorial"
              demoLink="https://odd-ruby-gorilla-wear.cyclic.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={visualizer}
              isBlog={false}
              title="CP Tracker"
              description="• Implemented server-side logic to fetch and parse data from codeforces public API and present it to users in an
              intuitive and user-friendly interface.
              • Fetches data from the kontest API and displays information on the upcoming contests.
              • Used Chart.js for visual representation of data in form of Graph and Chart.
              • Tech Stack- HTML, CSS, Bootstrap, JavaScript, Nodes.js, Express.js, Chart.js."
              ghLink="https://github.com/theShashankGupta/cpTracker"
              demoLink="https://cp-tracker.cyclic.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pdfviewer}
              isBlog={false}
              title="PDF-Viewer"
              description="Design an intuitive,stylish and user-friendly interface that allows users to easily navigate, zoom, and scroll through PDF documents. Consider incorporating features such as a sidebar for document navigation, toolbar for common actions, and a clean layout with Pageination .
              • Tech stack used- HTML, CSS, JavaScrip."
              ghLink="https://github.com/theShashankGupta/pdf-viwer"
              demoLink="https://theshashankgupta.github.io/pdf-viwer/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="ToDo List"
              description="Create a stylish   user-friendly interface with awosome animation that allows users to add, edit, and delete tasks. Implement functionality for users to enter task details such as title, and status. Provide options to mark tasks as completed or mark them with different labels.
              • Tech stack used-HTML, CSS, JavaScrip."
              ghLink="https://github.com/theShashankGupta/To_do_list"
              demoLink="https://theshashankgupta.github.io/To_do_list/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects