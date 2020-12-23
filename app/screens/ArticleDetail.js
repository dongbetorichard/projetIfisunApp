import React from 'react';

import {
    SafeAreaView,
    View,
    Image,
    Text,
    StyleSheet,
    ImageBackground
} from 'react-native';

//import { SafeAreaView } from 'react-navigation';

import Colors from '../config/Colors'


export default class ArticleDetail extends React.Component {
    render(){
        return(
            <SafeAreaView>
                <View style={styles.main_container}>
                    <ImageBackground style={styles.image} source= {{uri: "image"}}/>
                    <View style={styles.text}>
                        <Text style={{fontSize:21, fontWeight:'bold' }}>Titre de l'article</Text>
                        <Text style={{fontSize:18, fontWeight:'bold'}}>Auteur</Text>
                        <Text style={{fontSize:18, justifyContent:'center', paddingTop:10}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
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
        height: 250,
        borderRadius: 10,
        backgroundColor: Colors.gray03,
    },
})
