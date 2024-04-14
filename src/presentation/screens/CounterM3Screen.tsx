import React, {useState} from 'react';
import {globalStyles} from '../theme/global.styles';
import {View} from 'react-native';
import {FAB, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

export const CounterM3Screen = () => {
  const [count, setCount] = useState(0);
  const incrementar = () => {
    setCount(count + 1);
  };
  const resetear = () => {
    setCount(0);
  };
  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>
      <Icon name="accessibility-outline" size={35} />
      <FAB
        // label="+1"
        icon="add-outline"
        style={globalStyles.fab}
        onPress={() => incrementar()}
        onLongPress={() => resetear()}
      />
    </View>
  );
};
