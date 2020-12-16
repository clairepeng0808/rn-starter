import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styled from 'styled-components';

const ListScreen = (params) => {
  const names = [
    { name: 'Sam' },
    { name: 'Jill' },
    { name: 'Tahasa' },
    { name: 'Jess' },
    { name: 'Andy' },
  ];
  return (
    <View>
      <StyledFlatList
        vertical
        showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}
        data={names}
        renderItem={({ item }) => (
          <Text style={{ marginVertical: 10 }}>{item.name}</Text>
        )}
      />
    </View>
  );
};
const StyledFlatList = styled(FlatList)`
  margin-top: 40px;
`;

export default ListScreen;
