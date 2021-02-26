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
import complaints from '../helpers/complaintsData'

export default class Plaintes extends React.Component{
    render(){
        
        return(
            <SafeAreaView style={styles.complaints__container}>
                <FlatList
                    data={complaints}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <ScrollView vertical={true} 
                        showsVerticalScrollIndicator={false}
                        >
                            <View style={{flex:1,flexDirection:'row',width:'100%', height:50, borderBottomWidth:1, borderBottomColor: Colors.gray03, }}>
                                <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
                                    <View style={{width:'40%', height:15, backgroundColor: Colors.secondary, borderRadius:25 }}/>
                                </View>
                                <View style={{ flex:6, justifyContent:'center'}}>
                                    <Text style={{fontSize:20, fontWeight:'bold'}}>Femme battue</Text>
                                </View>
                                <View style={{ flex:3, justifyContent:'center', alignItems:'flex-end'}}>
                                    <Text style={{fontSize:18}}>Traitée</Text>
                                </View>
                            </View>
                            
                            <View style={{flex:1,flexDirection:'row',width:'100%', height:50, borderBottomWidth:1, borderBottomColor: Colors.gray03, }}>
                                <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
                                    <View style={{width:'40%', height:15, backgroundColor: Colors.secondary, borderRadius:25 }}/>
                                </View>
                                <View style={{ flex:6, justifyContent:'center'}}>
                                    <Text style={{fontSize:20, fontWeight:'bold'}}>Femme violée</Text>
                                </View>
                                <View style={{ flex:3, justifyContent:'center', alignItems:'flex-end'}}>
                                    <Text style={{fontSize:18}}>En cours</Text>
                                </View>
                            </View>

                            <View style={{flex:1,flexDirection:'row',width:'100%', height:50, borderBottomWidth:1, borderBottomColor: Colors.gray03, }}>
                                <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
                                    <View style={{width:'40%', height:15, backgroundColor: Colors.secondary, borderRadius:25 }}/>
                                </View>
                                <View style={{ flex:6, justifyContent:'center'}}>
                                    <Text style={{fontSize:20, fontWeight:'bold'}}>Sac volé</Text>
                                </View>
                                <View style={{ flex:3, justifyContent:'center', alignItems:'flex-end'}}>
                                    <Text style={{fontSize:18}}>Rejetée</Text>
                                </View>
                            </View>

                            <View style={{flex:1,flexDirection:'row',width:'100%', height:50, borderBottomWidth:1, borderBottomColor: Colors.gray03, }}>
                                <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
                                    <View style={{width:'40%', height:15, backgroundColor: Colors.secondary, borderRadius:25 }}/>
                                </View>
                                <View style={{ flex:6, justifyContent:'center'}}>
                                    <Text style={{fontSize:20, fontWeight:'bold'}}>Agressée</Text>
                                </View>
                                <View style={{ flex:3, justifyContent:'center', alignItems:'flex-end'}}>
                                    <Text style={{fontSize:18}}>En cours</Text>
                                </View>
                            </View>      
                            <View style={{flex:1,flexDirection:'row',width:'100%', height:50, borderBottomWidth:1, borderBottomColor: Colors.gray03, }}>
                                <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
                                    <View style={{width:'40%', height:15, backgroundColor: Colors.secondary, borderRadius:25 }}/>
                                </View>
                                <View style={{ flex:6, justifyContent:'center'}}>
                                    <Text style={{fontSize:20, fontWeight:'bold'}}>Harcelée</Text>
                                </View>
                                <View style={{ flex:3, justifyContent:'center', alignItems:'flex-end'}}>
                                    <Text style={{fontSize:18}}>En cours</Text>
                                </View>
                            </View>      
                                  
                         </ScrollView>    
                    )}
                />
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    complaints__container:{
        flex:1,
        marginLeft:10,
        marginRight:10,
        marginTop:10
    },

    // text: { 
    //     flex:10,       
    //     width:'90%',
    //     height:50,
    //     //flexDirection:'row',
    //     //backgroundColor:'red',
    //     justifyContent: 'space-around'
    // },
})
