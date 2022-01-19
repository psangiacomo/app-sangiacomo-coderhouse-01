import {FlatList, StyleSheet, Text} from 'react-native';

import ListItem from './ListItem';
import React from 'react';

const List = props => {
  const {itemList, onPress} = props;

  return (
    <FlatList
      data={itemList}
      renderItem={data => <ListItem onPress={onPress} item={data.item} />}
      ListEmptyComponent={() => <Text>El listado está vacío</Text>}
      ListHeaderComponent={() => <Text style={styles.title}>Listado de ítems</Text>}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#800080',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 10,
  },
});

export default List;
