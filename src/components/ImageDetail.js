import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Styled from 'styled-components';

const StyledTitle = Styled(Text)`
  margin-top: 5px;
  margin-left: 10px;
  font-size: 16px;
  font-weight: bold;
`;

const StyledComment = Styled(Text)`
  margin-top: 5px;
  margin-left: 10px;
  font-size: 16px;
  color:gray
`;

const ImageDetail = ({ title, imageSource, score }) => {
  return (
    <View style={{ marginBottom: 10 }}>
      <Image
        source={imageSource}
        style={{ width: 450, height: 200, alignSelf: 'stretch' }}
      />
      <StyledTitle>{title}</StyledTitle>
      <StyledComment>What a beautiful place!</StyledComment>
    </View>
  );
};

export default ImageDetail;
