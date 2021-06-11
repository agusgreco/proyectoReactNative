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

 export class Screen_Flatlist extends Component {
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
         <View style={styles.container}> 
            <TouchableOpacity onPress={ () => this.showModal(item)}> 
            <View style={styles.card}> 
                <Image style={styles.image} source={{uri: item.picture.thumbnail}}/> 
                <Text style={styles.texto}> {item.name.last}, {item.name.first} </Text>
            </View>
            </TouchableOpacity>

            {/* <Text>Valor: {this.props.route.params.valor}</Text> */}
            
            {/* <Text style={styles.texto}
                  onPress={ () => this.props.navigation.goBack()}
            >GO BACK</Text>
            <Text style={styles.texto}
              onPress={ () => this.props.navigation.navigate('Screen Import')}
            >SCREEN IMPORT</Text>
            <Text style={styles.texto}
              onPress={ () => this.props.navigation.navigate('Screen View Imported Cards')}
            >VIEW IMPORTED CARDS</Text> */}
         </View>

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
                            size={60}/>

                        :<FlatList
                            data={this.state.users}
                            keyExtractor={this.keyExtractor}
                            renderItem={this.renderItem}
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
