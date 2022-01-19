import {Button, StyleSheet, TextInput, View} from 'react-native';

import React from 'react';

const AddItem = props => {
  const {onPress, onChangeText, value} = props;

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={onChangeText}
        placeholder="Escriba aquí para nuevo ítem"
        value={value}
        style={styles.itemTextInput}
      />
      <Button
        title="Agregar"
        color="#008080"
        onPress={onPress}
        disabled={value.trim().length === 0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  itemTextInput: {
    borderBottomWidth: 2,
    borderBottomColor: '#008080',
    flex: 0.8,
  },
});

export default AddItem;
