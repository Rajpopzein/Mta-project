import {Button} from 'react-native'
import { View ,Text,StyleSheet, Pressable} from 'react-native'


const CustomButton = ({children,txtclr,style,onpress,dis}) =>{

    return(
        <View style={style}>
            <Pressable android_ripple={{color:'#eee'}} style={children == "LOGIN" ? {padding:13}: {padding:0}} onPress={onpress} disabled={dis}>
                <Text style={txtclr}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default CustomButton



