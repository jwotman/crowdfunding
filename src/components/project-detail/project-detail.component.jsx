import { StyledCard } from '../basic-card/basic-card.component';
import IncentiveList from '../incentive-list/incentive-list.component';
import React from 'react';
import styled from 'styled-components';


const ProjectDetailCard = styled(StyledCard)`

    

`;

const Heading = styled.h2`

    font-size: 1.8rem;
    font-weight: bold;
    margin: 4rem  0 1.2rem 2.4rem; 
`;

const Content = styled.div`

    //font-size: 1.4rem;
    margin: 0 2.4rem 0 2.4rem;
    max-width: 80%;

`;

const Paragraph = styled.p`
    margin: 1.2rem 0 1.2rem 0;

`;





const ProjectDetail = () => (

    <ProjectDetailCard>
        <Heading>About this Project</Heading>
        <Content>
            <Paragraph>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</Paragraph>
        
            <Paragraph>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</Paragraph>
        </Content>
        <IncentiveList/>
    
    
    </ProjectDetailCard>






);


export default ProjectDetail;
