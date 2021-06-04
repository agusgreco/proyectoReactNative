import React, {Component} from 'react';
import {getData} from '../api/RandomUsers'
// import {ModalInfo} from '../Components/ModalInfo'
import { 
    View,
    Text,
    Image,
    ActivityIndicator, 
    Modal, 
    Alert,
    FlatList, 
    TouchableOpacity, 
    Button,
    StyleSheet
} from 'react-native';

 export class Screen_Flat extends Component {
     constructor(){
         super();
         this.state = {
             users: [],
             activity: false,
             showModal: false,
             selectedItem: null,
         }
     }

    componentDidMount() {
        // getData()
        // .then( (usuarios) => {
        //     this.setState({users: usuarios})
        // })
        // this.getDataFromApi()
    }

    async getDataFromApi() {
        this.setState({activity: true});
        let usuarios = await getData();
        console.log(usuarios)
        this.setState({users: usuarios, activity: false})
    }

    showModal (item) {
        this.setState({selectedItem: item, showModal: true});
    } 

    renderItem = ({item}) => {
        return(
            <TouchableOpacity onPress={ () => this.showModal(item)}> 
            <View style={styles.card}> 
                <Image style={styles.image} source={{uri: item.picture.thumbnail}}/> 
                <Text style={styles.texto}> {item.name.last}, {item.name.first} </Text>
            </View>
            </TouchableOpacity>
        )
    }

    keyExtractor = (item, idx) => idx.toString()

    separator = () => <View style={styles.separator}/>


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerBorder}>
                    <Text> Header </Text>
                </View>

                <View style={styles.listContainer}>
                    { this.state.activity 
                        ?<ActivityIndicator color="blue"
                            size= {60}/>

                        :<FlatList
                            data= {this.state.users}
                            keyExtractor= {this.keyExtractor}
                            renderItem= {this.renderItem}
                            // numberColumns= {2}
                            ItemSeparatorComponent={this.separator}
                         />
                    }
                </View>

                <Button title="Obtener resultados" onPress={() => this.getDataFromApi()}/>
                
                <Modal visible={this.state.showModal}
                   transparent={true}
                   animationType="fade" //slide o fade
                   >
                   <View style={styles.modalContainer}> 
                       <View style={styles.modal}>
                       { this.state.selectedItem && 
                       <>
                           <Image style={styles.imageModal} source={{uri: this.state.selectedItem.picture.thumbnail}} />
                           <Text style={styles.modalText}> 
                               {this.state.selectedItem && this.state.selectedItem.name.first}
                           </Text> 
                           <Text style={styles.modalText}> 
                               {this.state.selectedItem && this.state.selectedItem.name.last}
                           </Text>
                           </> 
                       }
                           <Text style={styles.closeButtonModal} 
                               onPress={() => this.setState({showModal: false})}> 
                               X 
                           </Text>
                       </View>
                   </View>
                </Modal>
            </View>
        )
    }
 }

 const styles = StyleSheet.create({
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
         borderButtonWidth: 1,
         borderButtonColor: 'black'
     }

 })