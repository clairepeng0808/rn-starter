import React, { useState } from 'react';
import { Button } from 'react-native';
import { StyledView, Title, StyledText } from '../components/Basics';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <StyledView>
      <Title center>Current Count</Title>
      <StyledText center style={{ marginBottom: 20, fontSize: 48 }}>
        {counter}
      </StyledText>
      <Button title="Increase" onPress={() => setCounter((prev) => prev + 1)} />
      <Button title="Decrease" onPress={() => setCounter((prev) => prev - 1)} />
    </StyledView>
  );
};

export default CounterScreen;
