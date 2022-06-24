import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';

const Button = ({text, onPress, primary, secondary}) => {
  const btnPrimary = {
    button: {
      alignItems: 'center',
      backgroundColor: 'transparent',
      width: 200,
      height: 40,
      borderRadius: 20,
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
      alignItems: 'center',
      backgroundColor: '#3b6637',
      width: 140,
      height: 40,
      borderRadius: 20,
      marginLeft: 10,
    },
    textButton: {
      fontSize: 20,
      color: '#fff',
    },
  };

  const btn = {
    button: {
      alignItems: 'center',
      backgroundColor: 'transparent',
      width: 140,
      height: 40,
      borderRadius: 20,
      marginLeft: 10,
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
