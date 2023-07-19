import { Surface, Text } from "@react-native-material/core";
import { StyleSheet } from "react-native";
import Dynamic from "../Dynamic";

const Cardtemp = ({stylecard , children}) => {
    return(
        <Surface
      elevation={4}
      style={stylecard}
    >
     {children}
    </Surface>
    )
}

export default Cardtemp

const style = StyleSheet.create({
   
})