import React from 'react';
import { View,StyleSheet,Text,FlatList,TouchableOpacity } from 'react-native';
import ResultDetail from '../components/ResultDetail';
import {withNavigation} from 'react-navigation';
const ResultList=({title,result,navigation})=>{
    if(!result.length){
        return null;
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={result}
                keyExtractor={(result)=> result.id}
                renderItem={({item})=>{
                    return (
                        <TouchableOpacity onPress={()=>navigation.navigate("ResultShow",{id:item.id})}>
                            <ResultDetail result={item}/>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles= StyleSheet.create({
    container: {
        marginBottom:10
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5,
        marginTop:8
    }
});

export default withNavigation(ResultList);