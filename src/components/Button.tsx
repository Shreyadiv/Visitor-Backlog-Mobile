import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';

const Button = ({text, onPress}) => {
  const style = {
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

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={style.button}>
        <Text style={style.textButton}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;
