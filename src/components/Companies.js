import styled from 'styled-components'
import '../App.css';

const CompaniesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 20vh;
    width: 100%;
    justify-content: center;
    background-color: rgb(247, 229, 213);
`;

const CompaniesHeader = styled.div`
    font-size: 2rem;
    margin: 2.5rem;
    font-family: 'Raleway', sans-serif;
`;


function Companies() {
    return (
        <CompaniesWrapper>
            <CompaniesHeader>Trusted by</CompaniesHeader>
            {/* <img src='logo1.png' alt='logo' />
            <img src='logo1.png' alt='logo' />
            <img src='logo1.png' alt='logo' /> */}
        </CompaniesWrapper>
    );
  }
  
  export default Companies;