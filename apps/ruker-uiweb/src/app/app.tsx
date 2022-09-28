import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { UiHeading } from '@ruker-shared/ui-heading';

export function App() {
  return (
    <View style={styles.box}>
      <UiHeading text="Hello World!" />
      <Text style={styles.text}>This is a demo page.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { fontSize: 18 },
});

export default App;