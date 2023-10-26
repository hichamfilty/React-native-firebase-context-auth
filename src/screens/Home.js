import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native';

import React, { useContext, useState } from 'react';
import HomeHeader from '../components/HomeHeader';
import { colors } from '../global/Styles';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle='light-content'
        backgroundColor={colors.statusbar}
      />
      <HomeHeader navigation={navigation} />
      <View>
        <Text>Start new project</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 22,
    paddingTop: 7,
  },
});
