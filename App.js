import {Text, View, StyleSheet} from "react-native";

export default function App(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        INDMO
      </Text>
      <Text>
        Olá Mundo
      </Text>
    </View>
  )

}

  const styles = StyleSheet.create({
    container: {
    flex: 1,
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'black'
  },
  title:{ 
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  } 
});


//const styles = StyleSheet.create({
//  container: {
 //   flex: 1,
 //   backgroundColor: 'white',
  //  alignItems: 'center',
  //  justifyContent: 'center',
  //},
//});
