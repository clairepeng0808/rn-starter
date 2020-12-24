import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import ImageDetail from '../components/ImageDetail';
import { StyledView, Title, StyledText } from '../components/Basics';

const ImageScreen = (params) => {
  const imageSources = [
    { path: require('../../assets/beachside.jpg'), title: 'Beachside' },
    { path: require('../../assets/mountains.jpg'), title: 'Mountains' },
    { path: require('../../assets/fruits.jpg'), title: 'Fruits' },
    { path: require('../../assets/sunset.jpg'), title: 'Sunset' },
    { path: require('../../assets/snuggle.jpg'), title: 'Couple' },
  ];

  return (
    <View style={styles.view}>
      <Title style={styles.title}>Image Screen</Title>
      <FlatList
        data={imageSources}
        keyExtractor={(source) => source.title}
        vertical
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ImageDetail title={item.title} imageSource={item.path} />
        )}
      />
    </View>
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
