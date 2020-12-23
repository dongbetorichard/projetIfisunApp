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
                        <Text style={{marginTop: 45, fontSize: 30, fontWeight: 'bold', alignSelf:'center',}}>Victoria Robertson</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', alignSelf:'center',}}>A mantra goes here</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{paddingTop: 15, }}>
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
                    <View style={{top: 100}}>
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
        height:245,
        alignItems: 'center'
    },

    imageContainer: {
        backgroundColor: Colors.primary,
        position: 'absolute',
        width: 160,
        height: 160,
        borderRadius: 80,
        top: 130,
        alignItems: 'center',
        justifyContent: 'center'
    },

    image: {
        width: 151,
        height: 151,
        borderRadius: 80,
    },

    body: {
        marginLeft: 10,
        marginRight: 10,
        //alignItems: 'center'
    },

    close_button: {
        borderRadius: 50,
        height: 51,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffd64c",
        alignSelf: 'center',
        textAlign: 'center'
    }
  })