import { Text, View, StyleSheet } from "react-native"
const Menu = () =>{
    return(
        <View style={style.mainMenu}>
            <Text>
                Menu
            </Text>
        </View>
    )
}

export default Menu

const style = StyleSheet.create({
    mainMenu:{
        // flex:1,
        // backgroundColor:'black'
    }
})