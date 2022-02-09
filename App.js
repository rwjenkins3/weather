import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
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
    <ScrollView style={styles.container}>
      <Text style={styles.locale}>Huntington, WV</Text>
      <View>
        <Image source={sunny} style={styles.image} />
      </View>
       
      <Icon name="wi-night-alt-snow" style={styles.icon} />

      <CurrentConditions current={data.current} />
      <Icon name="wi-night-alt-snow" style={styles.icon} />

      <CurrentConditions current={data.current} />
      <Icon name="wi-night-alt-snow" style={styles.icon} />

      <CurrentConditions current={data.current} />
      <ForecastSummary />

      <WeatherDetails />
      <ForecastHourly />
      


      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    //alignItems: 'center',
    //justifyContent: 'flex-start',
  },
  locale: {
    fontSize: 24,
    color: '#fff',
    alignSelf: 'flex-start',
    marginTop: 30,
    marginBottom: 6
  },
  image: {
    width: '100%',
    borderRadius: 20,
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  icon: {
    fontSize: 80,
    color: 'darkorchid'
  }
});
