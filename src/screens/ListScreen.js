import React from 'react';
import {
  StyledView,
  Title,
  StyledText,
  StyledFlatList,
} from '../components/Basics';

const ListScreen = (params) => {
  const friends = [
    { name: 'Sam' },
    { name: 'Jill' },
    { name: 'Tahasa' },
    { name: 'Jess' },
    { name: 'Andy' },
  ];

  return (
    <StyledView>
      <Title>Friends List</Title>
      <StyledFlatList
        data={friends}
        keyExtractor={(friend) => friend.name}
        vertical
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          // element === { item: { name:'Jill' }, index: 0 }
          // it includes more than just the data you pass in, just grab item
          // item === { name: 'Jill' }
          <StyledText style={{ marginVertical: 10 }}>{item.name}</StyledText>
        )}
      />
    </StyledView>
  );
};
export default ListScreen;
