import {Header, Icon} from '@rneui/themed';
import {Text, TouchableOpacity, View} from 'react-native';
import useStyles from './styles';
import {CustomHeaderProps} from './types';

const HeaderCustomV1: React.FunctionComponent<CustomHeaderProps> = props => {
  const styles = useStyles();
  return (
    <Header
      centerContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
      containerStyle={styles.container}
      leftComponent={
        <View style={styles.viewRow}>
          <TouchableOpacity
            style={styles.viewiconLeft}
            onPress={props.onPressLeftIcon}>
            {props.leftIcon?.name && (
              <Icon
                name={props.leftIcon.name}
                size={30}
                color={props.leftIcon.color || styles.leftIcon.color}
                type={props.leftIcon.type}
              />
            )}
          </TouchableOpacity>
        </View>
      }
      centerComponent={
        <Text style={props.titleStyle || styles.textTitle}>{props.title}</Text>
      }
      linearGradientProps={{}}
      placement="left"
      hideStatusBar={true}
      backgroundColor="transparent"
    />
  );
};
export default HeaderCustomV1;
