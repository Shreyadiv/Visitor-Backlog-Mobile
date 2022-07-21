import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Display = ({dateC, name}) => {
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
  const myInterval = () =>
    setInterval(() => setCurrentTime(moment().format('HH:mm')), 1000);

  useEffect(() => {
    let isMounted = true;
    const date = moment().format('DD/MM/YYYY');
    setCurrentDate(date);
    setCurrentTime(moment().format('HH:mm'));
    if (isMounted) {
      myInterval();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => () => clearInterval(myInterval()), []);

  return (
    <>
      <Text style={dateC ? dateCurrent : timeCurrent}>
        <Icon name={name} size={27} color="#3b6637" />
        {dateC ? currentDate : `Time in: ${currentTime}`}
      </Text>
    </>
  );
};

export default Display;
