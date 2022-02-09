import { StyleSheet, View, Text, Image } from 'react-native';

const CurrentConditions = (props) => {

    let currentDt = new Date(props.current.dt * 1000);
    console.log(props.current);

    return (
        <View style={styles.container}>
            <Text>{props.current.weather[0].description}</Text>

            <Text>Date and Time: { currentDt.toLocaleString() }</Text>
            <Text>Tempurature: {Math.round(props.current.temp)}F</Text>
            <Text>Feels like: {Math.round(props.current.feels_like)}F</Text>
            <Text>Pressure: {props.current.pressure}</Text>
            <Text>UV Index: {props.current.uvi}</Text>
            <Text>Humidity: {props.current.humidity}</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      padding: 30,
      borderRadius: 10,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    icon: {
      fontSize: 80,
      color: 'darkorchid'
    }
  });
  
export default CurrentConditions;