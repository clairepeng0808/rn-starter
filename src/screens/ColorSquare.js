import React, { useState, useReducer } from 'react';
import { View } from 'react-native';
import { StyledView, Title, StyledText } from '../components/Basics';
import styled from 'styled-components';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 10;
const reducer = (state, action) => {
  // state: {red: 0,blue: 0, green: 0};
  // action: {colorToChange:'red',change:+15}
  switch (action.colorToChange) {
    case 'red': {
      return { ...state, red: state.red + action.change };
    }
    case 'blue': {
      return { ...state, blue: state.blue + action.change };
    }
    case 'green': {
      return { ...state, green: state.green + action.change };
    }
    default: {
      return state;
    }
  }
};

const ColorSquare = () => {
  const initialState = {
    red: 0,
    blue: 0,
    green: 0,
  };

  const [colors, dispatch] = useReducer(reducer, initialState);
  const { red, green, blue } = colors;

  const setColors = (color, increment) => {
    switch (color) {
      case 'red':
        red + increment < 255 &&
          red + increment >= 0 &&
          setRed(red + increment);
        break;
      case 'blue':
        blue + increment < 255 &&
          blue + increment >= 0 &&
          setBlue(blue + increment);
        break;
      default:
        green + increment < 255 &&
          green + increment >= 0 &&
          setGreen(green + increment);
    }
  };

  return (
    <StyledView>
      <Title style={{ marginBottom: 20 }}>Color Square</Title>
      <ColorCounter
        color="RED"
        onIncrease={() =>
          dispatch({ colorToChange: 'red', change: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'red', change: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="BLUE"
        onIncrease={() =>
          dispatch({ colorToChange: 'blue', change: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'blue', change: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({ colorToChange: 'green', change: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({
            colorToChange: 'green',
            change: -1 * COLOR_INCREMENT,
          })
        }
      />
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <ColorItemView
          backgroundColor={`rgb(${red},${blue},${green})`}
          style={{ marginBottom: 20 }}
        ></ColorItemView>
        <StyledText>
          rgb({red},{blue},{green})
        </StyledText>
      </View>
    </StyledView>
  );
};

const ColorItemView = styled(View)`
  height: 200px;
  width: 200px;
  background-color: ${(props) => props.backgroundColor};
`;

export default ColorSquare;
