import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  title:{
      fontSize:20,
      fontWeight:'bold',
      color:'black',
  },
    texto:{
      fontSize:20,
      fontWeight:'bold',
      color:'black',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor:'rgba(0,0,0,0.3)'
},
modal: {
    height: "70%",
    width: "100%",
    backgroundColor: 'white', //'rgba(0,0,0,0.3)'
    justifyContent: 'center',
    alignItems:'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // elevation: 20,
    // shadowColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black'
},
modalText: {
    fontSize: 20,
    color: 'black',
},
imageModal: {
    width: 100,
    height: 100
},
closeButtonModal: {
    position: 'absolute',
    right: 20,
    top: 10,
    fontSize: 20
},
headerBorder: {
   flex: 1,
   height: 100,
    backgroundColor: '#111010',
    justifyContent: 'center',
    alignItems: 'center',
},

menuHeaderText:{
    color: "#A9A9A9",
    // fontFamily: "calibri",
    fontWeight: "bold",
    fontSize:30,

},

headerText:{
    color: "#A9A9A9",
    // fontFamily: "calibri",
    fontWeight: "bold",
    fontSize: 20,
},

importTexto:{
fontSize: 25,
paddingVertical: 10,
textAlign: "center",


},

guardarDatosTexto:{
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 10,



},

headerStyle:{
    flex: 1,
    height: 10,
    paddingVertical:0,
    marginVertical:0,
    backgroundColor: '#212816',
    justifyContent: 'center',
    alignItems: 'center',



},

textoMenu:{
    fontSize:20,
    // fontWeight:'bold',
    color:'#A9A9A9',
    textAlign: "center",
    backgroundColor: "#111010",
    paddingVertical: 20,
    
},

textoMenuAcercaDe:{
    fontSize:20,
    // fontWeight:'bold',
    color:'#A9A9A9',
    textAlign: "center",
    backgroundColor: "#111010",
    paddingTop: 20,
    paddingBottom: 50,
},



container: {
    flex: 1,
   //  justifyContent: 'center',
   //  alignItems: 'center'
},
listContainer: {
   flex: 11,
   // height: 500,
   justifyContent: 'center',
   alignItems: 'center'
},
texto: {
    fontSize: 20,
    margin: 10
},

inputstyle: {
    fontSize: 20,
    margin: 10,
    borderWidth: 2, 
    
},
card: {
    flexDirection: 'row',
    backgroundColor: '#aabbcc',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    width: 250,
    height: 300,
    padding: 10
},
image: {
    width: 100,
    height: 100
},
separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'black'
}
    
})