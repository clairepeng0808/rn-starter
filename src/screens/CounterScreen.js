import React, { useState } from 'react';
import { Button } from 'react-native';
import { StyledView, Title, StyledText } from '../components/Basics';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <StyledView>
      <Button title="Increase" onPress={() => setCounter((prev) => prev + 1)} />
      <Button title="Decrease" onPress={() => setCounter((prev) => prev - 1)} />
      <Title>Current Count</Title>
      <StyledText center>{counter}</StyledText>
    </StyledView>
  );
};

export default CounterScreen;
