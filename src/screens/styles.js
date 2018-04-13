const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {

//==============BASE===============
header_title : {
  color: Platform.OS === 'ios' ? '#000' : '#fff',
},


//=============SIDE-BAR==================
  drawer_cover: {
    alignSelf: "stretch",
    height: deviceHeight / 3.5,
    width: null,
    position: "relative",
    marginBottom: 10
  },
  drawer_image: {
    position: "absolute",
    left: Platform.OS === "android" ? deviceWidth / 10 : deviceWidth / 9,
    top: Platform.OS === "android" ? deviceHeight / 13 : deviceHeight / 12,
    width: 210,
    height: 75,
    resizeMode: "cover"
  },
  drawer_text: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 16,
    marginLeft: 20
  },

  
//=============HOME SCREEN==================
home_gridView : {
  paddingTop: 15,
  flex: 1,
},

home_itemContainer : {
  justifyContent: 'flex-end',
  backgroundColor : '#fff',
  padding: 10,
  height : 120,
  borderRadius : 10,
  borderWidth: 1,
  borderColor: '#ddd',
  borderBottomWidth: 0,
  shadowColor : '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 1,
  shadowRadius: 2,
  elevation: 1,
},

home_itemName : {
  paddingTop : 2,
  fontSize: 10,
  color: '#000',
  fontWeight: '600',
  alignSelf: 'center'
},

home_itemImage : {
  flexGrow:1,
  height:null,
  width:null,
  alignItems: 'center',
justifyContent : 'center',
borderRadius : 10
},

home_gridViewhm : {
  padding: 10,
  flex: 1,
  borderRadius: 10
},

home_itemContainerhm : {
  justifyContent: 'flex-end',
  backgroundColor: '#fff',
  padding: 4,
  height: 120,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: '#ddd',
  borderBottomWidth: 0,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 4
  },
  shadowOpacity: 1,
  shadowRadius: 4,
  elevation: 1,
},

home_itemNamehm : {
  paddingTop : 2,
  fontSize: 10,
  color: '#000',
  fontWeight: '600',
  alignSelf: 'center'
},

home_itemImagehm : {
flexGrow: 1,
height: 120,
width: 120,
borderRadius: 10
},

home_logo : {
  flexGrow:1,
  alignItems: 'center',
  justifyContent: 'center'
},

home_slideImage : {
  flex: 1,
  height: 200,
  width: null,
},

// ===ACCU SEARCH===

accusearch_content : {
  padding : 20,
},

accusearch_formsearch : {
backgroundColor : '#fff',
marginTop : 10,
},


// =====ABOUT=====

about_content : {
  backgroundColor: '#fff',
  padding: 30,
  paddingTop: 0
},

about_layout_p : {
  flex : 1,
  flexDirection : 'column',
  justifyContent : 'space-between',
  paddingBottom: 10,
},

about_image : {
  height: 200,
  width: 200,
  flex: 1,
  alignSelf: 'center'
},


// ===== STORE ======

store_content : {
  //backgroundColor: '#fff',
  padding: 30,
},

store_search : {
  backgroundColor: '#fff',
  borderWidth: 2,
  borderColor: '#eb2024'
},

// ====== MODAL =======
MainContainer :{
  flex: 1
},
 
ModalInsideView:{
  top: 0,
  position : 'absolute',
  backgroundColor : "#eb2024", 
  width: '100%',
},
 
TextStyle:{
  fontSize: 16, 
  color: "#fff",
  padding: 10,
  textAlign: 'center'
},

// =====PROMO=====

promo_content : {
  backgroundColor: '#fff',
  padding: 30,
  paddingTop: 0
},

promo_layout_p : {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-between',
  paddingBottom: 10
},

promo_image : {
  height: 200,
  flex: 1,
  alignSelf: 'center'
},

//======STORE=======

store_listItem : {
  backgroundColor: '#fff',
  marginTop: 5
},























//=============EVENT LIST==================
eventlist_actionContainer : {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
},
eventlist_actionButton : {
  padding : 10,
  width: 80,
  backgroundColor : '#14E22C'
},
eventlist_actionButtonDestructive : {
  padding: 10,
  width: 80,
  backgroundColor : '#F2171B'
},
eventlist_actionButtonText : {
  textAlign : 'center',
  color : '#fff'
},
eventlist_row : {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  backgroundColor: '#F6F6F6'
},
eventlist_rowData : {
  flex: 1
},

//LOGIN//

login_container : {
   backgroundColor: 'rgb(199, 184, 238)',
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 40,
  flexDirection: 'column'
},

login_input : {
    backgroundColor: 'rgb(255, 255, 255)',
    color: '#494949',
    borderRadius : 10,
},

login_text : {
  marginTop: 20,
  color : '#fff'
},

 login_contentImage: {
  justifyContent: 'center',
  alignItems: 'center',
  padding : 20
  },
};
