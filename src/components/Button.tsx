import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Button = ({
  text,
  onPress,
  primary,
  secondary,
  store,
  save,
  saveInfo,
  name,
  size,
  color,
  style,
}) => {
  const btnPrimary = {
    button: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
      width: 240,
      height: 50,
      borderRadius: 30,
      borderWidth: 2,
      borderColor: '#fff',
      marginTop: 30,
      marginLeft: 10,
    },
    textButton: {
      fontSize: 20,
      color: '#fff',
    },
  };

  const btnSecondary = {
    button: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#3b6637',
      width: 120,
      height: 40,
      borderRadius: 20,
    },
    textButton: {
      fontSize: 20,
      color: '#fff',
      margin: 5,
    },
  };

  const btnBack = {
    button: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
      width: 120,
      height: 40,
      borderRadius: 20,
      margin: 5,
      marginLeft: 10,
    },
    textButton: {
      fontSize: 20,
      color: '#3b6637',
    },
  };

  const btnStore = {
    button: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
      width: 430,
      height: 50,
      borderRadius: 30,
      borderWidth: 2,
      borderColor: '#fff',
      marginTop: 30,
      marginLeft: 10,
    },
    textButton: {
      fontSize: 20,
      color: '#fff',
    },
  };
  const btnSave = {
    button: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
      width: 150,
      height: 50,
      borderRadius: 30,
      borderWidth: 2,
      borderColor: 'gray',
      marginTop: 20,
      marginBottom: 20,
      marginRight: 15,
    },
    textButton: {
      margin: 1,
      fontSize: 20,
      color: '#3b6637',
    },
  };
  const btnSaveInfo = {
    button: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#3b6637',
      width: 190,
      height: 40,
      borderRadius: 20,
    },
    textButton: {
      fontSize: 20,
      color: '#fff',
      margin: 5,
    },
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={
          primary
            ? btnPrimary.button
            : secondary
            ? btnSecondary.button
            : store
            ? btnStore.button
            : save
            ? btnSave.button
            : saveInfo
            ? btnSaveInfo.button
            : btnBack.button
        }>
        <Icon name={name} size={size} color={color} style={style} />
        <Text
          style={
            primary
              ? btnPrimary.textButton
              : secondary
              ? btnSecondary.textButton
              : store
              ? btnStore.textButton
              : save
              ? btnSave.textButton
              : saveInfo
              ? btnSaveInfo.textButton
              : btnBack.textButton
          }>
          {text}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;
