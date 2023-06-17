import React, { useState } from "react";
import { TextInput, View, StyleSheet, Button, ImageBackground, ActivityIndicator, StatusBar } from "react-native";

const image = require('../assets/pic.jpg');

const Initial = (props)=>{
    //Initialization
    const [userInfo, setUserInfo] = useState({
        username:'',
        password:''
    });
    const [newUserInfo, setNewUserInfo] = useState({
        username:'',
        password:'',
        confirmPassword:'',
        fullName:'',
        mobile:''
    });

    //Updating Variables
    const UpdateUserInfo = (vals) =>{
        setUserInfo({
            ...userInfo,
            ...vals
        });
        setNewUserInfo({
            ...newUserInfo,
            ...vals
        })
    };
    const UpdateNewUserInfo = (vals) =>{
        setNewUserInfo({
            ...newUserInfo,
            ...vals
        });
    };

    //Functions
    const checkValidUser=(props)=>{
        console.log(userInfo);
        return props.callback(1,{username:'tzzzzn',fullName:'Tharun Vangala'});
    };

    //Logs
    // console.log(userInfo);
    // console.log(newUserInfo);
    // console.log(props);

    return <ImageBackground style={styles.img} source={image}>
        <StatusBar barStyle="light-content" />
        {/* <ActivityIndicator animating={true} color="white" size="large" />  use this for while login and signup*/}
        <TextInput style={styles.input} placeholder="User Name" onChangeText={(val)=>UpdateUserInfo({'username':val})}></TextInput>
        <TextInput style={styles.input} placeholder="Password" onChangeText={(val)=>UpdateUserInfo({'password':val})}></TextInput>
        <Button title="Login" onPress={()=> checkValidUser(props)}/>
        {/* <MainPage/> */}
        <TextInput style={styles.input} placeholder="Confirm Password" onChangeText={(val)=>UpdateNewUserInfo({'confirmPassword':val})}></TextInput>
        <TextInput style={styles.input} placeholder="Full Name" onChangeText={(val)=>UpdateNewUserInfo({'fullName':val})}></TextInput>
        <TextInput style={styles.input} placeholder="Mobile" onChangeText={(val)=>UpdateNewUserInfo({'mobile':val})}></TextInput>
        <Button title="Sign up" />
    </ImageBackground>
}

const styles = StyleSheet.create({
    main:{
        alignContent:'center'
    },
    input:{
        alignContent:'center',
        padding:5,
        alignSelf:'center'
    },
    img:{
        flex: 1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    }
})

export default Initial; 