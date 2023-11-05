import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SelectList} from 'react-native-dropdown-select-list';
import {SafeAreaView} from 'react-native';
import {data} from '../../types';
import {Icon} from '@rneui/themed';
import useStyles from '../../styles';

const Item = () => {
  const [selected, setSelected] = React.useState('');

  const styles = useStyles();

  return (
    <SafeAreaView>
      <SelectList
        setSelected={(val: any) => setSelected(val)}
        data={data}
        save="value"
        placeholder="Lựa chọn cơ sở"
        search={false}
        boxStyles={styles.viewBox}
        dropdownTextStyles={styles.viewItem}
        onSelect={() => {
          return (
            <TouchableOpacity>
              <Text>Xác nhận</Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Item;
