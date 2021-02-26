import React from 'react'
import CheckBox from '@react-native-community/checkbox'

import { 
    StyleSheet, 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
} from 'react-native' 

import Colors from '../config/Colors'

// const {toggleCheckBox,setToggleCheckBox} = useState(false);

export default class Inscription extends React.Component {
    render() {

        const {navigate} = this.props.navigation
        return(
            <View style={styles.main_container}>
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
                {/* <View style={styles.checkboxContainer}>
                    <CheckBox
                        style={styles.checkbox}
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={{newValue} => setToggleCheckBox{newValue}}
                    />
                    <Text> Recevoir les mails de Ifisun</Text>
                </View> */}
            </View>
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
        },

    checkboxContainer:{
        flexDirection:'row',
        marginVertical: 30,
        alignItems:'center'
    },
        checkbox: {
            width: 75,
            height: 75,
            marginRight: 20,
        },
  
  })
