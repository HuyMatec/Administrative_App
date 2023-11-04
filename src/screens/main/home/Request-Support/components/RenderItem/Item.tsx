import React from 'react';
import {View} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import useStyles from '../../styles';
import {data} from '../../types';

const Item = () => {
  const styles = useStyles();

  return (
    <View
      style={{
        width: '100%',
        height: '60%',
      }}>
      <Timeline
        data={data}
        showTime={false}
        listViewContainerStyle={{marginTop: 20}}
        circleSize={48}
        circleColor="#fff"
        separator={true}
        lineColor="#e6e6e6e6"
        lineWidth={5}
        titleStyle={{color: '#000000', fontSize: 14, marginLeft: 30}}
        descriptionStyle={{color: '#000000', fontSize: 12, marginLeft: 30}}
        innerCircle="icon"
      />
    </View>
  );
};

export default Item;
