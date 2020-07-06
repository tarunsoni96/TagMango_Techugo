import React, { Component } from "react";
import { Text, View } from "react-native";
import CustomText from "AppLevelComponents/UI/CustomText";
import Container from "AppLevelComponents/UI/Container";
import NetworkAwareContent from "AppLevelComponents/UI/NetworkAwareContent";
import HelperMethods from "../../Helpers/Methods";
import SubHeader from "../../AppLevelComponents/UI/SubHeader";
import MobxStore from "StorageHelpers/MobxStore";
import { observer } from "mobx-react";
import ActivityCategories from "../../TagMangoComponents/ActivityCategories";
import PostCreator from "../../TagMangoComponents/PostCreator";
import { heightPercentageToDP } from "react-native-responsive-screen";
import Posts from "../../TagMangoComponents/Posts";

let dummyCats = [
  {
    name: "Video Shoutout",
    count: "23",
    pending: "15",
    image: require("assets/img/orange.png"), //image will be dynamic coming from backend.
  },
  {
    name: "Video Call",
    count: "56",
    pending: "15",
    image: require("assets/img/black.png"),
  },
  {
    name: "Confrencing",
    count: "11",
    pending: "15",
    image: require("assets/img/black2.png"),
  },
  {
    name: "Review",
    count: "110",
    pending: "15",
    image: require("assets/img/yellow.png"),
  },
  {
    name: "Comment",
    count: "11",
    pending: "15",
    image: require("assets/img/red.png"),
  },
  {
    name: "Messaging",
    count: "56",
    pending: "15",
    image: require("assets/img/violet.png"),
  },

  
];

let posts = [
  {
    name: "Sayantan chandra",
    time: "1 hour ago",
    post:"Enim non laborum amet eiusmod labore Enim non laborum amet eiusmod labore Enim non laborum amet eiusmod labore Enim non laborum amet eiusmod labore Enim non laborum amet eiusmod labore Magna nostrud labore commodo eu exercitation Lorem et sit tempor. Nisi ea cupidatat veniam et officia deserunt consequat exercitation id non. Cillum mollit ex consequat nisi exercitation deserunt. Officia est adipisicing consequat sit ad reprehenderit aliqua sit laborum ad esse. Nostrud nisi sint eu tempor.",
    likes: "10",
    comments: "10",
    views: 10,
    img: "https://i.pinimg.com/originals/a8/99/5b/a8995b837332064f2f17d6f2adb250b3.jpg",
  },

  {
    name: "Sayantan chandra",
    time: "1 hour ago",
    post:"Enim non laborum amet eiusmod labore Enim non laborum amet eiusmod labore Enim non laborum amet eiusmod labore Enim non laborum amet eiusmod labore Enim non laborum amet eiusmod labore Magna nostrud labore commodo eu exercitation Lorem et sit tempor. Nisi ea cupidatat veniam et officia deserunt consequat exercitation id non. Cillum mollit ex consequat nisi exercitation deserunt. Officia est adipisicing consequat sit ad reprehenderit aliqua sit laborum ad esse. Nostrud nisi sint eu tempor.",
    likes: "10",
    comments: "10",
    views: 10,
    img: "https://i.pinimg.com/originals/a8/99/5b/a8995b837332064f2f17d6f2adb250b3.jpg",
  },

  {
    name: "Sayantan chandra",
    time: "1 hour ago",
    post:"Enim non laborum amet eiusmod labore Enim non laborum amet eiusmod labore Enim non laborum amet eiusmod labore Enim non laborum amet eiusmod labore Enim non laborum amet eiusmod labore Magna nostrud labore commodo eu exercitation Lorem et sit tempor. Nisi ea cupidatat veniam et officia deserunt consequat exercitation id non. Cillum mollit ex consequat nisi exercitation deserunt. Officia est adipisicing consequat sit ad reprehenderit aliqua sit laborum ad esse. Nostrud nisi sint eu tempor.",
    likes: "10",
    comments: "10",
    views: 10,
    img: "https://i.pinimg.com/originals/a8/99/5b/a8995b837332064f2f17d6f2adb250b3.jpg",
  },

  
];

@observer
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isApiCall: false,
      salaryData: [],
      categories: dummyCats,
      posts,
    };

    this.scrollView = undefined;
  }

  getData = () => {};


  componentDidMount(){
   this.props.navigation.navigate('ComponentDesigning')
  }

  onRefresh = () => {
    this.setState({refreshingData:false})
  };

  onBackPress = () => {
    HelperMethods.appExitPrompter();
  };

  render() {
    return (
      <Container
        contentStyle={{}}
        onBackPress={this.onBackPress}
        onRefresh={this.onRefresh}
        refreshingData={this.state.refreshingData}
      >
      
        <SubHeader title={"Activity"} />
        <View style={{ flex: 1 }}>
          <ActivityCategories categories={this.state.categories} />
        <PostCreator />
        </View>

        <View style={{ marginTop:25 }}>
          <Posts posts={this.state.posts} />
        </View>
      </Container>
    );
  }
}

export default Dashboard;
