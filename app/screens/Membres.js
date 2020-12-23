import React from 'react';
import {
 SafeAreaView,
 StyleSheet,
 View,
 Text,
 TouchableOpacity,
 ImageBackground,
 Image,
 FlatList,
 ScrollView
} from 'react-native'
import { Icon } from 'react-native-elements'


import Colors from '../config/Colors';
import user from '../helpers/userData'

export default class Membres extends React.Component{
    render(){
        //const {navigate} = this.props.navigation
        return(
            <SafeAreaView style={styles.members__container}>
                <FlatList
                    data={user}
                    keyExtractor={(item) => item.id.toString()}

                    renderItem={({item}) => (
                        <ScrollView vertical={true} 
                        showsVerticalScrollIndicator={false}
                        > 
                            <View  style={styles.main_container}>
                                <TouchableOpacity style={styles.member__block}>
                                    <View style={styles.textStyle}>
                                        <Text style={{ fontSize:18}}>{item.username}</Text>
                                        <Text style={{ fontSize:15, color:Colors.primary}}>{item.town}</Text>
                                        <Text style={{ fontSize:18, color:Colors.primary, marginTop:10}}>{item.work}</Text>
                                    </View>
                                    <View style={styles.imageContainer}>
                                        <Image
                                        style={styles.image}
                                        source={require('../assets/images/vr.jpg')}
                                        />
                                    </View>
                                    <View style={styles.iconContainer}>
                                        <Icon
                                        reverse
                                        reverseColor= {Colors.gray03}
                                        name='comments'
                                        type='font-awesome'
                                        color={Colors.gray01}
                                        onPress={() => console.log('hello')} />
                                    </View>
                                </TouchableOpacity >
                            </View>
                        </ScrollView>
    
                    )}
                />
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    members__container:{
        flex:1,
        marginLeft:10,
        marginRight:10,
        marginTop:10
    },

    main_container: {
        height: 110,
        //flexDirection: 'row' 
    },


    member__block:{
        width:'100%',
        height: 100,
        backgroundColor:Colors.gray02,
        borderRadius:10,
        
    },

    textStyle:{
        marginLeft:10,
        paddingTop:10
    },

    imageContainer: {
        alignSelf: 'flex-end',
        position:'absolute',
        paddingTop:12,
        paddingRight:60,
        

    },

    imageContainer: {
        alignSelf: 'flex-end',
        position:'absolute',
        paddingTop:12,
        paddingRight:60,
        

    },


    image: {
        width: 70,
        height: 70,
        borderRadius: 80,
    },

    iconContainer:{
        alignSelf: 'flex-end',
        position:'absolute',
        paddingTop:12,
    },

})
