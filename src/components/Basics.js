import { View, Text, FlatList } from 'react-native';
import styled, { css } from 'styled-components';

export const StyledView = styled(View)`
  margin: 20px 40px;
`;

export const Title = styled(Text)`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;

  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}

  ${(props) =>
    props.left &&
    css`
      padding: 20px;
    `}
`;

export const StyledText = styled(Text)`
  font-size: 20px;
  color: ${(props) => (props.color ? props.color : '#000000')};

  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `};
`;

export const StyledFlatList = styled(FlatList)`
  margin: 20px;
`;
