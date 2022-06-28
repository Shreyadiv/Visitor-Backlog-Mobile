/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Button from '../components/Button';

import {SafeAreaView, StyleSheet, View, Text, Alert} from 'react-native';
import RadioButton from '../components/RadioButton';
import {TextInput} from '@react-native-material/core';
import {Formik} from 'formik';
import * as yup from 'yup';

const SaveInfo = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Save my info</Text>
        <Text style={styles.subTitle}>MNS can store my info for</Text>
        <View style={{flexDirection: 'row'}}>
          <Button
            text="Two Weeks"
            onPress={() => console.log('Two Weeks')}
            save
          />
          <Button text="A Month" onPress={() => console.log('A Month')} save />
          <Button
            text="Indefinitely"
            onPress={() => console.log('Indefinitely')}
            save
          />
        </View>
        <Text style={styles.subTitle}>
          Visitor ID:
          <Text style={{color: '#3b6637'}}> V1006001 </Text>
          <Text style={{fontWeight: 'normal'}}> (use on next visit)</Text>
          {'\n'}
          Send my Visitor ID via <RadioButton />
        </Text>
      </View>
      <Formik
        initialValues={{
          email: '',
        }}
        onSubmit={values => Alert.alert(JSON.stringify(values))}
        validationSchema={yup.object().shape({
          email: yup.string().required('Please, provide your email address!'),
        })}>
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
        }) => (
          <View style={styles.formContainer}>
            {touched.email && errors.email && (
              <Text style={{fontSize: 12, color: '#FF0D10'}}>
                {errors.email}
              </Text>
            )}
            <TextInput
              label="Email"
              variant="outlined"
              color="#3b6637"
              value={values.email}
              style={styles.inputStyle}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
            />
            <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
              <Button
                name="arrow-left"
                size={22}
                color="#3b6637"
                style={{margin: 5}}
                text="Back"
                disabled={!isValid}
                onPress={() => navigation.navigate('StoreInfo')}
              />
              <Button
                name="content-save"
                size={22}
                color="#fff"
                style={{margin: 5}}
                text="Save my info"
                disabled={!isValid}
                onPress={() => navigation.navigate('Thankyou')}
                saveInfo
              />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    fontSize: 25,
    borderRadius: 5,
    padding: 12,
    marginBottom: 20,
    width: 600,
    height: 70,
  },
  textInput: {
    height: 40,
    width: '100%',
    margin: 5,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
  },
  formContainer: {
    padding: 20,
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#4f4f4f',
    paddingRight: '5%',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  dateCurrent: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4f4f4f',
    margin: 20,
  },
  header: {
    paddingRight: '5%',
  },
});
console.disableYellowBox = true;

export default SaveInfo;
