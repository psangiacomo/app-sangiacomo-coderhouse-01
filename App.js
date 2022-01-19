/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import AddItem from './components/molecules/AddItem';
import List from './components/molecules/List';

const App = () => {
  
  
  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]);

  const onChangeTextAddItem = t => setTextItem(t);

  const onPressAddItem = () => {
    setItemList(currentItems => [...currentItems, {id: Math.random().toString(), value: textItem}]);
    //vuelvo a poner en vacío
    setTextItem('');
  };

  const onPressList = id => {
    setItemList(currentItems => currentItems.filter(item => item.id !== id));
  };

  return (
    <View style={styles.appContainer}>
      <Text style={styles.title}>App listado ítems</Text>
      <AddItem
        onChangeText={onChangeTextAddItem}
        onPress={onPressAddItem}
        value={textItem}
      />
      <View style={styles.itemListContainer}>
        <List itemList={itemList} onPress={onPressList} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 5,
  },
  title: {
    color: '#800080',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 15,
    paddingTop: 4,
  },
  itemListContainer: {
    flex: 1,
    margin: 25,
  },
});

export default App;
