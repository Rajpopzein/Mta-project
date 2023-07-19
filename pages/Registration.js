import { StyleSheet,View,Pressable, Text } from "react-native";
import CrossIcon from "../component/CrossIcon";
import SubTitle from "../component/SubTitle";
import IconTextIn from "../component/IconTextIn";
import CustomButton from "../component/buttons/CustomButton";
import { Formik } from "formik";
import * as yup from 'yup'
import Dynamic from "../component/Dynamic";



const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  phone:yup
    .string()
    .min(10, ({ min }) => `Phone nuber must be at least ${min} characters`)
    .required('Phone is required'),
  username:yup
    .string()
    .required('User name is required')
})

const Registration = ({form_visibility}) => {
    return(
      <Formik  
      validationSchema={loginValidationSchema}
      initialValues={{ email: '', phone:'', username:'' }}
      onSubmit={values => console.log(values)}>
        {({errors,handleChange, handleBlur, handleSubmit, values , isValid}) => (
          <View style={style.outerModel}>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <Pressable
              onPress={() => {
                form_visibility(false);
              }}
            >
              <CrossIcon />
            </Pressable>
          </View>
          <View>
            <View style={{marginBottom:20}}>
              <SubTitle colors={"#000"}>SIGNUP</SubTitle>
            </View>
            <SubTitle>Name</SubTitle>
            <IconTextIn name={'username'} icon={"user"} placeholder={"Name"} changetext = {handleChange('username')} blur={handleBlur('username')} value={values}/>
            {errors.username && <Text style={style.errorsMessage}>{errors.username}</Text>}
            <SubTitle>Phone</SubTitle>
            <IconTextIn name={'phone'} icon={"phone"} placeholder={"Phone"} keytype={"number-pad"}  changetext = {handleChange('phone')} blur={handleBlur('phone')} value={values}/>
            {errors.phone && <Text style={style.errorsMessage}>{errors.phone}</Text>}
            <SubTitle>Email</SubTitle>
            <IconTextIn name={'email'} icon={"envelope"} placeholder={"Email"} keytype={"email-address"} changetext = {handleChange('email')} blur={handleBlur('email')} value={values.email}/>
            {errors.email && <Text style={style.errorsMessage}>{errors.email}</Text>}
            <CustomButton style={style.loginBtn} txtclr={style.loginBtnText} onpress={handleSubmit} dis={!isValid}>
              SignUp
            </CustomButton>
          </View>
        </View>
        )}
      </Formik>
    )
}

export default Registration


const style = StyleSheet.create({
    outerModel: {
        backgroundColor: "#ffff",
        width: 335,
        borderRadius: 25,
        elevation: 12,
        padding: 20,
        borderWidth:0.35,
        borderColor:'gray'
      },
      loginBtn: {
        marginTop:25,
        borderRadius: 40,
        backgroundColor: "#146af5",
        overflow: "hidden",
        padding:10
      },
      loginBtnText: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
      },
      errorsMessage : {
        color:'red',
        // textAlign:'center',
        fontSize:12
      }
})