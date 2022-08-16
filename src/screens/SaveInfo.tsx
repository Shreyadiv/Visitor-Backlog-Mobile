/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {LogBox} from 'react-native';
import Button, {Mode} from '../components/Button';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {TextInput, RadioButton} from 'react-native-paper';
import {useFormik} from 'formik';
import * as yup from 'yup';
import moment from 'moment';
import {userSave} from '../services/saveinfo-service.ts';
import {UpdateUser, SignupResponse} from '../models/mobile-model.ts';

const validationSchema = yup.object().shape({
  transmissionMode: yup.string(),
  email: yup.string().when('transmissionMode', {
    is: 'email',
    then: yup.string().email().required('Please, provide your email address!'),
  }),

  mobile: yup.string().when('transmissionMode', {
    is: 'mobile',
    then: yup
      .string()
      .length(8)
      .required('Please, provide a valid phone number'),
  }),
});

const SaveInfo = ({route, navigation}) => {
  const {user} = route.params;
  const WEEK = `${moment().add(2, 'weeks').format('yyyy-MM-DD')}`;
  const MONTH = `${moment().add(1, 'M').format('yyyy-MM-DD')}`;
  const formik = useFormik({
    initialValues: {
      email: '',
      mobile: '',
      transmissionMode: '',
      expirationDate: '',
    },
    validationSchema,
    onSubmit: (values: UpdateUser) => {
      const newObject = {...user, ...values};
      userSave(newObject).then((response: SignupResponse) => {
        navigation.navigate('Thankyou', {
          SignupResponse: response.data.SignupResponse,
        });
      });
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
            onPress={() => formik.setFieldValue('expirationDate', WEEK)}
            mode={Mode.SAVE}
            selected={formik.values.expirationDate === WEEK}
          />
          <Button
            text="A Month"
            onPress={() => formik.setFieldValue('expirationDate', MONTH)}
            mode={Mode.SAVE}
            selected={formik.values.expirationDate === MONTH}
          />
          <Button
            text="Indefinitely"
            onPress={() => formik.setFieldValue('expirationDate', '')}
            mode={Mode.SAVE}
            selected={formik.values.expirationDate === ''}
          />
        </View>

        <View>
          <Text style={styles.subTitle}>
            Visitor ID:
            <Text style={{color: '#3b6637'}}> {user.visitorid} </Text>
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
                  <RadioButton value="mobile" color="#3b6637" />
                </>
              </View>
            </RadioButton.Group>
          </View>
        </View>
        <View style={styles.formContainer}>
          {formik.values.transmissionMode === 'mobile' ? (
            <>
              <TextInput
                label="Mobile Number"
                mode="outlined"
                keyboardType="phone-pad"
                outlineColor="#3b6637"
                activeOutlineColor="#3b6637"
                value={formik.values.mobile}
                style={styles.inputStyle}
                onChangeText={formik.handleChange('mobile')}
                onBlur={() => formik.setFieldTouched('mobile')}
              />
              {formik.touched.mobile && formik.errors.mobile && (
                <Text style={{fontSize: 15, color: '#FF0D10'}}>
                  {formik.errors.mobile}
                </Text>
              )}
            </>
          ) : (
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
                <Text style={{fontSize: 15, color: '#FF0D10'}}>
                  {formik.errors.email}
                </Text>
              )}
            </>
          )}

          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-end',
              paddingTop: 20,
            }}>
            <Button
              name="arrow-left"
              size={22}
              color="#3b6637"
              style={{margin: 5}}
              text="Back"
              onPress={() => navigation.navigate('StoreInfo')}
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
    width: 600,
    height: 60,
    fontSize: 20,
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
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

export default SaveInfo;
