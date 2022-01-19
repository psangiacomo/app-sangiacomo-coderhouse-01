import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import React from 'react';

const ListItem = props => {
  const {item, onPress} = props;

  return (
    <View style={styles.listContainer}>
      <Text style={styles.itemText} key={item.id}>
        {item.value}
      </Text>
      <TouchableOpacity
        onPress={onPress && onPress.bind(this, item.id)}
        style={styles.deleteButton}>
        <Text style={styles.deleteText}>Borrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  itemText: {
    flex: 0.9,
  },
  deleteButton: {
    backgroundColor: '#FF0000',
    padding: 5,
  },
  deleteText: {
    color: '#FFF'
  },
});
export default ListItem;
