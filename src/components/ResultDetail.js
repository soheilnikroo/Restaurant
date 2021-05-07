import React from 'react';
import { View,Image,StyleSheet,Text } from 'react-native';
const ResultDetail=({result})=>{
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:result.image_url}} />
            <Text style={styles.name}>
                {result.name}
            </Text>
            <Text style={styles.review}>
                {result.rating} Stars, {result.review_count} Reviewers
            </Text>
        </View>
    )
};

const styles =StyleSheet.create({
    container:{
        marginLeft:15,
    },
    image:{
        width:250,
        borderRadius:5,
        height:150,
        marginHorizontal:10,
        marginBottom:5
    },
    name:{
        fontWeight:'bold',
        fontSize:14,
        marginLeft:10
    },
    review:{
        marginLeft:10,
        opacity:0.40
    }
});

export default ResultDetail;