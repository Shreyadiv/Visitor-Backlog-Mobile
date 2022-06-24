import React from 'react';
import {TextInput as RNTextInput, View, StyleSheet} from 'react-native';

const Input = () => {
  const validationColor = '#223e4b';
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        borderRadius: 8,
        borderColor: validationColor,
        borderWidth: StyleSheet.hairlineWidth,
        padding: 8,
      }}>
      <View style={{flex: 1}}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor="black"
        />
      </View>
    </View>
  );
};

export default Input;
