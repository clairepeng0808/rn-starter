import { View, Text, FlatList } from 'react-native';
import styled, { css } from 'styled-components';

export const StyledView = styled(View)`
  margin: 20px;
`;

export const Title = styled(Text)`
  font-size: 28px;
  text-align: center;
  margin-bottom: 10px;
`;

export const StyledText = styled(Text)`
  font-size: 20px;

  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}
`;

export const StyledFlatList = styled(FlatList)`
  margin: 20px;
`;
