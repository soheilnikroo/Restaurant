import React from 'react';
import { View,StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar=({onTermChange,term,onTermSubmit})=>{
    return(
        <View style={styles.background}>
            <TouchableOpacity onPress={onTermSubmit}>
                <Feather style={styles.icon} name="search"></Feather>
            </TouchableOpacity>
            <TextInput 
                autoCapitalize="none" 
                value={term} 
                onChangeText={onTermChange}  
                placeholder="Search" 
                onEndEditing={onTermSubmit}
                style={styles.input} />
        </View>
    );
};

const styles=StyleSheet.create({
    background:{
        backgroundColor:'#F0EEEE',
        borderRadius:5,
        height:50,
        marginHorizontal:15,
        flexDirection:'row',
        marginTop:10,
        marginBottom:10
    },
    input:{
        flex:1,
        fontSize:18
    },
    icon:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15
    }
});

export default SearchBar;