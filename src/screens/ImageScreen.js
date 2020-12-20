import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Image Screen</Text>
      <ImageDetail
        title="Forest"
        imageSource={require('../../assets/forest.jpg')}
        score={2}
      />
      <ImageDetail
        title="Beach"
        imageSource={require('../../assets/beach.jpg')}
        score={7}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require('../../assets/mountain.jpg')}
        score={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 20,
  },
  text: {
    fontSize: 30,
    marginBottom: 10,
  },
});

export default ImageScreen;
