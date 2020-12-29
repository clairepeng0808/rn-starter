import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { StyledView, Title, StyledText } from '../components/Basics';
import { Button } from 'react-native-ios-kit';
import styled from 'styled-components';

const StyledButtonText = styled(Text)`
  font-size: 18px;
  color: ${(props) => (props.color ? props.color : '#147efb')};
  text-align: center;
`;

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <StyledView>
      <Title center>Current Count</Title>
      <StyledText center style={{ marginBottom: 20, fontSize: 48 }}>
        {counter}
      </StyledText>
      <View>
        <Button
          style={{ marginBottom: 10 }}
          rounded
          inverted
          onPress={() => setCounter((prev) => prev + 1)}
        >
          <StyledButtonText color="white">Increase</StyledButtonText>
        </Button>
        <Button rounded onPress={() => setCounter((prev) => prev - 1)}>
          <StyledButtonText>Decrease</StyledButtonText>
        </Button>
      </View>
    </StyledView>
  );
};

export default CounterScreen;
