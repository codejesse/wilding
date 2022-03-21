import styled from 'styled-components';
import '../App.css';
import Slide from 'react-reveal/Slide';

const FeaturedWrapper = styled.div`
    display: flex;
    flex-direction: row;
    background-color: bisque;
    height: 70vh;
`;

const FeaturedDetails = styled.div`
   color: white;
   font-size: 2.5vw;
   font-family: 'Raleway', sans-serif;
   @media(max-width: 768px) {
        display: none;
    }
`;

const Button = styled.div`
  background: transparent;
  text-align: center;
  border: 2px solid white;
  color: white;
  padding: 1rem 0.2rem;
  width: 24%;
  @media (max-width: 600px) {
     width: auto;
  }
  &:hover {
      background-color: white;
     cursor: pointer;
     color: peachpuff;
  }
`;

const FeaturedImageRemove = styled.div`
    @media(max-width: 768px) {
        display: none;
    }
`;


function Featured() {
    return (
        <FeaturedWrapper>
            <Slide left>
                <img src='featured3.png' alt='img' />
            </Slide>
            <FeaturedDetails>
                <h1>The antidote that works</h1>
                <Button>Buy</Button>
            </FeaturedDetails>
            <Slide right>
                <FeaturedImageRemove><img src='featured4.png' alt='img' /></FeaturedImageRemove>
            </Slide>
        </FeaturedWrapper>
    );
}

export default Featured;