import React, {useState, useEffect} from 'react';
import {Text, StyleSheet} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Display = ({}) => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    var date = moment().utcOffset('+04').format('DD/MM/YYYY');
    setCurrentDate(date);
  }, []);

  return (
    <Text style={styles.dateCurrent}>
      <Icon name="calendar-blank" size={27} color="#3b6637" />
      {currentDate}
    </Text>
  );
};

const styles = StyleSheet.create({
  dateCurrent: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4f4f4f',
    margin: 20,
  },
});

export default Display;
