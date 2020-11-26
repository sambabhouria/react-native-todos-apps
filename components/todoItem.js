import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

// https://github.com/expo/vector-icons/blob/master/src/Icons.ts
// AntDesign ,Entypo, Entypo,Feather, Fontisto,FontAwesome,FontAwesome5, Foundation
// Ionicons,MaterialCommunityIcons,MaterialIcons,Octicons,SimpleLineIcons,Zocial,createMu
// createIconSetFromIcoMoon,createIconSetFromFontello,createIconSet
// import {Ionicons} from '@expo/vector-icons';
import {Icon} from 'react-native-elements';

export default function TodoItem({pressHandler, item}) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <Icon name="delete" type="material" color="#517fa4" />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    marginLeft: 10,
  },
});
