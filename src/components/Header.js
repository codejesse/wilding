import styled from 'styled-components'
import '../App.css';
import Slide from 'react-reveal/Slide';

const HeaderWrapper = styled.div`
   background-color: peachpuff;
   overflow: hidden;
   height: auto;
   background-image: url("background.png");
   background-position: 0px 0px;
  background-repeat: repeat-x;
  animation: animatedBackground 12s linear infinite;
   background-position: right;
   background-position-y: auto;
   @keyframes animatedBackground {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 0;
  }
}
@media (max-width: 600px) {
  background-image: none;
}
`;

const HeaderText = styled.div`
   text-align: center;
   margin: auto;
   font-size: 4vw;
   color: white;
   font-family: 'Lobster', cursive;
`;

const HeaderImg = styled.div`
   display: flex;
   flex-wrap: wrap;
   width: auto;
   justify-content: left;
   margin-top: -15rem;
`;

const GlassBackground = styled.div`
  display: flex;
  float: right;
   margin: auto;
   width: 50%;
   height: 300px;
   backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(233, 233, 233, 0.75);
    border: 2px solid rgba(255, 255, 255, 0.125);
`;

const GlassText = styled.div`
    font-family: 'Noto Sans', sans-serif;
    display: flex;
    flex-direction: row;
    color: white  ;
    font-size: 2vw;
    padding: 5rem;
`;


function Header() {
  return (
    <>
      <HeaderWrapper>
        <HeaderText>
          <h1>protecting the beauty!</h1>
        </HeaderText>
        <Slide right><GlassBackground>
          <GlassText>
            <h1>Organic creams</h1>
          </GlassText>
        </GlassBackground></Slide>
        <HeaderImg><Slide left><img src='header.png' alt='something' /></Slide></HeaderImg>
      </HeaderWrapper>
    </>
  );
}

export default Header;
