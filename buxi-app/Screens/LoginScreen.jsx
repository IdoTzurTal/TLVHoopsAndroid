import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, SafeAreaView, Button, Alert, Platform } from 'react-native';
import { useState } from 'react';
import { Tab, Text, TabView, } from '@rneui/themed';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../colors'

function LoginScreen() {
  const navigation = useNavigation()
  const [index, setIndex] = useState(0)
  return (
    <SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
      <SafeAreaView style={{ backgroundColor: 'white' }}>
        <StatusBar style={styles.container} />
      </SafeAreaView>
      <TabView value={index} onChange={setIndex} animationType="spring">


        <TabView.Item style={{ backgroundColor: 'white', width: '100%', height: '100%' }}>

          <SafeAreaView style={styles.homePage}>
            <SafeAreaView style={{ flex: 1, marginTop: '8%', justifyContent: 'flex-start' }}>
              <Text h1 h1Style={{ color: 'black' }}>login</Text>
              <Button title='About' onPress={() => navigation.navigate('About')} />
              <Button title='Contact' onPress={() => navigation.navigate('Contact')} />
            </SafeAreaView>

            <SafeAreaView style={{ flex: 2, width: '100%', alignItems: 'center' }}>
              <TextInput style={styles.textInput} />
              <TextInput style={styles.textInput} />
              <Button title='Log in' onPress={() => Alert.alert("Welcome!", "You just loged in!", [{ text: 'ok', onPress: () => console.log("ok") }, { text: "not ok" }])} />
              <Button title='Log in' onPress={() => Alert.prompt("Welcome!", "You just loged in!", (text) => console.log(text))} />
              <Button
                title="omer"
                onPress={() => navigation.navigate("Omer")}
              />

            </SafeAreaView>
          </SafeAreaView>

        </TabView.Item>


        <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>

          <LottieView
            source={require('../assets/32960-loader-basketball (2).json')}
            loop
            autoPlay
          />

        </TabView.Item>


      </TabView>


      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 0,
        }}
        style={{ height: '9%' }}
        variant="primary"
      >
        <Tab.Item
          title="Login"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'log-in-outline', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          style={{ height: '100%' }}
          title="Sign Up"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'basketball-outline', type: 'ionicon', color: 'white' }}
        />
      </Tab>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontStyle: 'white',
    paddingTop: Platform.OS === 'android' ? 20 : 0
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '50%'
  },
  homePage: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  LoginTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Loading: {

  }
})

export default LoginScreen;