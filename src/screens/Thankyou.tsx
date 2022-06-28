/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {StyleSheet, Text, ImageBackground, Image} from 'react-native';

const Thankyou = () => {
  return (
    <ImageBackground
      style={styles.body}
      source={require('../assets/Background.gif')}>
      <Text style={styles.baseText}>
        Welcome
        <Text style={styles.innerText}> to</Text>
      </Text>
      <Image
        source={require('../assets/logo.png')}
        style={{width: '25%', height: 135}}
      />
      <Text style={styles.baseText2}>
        Thank you
        <Text style={styles.innerText2}> for your time </Text>
      </Text>
      <Text style={styles.baseText3}>
        {'\n'}
        Have a great
        <Text style={styles.innerText3}> rest of the day </Text>
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
    fontSize: 60,
    color: '#9ff1a2',
    textAlign: 'center',
    marginTop: 30,
  },
  innerText2: {
    color: '#fff',
  },
  baseText3: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#9ff1a2',
    textAlign: 'center',
  },
  innerText3: {
    color: '#fff',
  },
});

export default Thankyou;
