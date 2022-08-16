/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {LogBox} from 'react-native';
import Button, {Mode} from '../components/Button';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {useFormik} from 'formik';
import * as yup from 'yup';
import InputText from '../components/Input';
import Display from '../components/Display';
import moment from 'moment';
import DropdownComponent from '../components/Dropdown';
import {userSignup} from '../services/signup-service.ts';
import {userLogin} from '../services/login-service.ts';
import {User, SignupResponse, LoginResponse} from '../models/mobile-model.ts';

const validationSchema = yup.object().shape({
  fullname: yup.string().required('Please, provide your full name!'),
  nid: yup.string().required('Please, provide your id number!'),
  companyName: yup.string().required('Please, provide your company name!'),
  purpose: yup.string().required('Please, specify your purpose of visit!'),
});

const Signup = ({navigation}) => {
  const day = `${moment().add(24, 'hours').format('yyyy-MM-DD')}`;
  const formik = useFormik({
    initialValues: {
      fullname: '',
      nid: '',
      companyName: '',
      purpose: '',
      expirationDate: ('', day),
    },
    validationSchema,
    onSubmit: (values: User) => {
      userSignup(values).then((response: SignupResponse) => {
        const loginValues = response.data;
        navigation.navigate('StoreInfo', {
          user: response.data,
        });
        userLogin(loginValues).then((response2: LoginResponse) => {
          console.log('test', response2.data);
        });
      });
    },
  });
  const handleDropdown = (text: any) => {
    formik.values.purpose = text.label;
    formik.setFieldTouched('purpose');
  };

  const showTimer = () => {
    const {fullname, nid, companyName, purpose} = formik.values;
    return fullname && nid && companyName && purpose ? true : false;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Visitor Sign In</Text>
        <Display dateC name="calendar-blank" />
      </View>

      <View style={styles.formContainer}>
        <InputText
          label="Full Name"
          value={formik.values.fullname}
          onChangeText={formik.handleChange('fullname')}
          onBlur={() => formik.setFieldTouched('fullname')}
        />
        {formik.touched.fullname && formik.errors.fullname && (
          <Text style={{fontSize: 15, color: '#FF0D10'}}>
            {formik.errors.fullname}
          </Text>
        )}

        <InputText
          label="ID Number"
          value={formik.values.nid}
          onChangeText={formik.handleChange('nid')}
          onBlur={() => formik.setFieldTouched('nid')}
        />
        {formik.touched.nid && formik.errors.nid && (
          <Text style={{fontSize: 15, color: '#FF0D10'}}>
            {formik.errors.nid}
          </Text>
        )}

        <InputText
          label="Company Name"
          value={formik.values.companyName}
          onChangeText={formik.handleChange('companyName')}
          onBlur={() => formik.setFieldTouched('companyName')}
        />
        {formik.touched.companyName && formik.errors.companyName && (
          <Text style={{fontSize: 15, color: '#FF0D10'}}>
            {formik.errors.companyName}
          </Text>
        )}
        <DropdownComponent onChange={handleDropdown} />
        {formik.touched.purpose && formik.errors.purpose && (
          <Text style={{fontSize: 15, color: '#FF0D10'}}>
            {formik.errors.purpose}
          </Text>
        )}

        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            paddingTop: 20,
          }}>
          {showTimer() && <Display name="clock-time-four-outline" />}

          <Button
            name="arrow-left"
            size={25}
            color="#3b6637"
            style={{margin: 5}}
            text="Back"
            disabled={!formik.isValid}
            onPress={() => navigation.navigate('Home')}
          />
          <Button
            name="check"
            size={22}
            color="#fff"
            style={{margin: 5}}
            text="Sign In"
            disabled={!formik.isValid}
            onPress={formik.handleSubmit}
            mode={Mode.SECONDARY}
          />
        </View>
      </View>
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
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

export default Signup;
