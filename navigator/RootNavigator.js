import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../pages/login"
import Menu from "../pages/Menu"
import Otp from "../pages/AuthMod/OtpMod"

const RootNavigator = () =>{
    const stack = createNativeStackNavigator()

        return(
        <NavigationContainer>
            <stack.Navigator screenOptions={{
                headerStyle:{
                    backgroundColor: 'transparent'
                },
                headerTransparent: true,
                headerTitle: ''
            }} initialRouteName="Login">
            <stack.Screen name="Login" component={Login}/>
            <stack.Screen name="Otp" component={Otp}/>
            <stack.Screen name='menu' component={Menu}/>
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator