import { Modal, Text, View, StyleSheet, Button} from "react-native";

const RegisterModel = ({visibility, pressval, children}) => {
 return(
    <Modal visible={visibility}  animationType="fade"  transparent={true} onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
          <View style={style.outer}>
            {children}
          </View>
    </Modal>)
};

export default RegisterModel;

const style = StyleSheet.create({
  outer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:22
  },
  checkbtn:{
    paddingTop:40
  }
})