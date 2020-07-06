import React, { Component } from "react";

import {
  StyleSheet,
  Keyboard,
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import CustomText from "AppLevelComponents/UI/CustomText";
import Fonts from "UIProps/Fonts";
import { widthPercentageToDP } from "react-native-responsive-screen";

export default class ActivityCategories extends Component {
  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={{ flex: 1 }} onPress={() => {Keyboard.dismiss(); alert("Todo")}}>
        <ImageBackground
          source={item.image}
          resizeMode="cover"
          imageStyle={{ borderRadius: 10 }}
          style={styles.categoryContainer}
        >
          <View style={styles.pendingContainer}>
            <CustomText
              text={`Pending: ${item.pending}`}
              size={widthPercentageToDP(3.2)}
              font={Fonts.regular}
              color="#fff"
            />
          </View>

          <View style={{ marginTop: 0 }}>
            <CustomText
              text={`${item.count}`}
              size={widthPercentageToDP(5.2)}
              font={Fonts.semiBold}
              color="#fff"
            />
            <CustomText
              text={`${item.name}`}
              size={widthPercentageToDP(3.9)}
              color="#fff"
            />
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  render() {
    const { categories } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={categories || []} //to prevent any null errors
          renderItem={this.renderItem}
          numColumns={2}
          nestedScrollEnabled
          keyboardShouldPersistTaps='always'
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: -global.contentPadding + 3,
    padding: 4,

    shadowColor: "#000",
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation:2,
  },

  categoryContainer: {
    padding: 7,
    paddingLeft: 13,
    paddingRight: 5,
    paddingTop: 6,
    borderRadius: 10,
    margin: 8,
  },

  pendingContainer: {
    alignSelf: "flex-end",
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 5,
    paddingHorizontal:12,
    alignItems: "center",
    borderRadius: 18,
  },
});
