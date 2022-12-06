// import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function MyButton(props) {
  
  function randomSong() {
    var words = ["Yellow", "purple", "green", "Rock", "Paper", "Scissor"]
    var word = words[Math.floor(Math.random()*words.length)]
    console.log("Random word is: " + word)
  }

  return (
   <Pressable style={styles.buttonStyle} onPress={randomSong}>
    <Text style={styles.textStyle}>{props.details}</Text>
   </Pressable>
  //  <TouchableOpacity style={styles.buttonStyle}>
  //     <Text style={styles.textStyle}>Press Me!</Text>
  //   </TouchableOpacity>
  );
}

const styles=StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: '#E74C3C',
    margin: 10,
  },

  textStyle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.50,
    color: 'white',
  },
})