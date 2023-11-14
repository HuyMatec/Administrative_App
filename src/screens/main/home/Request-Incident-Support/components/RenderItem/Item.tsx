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
        listViewContainerStyle={styles.listView}
        circleSize={48}
        circleColor="#fff"
        separator={true}
        lineColor="#e6e6e6e6"
        lineWidth={5}
        titleStyle={styles.title}
        descriptionStyle={styles.description}
        innerCircle="icon"
      />
    </View>
  );
};

export default Item;
