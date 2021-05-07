import React,{useState,useEffect} from 'react';
import { View,StyleSheet,FlatList,Image } from 'react-native';
import yelp from '../api/yelp'

const ResultShowScreen=({navigation})=>{
    const id=navigation.getParam('id');
    const [result,setResult]=useState(null)

    const getResult= async (id)=>{
        const response=await yelp.get(`/${id}`);
        setResult(response.data)
    };

    useEffect(()=>{
        getResult(id)
    },[]);

    if(!result){
        return null;
    }
    return(
        <>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={result.photos}
                keyExtractor={(photo)=>photo}
                renderItem={({item})=>{
                    return <Image style={styles.image} source={{uri:item}} />
                }}
            />
        </>
    );
};

const styles = StyleSheet.create({
    image:{
        height:200,
        width:300,
        marginVertical:20,
        marginLeft:10
    }
});

export default ResultShowScreen;