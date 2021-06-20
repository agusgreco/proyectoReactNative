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
    height: "85%",
    width: "100%",
    backgroundColor: '#A9A9A9', //'rgba(0,0,0,0.3)'
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
recycleModal: {
    height: "60%",
    width: "100%",
    backgroundColor: '#A9A9A9', //'rgba(0,0,0,0.3)'
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
itemText: {
    fontSize: 20,
    color: 'white',
    paddingLeft: 30,
},
modalText: {
    fontSize: 20,
    color: 'black',
    paddingLeft: 30,
    fontWeight: "bold",
    textAlign: "center",
    paddingRight: 30,
    marginTop: 10,
    fontSize: 17,
    marginBottom: 0,
},

adicional:{
    borderRadius: 30,
    backgroundColor: "white",
    marginHorizontal: 30,
    borderStyle: 'solid',
    width: '50%',
    marginTop:10,
    height: 30,
    borderColor: 'black',
},

agregar:{
    paddingVertical: 0,
    borderRadius:30,
    backgroundColor: "black",
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:30,
    marginTop:20,
    width: "50%"
},

borrar:{
    paddingVertical: 0,
    borderRadius:30,
    backgroundColor: "black",
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:30,
    marginBottom:5,
    marginTop:5,
    width: "50%"
},

imageModal: {
    width: 150,
    height: 150,
    alignItems: 'center',
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
fontSize: 23,
paddingVertical: 10,
textAlign: "center",


},

importScreen:{
backgroundColor: "#A9A9A9" 
},

buscar:{
    backgroundColor: "#808080" 
    

},



guardarDatosTexto:{
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 10,
    color: "#A9A9A9"
},

agregarTexto:{
    fontSize: 15,
    textAlign: "center",
    paddingVertical: 10,
    color: "#A9A9A9"
},

recycleTexto:{
    fontSize: 15,
    textAlign: "center",
    paddingVertical: 10,
    color: "#A9A9A9"
},

guardarDatos:{
    paddingVertical: 5,
    borderRadius:30,
    backgroundColor: "black",
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:30,
    marginVertical:20,




},

botones:{
    paddingVertical: 2,
    borderRadius:30,
    backgroundColor: "black",
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:30,
    marginVertical:5,
    
},

botonBackground:{
    backgroundColor: "#A9A9A9"


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
    fontSize:18,
    // fontWeight:'bold',
    color:'#A9A9A9',
    textAlign: "center",
    backgroundColor: "#111010",
    paddingVertical: 13,
    
},

textoDeMenu:{
    fontSize:20,
    // fontWeight:'bold',
    color:'#A9A9A9',
    textAlign: "center",
    backgroundColor: "#111010",
    paddingVertical: 20,
    
},

buscarText:{
    textAlign: "center",
    fontWeight: "bold",

},

buscarTextNombre:{
    textAlign: "center",
    marginTop: 15,
    fontWeight: "bold",


},


buscarSquare:{
    borderRadius: 30,
    backgroundColor: "white",
    marginHorizontal: 30,

},

buscarSquarePais:{
    borderColor: "black",
    borderRadius: 30,
    backgroundColor: "white",
    marginHorizontal: 30,
    marginBottom: 20,
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

itemcontainer: {
    //  justifyContent: 'center',
    //  alignItems: 'center'
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 },

listContainer: {
   flex: 11,
   // height: 500,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor:'#A9A9A9',

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
    backgroundColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    width: 370,
    height: 200,
    alignItems: "center",
    padding: 10,
    // justifyContent: 'center',
    // // shadowColor: 'black',
    flex: 1,
    // justifyContent: 'flex-end',
    alignItems: 'center',

},

separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'black'
}
    
})