import React from 'react';
import { SafeAreaView } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import useStyles from '../styles';
import { dataTime } from '../types';

const ItemTime = () => {
  const [selected, setSelected] = React.useState('');

  const styles = useStyles();

  return (
    <SafeAreaView>
      <SelectList
        setSelected={(val: any) => setSelected(val)}
        data={dataTime}
        save="value"
        placeholder="Thời gian"
        search={false}
        boxStyles={styles.viewBox2}
        inputStyles={styles.viewInputItem}
        dropdownTextStyles={styles.viewItem}
      />
    </SafeAreaView>
  );
};

export default ItemTime;
