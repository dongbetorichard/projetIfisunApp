import React from 'react'
import { SafeAreaView, StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

import Colors from '../config/Colors'


export default class Signaler extends React.Component {
    render() {
        return(
            <SafeAreaView>
                <View >
                    <View style={styles.textinput_container}>
                        <TextInput style={styles.textinput_email} placeholder="De quel acte de violence s'agit-il?"  />
                        <TextInput  style={styles.textinput_password} placeholder="Nom de la victime" />
                        <TextInput  
                            style={styles.textinput_description} 
                            placeholder="Expliquez un peu le problème "
                            multiline={true}
                            numberOfLines={5}
                             />
                    </View>
                    <View style={styles.ajouterContainer}>
                        <View style={styles.add__video}>
                            <View style={styles.ajouter}>
                                <TouchableOpacity style={styles.button}>
                                        <Icon
                                        reverse
                                        reverseColor= 'black'
                                        name='video'
                                        type='foundation'
                                        color={Colors.gray01}
                                        onPress={() => console.log('hello')} />
                                    </TouchableOpacity>
                                    <Text style={styles.text}> Ajouter une video </Text>
                            </View>
                        </View>

                        <View style={styles.add__photo}>
                            <View style={styles.ajouter}>
                                <TouchableOpacity style={styles.button}>
                                        <Icon
                                        reverse
                                        reverseColor= 'black'
                                        name='camera'
                                        type='foundation'
                                        color={Colors.gray01}
                                        onPress={() => console.log('hello')} />
                                </TouchableOpacity>
                                <Text style={styles.text}> Ajouter une ou des photos </Text>
                            </View>
                        </View>

                        <View style={styles.add__audio}>
                            <View style={styles.ajouter}>
                                <TouchableOpacity style={styles.button}>
                                        <Icon
                                        reverse
                                        reverseColor= 'black'
                                        name='microphone'
                                        type='foundation'
                                        color={Colors.gray01}
                                        onPress={() => console.log('hello')} />
                                    </TouchableOpacity>
                                    <Text style={styles.text}> Ajouter une note vocale </Text>
                            </View>
                        </View>
                    </View>

                    <View>
                    <TouchableOpacity style={styles.signIn_button} >
                        <Text style={{color: Colors.secondary}}>Signaler pour Assistance</Text>
                    </TouchableOpacity>
                </View>

                </View>
            </SafeAreaView>
          )
    }
}

const styles = StyleSheet.create({
    main_container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
      fontFamily: 'inter',
    },
  
    text_signIn: {
        fontSize: 30,
        textAlign: 'center',
        
    },

    textinput_container: {

    },
  
    textinput_email: {
        backgroundColor: Colors.grey,
        fontSize: 16,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.greyBorder,
        paddingHorizontal: 15

    },
  
    textinput_password: {
        backgroundColor: Colors.grey,
        fontSize: 16,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.greyBorder,
        paddingHorizontal: 15



    },

    textinput_description: {
        //backgroundColor: Colors.gray0,
        fontSize: 16,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.greyBorder,
        paddingHorizontal: 15



    },

    ajouterContainer: {
        flexDirection:'column',
        justifyContent: 'space-between'
    },

    ajouter:{
        flexDirection: 'row'     
    },

    button:{
        
        backgroundColor: Colors.gray01,
        width: '22%',
        height: 90,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,       
    },

    text:{
        alignSelf: 'center',
        color: Colors.gray03,
        fontSize:18,
    },

    add__photo: {
        paddingTop: 5,
    },
    
    add__audio: {
        paddingTop: 5,
    },


  
    signIn_button: {
        borderRadius: 50,
        height: 50,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        marginTop: '5%',
        alignSelf: 'center',
        textAlign: 'center'
    },
  
  })