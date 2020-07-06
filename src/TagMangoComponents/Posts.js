import React, { Component } from "react";

import {
  StyleSheet,
  View,
  FlatList,
  Image,
  ImageBackground,
  Keyboard,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import TextTruncate from "react-native-text-truncate";
import CustomText from "AppLevelComponents/UI/CustomText";
import SvgUri from "react-native-svg-uri";

import Icons from "AppLevelComponents/UI/Icons";

import Fonts from "UIProps/Fonts";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
import ProfilePic from "../AppLevelComponents/UI/ProfilePic";
import Line from "Helpers/line";
import comment from "assets/img/comment.svg";
import eye from "assets/img/eye.svg";

export default class Posts extends Component {
  renderItem (item, index ) {
    let svgSize = 19;
    return (
      <TouchableWithoutFeedback onPress={() => {}}>
        <View style={styles.postContainer}>
          <View style={{ flexDirection: "row", alignItems: "center",marginVertical:10 }}>
            <ProfilePic />
            <View style={{ paddingHorizontal: 14, paddingRight: 20 }}>
              <CustomText
                text={`${item.name}`}
                size={widthPercentageToDP(4.2)}
                color="#1D78DE"
              />

              <CustomText
                text={`${item.time}`}
                size={widthPercentageToDP(3.7)}
                color="#BEBEBE"
                style={{ marginTop: 0 }}
              />
            </View>
          </View>

          <View style={{ marginHorizontal: -10, marginVertical: 10 }}>
            <Image
              source={{ uri: item.img }}
              style={{ width: "100%", height: heightPercentageToDP(30) }}
            />
          </View>

          <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
            <TextTruncate
              style={{
                fontSize: 15.5,
                fontFamily: Fonts.regular,
                color: "#686868",
              }}
              numberOfLines={4}
              onExpand={()=>Keyboard.dismiss()}
              onCollapse={()=>Keyboard.dismiss()}
              renderExpandor={this.renderExpandor}
              renderCollapsar={this.renderCollapsar}
            >
              <Text>
                {
                  item.post
                }
              </Text>
            </TextTruncate>
          </View>

          <Line style={{ marginVertical: 15 }} />

          <View style={styles.bottomBtns}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icons lib="AntDesign" size={20} name="heart" color="#EA3841" />
                <CustomText
                  text={item.likes}
                  size={14}
                  color="#EA3841"
                  style={{ paddingHorizontal: 5 }}
                />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 14,
                }}
              >
                <SvgUri
                  width={svgSize}
                  fill="#BDBDBD"
                  height={svgSize}
                  svgXmlData={comment}
                />

                <CustomText
                  text={item.comments}
                  size={14}
                  color="#BDBDBD"
                  style={{ paddingHorizontal: 5 }}
                />
              </View>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <SvgUri
                width={svgSize+5}
                fill="#BDBDBD"
                style={{top:-1,left:-3}}
                height={svgSize+5}
                svgXmlData={eye}
              />
              <CustomText
                text={"Views"}
                size={14}
                color="#BDBDBD"
                font={Fonts.medium}
                style={{ paddingHorizontal: 5 }}
              />
              <CustomText
                text={`(${item.views})`}
                size={14}
                color="#BDBDBD"
                font={Fonts.medium}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  renderExpandor = () => {
    return <CustomText text="Continue reading" color="#E6492D" size={15.5} />;
  };
  renderCollapsar = () => {
    return <CustomText text="Read less" color="#E6492D" size={15.5}  />;
  };

  render() {
    const { posts } = this.props;
    return (
      <View style={styles.container}>
      {posts.map((item,index) => {
        return this.renderItem(item,index)
      })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },

  postContainer: {
    padding: 10,
    width: "100%",
    borderColor: "#D8D8D8",
    borderWidth: 1,
    marginBottom:24,
    borderRadius: 6,
  },

  pendingContainer: {
    alignSelf: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 3,
    alignItems: "center",
    borderRadius: 10,
  },

  bottomBtns: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
