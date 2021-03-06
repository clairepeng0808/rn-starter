import React, { useState } from 'react';
import { View, Button, FlatList } from 'react-native';
import { StyledView, Title, StyledText } from '../components/Basics';
import styled from 'styled-components';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <StyledView>
      <Title>Color</Title>
      <View
        style={{
          padding: 0,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'start',
        }}
      >
        <Button
          title="Add a Color"
          onPress={() => setColors([...colors, randomRgb()])}
        />
        <Button
          title="Reset Colors"
          color="#ff5c5c"
          onPress={() => setColors([])}
        />
      </View>
      <ColorList
        keyExtractor={(item) => `color-${item}`}
        data={colors}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ColorItem>
            <ColorItemView backgroundColor={item}></ColorItemView>
            <StyledText color="gray">{item}</StyledText>
          </ColorItem>
        )}
      />
    </StyledView>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};
const ColorList = styled(FlatList)`
  margin: 20px 0;
`;
const ColorItem = styled(View)`
  margin-bottom: 10px;
`;
const ColorItemView = styled(View)`
  height: 100px;
  width: 500px;
  margin-bottom: 10px;
  background-color: ${(props) => props.backgroundColor};
`;

export default ColorScreen;
