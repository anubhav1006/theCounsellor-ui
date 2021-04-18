import React from 'react';
import {View, Text} from 'react-native';
import {
  NavigationScreenComponent,
  NavigationStackScreenOptions,
} from 'react-navigation';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ROUTES} from '../../enums/routes';

const HomeScreen: NavigationScreenComponent<{}> = () => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

HomeScreen.navigationOptions = (
  screenProps: BottomTabScreenProps,
): NavigationStackScreenOptions => {
  // Navigate to details view
  const buttonRightPress = () => {
    screenProps.navigation.navigate(ROUTES.RootMain);
  };
  // Open modal view
  // const buttonleftPress = () => {
  //   screenProps.navigation.navigate(ROUTES.ModalMain);
  // };
  return {
    headerStyle: {
      elevation: 0,
      backgroundColor: 'darkslategray',
    },
    // headerLeft: (
    //   <Icon.Button
    //     name="menu"
    //     backgroundColor="transparent"
    //     underlayColor="transparent"
    //     color="wheat"
    //     onPress={buttonleftPress}
    //   />
    // ),
    headerRight: (
      <Icon.Button
        name="apps"
        backgroundColor="transparent"
        underlayColor="transparent"
        color="wheat"
        onPress={buttonRightPress}
      />
    ),
  };
};

export default HomeScreen;
