import React, { Component } from "react";
import {
  SafeAreaView,
  RefreshControl,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import "Helpers/global";
import HelperMethods from "Helpers/Methods";
import 'Helpers/global'
import EStyleSheet from "react-native-extended-stylesheet";
import { Colors } from "UIProps/Colors";
import BackHandlerSingleton from "ServiceProviders/BackHandlerSingleton";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default class Container extends Component {
  renderForIOS() {
    let {
      refreshingData,
      refSetter,
      scrollEnabled,
      onRefresh,
      contentStyle,
      extraScrollheight,
    } = this.props;
    return (
      <>
        <SafeAreaView style={{ flex: 0, color: "#fff" }} />
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar translucent={true} barStyle="dark-content" />
          <KeyboardAwareScrollView
            behavior="padding"
            ref={ref => {refSetter = ref}}
            refreshControl={
              <RefreshControl
                refreshing={refreshingData}
                onRefresh={onRefresh || undefined}
              />
            }
            nestedScrollEnabled
            extraScrollHeight={extraScrollheight || undefined}
            scrollEnabled={scrollEnabled == undefined ? true : scrollEnabled}
            keyboardShouldPersistTaps="always"
            contentContainerStyle={[styles.contentFixed, { ...contentStyle }]}
            behavior="padding"
          >
            {this.props.children}
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </>
    );
  }

  renderForAndroid() {
    let {
      refreshingData,
      onRefresh,
      scrollEnabled,
      contentStyle,
      extraScrollheight,
    } = this.props;

    return (
      <>
        <StatusBar backgroundColor="#eee" barStyle={"dark-content"} />
        <KeyboardAwareScrollView
          behavior="padding"
          refreshControl={
            <RefreshControl
              refreshing={refreshingData}
              onRefresh={onRefresh || undefined}
            />
          }
          extraScrollHeight={extraScrollheight || undefined}
          scrollEnabled={scrollEnabled == undefined ? true : scrollEnabled}
          keyboardShouldPersistTaps="handled"
          nestedScrollEnabled
          contentContainerStyle={[styles.contentFixed, { ...contentStyle }]}
        >
          {this.props.children}
        </KeyboardAwareScrollView>
      </>
    );
  }

  render() {
    return (
      <>
        {<BackHandlerSingleton onBackPress={this.props.onBackPress} />}
        {HelperMethods.isPlatformAndroid()
          ? this.renderForAndroid()
          : this.renderForIOS()}
      </>
    );
  }
}

const styles = EStyleSheet.create({
  $columnWidth: "100%",
  $rem: global.rem,

  container: {
    width: "100%",
  },

  contentFixed: {
    flexGrow: 1,
    padding: global.contentPadding,
  },

  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: "0rem",
    width: "100%",
  },
});
