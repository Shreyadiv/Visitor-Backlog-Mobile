import * as React from 'react';

import Button from '../components/Button';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Alert,
  TextInput,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';

const Signup = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Visitor Sign In</Text>
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
                value={values.name}
                style={styles.inputStyle}
                onChangeText={handleChange('name')}
                onBlur={() => setFieldTouched('name')}
                placeholder="Full Name"
              />

              {touched.nid && errors.nid && (
                <Text style={{fontSize: 12, color: '#FF0D10'}}>
                  {errors.nid}
                </Text>
              )}
              <TextInput
                value={values.nid}
                style={styles.inputStyle}
                onChangeText={handleChange('nid')}
                onBlur={() => setFieldTouched('nid')}
                placeholder="I.D. Number"
              />

              {touched.companyName && errors.companyName && (
                <Text style={{fontSize: 12, color: '#FF0D10'}}>
                  {errors.companyName}
                </Text>
              )}
              <TextInput
                value={values.companyName}
                style={styles.inputStyle}
                onChangeText={handleChange('companyName')}
                onBlur={() => setFieldTouched('companyName')}
                placeholder="Company Name"
              />
              {touched.purpose && errors.purpose && (
                <Text style={{fontSize: 12, color: '#FF0D10'}}>
                  {errors.purpose}
                </Text>
              )}
              <TextInput
                value={values.purpose}
                style={styles.inputStyle}
                onChangeText={handleChange('purpose')}
                onBlur={() => setFieldTouched('purpose')}
                placeholder="Purpose of Visit"
              />
              <Button
                text="Sign In"
                disabled={!isValid}
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
      </View>
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
    borderWidth: 1.5,
    borderColor: 'black',
    padding: 12,
    marginBottom: 20,
    width: 500,
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
    padding: 50,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#4f4f4f',
    paddingLeft: 50,
  },
});
console.disableYellowBox = true;

export default Signup;
