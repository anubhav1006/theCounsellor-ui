import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {rootReducer} from '../state';
import {ROUTES} from '../enums/routes';

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <View>
          <Text>Hi there {ROUTES.RootMain}!</Text>
        </View>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
