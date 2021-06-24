import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#111010',
    alignItems: 'center',
    // justifyContent: 'center',
  }, 
  containerMenu: {
    flex: 1,
    backgroundColor: '#111010', // '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 

  headerBorder: {
    backgroundColor: 'white', // '#111010',
    height: 60,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
    // top: 100
},

menuHeaderText:{
    color: "#A9A9A9",
    // fontFamily: "calibri",
    fontWeight: "bold",
    fontSize: 30,
},

textoDeMenu:{
    fontSize:20,
    // fontWeight:'bold',
    color:'#A9A9A9',
    textAlign: "center",
    backgroundColor: "#111010",
    paddingVertical: 20,
    
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
    height: 700, 
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

modalBorrar: {
    height: 600, 
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
    fontSize: 20,
    borderRadius: 30,
    backgroundColor: "white",
    marginHorizontal: 30,
    borderStyle: 'solid',
    width: '50%',
    marginTop:10,
    height: 30,
    borderColor: 'black',
    paddingHorizontal: 20,
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
borrarDef:{
    paddingVertical: 0,
    borderRadius:30,
    backgroundColor: "black",
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:30,
    marginBottom:5,
    marginTop:20,
    width: "65%"
},

closeButtonModal: {
    position: 'absolute',
    right: 20,
    top: 10,
    fontSize: 20
},


headerText:{
    color: "#A9A9A9",
    // fontFamily: "calibri",
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 20
},

headerTextImport:{
    color: "#A9A9A9",
    // fontFamily: "calibri",
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 20
},

headerTextAcercaDe:{
    color: "#A9A9A9",
    // fontFamily: "calibri",
    fontWeight: "bold",
    fontSize: 35,
    marginTop: 60,

},

headerBorderImport:{
    paddingVertical: 15,
    // flex: 1,
    // height: 100,
    width: '100%',
    backgroundColor: '#111010',
    justifyContent: 'center',
    alignItems: 'center',
},

headerBorderImportDos:{
    paddingVertical: 15,
    // flex: 1,
    // height: 100,
    width: '100%',
    backgroundColor: '#111010',
    justifyContent: 'center',
    alignItems: 'center',
},

acercaDe:{
    backgroundColor: '#111010',
    height: 500,
    alignItems: "center",
    justifyContent: 'center',

},

acercaDeText:{
    color: "#A9A9A9",
    textAlign: "center",
    alignItems: "center",
    justifyContent: 'center',
    fontSize: 30,   
    paddingVertical: 30, 

},

importTexto:{
    fontSize: 23,
    paddingVertical: 10,
    textAlign: "center",
    color: "#A9A9A9"
},

importScreen:{
    backgroundColor: "#111010",
    width: '100%',
    paddingTop: 60
},

agregarTexto:{
    fontSize: 15,
    textAlign: "center",
    paddingVertical: 10,
    color: "#A9A9A9"
},
agregarTextoDos:{
    fontSize: 15,
    textAlign: "center",
    paddingVertical: 10,
    color: "#A9A9A9",
    width: 300
},

recycleTexto:{
    fontSize: 15,
    textAlign: "center",
    paddingVertical: 10,
    color: "#A9A9A9"
},

guardarDatos:{
    paddingVertical: 5,
    borderRadius: 30,
    backgroundColor:  'grey', // "black",
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 90,
    // position: 'relative'
},
guardarDatosTexto:{
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 10,
    color: 'black', // "#A9A9A9",
},

botones:{
    // paddingVertical: 2,
    borderRadius:30,
    width: 280,
    backgroundColor: "grey",
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:30,
    marginVertical:5,
    
},

botonBackground:{
    backgroundColor: 'red' // "#111010"
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

touchbarContainer: {
    flex: 3, 
    flexDirection: 'row', 
    backgroundColor: '#A9A9A9',
    height: 50

},

textoMenu:{
    backgroundColor: "#111010",

    fontSize:15,
    // fontWeight:'bold',
    color: 'black', 
    textAlign: "center",
    // backgroundColor: '#A9A9A9', 
    paddingVertical: 13,
    height: 50,
},



// goBack:{
//     fontSize:15,
//     // fontWeight:'bold',
//     color: '#A9A9A9', 
//     textAlign: "center",
//     // backgroundColor: '#A9A9A9', 
//     paddingVertical: 13,
//     height: 50,
// },
goBack:{
    fontSize:15,
    // fontWeight:'bold',
    color: '#A9A9A9', 
    textAlign: "center",
    backgroundColor: '#111010', 
    paddingVertical: 13,
    height: 100,
    fontSize: 20,
},

icons: {
    width: 160,
    height: 50,
    left: 15,
    backgroundColor: '#A9A9A9',
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: 'black',
},

menu: {
    width: 70,
    height: 50,
    left: 5,
    right: 10,
    backgroundColor: '#A9A9A9',
    alignItems: 'center',
    justifyContent: 'center'
    // borderWidth: 2,
    // borderColor: 'black',
},

buscar:{
    backgroundColor: "#111010",
    width: '100%',
    height: 110,
    paddingBottom: 50,
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
},

buscarText:{
    justifyContent: 'center',
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    marginTop: 5,
    left: 5
},

buscarTextNombre:{
    justifyContent: 'center',
    textAlign: "center",
    marginTop: 5,
    fontWeight: "bold",
    color: "white", 
    left: 5,
    // width: 100
},

buscarSquare:{
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: "white",
    // marginHorizontal: 30,
    width: 300,
    left: 10,
    bottom: 5,
    opacity: 0.75
},

buscarSquarePais:{
    borderColor: "black",
    borderRadius: 30,
    backgroundColor: "white",
    marginHorizontal: 30,
    marginBottom: 20,
    borderColor: 'black',
    borderWidth: 1,
    width: 230,
    opacity: 0.75

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



// container: {
//     flex: 1,
//     backgroundColor: 'black'
//    //  justifyContent: 'center',
//    //  alignItems: 'center'

// },

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
   backgroundColor: '#111010',
   width: '100%'

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

imageModal: {
    width: 200,
    height: 200,
    // alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    paddingBottom: 5,
},

card: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#A9A9A9',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    width: 300,
    height: 350,
    alignItems: "center",
    padding: 10,
    justifyContent: 'center',
    // shadowColor: 'black',
    flex: 1,
},

itemText: {
    fontSize: 17,
    color: 'black',
    // alignItems: "center",
    // justifyContent: 'center',
    paddingTop: 5,
    textAlign: 'center'
},

itemTextName: {
    fontSize: 17,
    color: 'black',
    // alignItems: "center",
    // justifyContent: 'center',
    paddingTop: 5,
    textAlign: 'center',
    fontWeight: 'bold'
},

separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'black'
}
    
})