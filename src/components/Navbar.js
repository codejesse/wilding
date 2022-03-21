import styled from 'styled-components'
import { device } from './Devices';
import '../App.css';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavWrapper = styled.div`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  display: flex;
  height: 19vh;
  z-index: 999;
  flex-direction: row;
  overflow: hidden;
  background-color: peachpuff;
  @media ${device.mobileS} {}
  @media ${device.mobileM} {}
  @media ${device.mobileL} {}
  @media ${device.tablet} {}
`;

const LogoWrapper = styled.div`
  color: black;
  margin: 1.4rem;
  font-family: 'Raleway', sans-serif;
  font-size: 1.3rem;
  font-weight: bolder;
  @media(max-width: 600px) {
    float: left;
    margin: auto;
  }
`;

const NavItems = styled.div`
  display: flex;
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  flex-direction: row;
  margin: auto;
  justify-content: space-around;
  &:hover {
     cursor: pointer;
  }
  @media(max-width: 600px) {
    display: none;
  }
`;

const NavEnd = styled.div`
   float: right;
   display: flex;
   margin: 2.2rem;
   @media(max-width: 600px) {
    float: right;
    margin: auto;
  }
`;


function Navbar() {
  return (
    <NavWrapper>
      <LogoWrapper><h2>WILDING</h2></LogoWrapper>
      <NavItems>
        <p>Manufacturing &nbsp;</p>
        <p>Packaging &nbsp;</p>
        <p>Farms &nbsp;</p>
        <p>Delivery &nbsp;</p>
      </NavItems>
      <NavEnd>
        <FontAwesomeIcon icon={faBars} color="black" size="2x" />
      </NavEnd>
    </NavWrapper>
  );
}

export default Navbar;
