/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Button, {Mode} from '../components/Button';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import InputText from '../components/Input';
import Display from '../components/Display';
import DropdownComponent from '../components/Dropdown';

const Signup = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Visitor Sign In</Text>
        <Display dateC name="calendar-blank" />
      </View>
      <Formik
        initialValues={{
          name: '',
          nid: '',
          companyName: '',
          //purpose: '',
        }}
        onSubmit={values => {
          console.log(values);
          navigation.navigate('StoreInfo');
        }}
        validationSchema={yup.object().shape({
          name: yup.string().required('Please, provide your name!'),
          nid: yup.string().required('Please, provide your id number!'),
          companyName: yup
            .string()
            .required('Please, provide your company name!'),
          // purpose: yup
          //   .string()
          //   .required('Please, specify your purpose of visit!'),
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
            <InputText
              label="Full Name"
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={() => setFieldTouched('name')}
            />
            {touched.name && errors.name && (
              <Text style={{fontSize: 15, color: '#FF0D10'}}>
                {errors.name}
              </Text>
            )}

            <InputText
              label="ID Number"
              value={values.nid}
              onChangeText={handleChange('nid')}
              onBlur={() => setFieldTouched('nid')}
            />
            {touched.nid && errors.nid && (
              <Text style={{fontSize: 15, color: '#FF0D10'}}>{errors.nid}</Text>
            )}

            <InputText
              label="Company Name"
              value={values.companyName}
              onChangeText={handleChange('companyName')}
              onBlur={() => setFieldTouched('companyName')}
            />
            {touched.companyName && errors.companyName && (
              <Text style={{fontSize: 15, color: '#FF0D10'}}>
                {errors.companyName}
              </Text>
            )}
            <DropdownComponent />
            {/* {touched.purpose && errors.purpose && (
              <Text style={{fontSize: 15, color: '#FF0D10'}}>
                {errors.purpose}
              </Text>
            )} */}

            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                paddingTop: 20,
              }}>
              <Display name="clock-time-four-outline" text=" Time in: " />
              <Button
                name="arrow-left"
                size={25}
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
    backgroundColor: '#fff',
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
