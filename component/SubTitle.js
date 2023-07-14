import {Text} from '@react-native-material/core'
import { StyleSheet } from 'react-native'

const SubTitle = ({children,colors}) =>{
    return <Text variant='h6' style={colors?[style.TitleText.color = colors, style.TitleText] : [style.TitleText, style.TitleText.color = "#bdbfbe"]}>{children}</Text>
}

export default SubTitle

const style = StyleSheet.create({
    TitleText:{
        fontWeight:'bold',
        fontSize:14,
        color:'#bdbfbe',
        paddingHorizontal:5,
    },

})


