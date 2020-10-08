import React from 'react';
import styled from 'styled-components';
import colours from '../components/Colours';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import NavigateButton from '../components/NavigateButton';

export default class HomeScreen extends React.Component {
  render() {
      const { navigate } = this.props.navigation;
    return (
      <Container>
            <Background source={require('../assets/sunset.jpg')} />
            <Logo source={require('../assets/logo.png')} />
              <NavigateButton text= "Alarm" textColor ="#ff3b00" backgroundColor="#FFFFFF" press={() => navigate('Alarm')}/>
              <NavigateButton text= "Quotes" textColor ="#ff3b00" backgroundColor="#FFFFFF" press={() => navigate('Quotes')}/>
      </Container>
    );
  }
}

const Container = styled.View`
    flex: 1;
    background-color: ${colours.background};
`;

const Background = styled.Image`
    width: 100%;
    height: 100%;
    background: black;
    border-radius: 22px;
    position: absolute;
    top: 0;
    left: 0;
`;

const Logo = styled.Image`
    width: 360px;
    height: 450px;
    border-radius: 22px;
    position: relative;
    top: 0;
    left: 0;
`;
