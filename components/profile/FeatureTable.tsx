import { View, Text, StyleSheet } from 'react-native';
import React from 'react'

const FeatureTable = () => {
  return (
    <View style={{marginTop: 20}}>
    <View style={styles.tableContainer}>
      <Text style={styles.columnHeader}>What you get:</Text>
      <Text style={styles.baseColumn}>Base</Text>
      <Text style={styles.premiumColumn}>Premium</Text>
    </View>
    <View style={styles.tableContainer}>
      <Text style={styles.columnHeader}>Swipes</Text>
      <Text style={styles.baseColumn}>25</Text>
      <Text style={styles.premiumColumn}>50</Text>
    </View>
    <View style={styles.tableContainer}>
      <Text style={styles.columnHeader}>Proposals</Text>
      <Text style={styles.baseColumn}>Unlimited</Text>
      <Text style={styles.premiumColumn}>Unlimited</Text>
    </View>
    <View style={styles.tableContainer}>
      <Text style={styles.columnHeader}>Matching</Text>
      <Text style={styles.baseColumn}>Random</Text>
      <Text style={styles.premiumColumn}>AI Filtering</Text>
    </View>
    <View style={styles.tableContainer}>
      <Text style={styles.columnHeader}>Chance</Text>
      <Text style={styles.baseColumn}>Same</Text>
      <Text style={styles.premiumColumn}>20% Higher</Text>
    </View>
    <View style={styles.tableContainer}>
      <Text style={styles.columnHeader}>Superswipes</Text>
      <Text style={styles.baseColumn}>0</Text>
      <Text style={styles.premiumColumn}>2</Text>
    </View>
    <View style={styles.tableContainer}>
      <Text style={styles.columnHeader}>Block Contacts</Text>
      <Text style={styles.baseColumn}>10</Text>
      <Text style={styles.premiumColumn}>Unlimited</Text>
    </View>

    </View>
  )
}

const styles = StyleSheet.create({
    tableContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#999999',
    },
    columnHeader: {
      fontFamily: 'Poppins_500Medium',
      fontSize: 12,
      marginRight: 'auto',
      minWidth: 90,
    },
    baseColumn: {
      fontFamily: 'Poppins_600SemiBold',
      fontSize: 12,
      color: '#999999',
    //   marginLeft: 'auto',
  marginRight: 'auto',
    },
    premiumColumn: {
      fontFamily: 'Poppins_700Bold',
      fontSize: 12,
      marginLeft: 'auto',
      minWidth: 90,
    //   marginRight: 20,
    },
  });

export default FeatureTable