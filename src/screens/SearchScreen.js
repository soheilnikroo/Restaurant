import React,{useState,useEffect} from 'react';
import { View,Text,StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResult from '../hooks/useResult';
import ResultList from '../components/ResultList';

const SearchScreen=()=>{
    const [term,setTerm]=useState("");
    const [searchApi,result,errorMessage]=useResult();
    const filterResultByPrice=(price)=>{
        return result.filter(result=>{
                return result.price === price;
        })
    }
    return(
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={()=>searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {result.length} results</Text>
            <ResultList result={filterResultByPrice('$')} title="Cost Effective"/>
            <ResultList result={filterResultByPrice('$$')} title="Bit Pricier"/>
            <ResultList result={filterResultByPrice('$$$')} title="Big Spender"/>
        </View>
    )
}

const style = StyleSheet.create({

})

export default SearchScreen;