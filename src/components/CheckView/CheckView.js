import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CheckView = ({doneAt}) => {
  const iconSize = 20;
  const iconColor = '#FFF';

  if (doneAt == null) {
    return <View style={[styles.container, styles.pending]} />;
  }

  return (
    <View style={[styles.container, styles.done]}>
      <Icon name="check" size={iconSize} color={iconColor} />
    </View>
  );
};

CheckView.propTypes = {
  doneAt: PropTypes.instanceOf(Date),
};

CheckView.defaultProps = {
  doneAt: null,
};

const styles = StyleSheet.create({
  container: {
    height: 25,
    width: 25,
    borderRadius: 13,
  },
  pending: {
    borderWidth: 1,
    borderColor: '#555',
  },
  done: {
    backgroundColor: '#4D7031',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CheckView;
