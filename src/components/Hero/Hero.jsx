import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
//import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

//configure amplify 
import Amplify from '@aws-amplify/core';
import awsconfig from '../../aws-exports';
import { AmplifySignOut } from '@aws-amplify/ui-react';
//import { AmplifyGreetings, AmplifyAuthenticator } from '@aws-amplify/ui-react'; 
//import { AmplifyTheme } from 'aws-amplify-react';


Amplify.configure(awsconfig);

//cta
//style = {{display: "flex", justifyContent:"left", alignItems:"center"}}
const Header = () => { 
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta} = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

/*
  const authTheme = {
    button: {
      ...AmplifyTheme.button,
      backgroundColor: "blue"
  }
  }
  */
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

    <section id="hero" className="jumbotron">

                  
      <Container>
        <span className= "hero-signout">
    
      <AmplifySignOut/>
          
        </span> 

        <Fade 
          left={isDesktop} 
          bottom={isMobile} 
          duration={1000} 
          delay={500}
          distance="30px">
          <h1 className="hero-title">
    
            {title || ' Brandiddle '}{' '}
            <span className="text-color-main">{name || " Let's get creative!  "}</span>
            <br />
            {subtitle || " . . . "}
          </h1>
        </Fade>
        <Fade 
          left={isDesktop} 
          bottom={isMobile} 
          duration={1000} 
          delay={1000} 
          distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <div>
                <a href='http://brandiddle.cs.loyola.edu/create.html' target="_blank" rel="noopener noreferrer" smooth duration={1000}>
                {cta || ' Create '} </a> 
              </div>
            </span>
          </p>  
        </Fade>
      </Container>


    </section>

    
  );
};

export default Header;
