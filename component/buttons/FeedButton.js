import { useEffect, useState } from "react"
import { View, Pressable, Text} from "react-native"


const Feedbutton = ({children, textstyle, onpress, st}) => {
    return(
        <View style={st}>
            <Pressable android_ripple={{color:'#eee'}} onPress={onpress} id={children}>
                <Text style={textstyle}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default Feedbutton

