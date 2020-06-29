import 'Helpers/global'
import EStyleSheet from "react-native-extended-stylesheet";
import {Colors} from "UIProps/Colors";
import Fonts from "UIProps/Fonts";
EStyleSheet.build({
  $rem: global.rem
});

export const inputStyle = EStyleSheet.create({
  fontSize:16
});

export let labelStyle = EStyleSheet.create({
  top:13,left:20,zIndex:1,
  fontFamily:Fonts.regular,
  color:'teal',
  alignSelf:'flex-start',
  width:null,
  backgroundColor:'rgba(255,255,255,0.8)',
  fontSize:16.5,
  // fontWeight: "300",
});


export const inputErrors = {
  color: "red",
  fontSize: 24*global.rem,
  alignSelf: 'flex-start',
  textAlign:'left',
};

export const inputContainerStyle = {
  borderRadius: 4,
  borderWidth:1,
  borderColor: Colors.inputBorderColor,
  backgroundColor:'#fff',
  height:43,
  paddingLeft:10,
  paddingTop:3
};

export const cardStyle = {
  backgroundColor:Colors.noticeMsgBox,
      alignItems: "flex-start",
      margin:0,
      borderRadius: 5,
      marginVertical: 10,
}
export const personaContainer = {
    
    flex:1,
    width: "100%",
    backgroundColor: '#f7f7f9',
}

export const containerStyle = {
  flex: 1,
  padding:15*global.rem,
    backgroundColor: "#000"
  
}

export const containerContentStyle = {
 
alignItems: "center",flexGrow:1, paddingBottom:10,

  
}

