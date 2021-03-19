import React from 'react';
import styled from 'styled-components';
import BasicCard from '../basic-card/basic-card.component';
import IncentiveList from '../incentive-list/incentive-list.component';


const HeadingWrapper = styled.div`


`;

const Heading = styled.h3`

    font-size: 1.8rem;
    font-weight: bold;
    margin: 4rem  0 1.2rem 2.4rem; 
`;

const Content = styled.span`

    font-size: 1.4rem;
    margin: 0 2.4rem 0 2.4rem;

`;

const Paragraph = styled.p`
    margin: 1.2rem 0 1.2rem 0;

`;

const CloseIcon = styled.div`




`;





const SupportProjectOverlay = () => (

    <BasicCard>
        <HeadingWrapper><Heading>About this Project</Heading><CloseIcon/></HeadingWrapper>
        <Content>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</Content>
        <IncentiveList/>
    
    
    </BasicCard>






);


export default SupportProjectOverlay;
