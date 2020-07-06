import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import "Helpers/global";
import Fonts from "UIProps/Fonts";
import ProfilePic from "../AppLevelComponents/UI/ProfilePic";
import { Input } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";

import { widthPercentageToDP } from "react-native-responsive-screen";
import SvgUri from "react-native-svg-uri";
import Line from "Helpers/line";
import Eye from "assets/img/user.svg";
import audio from "assets/img/audio.svg";
import gdoc from "assets/img/google-docs.svg";
import gsheet from "assets/img/google-sheets.svg";
import photograph from "assets/img/photograph.svg";
import vcamera from "assets/img/video-camera.svg";

export default class PostCreator extends Component {
  state = {
    inputVal: "",
    height: 0, // here we track the currently used height
    numberOfLines_input: 0, // here we calculate the currently used lines
  };

  onLayout(e) {
    // the height increased therefore we also increase the usedLine counter
    if (this.state.height < e.nativeEvent.layout.height) {
      this.setState({
        numberOfLines_input: this.state.numberOfLines_input + 1,
      });
    }
    // the height decreased, we subtract a line from the line counter
    if (this.state.height > e.nativeEvent.layout.height) {
      this.setState({
        numberOfLines_input: this.state.numberOfLines_input - 1,
      });
    }
    // update height if necessary
    if (this.state.height != e.nativeEvent.layout.height) {
      this.setState({ height: e.nativeEvent.layout.height });
    }
  }

  postAction(action){
      alert(action)
    switch (action){
        //cases
    }
  }

  renderButtons() {
    let svgSize = "23";

    return (
      <>
        <TouchableWithoutFeedback onPress={() => this.postAction('photo')}>
          <View>
            <SvgUri width={svgSize} height={svgSize} svgXmlData={photograph} />
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => this.postAction('photo')}>
          <View>
            <SvgUri width={svgSize} height={svgSize} svgXmlData={vcamera} />
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => this.postAction('photo')}>
          <View>
            <SvgUri width={svgSize} height={svgSize} svgXmlData={audio} />
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => this.postAction('photo')}>
          <View>
            <SvgUri width={svgSize} height={svgSize} svgXmlData={gdoc} />
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => this.postAction('photo')}>
          <View>
            <SvgUri width={svgSize} height={svgSize} svgXmlData={gsheet} />
          </View>
        </TouchableWithoutFeedback>

      </>
    );
  }
  render() {
    return (
        <LinearGradient
        style={styles.container}
        locations={[0, 0.15, 0.15]}
        colors={['rgba(200, 200, 218, 0.25)', 'rgba(200, 200, 218, 0.005)', '#F6F9FC']}
>

        <View
          style={{
            flexDirection: "row",
            alignItems:this.state.numberOfLines_input < 2 ? "center" : undefined,
          }}
        >
          <ProfilePic />
          <Input
            multiline
            blurOnSubmit
            returnKeyType='done'
            inputStyle={{fontFamily:Fonts.medium,fontSize:widthPercentageToDP(4.2),lineHeight:20}}
            onLayout={(ev) => this.onLayout(ev)}
            placeholder="Create a new post"
            inputContainerStyle={{ borderBottomWidth: 0, }}
            containerStyle={{
              width: widthPercentageToDP(80),
              borderWidth: 0,
            }}
          />
        </View>
        <Line style={{ marginVertical: 15 }} />
        <View style={styles.buttons}>{this.renderButtons()}</View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: -global.contentPadding, // to ignore parent padding
    padding: global.contentPadding,
    marginTop:13,
    backgroundColor: "#F6F9FC",
  },

  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
