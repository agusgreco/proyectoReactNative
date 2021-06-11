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
    backgroundColor: 'rgba(0,0,0,0.3)', //'white', 
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
    color: 'white',
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
   //  height: 500,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
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
card: {
    flexDirection: 'row',
    backgroundColor: '#aabbcc',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    width: 250,
    height: 100,
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