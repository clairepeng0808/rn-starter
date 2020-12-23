import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View
      style={{
        display: 'flex',
        marginBottom: 30,
      }}
    >
      <Text style={{ textAlign: 'center' }}>{color}</Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Button title={`Increase ${color}`} onPress={() => onIncrease()} />
        <Button title={`Decrease ${color}`} onPress={() => onDecrease()} />
      </View>
    </View>
  );
};

export default ColorCounter;
