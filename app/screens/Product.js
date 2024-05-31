import {View, Text, StyleSheet, Button} from 'react-native'

export const Product = ({navigation}) =>{
    return <View style={styles.container}> 
        <Text>Bienvenidos a mi Tienda, Soy Jose</Text>
        <Text style={styles.frutas}>Frutas</Text>
        <Text style={styles.verduras}>Verduras</Text>
        <Text style={styles.frituras}>Frituras</Text>
        <Button
            title='HOME'
            onPress={()=>{
                navigation.navigate('WellcomeNav');
            }}
        />
    </View>

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
    },
    frutas: {
        backgroundColor: "red"
    },
    verduras: {
        backgroundColor: "yellow"
    },
    frituras: {
        backgroundColor: "green"
    }
  });