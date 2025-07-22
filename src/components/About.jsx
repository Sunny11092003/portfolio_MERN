import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { SiReact, SiNodedotjs, SiJavascript, SiTypescript, SiBootstrap, SiExpress, SiMongodb, SiNextdotjs, SiHtml5, SiSass, SiCypress, SiJest } from 'react-icons/si';
import { motion } from 'framer-motion';

const techIcons = [
  { icon: <SiReact />, name: "React" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiBootstrap />, name: "Bootstrap" },
  { icon: <SiExpress />, name: "Express" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiHtml5 />, name: "HTML5" },
  { icon: <SiSass />, name: "Sass" },
  { icon: <SiCypress />, name: "Cypress" },
  { icon: <SiJest />, name: "Jest" },
];

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <div className="about-container rounded-4 p-4 p-md-5">
          <Row className="align-items-center">
            <Col lg={4} className="mb-4 mb-lg-0">
              <div className="about-image-container">
                <img
                  src="assets/images/empty pic.jpg"
                  alt="Profile-Pic"
                  className="img-fluid rounded-circle border border-3"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300x300';
                  }}
                />
              </div>
            </Col>
            <Col lg={8}>
              <motion.div
                className="tech-stack d-flex gap-3 mb-4 flex-wrap"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.08
                    }
                  }
                }}
              >
              </motion.div>
              <h2 className="mb-2 fw-bold">About Me</h2>
              <h3 className="fs-3 mb-3">
                  Building with code. Dreaming in color.
              </h3>
              <p className="mb-4 text-secondary">
                Enthusiastic MCA student with a BCA foundation and hands-on experience in AI-powered healthcare applications and
                back-end development. Proficient in Golang, Python, and Flask, with a solid understanding of data structures, operating
                systems, and storage concepts. Built and deployed full-stack solutions using Firebase and CNN models. Passionate
                about innovation and eager to contribute to cutting-edge PoCs in storage engineering
              </p>
              <div className="mb-3">
                <strong>Fun Facts:</strong>
                <ul>
                  <li>🏐 Volleyball Enthusiast</li>
                  <li>🎵 Love playing piano</li>
                  <li>☕ Coffee aficionado</li>
                </ul>
              </div>
              <Button variant="primary" className="custom-btn me-2"
                onClick={() => window.open('/Sunny_Resume.pdf', '_blank', 'noopener,noreferrer')}>
                My Resume
              </Button>
              <Button variant="outline-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Let's Collaborate!
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default About;