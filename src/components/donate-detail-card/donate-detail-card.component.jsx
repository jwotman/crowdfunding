import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { StyledChildCard } from '../child-card/child-card.component';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCurrentDonationLevel } from '../../redux/campaign/campaign.selectors';
import { chooseDonationLevel } from '../../redux/campaign/campaign.actions'; 
import { createGlobalStyle } from 'styled-components';
import DonateBox from '../donate-box/donate-box.component';
import Remaining from '../remaining/remaining.component';
import DonateDetailHeading from './donation-detail-header.component';

const GlobalCardStyle = createGlobalStyle`
    .canDonate:nth-of-type(${props => props.currentLevelID}){
        border: .1rem solid  var(--color-primary-dark-cyan) ;
    } 
`;

const HeaderWrapper = styled.section`
    display: flex;
    flex-basis: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 2.4rem;
`;

const HeadingRemainingWrapper = styled.div`
    justify-self: flex-end;
    margin-right: 2.4rem;
`;

const BodyRemainingWrapper = styled.div`
    display: flex;
    flex: 0 0 100%;
    flex-direction: row;
    justify-content: flex-start;

`;

const IncentiveDescription = styled.p`
    
    text-align: left;
    @media screen and (min-width: 550px){
        font-size: 1.5rem;
        line-height: 2.8rem;
        
    }

`;


export const DisabledOverlay = styled.div`
 width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  mix-blend-mode: normal;
  opacity: ${props => props.disabled ? '0.5' : '0'};
  background: white;
  display: ${props => props.disabled ? 'flex' : 'none'};
`;

const isDisabled = (remaining) => {

    let disabled = false;
    if(remaining === 0){
        disabled = true;
    }
    return disabled;

}

const IncentiveCard = styled(StyledChildCard)`
    border: .1rem solid  lightgray ;
    justify-content: flex-start;  
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;  
    padding: ${isSelected => isSelected ? 'var(--spacing-card-padding)' : '3.6rem 2.4rem 3.2rem 2.4rem'}; 
    flex-basis: 100%;
    & ${IncentiveDescription}{
        margin: 2rem 0 2.4rem 0;
    }
    
    @media screen and (min-width: 700px){
        & > p{
            margin-left: 6rem;
        }

        
    }

`;


const DonateDetailCard = ({item,remaining,currentLevelID, chooseLevel}) => {
    const cardElement = useRef(null);
    
    useEffect(()=>{
        item.id === currentLevelID && cardElement.current.scrollIntoView();
    }, [currentLevelID, item.id]);


    return (
        
                <IncentiveCard id={'card_'+ item.id} ref={cardElement} isSelected={item.id === currentLevelID} className="canDonate" >
                <DisabledOverlay disabled={isDisabled(remaining)} />
                <GlobalCardStyle currentLevelID={currentLevelID} />
                <HeaderWrapper>
                        
                        <DonateDetailHeading currentLevelID={currentLevelID} chooseLevel={chooseLevel} remaining={remaining} item={item}/>
                        {remaining !== -1 && <HeadingRemainingWrapper>
                                                        <Remaining remainingAmount={remaining} isSelectable={true} isMobileSpecific={false} />
                                                    </HeadingRemainingWrapper>
                        }
                    </HeaderWrapper>
                    <IncentiveDescription>
                        {item.description}
                    </IncentiveDescription>
                
                    <BodyRemainingWrapper>
                            {remaining !== -1 && <Remaining remainingAmount={remaining} isSelectable={true} isMobileSpecific={true} /> }
                    </BodyRemainingWrapper> 
                        {item.id === currentLevelID && <DonateBox donationLevel={item.donationLevel} disabled={isDisabled(remaining)} />}
                    
                    
                </IncentiveCard>    
        )
};

const mapStateToProps = createStructuredSelector ({
    currentLevelID: selectCurrentDonationLevel
});

const mapDispatchToProps = dispatch => ({
    chooseLevel: (id) => dispatch(chooseDonationLevel(id)),
 });





export default connect(mapStateToProps,mapDispatchToProps)(DonateDetailCard);