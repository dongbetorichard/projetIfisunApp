import React from 'react'
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native' 

import Colors from '../config/Colors'


export default class Inscription extends React.Component {
    render() {
        const {navigate} = this.props.navigation
        return(
            <View style={styles.main_container}>
                <Text style={styles.text_signin}>Inscription</Text>
                <View style={styles.textinput_container}>
                    <TextInput style={styles.textinput} placeholder='Nom et Prénom(s)' keyboardType= 'default' />
                    <TextInput style={styles.textinput} placeholder='Email' keyboardType='email-address' />
                    <TextInput style={styles.textinput} placeholder='Téléphone' keyboardType='numeric' />
                    <TextInput secureTextEntry={true} style={styles.textinput} placeholder='Mot de passe' />
                </View>
                <View>
                    <TouchableOpacity onPress={ () => navigate('Connexion')} style={styles.register_button} >
                        <Text style={{color: Colors.secondary}}>Inscription</Text>
                    </TouchableOpacity>
                </View>
            </View>
          )
    }
}

const styles = StyleSheet.create({
    main_container: {
      marginTop:20,
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
      fontFamily: 'inter',
    },
  
    text_signin: {
        fontSize: 30,
        textAlign: 'center',
        
    },

    textinput_container: {

    },
  
    textinput: {
        backgroundColor: Colors.grey,
        fontSize: 16,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor:  Colors.greyBorder,
        paddingHorizontal: 15
    },
    
    register_button: {
        borderRadius: 50,
        height: 50,
        width: '75%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffd64c",
        marginTop: '5%',
        alignSelf: 'center',
        textAlign: 'center'
    },

    forgotPassWord_button: {
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1%',
        textAlign: 'center'
        }
  
  })
