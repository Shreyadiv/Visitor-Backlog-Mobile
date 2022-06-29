/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {StyleSheet, Text, ImageBackground, Image, View} from 'react-native';
import Button, {Mode} from '../components/Button';

const StoreInfo = ({navigation}) => {
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
        <Text style={styles.innerText2}> for filling in your form, </Text>
        <Text style={styles.innerText2}>
          {'\n'}
          would you like us to
          <Text style={styles.baseText2}> store your info </Text>
          for
          <Text style={styles.baseText2}> future visits? </Text>
        </Text>
      </Text>

      <View style={{flexDirection: 'row'}}>
        <Button
          name="content-save"
          size={22}
          color="#9ff1a2"
          style={{margin: 5}}
          width={250}
          text="Save my personal info"
          onPress={() => navigation.navigate('SaveInfo')}
          mode={Mode.PRIMARY}
        />
        <Button
          name="delete"
          size={22}
          color="#fff"
          style={{margin: 8}}
          text="Discard my info within the next 24 hours"
          onPress={() => navigation.navigate('Thankyou')}
          mode={Mode.STORE}
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
    fontSize: 60,
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

export default StoreInfo;
