import React, { useState, useEffect, useRef, useContext } from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import { Camera } from 'expo-camera';
import styled from 'styled-components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../services/authentication/AuthContext';
import { TouchableRipple } from 'react-native-paper';

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

const PictureButton = styled(Button)`
  justify-content: flex-end;
  align-self: flex-end;
`;

const CameraScreen = () => {
  const { user } = useContext(AuthContext);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const cameraRef = useRef();

  const snap = async () => {
    try {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
      console.log(photo);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera
        ref={(camera) => (cameraRef.current = camera)}
        style={{ flex: 1 }}
        type={type}
      >
        <Button title='take photo' onPress={snap} />
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
              Flip
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default CameraScreen;
