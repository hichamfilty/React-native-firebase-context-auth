import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import { colors } from '../../global/Styles';

const Search = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle='light-content'
        backgroundColor={colors.statusbar}
      />
      <Header title='Search' type='arrow-left' navigation={navigation} />
      <Text>Search</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});
