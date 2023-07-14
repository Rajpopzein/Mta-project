import {Text} from '@react-native-material/core'
import { StyleSheet } from 'react-native'

const Title = ({children}) =>{
    return <Text variant='h6' style={children == "Invalid Credentials" ? style.validation : style.TitleText}>{children}</Text>
}

export default Title

const style = StyleSheet.create({
    TitleText:{
        fontWeight:'bold',
    },
    validation:{
        fontWeight:'bold',
        fontSize:16,
        color:'#f54e42',
        paddingHorizontal:5,
}
})


