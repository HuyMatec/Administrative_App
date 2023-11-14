import React from 'react';
import { SafeAreaView } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { dataProblem } from '../types';
import useStyles from '../styles';

const ItemProblem = () => {
  const [selected, setSelected] = React.useState('');
  const styles = useStyles();
  return (
    <SafeAreaView>
      <SelectList
        setSelected={(val: any) => setSelected(val)}
        data={dataProblem}
        save="value"
        placeholder="Lỗi sự cố từ"
        search={false}
        boxStyles={styles.viewBox1}
        inputStyles={styles.viewInputItem}
        dropdownTextStyles={styles.viewItem}
      />
    </SafeAreaView>
  );
};

export default ItemProblem;
