import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { Title } from '../components/Basics';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Title style={styles.text}>Welcome to my app</Title>

      {/* self-closing element */}
      {/* <Button
        title="Go to ComponentScreen"
        onPress={() => navigation.navigate('Components')}
      />

      <Button
        title="Go to ListScreen"
        onPress={() => navigation.navigate('List')}
      /> */}

      <Button
        title="Go to ImageScreen"
        onPress={() => navigation.navigate('Image')}
      />

      <Button
        title="Go to CounterScreen"
        onPress={() => navigation.navigate('Counter')}
      />

      <Button
        title="Go to ColorScreen"
        onPress={() => navigation.navigate('Color')}
      />

      <Button
        title="Go to ColorSquare"
        onPress={() => navigation.navigate('ColorSquare')}
      />
      <Button
        title="Go to ColorSquare"
        onPress={() => navigation.navigate('ColorSquare')}
      />

      <Button
        title="Go to PushNotification"
        onPress={() => navigation.navigate('PushNotification')}
      />

      {/* Touch Opacity */}
      {/* <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Go to ListScreen</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
  },
});

export default HomeScreen;
