import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

const InputText = ({label, value, onChangeText, onBlur}) => {
  return (
    <TextInput
      label={label}
      mode="outlined"
      outlineColor="#9b979e"
      activeOutlineColor="#3b6637"
      value={value}
      style={styles.inputStyle}
      onChangeText={onChangeText}
      onBlur={onBlur}
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: '#fff',
    borderColor: 'gray',
    fontSize: 20,
    marginTop: 15,
    width: 600,
    height: 70,
  },
});

export default InputText;
