import React, { Component } from "react";
import { Text, Image } from "react-native";
import "Helpers/global";
import "Helpers/Methods";
import EStyleSheet from "react-native-extended-stylesheet";
import { LanguageConsumer } from "AppLevelComponents/LanguageSelector/LanguageContext";
import { Colors } from "UIProps/Colors";
import Fonts from "UIProps/Fonts";
import HelperMethods from "Helpers/Methods";
import Constants from "Helpers/Constants";
import { widthPercentageToDP, heightPercentageToDP } from "react-native-responsive-screen";


export default class CustomText extends Component {
  render() {
    let {
      size,
      onPress,
      textAlign,
      type,
      color,
      font,
      padding,
      numberOfLines,
      paddingHorizontal,
      text,
      style
    } = this.props;
    let rem = global.rem;
    switch (type) {
      case "title":
        font = Fonts.heavy;
        size = !size ? 21 : size;
        break;

      default:
          
        break;
    }

    padding = padding == undefined && 1
    
    return (
      <LanguageConsumer>
        {context => {
          
          return (
            <Text
              numberOfLines={numberOfLines || undefined}
              allowFontScaling={false}
              onPress={onPress ? () => onPress() : onPress}
              style={[
                styles.text,
                {
                  fontSize:size || 18.5,
                  color: color || Colors.dark,
                  fontFamily: font ||  Fonts.medium,
                  textAlign: textAlign ,
                  ...style
                }
              ]}
            >
              {text}
            </Text>
          );
        }}
      </LanguageConsumer>
    );
  }
}

const styles = EStyleSheet.create({
  text: {
    textAlign: "center",
    marginVertical:heightPercentageToDP(-0.14),
  }
});
