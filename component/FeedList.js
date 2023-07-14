import { View, Image, StyleSheet, Text } from "react-native";
import { ListItem, Avatar } from "@react-native-material/core";


const FeedList = ({feedtext, key}) => {
  return (
    <View style={style.card} key={key}>
      <View style={style.carddata} key={key}>
        <Text key={key}>1</Text>
      </View>
      <View style={style.carddata} key={key}>
        <Text key={key}>{feedtext}</Text>
      </View>
    </View>
  );
};

export default FeedList;

const style = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    marginVertical:19,
  },
  carddata:{
    flex:1,
  }
});
