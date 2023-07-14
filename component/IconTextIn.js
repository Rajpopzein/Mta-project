import FontAwesome from '@expo/vector-icons/FontAwesome'
import { color } from '@rneui/base'
import { TextInput, View , StyleSheet} from 'react-native'

const IconTextIn = ({icon, placeholder, keytype}) => {
    return(
        <View style={style.iconinput}>
            <FontAwesome name={icon} size={15} style={{marginHorizontal:20, color:'#146af5'}}/>
            <TextInput style={{flex:1}} keyboardType={keytype}/>
        </View>
    )
}

export default IconTextIn

const style = StyleSheet.create({
    iconinput : {
        // flex:1,
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:"gray",
        alignItems:'center',
        paddingBottom:10,
        marginVertical:15,
        color:"#146af5"
    }
})