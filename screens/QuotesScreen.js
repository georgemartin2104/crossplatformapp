import React from 'react';
import styled from 'styled-components';
import colours from '../components/Colours';
import Categories from '../components/Categories';
import Card from '../components/Card';
import Quote from '../components/Quote';
import {Ionicons} from '@expo/vector-icons';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import { quoteList } from '../components/quotes';
import BackButton from '../components/BackButton';

export default class QuotesScreen extends React.Component {
  render() {
      const { navigate } = this.props.navigation;
    return (
      <Container>
      <ScrollView>
        <Titlebar>
            <TouchableOpacity>
            <BackButton text= "Back" textColor ="#ff3b00" backgroundColor="#FFFFFF" press={() => navigate('Home')} />
            </TouchableOpacity>
            <Title>Quotes</Title>
        </Titlebar>
        <ItemsLayout>
          {quoteList.map((quote, index) => (
            <TouchableOpacity key={index} >
            <Quote title={quote.title}/>
            </TouchableOpacity>
          ))}
        </ItemsLayout>
        </ScrollView>
      </Container>
    );
  }
}

const Container = styled.View`
    flex: 1;
    background-color: ${colours.background};
`;

const ItemsLayout = styled.View`
  flex-direction: column;
  flex: 1;
  flex-wrap: wrap;
  align-items:center;
  justify-content:space-evenly;
  width:90%;
  margin:0;
`;

const Titlebar = styled.View`
    width: 100%;
    margin-top: 50px;
    padding-left: 0px;
`;


const Title = styled.Text`
    font-size: 30px;
    font-weight: 500;
    color: #ff3b00;
    text-align: center;
`;
