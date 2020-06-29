import React, { Component } from "react";
import { Keyboard,Text,TouchableWithoutFeedback } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import CustomText from 'AppLevelComponents/UI/CustomText'
import * as Animatable from 'react-native-animatable';
import LinearGradient from "react-native-linear-gradient";
import { Button } from "react-native-elements";
import "Helpers/global";
import HelperMethods from "Helpers/Methods";
import { Colors } from "UIProps/Colors";
import Fonts from "UIProps/Fonts";
import Constants from "Helpers/Constants";

import AntDesign from "react-native-vector-icons/AntDesign";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default class CustomButton extends Component {

  state ={
    animation:''
  }
  onPress() {
    let { onPress } = this.props;
    if (!onPress) {
      alert("Provide onpress prop");
      return;
    }
    onPress();
    Keyboard.dismiss();
  }

  componentWillReceiveProps(nextProps){
    const {isApiCall} = nextProps
      this.setState({animation:isApiCall == 'failed' ? 'shake' : '' } )
  }

  render() {
    let { text, style, onPress,containerStyle,gradStyle,textStyle, isApiCall } = this.props;
    return (
      <Animatable.View animation={this.state.animation} useNativeDriver={true} duration={600} style={{width:'100%',borderRadius:10, shadowOffset: { width: 1, height: 0 },
      shadowColor: 'black',
      shadowOpacity: 0.5,...containerStyle}} >

<TouchableWithoutFeedback onPress={()=>this.onPress()} >
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          locations={[0.06,0.5,0.99]}
          colors={["#222831", "#393e46",]}
          style={[styles.btn,{padding:wp(5),margin:wp(3),alignItems:'center',...gradStyle,}]}
        >
          {isApiCall ? (
            <Loader color={'#fff'} />
          ) : (
            <CustomText font={Fonts.heavy} text={text} color='#fff' />
          )}
        </LinearGradient>
      </TouchableWithoutFeedback>
      </Animatable.View>
    );
  }
}

const styles = EStyleSheet.create({
  $columnWidth: "100%",
  $rem: global.rem,

  button: {
    
    height: "44rem",
    justifyContent: 'center',
    backgroundColor: Colors.accent,
    borderRadius: 4
  },

  btn: {
    borderRadius: 10,
    elevation: 10,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 1,backgroundColor : "#0000"
  }
});
