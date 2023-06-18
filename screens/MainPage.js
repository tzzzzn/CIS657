import {React, useEffect, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList} from "react-native";

import Cards from "../components/Cards";
import NewCard from "../components/NewCard";
import { readClubData } from "../firebase";

const MainPage = (props) => {
    console.log(props);
    const [editable, setEditable] = useState(false);

    const callback=(vals)=>{
        setEditable(vals);
    }

    const [items,setItems]=useState([]);
    var l = []
    const fun = async() => {
        await readClubData((data)=>{
            for(const key in data){
                l.push(data[key]);
                // setItems(l);
                console.log(data[key]);
            }
        });
    };
    fun();
    console.log(items);
    
    return <View style={Styles.view}>
        <View style={Styles.view1}>
            <TouchableOpacity style={Styles.button}>
                <Text style={{fontWeight:'bold', color:'blue'}}>Search</Text>
            </TouchableOpacity>
            <Text style={Styles.text}>Hi, {props.props.fullName}</Text>
            <TouchableOpacity style={Styles.button} onPress={()=>{return props.callback(0,{username:"",fullName:""})}}>
                <Text style={{fontWeight:'bold', color:'blue'}}>Sign out</Text>
            </TouchableOpacity>
        </View>
        {
            editable===false?<TouchableOpacity style={Styles.view3} onPress={()=>setEditable(true)}>
            <Text style={Styles.text}>+</Text> 
        </TouchableOpacity>: <NewCard fun={callback}/>
        }
        
        <ScrollView>
            {/* {items} */}
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
        padding:5,
        fontWeight:'bold',
        fontSize:18
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