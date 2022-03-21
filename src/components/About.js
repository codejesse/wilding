import styled from 'styled-components'
import '../App.css';
import { device } from './Devices';
import Slide from 'react-reveal/Slide';

const AboutWrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   margin: 2.5rem;
`;

const Aboutdetails = styled.div`
   display: flex;
   flex-direction: column;
   margin: auto;
   width: 50%;
   @media ${device.tablet} {
      width: auto;
   }
   @media ${device.mobileS} {
      width: auto;
      
   }
  @media ${device.mobileM} {
     width: auto;
  }
  @media ${device.mobileL} {
     width: auto;
  } 
  @media ${device.laptop} {
     width: 55%;
  }
`;

const AboutHeader = styled.div`
   font-size: 3vw;
   font-family: 'Raleway', sans-serif;
   color: rgb(253, 189, 132);
`;

const AboutPara = styled.div`
   font-size: 1.1rem;
   margin-top: -1.5rem;
   font-family: 'Raleway', sans-serif;
`;

const Button = styled.button`
  background: transparent;
  border: 2px solid rgb(253, 189, 132);;
  color: rgb(253, 189, 132);
  padding: 1rem 0.2rem;
  width: 20%;
  @media (max-width: 600px) {
     width: auto;
  }
  &:hover {
     background-color: rgb(253, 189, 132);;
     cursor: pointer;
     color: white;
  }
`;


function About() {
   return (
      <AboutWrapper>
         <Slide left>
            <img className='global-image' src='About.jpg' alt='img' />
         </Slide>
         <Aboutdetails>
            <AboutHeader><h1>About wilding</h1></AboutHeader>
            <AboutPara><p>Hello there i'm a text and i text for a living my name is jesse beke blah blah vlah</p></AboutPara>
            <AboutPara><p>there i'm a text and i text for a living my name is how is man my name is how is man</p></AboutPara>
            <AboutPara><p>Hello there i'm a text and i text for a living my name is</p></AboutPara>
            <Button>Learn More</Button>
         </Aboutdetails>
      </AboutWrapper>
   );
}

export default About;