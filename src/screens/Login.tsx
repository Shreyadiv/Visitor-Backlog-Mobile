/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Button, {Mode} from '../components/Button';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import InputText from '../components/Input';
import {Formik} from 'formik';
import * as yup from 'yup';
import Display from '../components/Display';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Returning Visitor</Text>
        <Display dateC name="calendar-blank" />
      </View>
      <Formik
        initialValues={{
          visitorid: '',
        }}
        onSubmit={values => {
          console.log(values);
          navigation.navigate('LoginVisitor');
        }}
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
            <InputText
              label="Visitor ID"
              value={values.visitorid}
              onChangeText={handleChange('visitorid')}
              onBlur={() => setFieldTouched('visitorid')}
            />
            {touched.visitorid && errors.visitorid && (
              <Text style={{fontSize: 15, color: '#FF0D10'}}>
                {errors.visitorid}
              </Text>
            )}
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                paddingTop: 20,
              }}>
              <Display name="clock-time-four-outline" text=" Time in: " />
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
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#4f4f4f',
    paddingRight: '5%',
  },
  header: {
    flexDirection: 'row',
  },
});
console.disableYellowBox = true;

export default Login;
