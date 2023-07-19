import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TextInput,
} from "react-native";
// import {Cardtemp} from '../../component/card/Cardtemp'
import Cardtemp from "../../component/card/Cardtemp";
import Dynamic from "../../component/Dynamic";
import Title from "../../component/Title";
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { OtpInput } from "react-native-otp-entry";
import { useState } from "react";
import CustomButton from "../../component/buttons/CustomButton";




const Otp = () => {

    const[isvalid, setIsvalid] = useState(true)
    const[Otpvalue, setOtpvalue] = useState("")

    const submitvalue = () =>{
        console.log(Otpvalue)
    }

    const otp_validation = (value) =>{
        if(value.length == 4){
            setIsvalid(!isvalid)
            setOtpvalue(value)
        }
        else{
            setIsvalid(true)
        }
    }


  return (
    <SafeAreaView>
      <Image
        source={require("../../assets/images/09.jpg")}
        style={style.topImage}
      />
      <View style={style.maincontainer}>
        <Cardtemp stylecard={style.card}>
          <View style={style.Title}>
            <Title>Otp Verification</Title>
          </View>
          <View style={style.discription}>
            <Text style={{ color: "gray" }}>
              Enter 4 digit Verification code that has been sent to registered
              mobile number
            </Text>
          </View>
          <View style={style.otptextstack}>
            <OtpInput  numberOfDigits={4} onTextChange={text => otp_validation(text)} pinCodeContainerStyle={{borderColor:'white'}}/>
          </View>
           <CustomButton dis={isvalid} onpress={submitvalue}>Submit</CustomButton>
        </Cardtemp>
      </View>
    </SafeAreaView>
  );
};

export default Otp;

const deviceHight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const style = StyleSheet.create({
  maincontainer: {
    position: "absolute",
    top: (deviceHight * 32) / 100,
    left: (deviceWidth * 10) / 100,
    right: (deviceWidth * 1) / 100,
  },
  topImage: {
    width: deviceWidth,
    height: (deviceHight * 50) / 100,
    position: "relative",
  },
  card: {
    backgroundColor: "#fff",
    width: "90%",
    height: (deviceHight * 40) / 100,
    borderRadius: 20,
    top: 10,
    padding: "5%",
    alignItems: "center",
    flexDirection:'column'
  },
  Title: {
    marginVertical: "10%",
  },
  discription: {
    color: "gray",
  },
  otptextstack: {
    width:200,
    marginVertical:'10%'
  },
  container:{
    borderRadius:'0%',
    color:'#ffff'
  }
});

