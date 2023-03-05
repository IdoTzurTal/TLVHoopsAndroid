import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'

const ContactScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.details}>
        Phone: +972-54-123-4567
        Email: info@tlvhoops.com
        Address: 134 Rothschild Boulevard, Tel Aviv, Israel
      </Text>
      <Text style={styles.description}>



        Please feel free to contact us with any questions or feedback you may have about our app.
        We strive to provide the best user experience possible and appreciate your input.
        Thank you for choosing TLV Hoops!</Text>
    </SafeAreaView>
  )
}

export default ContactScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  details: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    lineHeight: 35,
    marginHorizontal: 30,
    fontStyle: 'italic',
    fontFamily: '',
  },
})