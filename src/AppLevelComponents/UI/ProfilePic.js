import React, { Component, Fragment } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import "Helpers/global";
import HelperMethods from "Helpers/Methods";
import {TakePhoto} from 'ServiceProviders/TakePhoto'

import CustomText from "AppLevelComponents/UI/CustomText";
import AntDesign from 'react-native-vector-icons/AntDesign'
import {camera } from "UIProps/Colors";
import { Transition } from "react-navigation-fluid-transitions";

import EStyleSheet from "react-native-extended-stylesheet";
import {Colors} from "UIProps/Colors";
import { withNavigation } from "react-navigation";
import Icons from "./Icons";

let valObj = {
  image: ""
};

let currentContext 
class ProfilePic extends Component {
  state = {
    profilePic: undefined
  };

  componentWillReceiveProps(nextProps){
      let {pic} = nextProps
      this.setState({profilePic:pic})
  }

  removePhoto = () => {
    HelperMethods.animateLayout()
    this.setState({profilePic:undefined})
  }
  
  navigateProfile(){
    this.props.navigation.navigate('Profile')
    }

    tapFunc(){
      TakePhoto((resp) => {
        HelperMethods.animateLayout()
        this.setState({profilePic:resp.uri})
      })
    }

  render() {
      let {size,pic,style,showText,canNavigateToProfile} = this.props
    return (
      <TouchableOpacity style={style} onPress={ ()=> {} }>
        <View style={styles.circle}>
          <Image style={{width:size || 55,height:size || 55,borderRadius:100}} source={{uri:!pic ? 'https://www.mobileworldlive.com/wp-content/uploads/2015/10/Dorsey-iamge.png' : pic }} />
        </View>
        {showText && 
        <CustomText text="Upload photo" style={{ marginTop: 10 }} />
        }
      </TouchableOpacity>
    );
  }
}

const styles = EStyleSheet.create({
  $columnWidth: "100%",
  $rem: global.rem,

  circle: {
    borderRadius: 100 / 2,
    backgroundColor: "#F7FAFD",
    alignItems: "center",
    justifyContent: "center",
    alignSelf:'flex-start',
  },
  
});
export default  withNavigation(ProfilePic)