import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from "react-native";

import Constants from 'expo-constants';

import Cards from "../components/Cards";

const MainPage = () => {
    return <View style={Styles.view}>
        <View style={Styles.view1}>
            <TouchableOpacity style={Styles.button}>
                <Text style={{fontWeight:'bold', color:'blue'}}>Search</Text>
            </TouchableOpacity>
            <Text style={Styles.text}>Hi, Full Name</Text>
        </View>
        <TouchableOpacity style={Styles.view3}>
            <Text style={Styles.text}>+</Text>
        </TouchableOpacity>
        <ScrollView>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
        </ScrollView>
    </View>
};

const Styles = StyleSheet.create({
    view:{
        alignitems:'center',
        flex:1,
        // marginTop:Constants.statusBarHeight
    },
    view1:{
        flexDirection:'row',
        borderBottomWidth: 1,
        borderColor:'#D6D7DA',
        marginLeft:10,
        justifyContent:'space-between',
        marginRight:10
    },
    button:{
        padding:5,
        // paddingLeft:10,
        borderColor:'blue',
        borderWidth:2,
        margin:3,
        width:120,
        alignItems:'center',
        borderRadius:10
        // height:
    },
    text:{
        padding:10,
        fontWeight:'bold'
    },
    view3:{
        alignItems:'center',
        borderWidth:2,
        marginHorizontal:10,
        marginVertical:3,
        borderRadius:10
    }
})

export default MainPage;