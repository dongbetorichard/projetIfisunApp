import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import Colors from '../config/Colors';

export default class Succes extends React.Component{
    render(){
        //const {navigate} = this.props.navigation

        return(
           
                <View style={styles.main__container}>
                    <TextInput style={styles.textinput} placeholder='Recherche' placeholderTextColor={Colors.gray03}/>
                    <View>
                        <Text style={{fontSize:25, fontWeight:'bold', paddingTop:20, marginLeft:15}}>Réussites Féminines</Text>
                    </View>
                    <View style={{
                        //flex:1,
                        flexDirection:'row',
                        justifyContent:'space-around',
                        paddingTop:10,
                    }}>
                        <View>
                            <TouchableOpacity style={styles.article_content}>
                                <Image style={styles.image} source= {{uri: "image"}}/>
                                <Text>lorem ipsum</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.article_content} >
                                <Image style={styles.image} source= {{uri: "image"}}/>
                                <Text>lorem ipsum</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.article_content}> 
                                <Image style={styles.image} source= {{uri: "image"}}/>
                                <Text>lorem ipsum</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        //flex:1,
                        flexDirection:'row',
                        justifyContent:'space-around'
                    }}>
                        <View>
                            <TouchableOpacity style={styles.article_content}>
                                <Image style={styles.image} source= {{uri: "image"}}/>
                                <Text>lorem ipsum</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.article_content}>
                                <Image style={styles.image} source= {{uri: "image"}}/>
                                <Text>lorem ipsum</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.article_content}>
                                <Image style={styles.image} source= {{uri: "image"}}/>
                                <Text>lorem ipsum</Text>
                            </TouchableOpacity>
                        </View>
                    </View>    
    
                </View>
         
        )
    }
}

const styles = StyleSheet.create({
    main__container:{
        flex:1,
        marginLeft:10,
        marginRight:10,
        marginTop:10
    },


    textinput:{
        width: '100%',
        height:60,
        borderRadius:60,
        borderWidth: 1,
        borderColor: Colors.gray03,
        backgroundColor: Colors.gray01,
        fontSize: 16,
        paddingLeft: 10
    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: Colors.gray03,
    },

    articleItem: {
        flexDirection:'row'
    },

    article_content: {
        height:150
    }


})
