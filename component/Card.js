import { Surface, Text } from "@react-native-material/core";
import { StyleSheet, View, TextInput, Dimensions } from "react-native";
import Title from "./Title";
import SubTitle from "./SubTitle";
import CustomButton from "./buttons/CustomButton";
import { useEffect, useState } from "react";
// import RegisterModel from "./RegisterModel";

const Card = ({visibility, forgetvisibility, auth, navigation}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validitytime,setValiditytime] = useState(false)

  const validate = () => {
    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) & password.length >=8)
    {
     navigation.navigate("Otp")
    }
    else{
      setValiditytime(true)
      setEmail('')
      setPassword('')
    }
  }

  const handleEmailchange = (e) => {
    setEmail(e)
  }
  const handlePasswordChange = (e) =>{
    setPassword(e)
  }

  const Loginbtn = (e) => {
    validate()
  }

  const Signup = (e) =>{
    // setModuleActive(!moduleActive)
    visibility()
  }

  const Forgetpwd=(e)=>{
    // console.log('Forgetpwd')
    forgetvisibility()
  }

  useEffect(()=>{
    setTimeout(() => {
      setValiditytime(false)
    }, 7000);
  },[validitytime])


  return (
    <Surface elevation={6} style={style.cardOutLine}>
      <View style={style.innerCard}>
        <View>
          <Title>{validitytime ? "Invalid Credentials" : "Login"}</Title>
        </View>
        <View style={style.textFieldContainer}>
          <View>
            <SubTitle>Email Id</SubTitle>
            <TextInput
              placeholder="Email"
              placeholderTextColor={"#000"}
              keyboardType="email-address"
              style={style.textField}
              value={email}
              onChangeText={handleEmailchange}
            ></TextInput>
          </View>
          <View>
            <SubTitle>Password</SubTitle>
            <TextInput
              placeholder="Password"
              placeholderTextColor={"#000"}
              style={style.textField}
              value={password}
              onChangeText={handlePasswordChange}
            ></TextInput>
          </View>
          <View style={style.LoginBtnContainer}>
            <CustomButton style={style.loginBtn} txtclr={style.loginBtnText} onpress={Loginbtn}>
              LOGIN
            </CustomButton>
          </View>
          <View style={style.signupforget}>
            <CustomButton style={style.extrabtn} onpress={Signup}>SignUp</CustomButton>
            <CustomButton style={style.extrabtn} onpress={Forgetpwd}>
              Forget Password ?
            </CustomButton>
          </View>
        </View>
      </View>
    </Surface>
  );
};

export default Card;

const devicehight = Dimensions.get('screen').height

const style = StyleSheet.create({
  cardOutLine: {
    backgroundColor: "#fff",
    width: "90%",
    height: devicehight * 44 / 100,
    borderRadius: 20,
    marginTop: 100,
    padding: "5%",
  },
  innerCard: {
    flex: 1,
    alignItems: "center",
  },
  textFieldContainer: {
    flex: 1,
    width: "100%",
  },
  textField: {
    width: "100%",
    backgroundColor: "#edf0ee",
    padding: 12,
    marginVertical: 10,
    borderRadius: 18,
  },
  LoginBtnContainer: {
    marginVertical: "6%",
  },
  loginBtn: {
    borderRadius: 40,
    backgroundColor: "#146af5",
    overflow:'hidden',
  },
  loginBtnText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  extrabtn: {
    marginVertical:2
  },
  signupforget:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  
});
