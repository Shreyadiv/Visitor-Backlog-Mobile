/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {LogBox} from 'react-native';
import Button, {Mode} from '../components/Button';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import InputText from '../components/Input';
import {useFormik} from 'formik';
import * as yup from 'yup';
import Display from '../components/Display';
import DropdownComponent from '../components/Dropdown';
import {userLogin} from '../services/login-service.ts';
import {VisitorLog, LoginResponse} from '../models/mobile-model.ts';

const validationSchema = yup.object().shape({
  visitorid: yup.string().required('Please, provide your visitorid!'),
  purpose: yup.string().required('Please, specify your purpose of visit!'),
});

const Login = ({navigation}) => {
  const formik = useFormik({
    initialValues: {
      visitorid: '',
      purpose: '',
    },
    validationSchema,
    onSubmit: (values: VisitorLog, {resetform}) => {
      userLogin(values).then((response: LoginResponse) => {
        navigation.navigate('LoginVisitor', {
          visitorLog: response.data,
        });
        resetform();
      });
    },
  });
  const handleDropdown = (text: any) => {
    formik.values.purpose = text.label;
    formik.setFieldTouched('purpose');
  };

  const showTimer = () => {
    const {visitorid, purpose} = formik.values;
    return visitorid && purpose ? true : false;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Returning Visitor</Text>
        <Display dateC name="calendar-blank" />
      </View>

      <View style={styles.formContainer}>
        <InputText
          label="Visitor ID"
          value={formik.values.visitorid}
          onChangeText={formik.handleChange('visitorid')}
          onBlur={() => formik.setFieldTouched('visitorid')}
        />
        {formik.touched.visitorid && formik.errors.visitorid && (
          <Text style={{fontSize: 15, color: '#FF0D10'}}>
            {formik.errors.visitorid}
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
            size={22}
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
    paddingRight: '5%',
  },
  header: {
    flexDirection: 'row',
  },
});
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

export default Login;
