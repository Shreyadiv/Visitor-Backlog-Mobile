/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Button, {Mode} from '../components/Button';

import {SafeAreaView, StyleSheet, View, Text, Alert} from 'react-native';
import {TextInput} from '@react-native-material/core';
import {Formik} from 'formik';
import * as yup from 'yup';
import Display from '../components/Display';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Returning Visitor</Text>
        <Display />
      </View>
      <Formik
        initialValues={{
          visitorid: '',
        }}
        onSubmit={values => Alert.alert(JSON.stringify(values))}
        validationSchema={yup.object().shape({
          visitorid: yup.string().required('Please, provide your visitorid!'),
        })}>
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit,
        }) => (
          <View style={styles.formContainer}>
            {touched.visitorid && errors.visitorid && (
              <Text style={{fontSize: 12, color: '#FF0D10'}}>
                {errors.visitorid}
              </Text>
            )}
            <TextInput
              label="Visitor ID"
              variant="outlined"
              color="#3b6637"
              value={values.visitorid}
              style={styles.inputStyle}
              onChangeText={handleChange('visitorid')}
              onBlur={() => setFieldTouched('visitorid')}
            />
            <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
              <Button
                name="arrow-left"
                size={22}
                color="#3b6637"
                style={{margin: 5}}
                text="Back"
                disabled={!isValid}
                onPress={() => navigation.navigate('Home')}
              />
              <Button
                name="check"
                size={22}
                color="#fff"
                style={{margin: 5}}
                text="Sign In"
                disabled={!isValid}
                onPress={handleSubmit}
                mode={Mode.SECONDARY}
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
    margin: 10,
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
  },
  dateCurrent: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4f4f4f',
    margin: 20,
  },
  header: {
    flexDirection: 'row',
  },
});
console.disableYellowBox = true;

export default Login;
