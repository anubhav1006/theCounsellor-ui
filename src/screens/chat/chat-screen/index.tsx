import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';

const ChatScreen: React.FC<Props> = props => {
  return (
    <View>
      <Text> This is chat screen + {props.name}</Text>
    </View>
  );
};

ChatScreen.propTypes = {
  name: PropTypes.string.isRequired,
  enthusiasmLevel: PropTypes.number,
};

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

export default ChatScreen;
