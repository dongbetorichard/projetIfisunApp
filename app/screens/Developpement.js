import { Item } from 'native-base';
import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView, FlatList, ScrollView} from 'react-native'

import Colors from '../config/Colors';
import coursesInfo from '../helpers/coursesData'


export default class Developpement extends React.Component {
    render(){        
        return (
            <SafeAreaView style={styles.main_container}>
                <View >
                    <Text style={{fontSize:24, textAlign:'center', fontWeight:'bold', color: Colors.secondary}}>Trouvez des formations à coup réduit pour les dames !</Text>
                </View>
                <FlatList
                    data={coursesInfo}
                    keyExtractor={(item) => item.id.toString()}

                    renderItem={({item}) => (
                        <ScrollView vertical={true} 
                        showsVerticalScrollIndicator={false}
                        > 
                            <View style={{paddingTop:25}}>
                                <TouchableOpacity style={styles.content__container} onPress={() => {}} >
                                    <Image style={styles.image}
                                        source={{uri: "image"}}
                                    />
                                    <View style={styles.text__Container}>
                                        <View style={styles.partner__Container}>
                                            <Text style={{fontWeight:'bold', fontSize:18}}>{item.title}</Text>
                                        </View>
                                        <View style={styles.description__Container}>
                                            <Text style={styles.description__text} numberOfLines={6}>{item.description} </Text> 
                                        </View>    
                                        <View style={styles.contact__Container}>
                                            <Text style={styles.contact__text}>Contact:{item.phone_number}</Text>
                                        </View>
                                    </View> 
                                </TouchableOpacity>
                            </View>                
                        </ScrollView>
    
                    )}
                />
             

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        marginLeft:10,
        marginRight:10,
    },

    content__container: {
        flexDirection: 'row',
    },


    image: {
        width: '20%',
        height: 80,
        backgroundColor: 'gray',
        borderRadius:10,
    },

    text__Container:{
        paddingLeft:10,
    },

    description__Container:{
        flex:3
    },

    contact__Container:{
        flex:1
    }

})