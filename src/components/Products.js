import styled from 'styled-components'
import '../App.css';
import { device } from './Devices';
import Slide from 'react-reveal/Slide';

const ProductsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 2.1rem;
    justify-content: space-between;
    height: auto;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`;



function Products() {
    return (
        <ProductsWrapper>
            <Slide up><img className='global-image' src='About.jpg' alt='img' /></Slide>
            <Slide up><img className='global-image' src='cream.jpg' alt='img' /></Slide>
            <Slide up><img className='global-image' src='About.jpg' alt='img' /></Slide>  
        </ProductsWrapper>
    );
}

export default Products;