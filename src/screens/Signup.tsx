import React from 'react';

import Button from '../components/Button';
import {SafeAreaView, StyleSheet, View, Text, Alert} from 'react-native';
import {TextInput} from '@react-native-material/core';
import {Formik} from 'formik';
import * as yup from 'yup';
import Display from '../components/Display';

const Signup = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Visitor Sign In</Text>
        <Display />
      </View>
      <Formik
        initialValues={{
          name: '',
          nid: '',
          companyName: '',
          purpose: '',
        }}
        onSubmit={values => Alert.alert(JSON.stringify(values))}
        validationSchema={yup.object().shape({
          name: yup.string().required('Please, provide your name!'),
          nid: yup.string().required('Please, provide your nid!'),
          companyName: yup
            .string()
            .required('Please, provide your company name!'),
          purpose: yup
            .string()
            .required('Please, specify your purpose of visit!'),
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
            {touched.name && errors.name && (
              <Text style={{fontSize: 12, color: '#FF0D10'}}>
                {errors.name}
              </Text>
            )}
            <TextInput
              label="Full Name"
              variant="outlined"
              color="#3b6637"
              value={values.name}
              style={styles.inputStyle}
              onChangeText={handleChange('name')}
              onBlur={() => setFieldTouched('name')}
            />

            {touched.nid && errors.nid && (
              <Text style={{fontSize: 12, color: '#FF0D10'}}>{errors.nid}</Text>
            )}
            <TextInput
              label="I.D. Number"
              variant="outlined"
              color="#3b6637"
              value={values.nid}
              style={styles.inputStyle}
              onChangeText={handleChange('nid')}
              onBlur={() => setFieldTouched('nid')}
            />

            {touched.companyName && errors.companyName && (
              <Text style={{fontSize: 12, color: '#FF0D10'}}>
                {errors.companyName}
              </Text>
            )}
            <TextInput
              label="Company Name"
              variant="outlined"
              color="#3b6637"
              value={values.companyName}
              style={styles.inputStyle}
              onChangeText={handleChange('companyName')}
              onBlur={() => setFieldTouched('companyName')}
            />
            {touched.purpose && errors.purpose && (
              <Text style={{fontSize: 12, color: '#FF0D10'}}>
                {errors.purpose}
              </Text>
            )}
            <TextInput
              label="Purpose of Visit"
              variant="outlined"
              color="#3b6637"
              value={values.purpose}
              style={styles.inputStyle}
              onChangeText={handleChange('purpose')}
              onBlur={() => setFieldTouched('purpose')}
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
                secondary
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
    paddingRight: '10%',
  },
  header: {
    flexDirection: 'row',
  },
});
console.disableYellowBox = true;

export default Signup;
