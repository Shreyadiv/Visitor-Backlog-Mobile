import React from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export enum Mode {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  STORE = 'store',
  SAVE = 'save',
  SAVE_INFO = 'saveInfo',
}

const Button = ({text, onPress, mode, name, size, color, style, selected}) => {
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
      backgroundColor: selected ? '#eceaf4' : 'transparent',
      width: 150,
      height: 50,
      borderRadius: 30,
      borderWidth: 2,
      borderColor: selected ? '#3b6637' : 'gray',
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

  const renderStyle = () => {
    if (mode === Mode.PRIMARY) {
      return btnPrimary.button;
    }
    if (mode === Mode.SECONDARY) {
      return btnSecondary.button;
    }
    if (mode === Mode.STORE) {
      return btnStore.button;
    }
    if (mode === Mode.SAVE) {
      return btnSave.button;
    }
    if (mode === Mode.SAVE_INFO) {
      return btnSaveInfo.button;
    }
    return btnBack.button;
  };

  const renderStyleText = () => {
    if (mode === Mode.PRIMARY) {
      return btnPrimary.textButton;
    }
    if (mode === Mode.SECONDARY) {
      return btnSecondary.textButton;
    }
    if (mode === Mode.STORE) {
      return btnStore.textButton;
    }
    if (mode === Mode.SAVE) {
      return btnSave.textButton;
    }
    if (mode === Mode.SAVE_INFO) {
      return btnSaveInfo.textButton;
    }
    return btnBack.textButton;
  };

  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={renderStyle()}>
        <Icon name={name} size={size} color={color} style={style} />
        <Text style={renderStyleText()}>{text}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default Button;
