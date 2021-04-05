import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <View>
        <Text>Hi there!</Text>
      </View>
    </SafeAreaProvider>
  );
};

export default App;
