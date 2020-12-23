import React from 'react'
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native'

import Colors from '../config/Colors'


export default class Connexion extends React.Component {
    render() {
        const {navigate} = this.props.navigation
        return(
            <View style={styles.main_container}>
                <Text style={styles.text_signIn}>Connexion</Text>
                <View style={styles.textinput_container}>
                    <TextInput style={styles.textinput_email} placeholder='Email' keyboardType='email-address' />
                    <TextInput secureTextEntry={true} style={styles.textinput_password} placeholder='Mot de passe' />
                </View>
                <View>
                    <TouchableOpacity style={styles.signIn_button} onPress={ () => navigate('Menu')}>
                        <Text style={{color: Colors.secondary}}>Connexion </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.forgotPassWord_button}>
                        <Text> Mot de passse oublié ? </Text>
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
  
    signIn_button: {
        borderRadius: 50,
        height: 50,
        width: '75%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
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