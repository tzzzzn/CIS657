import {React, useState} from "react";
import { View,Text, Button, TextInput, TouchableOpacity, StyleSheet } from "react-native";

import { newClub } from "../firebase";

const NewCard = (callback) => {
    const [clubInfo, setClubInfo] = useState({
        clubName:"",
        location:"",
        description:""
    });

    const updateClubInfo=(vals)=>{
        setClubInfo({
            ...clubInfo,
            ...vals
        });
    };
    // console.log('are we here');
    const addclub=()=>{
        if(clubInfo.clubName!=="" && clubInfo.location!=="" && clubInfo.description!=="")
        {
            newClub(clubInfo);
            return callback.fun(false);
        }
    };
    const cancelclub=()=>{
        return callback.fun(false);
    };

    return <View style={styles.topview}>
        <View><Text>Club Name</Text></View>
        <View><TextInput placeholder="Enter Club Name" onChangeText={(vals)=>updateClubInfo({'clubName':vals})}/></View>
        <View><Text>Location</Text></View>
        <View><TextInput placeholder="Enter Location" onChangeText={(vals)=>updateClubInfo({'location':vals})}/></View>
        <View><Text>Description</Text></View>
        <View><TextInput placeholder="Enter Description" onChangeText={(vals)=>updateClubInfo({'description':vals})}/></View>
        <View style={styles.lastview}>
            <TouchableOpacity style={[styles.buttons,styles.cancel]} onPress={cancelclub}>
                <Text style={styles.cancel}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttons,styles.add]} onPress={addclub}>
                <Text style={styles.add}>Add</Text>
            </TouchableOpacity>
        </View>
    </View>;
};

const styles = StyleSheet.create({
    topview:{
        borderWidth:1,
        margin:10,
        borderRadius:20,
        padding:10,
        borderColor:'#D6D7DA',
    },
    lastview:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    buttons:{
        borderWidth:3,
        width:100,
        alignItems:'center',
        padding:5,
        margin:10
    },
    cancel:{
        color:'red',
        borderColor:'red',
        fontWeight:'bold',
        fontSize:18
    },
    add:{
        color:'#1567B8',
        borderColor:'#1567B8',
        fontWeight:'bold',
        fontSize:18
    }

});

export default NewCard;