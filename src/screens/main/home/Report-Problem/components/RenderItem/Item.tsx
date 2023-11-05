import React from 'react';
import { SafeAreaView } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import useStyles from '../../styles';
import { data } from '../../types';

const Item = () => {
  const [selected, setSelected] = React.useState('');

  const styles = useStyles();

  return (
    <SafeAreaView style={styles.viewPD}>
      <SelectList
        setSelected={(val: any) => setSelected(val)}
        data={data}
        save="value"
        placeholder="Sự cố đang gặp phải"
        search={false}
        boxStyles={styles.viewBox}
        inputStyles={styles.viewInputItem}
        dropdownTextStyles={styles.viewItem}
      />
    </SafeAreaView>
  );
};

export default Item;
