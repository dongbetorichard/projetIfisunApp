import React from 'react'
import { 
    StyleSheet, 
    View, 
    Text, 
    TextInput, 
    Button, 
    TouchableOpacity, 
    SafeAreaView, 
    Platform, 
    StatusBar,
    Dimensions,
    Image } from 'react-native';
import { useDimensions} from "@react-native-community/hooks";
import SwitchSelector from "react-native-switch-selector";

import Colors from '../config/Colors'; 


export default class ProfilUtilisateur extends React.Component {
    render() {
        const {navigate} = this.props.navigation
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.imageContainer} onPress={() => console.log('Changer Photo')}>
                        <Image
                            style={styles.image}
                            source={require('../assets/images/vr.jpg')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <View>
                        <Text style={{marginTop: 35, fontSize: 20, fontWeight: 'bold', alignSelf:'center',}}>Victoria Robertson</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', alignSelf:'center',}}>A mantra goes here</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{paddingTop:5,}}>
                        <SwitchSelector
                            initial={0}
                            onPress={value => this.setState({ selectValue  : value })}
                            textColor={Colors.gray03}
                            selectedColor={Colors.primary}
                            buttonColor={Colors.white}
                            fontSize= {15}
                            bold={true}
                            borderColor={Colors.gray03}
                            backgroundColor= {Colors.gray01}
                            hasPadding
                            options={[
                                { label: "Info", value: "f", }, 
                                { label: "Plaintes", value: "m",}
                            ]}
                            />
                    </View>
                    <View style={{ marginLeft:15}}>
                        <Text style={{ marginTop:5, fontWeight:'bold' }}>Nom</Text>
                        <TextInput style={{  borderBottomColor: Colors.greyBorder}} placeholder='Doukpè' placeholderTextColor="black" keyboardType= 'default'
                        />
                        <Text style={{ fontWeight:'bold'}}>Prénom(s)</Text>
                        <TextInput placeholder='Reine' placeholderTextColor="black"  keyboardType= 'default'
                        />
                        <Text style={{ fontWeight:'bold'}} >Date de Naissance</Text>
                        <TextInput placeholder='22-05-00' placeholderTextColor="black"  keyboardType='numeric'
                        />
                        <Text style={{fontWeight:'bold'}}>Profession</Text>
                        <TextInput placeholder='Couturière' placeholderTextColor="black"  keyboardType= 'default'
                        />
                        <Text style={{ fontWeight:'bold'}}>Adresse</Text>
                        <TextInput placeholder='Cotonou' placeholderTextColor="black" keyboardType= 'default'
                        />

                    </View>
                    <View style={{top:5}}>
                        <TouchableOpacity  style={styles.close_button} onPress={ () => navigate('Menu')}>
                            <Text style={{color: Colors.secondary, fontSize:18}} onPress={ () => navigate('Menu')}>Fermer</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
          )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.white,
        //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },

    header: {
        backgroundColor: Colors.secondary,
        width: '100%',
        height:150,
        alignItems: 'center',
        
    },

    imageContainer: {
        backgroundColor: Colors.primary,
        position: 'absolute',
        width: 140,
        height: 140,
        borderRadius: 80,
        top: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },

    image: {
        width: 130,
        height: 130,
        borderRadius: 80,
    },

    body: {
        marginLeft: 15,
        marginRight: 15,
        //alignItems: 'center'
    },

    close_button: {
        borderRadius: 50,
        height: 35,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffd64c",
        alignSelf: 'center',
        textAlign: 'center'
    }
  })