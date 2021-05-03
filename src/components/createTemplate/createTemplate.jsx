import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
//import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

//configure amplify
import Amplify from '@aws-amplify/core';
import { AmplifyS3ImagePicker } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);
const App2 = () => <AmplifyS3ImagePicker />;


const createTemplate = () => {
  const { createTemplate } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="createTemplate">
      <Container>
        <div className="project-wrapper">
          <Title title="createTemplate" />
          {createTemplate.map((createTemplate) => {
            const { title, info, info2, url, repo, id } = createTemplate;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || ' Name your template '}</h3>
                      <div>
                        <p>
                          {info ||
                            ' A description of the brand // and the template'}
                        </p>
                        <p className="mb-4">{info2 || ''}</p>
                      </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || '#!'}
                      >
                        Edit 
                      </a>

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                        <App2>"Add Logo"</App2>
                          Save 
                        </a>
                              
                      )}
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default createTemplate;
