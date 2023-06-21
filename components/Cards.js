import React from "react";
import { ScrollView, View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";

const image = require("../assets/pic.jpg")
const Cards = (props) => {
    console.log(props);
    return <View style={styles.view1}>
        <View style={styles.view2}>
            <View>
                <Text style={styles.text1}>Name of the Club : {props.name}</Text>
                <Text style={styles.text1}>Location : {props.location}</Text>
            </View>
            <TouchableOpacity style={styles.Join}>
                <Text  style={{color:'white', 'fontWeight':'bold'}}>Join</Text>
            </TouchableOpacity>
        </View>
        <View>
            <Text>Description</Text>
            <Text>{props.description}</Text>
        </View>
    </View>
};
const styles = StyleSheet.create({
    view1:{
        borderWidth:1,
        margin:10,
        height:220,
        borderRadius:20,
        alignContent:'stretch',
        borderColor:'#D6D7DA',
        flex:1
    },
    view2:{
        flexDirection:'row',
        justifyContent:'space-between',
        // borderWidth:2,
        paddingHorizontal:20
    },
    text1:{
        fontWeight:'bold'
    },
    Join:{
        backgroundColor:'green',
        alignItems:'center',
        margin:5,
        width:70,
        padding:5,
        borderRadius:20
    }
});
export default Cards;