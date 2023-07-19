import { StyleSheet, Pressable,View,Text } from "react-native";
import CustomButton from "../component/buttons/CustomButton";
import SubTitle from "../component/SubTitle";
import IconTextIn from "../component/IconTextIn";
import CrossIcon from "../component/CrossIcon";
import { Formik } from "formik";
import * as yup from 'yup'



const validation_schema = yup.object().shape({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required')
})


const Forgetpwd = ({setM}) => {
    return(
        <Formik 
        validationSchema={validation_schema}
        initialValues={{email:''}}
        onSubmit={(value)=>{console.log(value)}}>
            {({errors, isValid, handleChange, handleBlur,handleSubmit, values})=>(
                <View style={style.forgetouterModel}>
                <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                  <Pressable
                    onPress={() => {
                      setM(false);
                    }}
                  >
                    <CrossIcon />
                  </Pressable>
                </View>
                <View style={{marginBottom:20}}>
                    <SubTitle colors={"#000"}>Forget Password</SubTitle>
                  </View>
                <SubTitle>Registered Email Id</SubTitle>
                  <IconTextIn name={'email'} icon={"envelope"} placeholder={"Name"}  keytype={"email-address"} changetext = {handleChange('email')} blur={handleBlur('email')} value={values}/>
                <View>
                    {errors.email && <Text style={style.errorsMessage}>{errors.email}</Text>}
                <CustomButton style={style.forgetBtn} txtclr={style.loginBtnText} onpress={handleSubmit} dis={!isValid}>
                    SUBMIT
                </CustomButton>
                </View>
                </View>
            )}
        </Formik>
    )
}

export default Forgetpwd

const style= StyleSheet.create({
    forgetouterModel:{
        backgroundColor: "#ffff",
        width: 335,
        height: 240,
        borderRadius: 25,
        elevation: 12,
        padding: 20,
        borderWidth:0.35,
        borderColor:'gray'
      },
      forgetBtn: {
        marginTop:10,
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
        fontSize:12
      }
})