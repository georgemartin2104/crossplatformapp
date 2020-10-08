import React from 'react';
import styled from 'styled-components';
import ShareEx from './share.js';

const Quote = props => (
  <Container>
    <Content>
      <Title>{props.title}</Title>
    </Content>
    <Cover>
    <ShareEx title={props.title} />
    </Cover>
  </Container>
);

export default Quote;

const Container = styled.View`
  background: #eee;
  height: 120px;
  width: 100%;
  border-radius: 14px;
  margin: 18px;
  margin-top: 35px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
`;

const Cover = styled.View`
  width: 100%;
  height: 200%;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  margin-left: auto;
  margin-right: auto;
  marginTop: auto;
  marginBottom: auto;
  paddingTop: 15%;
  overflow: hidden;
`;

const Content = styled.View`
  padding-top: 10px;
  flex-direction: column;
  align-items: center;
  height: 60px;
`;

const Title = styled.Text`
  margin: auto;
  color: #3c4560;
  font-size: 16px;
  font-weight: 600;
  text-align:center;
`;
