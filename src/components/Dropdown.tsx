/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const data = [
  {label: 'Meeting', value: '1'},
  {label: 'Training', value: '2'},
  {label: 'Interview', value: '3'},
  {label: 'Other', value: '4'},
];

const DropdownComponent = ({onChange}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: '#3b6637'}]}>
          Purpose of Visit
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: '#3b6637'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Purpose of Visit' : '...'}
        value={value}
        onFocus={() => setIsFocus(true)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
          onChange(item);
        }}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    marginTop: 20,
    marginBottom: 0,
    height: 70,
    width: 600,
    borderColor: 'lightgray',
    borderWidth: 1.5,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 10,
    bottom: 60,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 20,
  },
  selectedTextStyle: {
    fontSize: 20,
    color: 'black',
  },
});
