/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Button, {Mode} from '../components/Button';

import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {TextInput, RadioButton} from 'react-native-paper';
import {useFormik} from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup.string().email().required('Please, provide your email address!'),
  sms: yup.string().length(8).required('Please, provide a valid phone number'),
});

const SaveInfo = ({navigation}) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      sms: '',
      transmissionMode: '',
      storingPeriod: '',
    },
    validationSchema,
    onSubmit: values => {
      console.log(values);
      navigation.navigate('Thankyou');
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Save my info</Text>
        <Text style={styles.subTitle}>MNS can store my info for</Text>
        <View style={{flexDirection: 'row'}}>
          <Button
            text="Two Weeks"
            onPress={() => formik.setFieldValue('storingPeriod', 'WEEKS')}
            mode={Mode.SAVE}
            selected={formik.values.storingPeriod === 'WEEKS'}
          />
          <Button
            text="A Month"
            onPress={() => formik.setFieldValue('storingPeriod', 'MONTH')}
            mode={Mode.SAVE}
            selected={formik.values.storingPeriod === 'MONTH'}
          />
          <Button
            text="Indefinitely"
            onPress={() => formik.setFieldValue('storingPeriod', 'UNDEFINED')}
            mode={Mode.SAVE}
            selected={formik.values.storingPeriod === 'UNDEFINED'}
          />
        </View>

        <View>
          <Text style={styles.subTitle}>
            Visitor ID:
            <Text style={{color: '#3b6637'}}> V1006001 </Text>
            <Text style={{fontWeight: 'normal'}}> (use on next visit)</Text>
          </Text>
          <View>
            <RadioButton.Group
              onValueChange={formik.handleChange('transmissionMode')}
              value={formik.values.transmissionMode}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.subTitle}>Send my Visitor ID via</Text>
                <>
                  <Text style={{fontSize: 20, color: 'black'}}>Email</Text>
                  <RadioButton value="email" color="#3b6637" />
                </>
                <>
                  <Text style={{fontSize: 20, color: 'black'}}>SMS</Text>
                  <RadioButton value="sms" color="#3b6637" />
                </>
              </View>
            </RadioButton.Group>
          </View>
        </View>
        <View style={styles.formContainer}>
          {formik.values.transmissionMode === 'email' ? (
            <>
              <TextInput
                label="Email Address"
                mode="outlined"
                outlineColor="#3b6637"
                activeOutlineColor="#3b6637"
                value={formik.values.email}
                style={styles.inputStyle}
                onChangeText={formik.handleChange('email')}
                onBlur={() => formik.setFieldTouched('email')}
              />
              {formik.touched.email && formik.errors.email && (
                <Text style={{fontSize: 12, color: '#FF0D10'}}>
                  {formik.errors.email}
                </Text>
              )}
            </>
          ) : (
            <>
              <TextInput
                label="Phone Number"
                mode="outlined"
                keyboardType="phone-pad"
                outlineColor="#3b6637"
                activeOutlineColor="#3b6637"
                value={formik.values.sms}
                style={styles.inputStyle}
                onChangeText={formik.handleChange('sms')}
                onBlur={() => formik.setFieldTouched('sms')}
              />
              {formik.touched.sms && formik.errors.sms && (
                <Text style={{fontSize: 12, color: '#FF0D10'}}>
                  {formik.errors.sms}
                </Text>
              )}
            </>
          )}

          <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
            <Button
              name="arrow-left"
              size={22}
              color="#3b6637"
              style={{margin: 5}}
              text="Back"
              onPress={() => navigation.navigate('Home')}
            />
            <Button
              name="content-save"
              size={22}
              color="#fff"
              style={{margin: 5}}
              text="Save my info"
              disabled={!formik.isValid}
              onPress={formik.handleSubmit}
              mode={Mode.SAVE_INFO}
            />
          </View>
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
  },
  inputStyle: {
    marginBottom: 20,
    width: 600,
    height: 60,
  },
  textInput: {
    height: 40,
    width: '100%',
    margin: 5,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
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
    paddingRight: 15,
    paddingBottom: 15,
  },
  dateCurrent: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4f4f4f',
    margin: 20,
  },
  header: {
    padding: '5%',
  },
  selectedButton: {
    borderColor: '#4f4f4f',
    backgroundColor: 'gray',
  },
});
console.disableYellowBox = true;

export default SaveInfo;
