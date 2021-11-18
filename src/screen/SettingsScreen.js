import React, { useContext, useState } from 'react';
import { SafeArea } from '../utils/SafeArea';
import { AuthContext } from '../services/authentication/AuthContext';
import { List, Avatar, Text } from 'react-native-paper';
import styled from 'styled-components';
import { Spacer } from '../components/spacer';
import { TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const SettingsItems = styled(List.Item)`
  padding: 16px;
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

const SettingsScreen = ({ navigation }) => {
  const { logout, user } = useContext(AuthContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(() => {
    getProfilePicture(user);
  });

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
          {!photo && (
            <Avatar.Icon size={180} icon='human' backgroundColor='#2182BD' />
          )}

          {photo && (
            <Avatar.Image
              size={180}
              source={{ uri: photo }}
              backgroundColor='#2182BD'
            />
          )}
        </TouchableOpacity>
        <Spacer position='top' size='large'>
          <Text>{user.email}</Text>
        </Spacer>
      </AvatarContainer>

      <List.Section>
        <SettingsItems
          title='Favourites'
          left={(props) => <List.Icon {...props} color='black' icon='heart' />}
          description='View your favourites'
          onPress={() => navigation.navigate('Favourites')}
        />
        <SettingsItems
          title='Logout'
          icon='door'
          onPress={() => logout()}
          left={(props) => <List.Icon {...props} color='black' icon='door' />}
        />
        <List.Item />
      </List.Section>
    </SafeArea>
  );
};

export default SettingsScreen;
