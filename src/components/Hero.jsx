import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowRight, FaSmileBeam } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="hero-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={5} className="mb-4 mb-md-0">
            <h1 className="display-4 fw-bold mb-3">
              Hi <span className="text-primary"><FaSmileBeam /></span>,<br />
              I'm <span className="text-primary">Sunny samuel</span>
            </h1>
            <span className="fs-5 mb-3 d-block text-primary">
              <Typewriter
                words={[
                  'Full-Stack Developer',
                  'AI/ML Enthusiast'
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </span>
            <p className="text-secondary mb-4">
            Enthusiastic MCA student with a BCA foundation and hands-on experience in AI-powered healthcare applications and
            back-end development. Proficient in Golang, Python, and Flask, with a solid understanding of data structures, operating
            systems, and storage concepts. Built and deployed full-stack solutions using Firebase and CNN models. Passionate
            about innovation and eager to contribute to cutting-edge PoCs in storage engineering.
            </p>
            <div className="d-flex gap-3 mb-6">
              <Button variant="primary" className="custom-btn d-flex align-items-center"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                <span className="me-2">Let's Connect!</span>
                <FaArrowRight />
              </Button>
              <Button variant="outline-primary" href="/Sunny_Resume.pdf" target="_blank">
                Download Resume
              </Button>
            </div>
          </Col>
          <Col md={7} className="position-relative">
            <motion.div
              className="hero-image-container d-flex justify-content-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="assets/images/dev-type.svg"
                alt="Developer coding"
                className="img-fluid"
                style={{
                  maxWidth: '190%',
                  transform: 'translateX(5%) scale(1.5)',
                  position: 'relative',
                  zIndex: 1
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/500x400';
                }}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;