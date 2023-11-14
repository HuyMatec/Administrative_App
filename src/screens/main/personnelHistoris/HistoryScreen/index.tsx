import {View, Text, StatusBar, Image} from 'react-native';
import React from 'react';
import HistoryList from './components/Item';
import useStyles from './styles';

const HistoryScreen = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2D5381" />
      <View style={styles.view2}>
        <HistoryList />
      </View>
    </View>
  );
};

export default HistoryScreen;
