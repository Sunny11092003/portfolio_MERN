import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
//import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';

const Timeline = () => {
  const timelineData = [
    {
      id: 0,
      type: "Live Project",
      title: "Geo Tagging Tree Conservation System ",
      organization: "Green Circle",
      duration: "June 2025 - Present",
      logo: "assets/images/green circle.webp", // Placeholder, update if you have the company logo
      responsibilities: [
        "Implementing QR code generation and scanning using Golang to uniquely identify and track each tree within the conservation system.",
        "Linking scanned QR data with geo-coordinates and tree metadata to enable real-time monitoring and digital recordkeeping",
        "Integrating a Text-to-Speech (TTS) model to audibly relay tree information after scanning the QR code, enhancing user interaction and accessibility in the field.",
      ]
    },
    {
      id: 1,
      type: "education",
      title: "Master Computer Application",
      organization: "BMS institute of Technology and Management",
      location: "Avalahalli ,Yelehanka ,Banagalore",
      duration: "December 2024 - May 2026",
      cgpa: "8.6/10",
      logo: "assets/images/bmsit.jpg",
      activities: [
        {
          title: "Full Stack Development",
          description: "React.js , MongoDb , Node.js ,Express.js ",
          duration: "2025 - Present"
        }
      ]
    },
    {
      id: 2,
      type: "education",
      title: "Bachelor of Computer Application",
      organization: "Bangalore City University",
      location: "Ramagondanahalli ,Yelehanka",
      duration: "August 2021 - July 2024",
      logo: "assets/images/bcu.webp",
      activities: [
        {
          title: "Python Bootcamp Assistant",
          description: "Assisted with 2-day Python Bootcamp under the Associate Dean of Business",
          duration: "March 2023"
        }
      ]
    }
  ];

  // const getIcon = (type) => {
  //   switch (type) {
  //     case 'education':
  //       return <FaGraduationCap className="text-primary" />;
  //     case 'work':
  //       return <FaBriefcase className="text-primary" />;
  //     default:
  //       return <FaCode className="text-primary" />;
  //   }
  // };

  return (
    <section id="timeline" className="timeline-section py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="fs-2 fw-bold mb-2">My Journey</h2>
          <p className="text-secondary">
            A chronological journey through my education and professional experience
          </p>
        </motion.div>

        <div className="timeline-container position-relative">
          {/* Vertical line */}
          <div 
            className="timeline-line position-absolute"
            style={{
              left: '50%',
              transform: 'translateX(-50%)',
              width: '2px',
              height: '100%',
              background: 'var(--primary-color)',
              opacity: 0.3
            }}
          />

          {timelineData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="timeline-item position-relative mb-5"
            >
              {/* Timeline dot */}
              <div 
                className="timeline-dot position-absolute rounded-circle"
                style={{
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '20px',
                  height: '20px',
                  background: 'var(--primary-color)',
                  border: '4px solid var(--component-bg)',
                  zIndex: 1
                }}
              />

              <div className="row">
                <div className={`col-md-6 ${idx % 2 === 0 ? 'text-md-end' : 'text-md-start order-md-2'}`}>
                  <div 
                    className="timeline-content p-4 rounded-4"
                    style={{
                      background: 'var(--component-bg)',
                      border: '1px solid var(--border-color)',
                      marginRight: idx % 2 === 0 ? '2rem' : '0',
                      marginLeft: idx % 2 === 0 ? '0' : '2rem',
                      textAlign: 'left'
                    }}
                  >
                    <div className="d-flex align-items-center mb-3 justify-content-between">
                      <div>
                        <h3 className="fs-4 fw-bold mb-1">{item.title}</h3>
                        <p className="text-secondary mb-0">{item.organization}</p>
                      </div>
                      <div className="organization-logo ms-3" style={{ width: '60px', height: '60px' }}>
                        <img 
                          src={item.logo} 
                          alt={`${item.organization} logo`}
                          className="img-fluid rounded"
                          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/60x60';
                          }}
                        />
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <p className="mb-1">
                        <span className="text-secondary">Location:</span> {item.location}
                      </p>
                      <p className="mb-1">
                        <span className="text-secondary">Duration:</span> {item.duration}
                      </p>
                      {item.gpa && (
                        <p className="mb-1">
                          <span className="text-secondary">CGPA:</span> {item.gpa}
                        </p>
                      )}
                    </div>

                    {item.activities && (
                      <div>
                        <h4 className="fs-5 fw-bold mb-2">
                          {/* <span>Campus Activities</span>
                          <FaBriefcase className="text-primary" /> */}
                          Skills Learned
                        </h4>
                        <div className="activities-list">
                          {item.activities.map((activity, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="activity-item mb-3"
                            >
                              <h5 className="fs-6 fw-bold mb-1">{activity.title}</h5>
                              <p className="text-secondary mb-1 small">{activity.description}</p>
                              <p className="text-secondary mb-0 small">
                                <span className="text-primary">Duration:</span> {activity.duration}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.responsibilities && (
                      <div>
                        <h4 className="fs-5 fw-bold mb-2">
                          {/* <span>Key Responsibilities</span>
                          <FaCode className="text-primary" /> */}
                          Key Responsibilities
                        </h4>
                        <ul className="list-unstyled mb-0">
                          {item.responsibilities.map((responsibility, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="mb-2 d-flex align-items-center"
                            >
                              <span className="text-primary me-2">•</span>
                              {responsibility}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <div className={`col-md-6 ${idx % 2 === 0 ? 'text-md-start' : 'text-md-end order-md-1'}`}>
                  <div className="timeline-date d-none d-md-block">
                    <span className="badge bg-primary rounded-pill px-3 py-2">
                      {item.duration}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Timeline;