import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

const radioButtonsData = [
  {
    id: '1',
    label: 'Email',
    value: 'option1',
    color: '#259e81',
    selected: true,
  },
  {
    id: '2',
    label: 'SMS',
    value: 'option2',
    color: '#259e81',
    selected: false,
  },
];

const RadioButton = () => {
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  const onPressRadioButton = radioButtonsArray => {
    setRadioButtons(radioButtonsArray);
  };
  return (
    <View style={styles.radioButton}>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={onPressRadioButton}
        layout="row"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  radioButton: {
    margin: 10,
  },
});

export default RadioButton;
