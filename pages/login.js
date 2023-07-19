import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  Pressable,
  Text,
  Dimensions
} from "react-native";
// import { Icon } from "@react-native-material/core";
import Card from "../component/Card";
import Feedbutton from "../component/buttons/FeedButton";
import { useEffect, useState } from "react";
import FeedList from "../component/FeedList";
import RegisterModel from "../component/RegisterModel";
import CrossIcon from "../component/CrossIcon";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import CustomButton from "../component/buttons/CustomButton";
import IconTextIn from "../component/IconTextIn";
import SubTitle from "../component/SubTitle";
import Registration from "./Registration";
import * as yup from 'yup'
import Forgetpwd from "./Forgetpwd";
import { KeyboardAvoidingView } from "react-native";

// import Dynamic from "../component/dynamic";






const Login = ({ popup, auth , navigation}) => {
  const [isActive, setIsactive] = useState("News Feeds");
  const [mvisibility, setMvisibility] = useState(false);
  const [moduleActive, setModuleActive] = useState(false);

  const closeModule = () => {
    setModuleActive(!moduleActive);
  };

  useEffect(() => {}, [moduleActive,mvisibility]);

  const fakedb = ["feed 1", "feed 2", "feed 3", "feed 4", "feed 5", "feed 6"];

  const activeFeed = (e) => {
    setIsactive(e._dispatchInstances.memoizedProps.nativeID);
  };

  const activeHights = (e) => {
    setIsactive(e._dispatchInstances.memoizedProps.nativeID);
  };

  // This function use tu set the visibility of popups
  const modulepop = () => {
    setModuleActive(true);
  };
// This function use to set the visibility of forget model
  const forgetmodulepop = () =>{
    setMvisibility(true)
    // console.log(mvisibility)
  }

  return (
    <View> 
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'alignItem' : 'justifyContent'}
        >
      <View style={style.modulepopup}>
      <RegisterModel visibility={moduleActive} pressval={closeModule}>
        
           <Registration  form_visibility={setModuleActive}/>
        
        </RegisterModel>
      </View>
      </KeyboardAvoidingView>
      {/* Forget popup */}
      <View style={style.modulepopup}>
          <RegisterModel visibility={mvisibility}>
              <Forgetpwd setM={setMvisibility}/>
          </RegisterModel>
      </View>
      <View style={style.LoginMain}>
        <Image
          style={style.loginbanner}
          source={require("../assets/images/09.jpg")}
        />
        <View style={style.loginCard}>
          <Card visibility={modulepop} forgetvisibility={forgetmodulepop} auth={auth} navigation={navigation}/>
        </View>
      </View>
      <View style={style.feeds}>
        <View style={style.feedbutton}>
          <Feedbutton
            textstyle={style.FeedbuttonText}
            st={isActive == "News Feeds" ? style.active : style.inactive}
            onpress={activeFeed}
          >
            News Feeds
          </Feedbutton>
          <Feedbutton
            textstyle={style.FeedbuttonText}
            st={isActive == "Higlights" ? style.active : style.inactive}
            onpress={activeHights}
          >
            Higlights
          </Feedbutton>
        </View>
        {isActive == "News Feeds" ? (
          <View style={{ flex: 5, marginHorizontal: 20, paddingBottom: 50 }}>
            <FlatList
              data={fakedb}
              renderItem={(item) => {
                return (
                  <FeedList
                    style={style.FeedList}
                    feedtext={item.item}
                    key={item.id}
                  />
                );
              }}
              keyExtractor={(item, index) => {
                return item.id;
              }}
            />
          </View>
        ) : (
          <View style={{ flex: 1, marginHorizontal: 20 }}>
            <FeedList
              feedtext={
                "founder of mta connect should be discribed here then he will be shown to every one"
              }
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Login;

const devicehights = Dimensions.get('window').height
const devicewidth = Dimensions.get('window').width

// console.log(devicehights)

const style = StyleSheet.create({
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
  LoginMain: {
    flex: 1,
    // marginTop: 3,
  },
  loginbanner: {
    height: devicehights * 30 / 100,
    width: devicewidth,
    position: "relative",
    alignItems: "stretch",
    resizeMode: "stretch",
  },
  loginCard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  feeds: {
    borderTopWidth: 1,
    borderTopColor: "#eee",
    marginTop: 530,
    height: 300,
  },
  feedbutton: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  FeedbuttonText: {
    textAlign: "center",
    margin: 10,
  },
  active: {
    flex: 1,
    height: 42,
    borderBottomWidth: 4,
    borderBottomColor: "#146af5",
    overflow: "hidden",
    // marginHorizontal:1
  },
  inactive: {
    flex: 1,
    height: 42,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  modulepopup: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
