import React from 'react';
import styled from 'styled-components';

const NavigateButton = props => (
    <ButtonContainer
        onPress={props.press}
        backgroundColor={props.backgroundColor}
    >
        <ButtonText textColor={props.textColor}>{props.text}</ButtonText>
    </ButtonContainer>
);

export default NavigateButton;

// we pass the background-colour we want when we add the component via
//${props => props.backgroundColor}
const ButtonContainer = styled.TouchableOpacity`
    width: 200px;
    height: 60px;
    margin: auto;
    border-radius: 20px;
    background-color: ${props => props.backgroundColor};
`;

// we pass the background-colour we want when we add the component via
//${props => props.backgroundColor}
const ButtonText = styled.Text`
    font-size: 40px;
    color: ${props => props.textColor};
    text-align: center;
`;
