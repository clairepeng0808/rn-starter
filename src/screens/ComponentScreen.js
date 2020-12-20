import React from 'react';
import styled from 'styled-components';
import { StyledView, Title, StyledText } from '../components/Basics';

const ComponentScreen = () => {
  const yourName = 'Claire';
  return (
    <StyledView>
      <Title>Getting Started with React Native</Title>
      <StyledText>My Name is {yourName}</StyledText>
    </StyledView>
  );
};

export default ComponentScreen;
