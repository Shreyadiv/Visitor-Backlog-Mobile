import * as React from 'react';
import {StyleSheet, Text, ImageBackground, Image, View} from 'react-native';
import Button from '../components/Button';

const Home = ({navigation}) => {
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
        style={{width: '22%', height: 110}}
      />
      <Text style={styles.baseText2}>
        Hello
        <Text style={styles.innerText2}>, hope you're doing </Text>
        <Text style={styles.baseText2}>Great! </Text>
        <Text style={styles.innerText2}>
          {'\n'}
          Have you visited our offices before?
        </Text>
      </Text>

      <View style={{flexDirection: 'row'}}>
        <Button
          text="First Time Visitor"
          onPress={() => navigation.navigate('Signup')}
        />
        <Button
          text="I have a visitor ID"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  baseText: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#9ff1a2',
  },
  innerText: {
    color: '#fff',
  },
  baseText2: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#9ff1a2',
    textAlign: 'center',
    marginTop: 30,
  },
  innerText2: {
    color: '#fff',
  },
});

export default Home;
