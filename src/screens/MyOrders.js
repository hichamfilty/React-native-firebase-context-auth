import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import { colors } from '../global/Styles';

export default function MyOrders({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle='light-content'
        backgroundColor={colors.statusbar}
      />
      <Header title='My Orders' type='arrow-left' navigation={navigation} />
      <Text>MyOrders</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});
