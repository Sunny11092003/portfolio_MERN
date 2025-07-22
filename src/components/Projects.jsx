import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Detection of Lung Cancer Using Microscopic Images',
      description: 'Developed a deep learning model using CNNs to classify lung tissue images into adenocarcinoma, squamous cellcarcinoma, and benign categories.',
      date: 'May - Aug 2024',
      image: 'assets/images/machine-learning.jpg',
      technologies: ['react', 'nodejs', 'mongodb', 'express', 'bootstrap']
    },
    {
      id: 2,
      title: 'Desktop Snake Game',
      description: 'Created a classic Snake game application using Java Swing for graphical user interface and game logicimplementation.',
      date: 'July 2024',
      image: 'assets/images/java swing.png',
      technologies: ['react', 'nodejs', 'express', 'nextjs', 'typescript']
    },
    {
      id: 3,
      title: 'Portfolio',
      description: 'A personal portfolio showcasing my web development skills, including projects built with React, Node.js, and other modern technologies.',
      date: ' Feb - Mar 2025',
      image: 'assets/images/Portfolio.png',
      technologies: ['react', 'bootstrap']
    }
  ];

  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center fs-2 fw-bold mb-2">Take a look at my Highlighted Projects</h2>
          <p className="text-center text-secondary mb-5">
            Here are some of the projects I'm most proud of. Each one taught me something new and challenged me to grow as a developer.
          </p>
        </motion.div>
        <Row className="g-4">
          {projects.map((project, idx) => (
            <Col key={project.id} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} />
              </motion.div>
            </Col>
          ))}
        </Row>
        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;