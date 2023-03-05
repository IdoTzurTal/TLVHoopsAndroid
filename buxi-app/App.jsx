import { StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NativeStack from './Components/NativeStack';
// import DrawerStack from './Components/DrawerStack';

export default function App() {
  return (
    <NavigationContainer>
      <NativeStack/>
      {/* <DrawerStack/> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontStyle: 'white',
    paddingTop: Platform.OS === 'android' ? 20 : 0,
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

