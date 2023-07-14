import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  Pressable,
  Text,
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

const Login = ({ popup }) => {
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
    <SafeAreaView>
      <View style={style.modulepopup}>
        <RegisterModel visibility={moduleActive} pressval={closeModule}>
          <View style={style.outerModel}>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <Pressable
                onPress={() => {
                  setModuleActive(false);
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
              <IconTextIn icon={"user"} placeholder={"Name"} />
              <SubTitle>Phone</SubTitle>
              <IconTextIn icon={"phone"} placeholder={"Phone"} keytype={"number-pad"} />
              <SubTitle>Email</SubTitle>
              <IconTextIn icon={"envelope"} placeholder={"Email"} keytype={"email-address"}/>

              <CustomButton style={style.loginBtn} txtclr={style.loginBtnText}>
                SignUp
              </CustomButton>
            </View>
          </View>
        </RegisterModel>
      </View>
      {/* Forget popup */}
      <View style={style.modulepopup}>
          <RegisterModel visibility={mvisibility}>
            <View style={style.forgetouterModel}>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <Pressable
                onPress={() => {
                  setMvisibility(false);
                }}
              >
                <CrossIcon />
              </Pressable>
            </View>
            <View style={{marginBottom:20}}>
                <SubTitle colors={"#000"}>Forget Password</SubTitle>
              </View>
            <SubTitle>Registered Email Id</SubTitle>
              <IconTextIn icon={"envelope"} placeholder={"Name"}  keytype={"email-address"}/>
            <View>
            <CustomButton style={style.forgetBtn} txtclr={style.loginBtnText}>
                SUBMIT
              </CustomButton>
            </View>
            </View>
          </RegisterModel>
      </View>
      <View style={style.LoginMain}>
        <Image
          style={style.loginbanner}
          source={require("../assets/images/09.jpg")}
        />
        <View style={style.loginCard}>
          <Card visibility={modulepop} forgetvisibility={forgetmodulepop} />
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
    </SafeAreaView>
  );
};

export default Login;

const style = StyleSheet.create({
  loginBtn: {
    marginTop:25,
    borderRadius: 40,
    backgroundColor: "#146af5",
    overflow: "hidden",
    padding:10
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
  LoginMain: {
    flex: 1,
    // marginTop: 30,
  },
  loginbanner: {
    height: 270,
    width: "100%",
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
  outerModel: {
    backgroundColor: "#ffff",
    width: 335,
    height: 465,
    borderRadius: 25,
    elevation: 12,
    padding: 20,
    borderWidth:0.35,
    borderColor:'gray'
  },
  forgetouterModel:{
    backgroundColor: "#ffff",
    width: 335,
    height: 240,
    borderRadius: 25,
    elevation: 12,
    padding: 20,
    borderWidth:0.35,
    borderColor:'gray'
  }
});
