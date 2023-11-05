import React, {FunctionComponent} from 'react';

import {InputProps as BaseIPProps, Input} from '@rneui/themed';
import {
  Keyboard,
  TextInput,
  TextInputProps,
  TouchableNativeFeedback,
} from 'react-native';

import useStyles from './styles';
import {InputProps} from './types';

const InputCustomV1: FunctionComponent<
  InputProps & TextInputProps & BaseIPProps
> = React.forwardRef<TextInput, InputProps & TextInputProps>((props, ref) => {
  const styles = useStyles();

  const [inputFocused, setInputFocused] = React.useState(false);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  return (
    <TouchableNativeFeedback onPress={() => Keyboard.dismiss()}>
      <Input
        inputContainerStyle={{borderBottomWidth: 0}}
        inputStyle={styles.input || props.style}
        placeholder={props.placeholder}
        leftIconContainerStyle={styles.icon || props.style}
        rightIconContainerStyle={styles.icon || props.style}
        rightIcon={props.secure}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholderTextColor={
          styles.placeholderColor.color || props.placeholder
        }
        renderErrorMessage={false}
        errorMessage={props.errorMessage}
        errorStyle={styles.errorStyle}
        keyboardType={props.keyboardType}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        secureTextEntry={props.secure}
        {...props}
      />
    </TouchableNativeFeedback>
  );
});

export default InputCustomV1;
