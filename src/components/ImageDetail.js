import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ title, imageSource, score }) => {
  return (
    <View style={{ marginBottom: 10 }}>
      <Image
        source={imageSource}
        style={{ width: 450, height: 200, alignSelf: 'stretch' }}
      />
      <Text>{title}</Text>
      <Text>Image Score: {score}</Text>
    </View>
  );
};

export default ImageDetail;
