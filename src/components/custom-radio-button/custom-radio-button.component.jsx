import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {chooseDonationLevel} from '../../redux/campaign/campaign.actions';




const Radio = styled.label`
    font-size: 2.4rem;
    color: var(--color-neutral-dark-grey);

    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1.2rem;

`;

const RadioInput = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    
//--color-primary-dark-cyan

`;

const HiddenRadioButton = styled.input.attrs({
    type: "radio", name: "donate"
  })`    

        opacity: 0;
        width: 0;
        height: 0;
        margin: 0 0 0 0;
        &:checked + span {
            background-color: var(--color-primary-dark-cyan);
            box-shadow: inset 0 0 0 4px #FFFFFF; 
        } 
        
`;






const RadioControl = styled.span.attrs(props => ({
    className: "radio_control"
}))`
    display: block;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    border: .08rem solid currentColor;

    ${props => props.isSelected && 'background-color: var(--color-primary-dark-cyan); box-shadow: inset 0 0 0 4px #FFFFFF;' }  

    transform: translateY(-0.05em);

`;

const RadioLabel = styled.span`
    line-height: 1;



`;


const CustomRadioButton=({children,id,isSelected,chooseLevel})=> (
   
    <Radio>
        <RadioInput>
            <HiddenRadioButton isSelected={isSelected} onChange={() => {chooseLevel(id)}}  />
            <RadioControl/>
            {children &&
                <RadioLabel>{children}</RadioLabel>
            }
        </RadioInput>
        <RadioLabel>{children}</RadioLabel>
    </Radio>

  
);

const mapDispatchToProps = dispatch => ({
    chooseLevel: (id) => dispatch(chooseDonationLevel(id))
 });

export default connect(null,mapDispatchToProps)(CustomRadioButton);




