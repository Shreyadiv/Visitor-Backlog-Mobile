/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Display = ({dateC, name, text}) => {
  const dateCurrent = {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4f4f4f',
    margin: 20,
  };

  const timeCurrent = {
    flexDirection: 'row',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3b6637',
    paddingRight: '10%',
  };
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    var date = moment().format('DD/MM/YYYY');
    setCurrentDate(date);
    var time = moment().format('HH:MM');
    setCurrentTime(time);
  }, []);

  return (
    <>
      <Text style={dateC ? dateCurrent : timeCurrent}>
        <Icon name={name} size={27} color="#3b6637" />
        <Text style={{color: '#4f4f4f'}}>{text}</Text>
        {dateC ? currentDate : currentTime}
      </Text>
    </>
  );
};

export default Display;
