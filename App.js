import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';

import sunny from './assets/images/sunny.jpg';

import Icon from './weatherIcon';
import data from './data';

import ForecastHourly from './components/ForecastHourly';
import CurrentConditions from './components/CurrentConditions';
import WeatherDetails from './components/WeatherDetails';
import ForecastSummary from './components/ForecastSummary';


export default function App() {

  const [loaded] = useFonts({
    icomoon: require('./assets/fonts/icomoon.ttf'),
  });
  
  if (!loaded) {
    return null;
  }
  
  return (
    <View style={styles.container}>
      {/* <Image source={sunny} style={styles.image} /> */}
      <Icon name="wi-night-alt-snow" style={styles.icon} />

      <CurrentConditions current={data.current} />
      <ForecastSummary />

      <WeatherDetails />
      <ForecastHourly />
      


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
  },
  icon: {
    fontSize: 80,
    color: 'darkorchid'
  }
});
