import React, { Component } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import Container from "AppLevelComponents/UI/Container";
import NoHorizontalMarginView from "AppLevelComponents/UI/NoHorizontalMarginView";
import { widthPercentageToDP } from "react-native-responsive-screen";
import CustomText from "AppLevelComponents/UI/CustomText";
import Icons from "AppLevelComponents/UI/Icons";
import Fonts from "UIProps/Fonts";

export default class ComponentDesigning extends Component {
  render() {
    let commonVal = widthPercentageToDP(80);
    const { x, back, title, subTitle } = this.props;
    return (
      <Container>
        <NoHorizontalMarginView verticalAlso>
          <View style={{ flex: 1 }}>
            <ImageBackground
              style={{
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                height: commonVal,
                paddingVertical: 15,
                paddingHorizontal: 4,
              }}
              source={require("assets/img/headerBG.png")}
            >
              <View style={styles.headerTop}>
                <Icons
                  lib="AntDesign"
                  color="#616161"
                  size={27}
                  name={x ? "close" : "left"}
                />

                {
                  this.props.children //rightView
                }
              </View>

              <CustomText
              font={Fonts.semiBold}
                text={title || "Become a Creator!"}
                style={{
                  marginTop: 20,
                  marginHorizontal: 5,
                  color: "#212121",
                  fontSize: widthPercentageToDP(7),
                }}
              />
              <CustomText
              font={Fonts.regular}

                text={subTitle || "Subtitle here"}
                style={{
                  marginHorizontal: 5,
                  marginTop: 10,
                  color: "#9E9E9E",
                  fontSize: widthPercentageToDP(4),
                }}
              />
            </ImageBackground>
          </View>
        </NoHorizontalMarginView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
