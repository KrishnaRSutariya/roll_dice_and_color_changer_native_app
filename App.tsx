import { Dimensions, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import RandomColorGenerate from './components/RandomColorGenerate';
import RollDice from './components/RollDice';

const { height } = Dimensions.get('window');

const App = () => {
  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView style={styles.container}>
        {/* Show the Random Background Color */}
        <RandomColorGenerate />

        {/* Roll Dice */}
        <RollDice />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeView: { height, backgroundColor: '#ffffff' },
  container: {
    width: '100%',
    padding: 10,
  },
});
