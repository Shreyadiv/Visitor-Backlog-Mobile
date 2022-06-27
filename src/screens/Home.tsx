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
          name="account"
          size={22}
          color="#fff"
          style={{margin: 12}}
          text="First Time Visitor"
          onPress={() => navigation.navigate('Signup')}
          primary
        />
        <Button
          name="comment-account"
          size={22}
          color="#9ff1a2"
          style={{margin: 12}}
          text="I have a visitor ID"
          onPress={() => navigation.navigate('Login')}
          primary
          colorPrimary
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
