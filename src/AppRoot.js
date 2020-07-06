import React, { Component, Fragment } from "react";
import { View, StatusBar, Animated,Keyboard, Easing } from "react-native";
import { Colors } from "UIProps/Colors";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Icons from "AppLevelComponents/UI/Icons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import SvgUri from "react-native-svg-uri";
import search from "assets/img/search.svg";
import compass from "assets/img/compass.svg";
import email from "assets/img/email.svg";
import user from "assets/img/user.svg";

import "Helpers/global";
import {
  createFluidNavigator,
  Transition as fluidTransition,
  FluidNavigator,
} from "react-navigation-fluid-transitions";
import EStyleSheet from "react-native-extended-stylesheet";
import createAnimatedSwitchNavigator from "react-navigation-animated-switch";
import { Transition } from "react-native-reanimated";
import {
  zoomIn,
  fromBottom,
  fromLeft,
  fromRight,
} from "react-navigation-transitions";
import Login from "Screens/Login/Login";
import Settings from "Screens/Settings/Settings";
import ForgotPassword from "Screens/ForgotPassword/ForgotPassword";
import ResetPassword from "Screens/ResetPassword/ResetPassword";
import Dashboard from "Screens/Dashboard/Dashboard";
import Search from "./Screens/Tabs/Search";
import Message from "./Screens/Tabs/Message";
import Profile from "./Screens/Tabs/Profile";
import ComponentDesigning from "./ExperimentalPlayground/ComponentDesigning";

let transitionSpeed = 650;
let tabIconSize = 18;

const transitionConfig = {
  duration: 500,
};

// const Tab = createMaterialBottomTabNavigator();
const handleCustomTransition = ({ scenes }) => {
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];

  // Custom transitions here..
  if (
    prevScene &&
    prevScene.route.routeName === "Noticeboard" &&
    nextScene.route.routeName === "iCard"
  ) {
    return zoomIn(transitionSpeed);
  } else if (
    prevScene &&
    prevScene.route.routeName === "Noticeboard" &&
    nextScene.route.routeName === "Profile"
  ) {
    return null;
  }
  return fromRight(transitionSpeed);
};

const LoginStack = createStackNavigator(
  {
    login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },

    forgotPassword: {
      screen: ForgotPassword,
    },

    resetPassword: {
      screen: ResetPassword,
    },
  },
  {
    // initialRouteName:'resetPassword',
    headerMode: "none",
  }
);

const DashboardStack = createStackNavigator(
  {
    dashboard: Dashboard,
    ComponentDesigning:ComponentDesigning,
  },

  {
    initialRouteName: "dashboard",
    headerMode: "none",
    transitionConfig: (nav) => handleCustomTransition(nav),
  }
);

const TopLevelNavigator = createAnimatedSwitchNavigator(
  {
    // DashboardStack,
    LoginStack,
  },
  {
    //The previous screen will slide to the bottom while the next screen will fade in
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-top"
          durationMs={500}
          interpolation="easeIn"
        />
        <Transition.In type="slide-top" durationMs={transitionSpeed} />
      </Transition.Together>
    ),
  }
);

let svgSize = 26;
let activeColor = "#424242";
let inactiveColor = "#BDBDBD";
let colors = {dash:{color:activeColor}}

export default createMaterialBottomTabNavigator(
  {
    Dashboard: {
      screen: DashboardStack,
      navigationOptions: {
        tabBarOnPress:()=>{Keyboard.dismiss();colors = [];colors['dash'] = {color:activeColor}},
        tabBarIcon: () => (
          <View>

          <SvgUri
            width={svgSize}
            fill={colors['dash']?.color || inactiveColor}
            height={svgSize}
            svgXmlData={compass}
          />

          <View style={styles.circle} />
          </View>
        ),
      },
    },

    Search: {
      screen: Search,
      navigationOptions: {
        tabBarOnPress:()=>{Keyboard.dismiss();colors = [];colors['search'] = {color:activeColor}},
        tabBarIcon: ({ focused }) => (
          <SvgUri
            width={svgSize}
            fill={colors['search']?.color || inactiveColor}
            
            // style={{top:-1,left:-3}}
            height={svgSize}
            svgXmlData={search}
          />
        ),
      },
    },

    Message: {
      screen: Message,
      navigationOptions: {
        tabBarOnPress:()=>{Keyboard.dismiss();colors = [];colors['email'] = {color:activeColor}},

        tabBarIcon: ({ focused }) => (
          <SvgUri
            width={svgSize}
            fill={colors['email']?.color || inactiveColor}
            
            // style={{top:-1,left:-3}}
            height={svgSize}
            svgXmlData={email}
          />
        ),
      },
    },

    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarOnPress:()=>{Keyboard.dismiss(); colors = [];colors['profile'] = {color:activeColor}},

        tabBarIcon: ({ focused }) => (
          <Icons lib='FontAwesome' name='user-o' size={25} color={colors['profile']?.color || inactiveColor} />
        ),
      },
    },


  },
  {
    labeled: false,
    shifting:false,
    tabBarOptions: {
      showLabels: false,
      shifting:false,
    },
    barStyle: { backgroundColor: "rgba(0,0,0,0)", labeled: false },
  }
);

const styles = EStyleSheet.create({
  $columnWidth: "100%",
  $rem: global.rem,

  container: {
    flex: 1,
  },

  circle: {
      width:  10,
      height: 10,
      borderRadius: 100 / 2,
      position:'absolute',
      top:0,right:0,
      borderColor:'#fff',
      borderWidth:1,
      backgroundColor: "#F18926",
      alignItems: "center",
      justifyContent: "center"
    },
});
