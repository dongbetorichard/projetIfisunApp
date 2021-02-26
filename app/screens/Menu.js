import React from 'react';
import { StyleSheet,View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import Colors from '../config/Colors';
import { Icon } from 'react-native-elements'

export default class Menu extends React.Component{
    render(){
        const {navigate} = this.props.navigation
        return(
            <SafeAreaView>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/images/logo.png')}
                        />
                </View>
                <View style={styles.container} >
                    
                    <View style={styles.first}>
                        <TouchableOpacity style={styles.button} onPress={ () => navigate('Signaler')}>
                            <Icon
                            reverse
                            reverseColor= 'black'
                            name='bullhorn'
                            type='font-awesome'
                            color={Colors.primary}
                            onPress={ () => navigate('Signaler')} />
                            <Text style={styles.text__button}>Signaler</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => navigate('Assistance')}>
                            <Icon
                            reverse
                            reverseColor= 'black'
                            name='heart'
                            type='font-awesome'
                            color={Colors.primary}
                            onPress={() => navigate('Assistance')} />

                            <Text style={styles.text__button}>Assistance</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => navigate('Temoignage')}>
                            <Icon
                            reverse
                            reverseColor= 'black'
                            name='edit'
                            type='font-awesome'
                            color={Colors.primary}
                            onPress={() => navigate('Temoignage')} />

                            <Text style={styles.text__button}>Témoignage</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.second}>

                        <TouchableOpacity style={styles.button} onPress={ () => navigate('profilUtilisateur')}>
                        <Icon
                        reverse
                        reverseColor= 'black'
                        name='user'
                        type='font-awesome'
                        color={Colors.primary}
                        onPress={ () => navigate('profilUtilisateur')} />

                            <Text style={styles.text__button}>Profil</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button}onPress={ () => navigate('Plaintes')} >
                        <Icon
                        reverse
                        reverseColor= 'black'
                        name='folder-open'
                        type='font-awesome'
                        color={Colors.primary}
                        onPress={ () => navigate('Plaintes')} />

                            <Text style={styles.text__button}>Vos Plaintes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={ () => navigate('Plaintes')}>
                        <Icon
                        reverse
                        reverseColor= 'black'
                        name='comments'
                        type='font-awesome'
                        color={Colors.primary}
                        onPress={ () => navigate('Plaintes')} />

                            <Text style={styles.text__button}>Messagerie</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.tird}>
                        <TouchableOpacity style={styles.button} onPress={ () => navigate('Commissariats')}>
                        <Icon
                        reverse
                        reverseColor= 'black'
                        name='map-marker'
                        type='font-awesome'
                        color={Colors.primary}
                        onPress={ () => navigate('Commissariats')} />

                            <Text style={styles.text__button}>Commissariats</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={ () => navigate('Membres')} >
                            <Icon
                            reverse
                            reverseColor= 'black'
                            name='users'
                            type='font-awesome'
                            color={Colors.primary}
                            onPress={ () => navigate('Membres')} />

                            <Text style={styles.text__button}>Réseauter</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={ () => navigate('Developpement')}>
                            <Icon
                            reverse
                            reverseColor= 'black'
                            name='level-up'
                            type='font-awesome'
                            color={Colors.primary}
                            onPress={ () => navigate('Developpement')} />
                            <Text style={styles.text__button}>Développement</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.four}>
                        <TouchableOpacity style={styles.button} onPress={ () => navigate('Succes')}>
                            <Icon
                            reverse
                            reverseColor= 'black'
                            name='star'
                            type='font-awesome'
                            color={Colors.primary}
                            onPress={ () => navigate('Succes')} />
                            <Text style={styles.text__button}>Succès</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Icon
                            reverse
                            reverseColor= 'black'
                            name='envelope'
                            type='font-awesome'
                            color={Colors.primary}
                            onPress={() => console.log('hello')} />
                            <Text style={styles.text__button}>Votre Avis</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Icon
                            reverse
                            reverseColor= 'black'
                            name='power-off'
                            type='font-awesome'
                            color={Colors.primary}
                            onPress={() => console.log('hello')} />
                            <Text style={styles.text__button}>Quitter</Text>
                        </TouchableOpacity>
                    </View>
                   
                </View>



            </SafeAreaView>
        )
    }
};


const styles = StyleSheet.create ({

    logoContainer:{
        top: 20,
        alignItems:'center'
    },
    
    logo:{
        width: 100,
        height:100,     
    },

    container: {
        top: 50,
    },


    first:{
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',

    },

    second:{
        top: 125,
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',

    },

    tird:{
        top: 250,
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',

    },

    four:{
        top: 375,
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',

    },




    button:{
        backgroundColor: Colors.primary,
        width: '30%',
        height: 100,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',        
    },

    text__button: {
        fontWeight: 'bold',
        fontSize: 14,
    }
})