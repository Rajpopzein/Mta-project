import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const CrossIcon = () => (
    <>
      <Icon name="close" size={24} color="black"/>
    </>
  );
  
  export default () => (
    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
      <CrossIcon/>
    </IconComponentProvider>
  );