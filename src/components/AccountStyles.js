import styled from 'styled-components/native';
import { Button, TextInput } from 'react-native-paper';
import { Text } from 'react-native';
import { colors } from '../infrastructure/colors';

export const AccountBackground = styled.ImageBackground.attrs({
  source: require('../../assets/home_bg.jpg'),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  position: absolute;
  padding: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[2]};
  background-color: rgba(255, 255, 255, 0.7);
`;

export const AccountInput = styled(TextInput)`
  height: 50px;
  width: 300px;
`;

//Titles
export const Title = styled(Text)`
  position: relative;
  bottom: 120px;
  font-size: 30px;
  color: black;
  font-weight: bold;
`;

export const TitleAuth = styled(Text)`
  position: relative;
  bottom: 150px;
  font-size: 30px;
  color: black;
  font-weight: bold;
`;

export const TitleRegister = styled(Text)`
  position: relative;
  bottom: 180px;
  font-size: 30px;
  color: black;
  font-weight: bold;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
  position: absolute;
  width: 100%;
  height: 40%;
  top: 10px;
  padding: ${(props) => props.theme.space[2]};
`;

// Buttons

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[1]};
`;

export const GoBackBtn = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[1]};
  position: relative;
  top: 160px;
`;
