import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { useState, React } from 'react';

import Initial from './screens/Initial';
import MainPage from './screens/MainPage';

export default function App() {
  const [pageNo, setPageNo] = useState(0);
  const [userInfo, setUserInfo] = useState({
    username:"",
    fullName:""
  });

  function setValues(number,user){
    setPageNo(number);
    if(number==1){
      setUserInfo({
        ...userInfo,
        ...user
      });
    }
  }

  // console.log(pageNo);
  // console.log(userInfo);

  return (
    <KeyboardAvoidingView style={styles.container}>
      {pageNo==0?<Initial callback={setValues}/>:<MainPage props={userInfo} callback={setValues}/>}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
