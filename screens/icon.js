import { changeIcon, getIcon, resetIcon } from 'react-native-change-icon';
import { StyleSheet,Pressable, View,Image, } from "react-native";
import Button1 from '../components/Button1';


function Icon( ) {
    
    return (
        <View>
      <Pressable onPress={() =>changeIcon('Default')}>
        <Image
           source={require("../assets/icon.png")}
          style={styles.image} />
        </Pressable>
      <Pressable onPress={() =>changeIcon('Light')}>
        <Image
           source={require("../assets/icon6.png")}
          style={styles.image}/>
      </Pressable>
      <Pressable onPress={() =>changeIcon('Dark')}>
        <Image
           source={require("../assets/icon5.png")}
          style={styles.image}/>
      </Pressable>
     
    </View>
    );
}


const styles = StyleSheet.create({
    image: {
        width: 100,
        height:100,
        borderRadius:10,
        marginBottom: 5,
        marginTop:5,
        
    },
});
export default Icon;

