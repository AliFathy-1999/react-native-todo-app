import React , { useEffect} from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default function AlertMessage ({ type, msg, onHide  }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onHide();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [onHide]);

  let alertStyle;
  switch (type) {
    case 'success':
      alertStyle = styles.success;
      break;
    case 'info':
      alertStyle = styles.info;
      break;
    case 'warning':
      alertStyle = styles.warning;
      break;
    case 'danger':
      alertStyle = styles.danger;
      break;
    default:
      alertStyle = styles.default;
  }

  return (
      <View style={[styles.alert, alertStyle]}>
        <Text style={styles.message}>{msg}</Text>
      </View>
  );
};
const styles = StyleSheet.create({
  alert: {
    padding: 10,
    margin: 20,
    borderRadius: 4,
  },

  success: {
    backgroundColor: '#d4edda',
  },
  info: {
    backgroundColor: '#cce5ff',
  },
  warning: {
    backgroundColor: '#fff3cd',
  },
  danger: {
    backgroundColor: '#f8d7da',
  },
  default: {
    backgroundColor: '#f8f9fa',
  },
  message: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
});
  
