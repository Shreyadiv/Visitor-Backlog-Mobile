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

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Returning Visitor</Text>
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
                value={values.visitorid}
                style={styles.inputStyle}
                onChangeText={handleChange('visitorid')}
                onBlur={() => setFieldTouched('visitorid')}
                placeholder="Visitor ID"
              />
              <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                <Button
                  text="Back"
                  disabled={!isValid}
                  onPress={() => navigation.navigate('Signup')}
                />
                <Button
                  text="Sign In"
                  disabled={!isValid}
                  onPress={handleSubmit}
                  secondary
                />
              </View>
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

export default Login;
