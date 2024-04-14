import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';

export const CounterScreen = () => {
  const [count, setCount] = useState(0);
  const incrementar = () => {
    setCount(count + 1);
  };
  const resetear = () => {
    setCount(0);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>
      {/* <PrimaryButton
        label="incrementar"
        onPress={incrementar}
        onLongPress={resetear}
      /> */}
      <Button mode="contained" onPress={incrementar} onLongPress={resetear}>
        incrementar
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
});
