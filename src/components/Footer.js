import styled from 'styled-components'
import '../App.css';
import Slide from 'react-reveal/Slide';

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 90vh;
    background-image: url("body.png");
   background-repeat: no-repeat;
   background-position: left;
   @media(max-width: 700px) {
       background-image: none;
   }
`;

const FooterItems = styled.div`
    margin: 10rem;
    text-align: right;
    column-count: 2;
    font-family: 'Raleway', sans-serif;
    font-size: 1.2rem;
    @media(max-width: 700px) {
        column-count: 1;
        margin: auto;
        text-align: left;
    }
`;


function Footer() {
    return (
        <Slide left><FooterWrapper>
            <FooterItems>
                <p>Home</p>
                <p>Products</p>
                <p>Careers</p>
                <p>Contact Us</p>
                <p>About Us</p>
                <p>Our team</p>
                <p>Frequently Asked Questions</p>
            </FooterItems>
        </FooterWrapper></Slide>
    );
}

export default Footer;