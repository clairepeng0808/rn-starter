import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  console.warn(navigation);
  return (
    <View>
      <Text style={styles.text}>Hello There! My </Text>

      {/* self-closing element */}
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to ComponentScreen"
      />

      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Go to ListScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
