import React, { useState, useEffect } from "react";
import { TextInput, Platform, KeyboardAvoidingView, View, StyleSheet, Button, Image, ImageBackground, ActivityIndicator, StatusBar, TouchableOpacity, Text } from "react-native";

import { initdb, newUser, readData } from "../firebase";

const image = require('../assets/pic.jpg');

const Initial = (props)=>{
    //Initialization
    const [pageNo, setPageNo] = useState(0);
    const [userInfo, setUserInfo] = useState({
        username:'',
        password:''
    });
    const [newUserInfo, setNewUserInfo] = useState({
        username:'',
        password:'',
        fullName:'',
        mobile:''
    });
    const [loginIssue, setLoginIssue] = useState(false);

    //Updating Variables
    const UpdateUserInfo = (vals) =>{
        setUserInfo({
            ...userInfo,
            ...vals
        });
    };
    const UpdateNewUserInfo = (vals) =>{
        setNewUserInfo({
            ...newUserInfo,
            ...vals
        });
    };

    //Functions
    const checkValidUser=async ()=>{
        // console.log(userInfo);
        await readData((data)=>{
            var k = false;
            var fName = "";
            for(key in data){
                if(data[key].username==userInfo.username && data[key].password===userInfo.password)
                {
                    k=true;
                    fName=data[key].fullName;
                    break;
                }
            }
            if(k){
                return props.callback(1,{username:userInfo.username,fullName:fName});
            }
            else{
                UpdateUserInfo({username:'',
                password:''});
                setLoginIssue(true);
                return;
            }
        })
    };
    const registerUser = async () => {
        let k=false;
        if(newUserInfo.username!=="" && newUserInfo.password!=="" &&
        newUserInfo.fullName!=="" && newUserInfo.mobile!=="")
        {
            await readData((data)=>{
                for(key in data){
                    if(data[key].username===newUserInfo.username){
                        k=true;
                        // console.log(data[key].username);
                        break;
                    }
                }
            });
            if(!k){
                newUser(newUserInfo);
                setPageNo(1);
                console.log('entered the data');
            }
            else{
                console.log('Not entered the data');
            }
            
            // var j = []
            // readData((data)=>{console.log(data)});
            // setNewUserInfo({
            //     username:'',
            //     password:'',
            //     fullName:'',
            //     mobile:''
            // });
            
        }
        
        
    };
      

    //Logs
    // console.log(userInfo);
    // console.log(newUserInfo);
    // console.log(props);

    useEffect(() => {
        try {
            initdb();
        } catch (err) {
          console.log(err);
        }
    }, []);

    return <ImageBackground style={styles.img} source={image}>
   
        <StatusBar barStyle="light-content" />
        <View style={{alignItems:'center'}}>
            <Image source={require('../assets/pic1.jpg')}/>
            {pageNo==0?
            <View >
            <TouchableOpacity style={[styles.button,styles.login]} onPress={()=>setPageNo(1)}>
                <Text style={[styles.buttonText,styles.textb]}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,styles.signup]} onPress={()=>setPageNo(2)}>
                <Text style={[styles.buttonText,styles.textb]}>Signup</Text>
            </TouchableOpacity>
            </View>:(pageNo==1?
            <View>
                <TextInput style={styles.input} placeholder="User Name" onChangeText={(val)=>UpdateUserInfo({'username':val})} value={userInfo.username}/>
                <TextInput style={styles.input} placeholder="Password" onChangeText={(val)=>UpdateUserInfo({'password':val})} secureTextEntry value={userInfo.password}></TextInput>
                <TouchableOpacity style={[styles.button,styles.login]} onPress={()=> checkValidUser()}>
                    <Text style={[styles.buttonText,styles.textb]}>Login</Text>
                </TouchableOpacity>
                {loginIssue?<View>
                    <Text style={{color:'red'}}>Check username and password</Text>
                    <TouchableOpacity style={[styles.button,styles.signup]} onPress={()=>setPageNo(2)}>
                        <Text style={[styles.buttonText,styles.textb]}>Signup</Text>
                    </TouchableOpacity>
                </View>:null}
            </View> 
            :
            <View>
                <TextInput style={styles.input} placeholder="User Name" onChangeText={(val)=>UpdateNewUserInfo({'username':val})}></TextInput>
                <TextInput style={styles.input} placeholder="Password" onChangeText={(val)=>UpdateNewUserInfo({'password':val})} secureTextEntry></TextInput>
                <TextInput style={styles.input} placeholder="First Name" onChangeText={(val)=>UpdateNewUserInfo({'fullName':val})}></TextInput>
                <TextInput style={styles.input} placeholder="Mobile" onChangeText={(val)=>UpdateNewUserInfo({'mobile':val})}></TextInput>
                <TouchableOpacity style={[styles.button,styles.signup]} onPress={registerUser}>
                    <Text style={[styles.buttonText,styles.textb]}>Signup</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button,styles.login]} onPress={()=>setPageNo(1)}>
                    <Text style={[styles.buttonText,styles.textb]}>Back to Login</Text>
                </TouchableOpacity>
            </View>)
            }
        </View>
        {/* <ActivityIndicator animating={true} color="white" size="large" />  use this for while login and signup*/}
        
        {/* <MainPage/> */}
    
    </ImageBackground>
}

const styles = StyleSheet.create({
    input:{
        // alignContent:'left',
        padding:10,
        paddingBottom:3,
        // alignSelf:'center',
        fontSize:20,
        borderBottomWidth:2
    },
    button: {
        marginTop: 10,
        width: 200,
        marginBottom: 10,
        borderWidth: 2,
        borderRadius: 3,
        height:50
      },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize:30
      },
    img:{
        flex: 1,
        alignItems:'center'
    },
    login:{
        borderRadius:10,
        backgroundColor:'orange',
        borderColor:'orange'
    },
    signup:{
        borderRadius:10,
        borderColor:'green',
        backgroundColor:'green'
    },
    textb:{
        color:'white'
    }
})

export default Initial; 