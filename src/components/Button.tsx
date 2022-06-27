import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Button = ({
  text,
  onPress,
  primary,
  secondary,
  name,
  size,
  color,
  style,
}) => {
  const btnPrimary = {
    button: {
      alignItems: 'center',
      backgroundColor: 'transparent',
      width: 220,
      height: 50,
      borderRadius: 30,
      borderWidth: 2,
      borderColor: '#fff',
      marginTop: 30,
      marginLeft: 10,
      flexDirection: 'row',
    },
    textButton: {
      fontSize: 20,
      color: '#fff',
    },
  };

  const btnSecondary = {
    button: {
      alignItems: 'center',
      backgroundColor: '#3b6637',
      width: 120,
      height: 40,
      borderRadius: 20,
      flexDirection: 'row',
    },
    textButton: {
      fontSize: 20,
      color: '#fff',
      margin: 5,
    },
  };

  const btn = {
    button: {
      alignItems: 'center',
      backgroundColor: 'transparent',
      width: 120,
      height: 40,
      borderRadius: 20,
      margin: 5,
      marginLeft: 10,
      flexDirection: 'row',
    },
    textButton: {
      fontSize: 20,
      color: '#3b6637',
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
            : btn.button
        }>
        <Icon name={name} size={size} color={color} style={style} />
        <Text
          style={
            primary
              ? btnPrimary.textButton
              : secondary
              ? btnSecondary.textButton
              : btn.textButton
          }>
          {text}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;
