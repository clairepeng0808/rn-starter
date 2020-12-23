import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ImageDetail from '../components/ImageDetail';
import { StyledView, Title, StyledText } from '../components/Basics';

const ImageScreen = () => {
  return (
    <ScrollView style={styles.view}>
      <Title style={styles.title}>Image Screen</Title>
      <ImageDetail
        title="Forest"
        imageSource={require('../../assets/beachside.jpg')}
      />
      <ImageDetail
        title="Beach"
        imageSource={require('../../assets/beach.jpg')}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require('../../assets/mountain.jpg')}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require('../../assets/mountain.jpg')}
        score={10}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require('../../assets/mountain.jpg')}
        score={10}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingTop: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    paddingLeft: 20,
    textAlign: 'left',
  },
});

export default ImageScreen;
