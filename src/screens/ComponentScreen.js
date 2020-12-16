import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import styled from 'styled-components';

const ComponentScreen = () => {
  const yourName = 'Claire';
  return (
    <View>
      <StyledText>Getting Started with React Native</StyledText>
      <StyledNameText>My Name is {yourName}</StyledNameText>
    </View>
  );
};

const StyledText = styled(Text)`
  font-size: 45px;
`;

const StyledNameText = styled(Text)`
  font-size: 20px;
`;

export default ComponentScreen;
