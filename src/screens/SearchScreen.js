import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen=()=>{
    return(
        <View style={style.search_display}>
            <SearchBar/>
        </View>
    )
}

const style = StyleSheet.create({
    search_display:{
    }
})

export default SearchScreen;