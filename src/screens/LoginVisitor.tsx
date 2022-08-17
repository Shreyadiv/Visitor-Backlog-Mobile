/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {StyleSheet, Text, ImageBackground, Image} from 'react-native';

const LoginVisitor = () => {
  return (
    <ImageBackground
      style={styles.body}
      source={require('../assets/Background.gif')}>
      <Text style={styles.baseText}>
        Welcome
        <Text style={styles.innerText}> toTEST</Text>
      </Text>
      <Image
        source={require('../assets/logo.png')}
        style={{width: '25%', height: 135}}
        resizeMode="contain"
      />
      <Text style={styles.baseText2}>
        Glad to have you back
        {'\n'}
        <Text style={styles.innerText2}>Have a great day</Text>
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontWeight: 'bold',
    fontSize: 60,
    color: '#9ff1a2',
  },
  innerText: {
    color: '#fff',
  },
  baseText2: {
    fontWeight: 'bold',
    fontSize: 55,
    color: '#9ff1a2',
    textAlign: 'center',
    marginTop: 30,
  },
  innerText2: {
    color: '#fff',
  },
});

export default LoginVisitor;
