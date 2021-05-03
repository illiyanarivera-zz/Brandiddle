import React, { useContext } from 'react';
//useState, useEffect
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';

//stripe
//import { loadStripe } from "@stripe/stripe-js";
//import Checkout from './src/components/Checkout';



const About = () => {
  const { about } = useContext(PortfolioContext);
  const { paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  

  /*
  const [ isDesktop, setIsDesktop] = useState(false);
  //
  const [ isMobile, setIsMobile] = useState(false);
  //

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []); 
*/

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade 
            bottom duration={1000} 
            delay={1000} 
            distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne || '' } 
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    ' '}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || ' Membership Status: '}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    {/* <Checkout /> */}
                    <a
                      //id= "checkout-button-price_1IkCK0JvfFAZxBhWD1UB17Cx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Update Membership
                    </a>
                  </span>                  
                  
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>

    
  );
};

export default About;