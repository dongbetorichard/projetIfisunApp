import React from 'react'
import {
    SafeAreaView,
    StyleSheet, 
    View, 
    Text, 
    TextInput, 
    Button, 
    TouchableOpacity,
    Image, 
    ImageBackground
    } from 'react-native'
import { Icon } from 'react-native-elements'

import Colors from '../config/Colors'



export default class Commissariats extends React.Component {
    render(){
        return(
            <SafeAreaView>
                <View style={styles.main_container}>
                    <ImageBackground 
                            style={styles.image}
                            source={require('../assets/images/maps.jpg')}/>
                    <View style={styles.info_maps}>
                        <Text style={{ color:'white'}}>Information sur destinataire sélectionné </Text>
                    </View>
                    <View style={{flexDirection:'row', paddingTop:50}}>
                        <View style={{marginLeft:15}} >
                            <Icon
                                reverse
                                reverseColor= 'white'
                                name='done'
                                type='material'
                                color= 'red'
                                onPress={ () => console.log('Trouver')} 
                            />
                        </View>
                        <View>
                            <Text style={{ fontWeight:'bold', paddingTop:25}}>Commissariats de Ville 3</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',width:'100%', height:60, top:100}} >
                        <View style={{width:'50%', height:60, backgroundColor: Colors.numberContainer, borderWidth:1, borderColor: Colors.secondary, borderRadius: 10, alignItems:'center', justifyContent:'center', }}>
                            <Text style={{fontWeight:'bold'}}>(00229) 91 61 01 01</Text>
                        </View>
                        <View style={{marginLeft:60}}>
                            <Icon
                                reverse
                                reverseColor= 'white'
                                name='comments'
                                type='font-awesome'
                                color={Colors.secondary}
                                onPress={() => console.log('hello')}
                            />
                        </View>
                        <View>
                            <Icon
                                reverse
                                reverseColor= 'white'
                                name='phone'
                                type='font-awesome'
                                color={Colors.secondary}
                                onPress={() => console.log('hello')} 
                            />
                        </View>
                        

    

                    </View>
                </View>

            </SafeAreaView>

        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex:1,
        marginLeft:10,
        marginRight:10,
        marginTop:10
    },

    image: {
        width: '100%',
        height: 400,
        borderRadius: 10,
        backgroundColor: Colors.gray03,
    },

    info_maps: {
        width:'100%',
        height:75,
        backgroundColor: Colors.secondary,
        borderTopLeftRadius:35,
        borderTopRightRadius:35,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top: 370,
    },
})
