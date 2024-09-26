import { View, Text, TextInput, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router';
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './../../../configs/firebaseConfig'


export default function SignIn() {
    const router =useRouter();

    // const navigation = useNavigation();

    // useEffect(()=>{
    //     navigation.setOptions({
    //         headerShown:false
    //     })
    // },[])

    const onSignIn=()=>{

      if (!email || !password) {
        console.log("All fields are required");
        return;
      }

      const [email,setEmail]= useState();
      const [password,setPassword]=useState();
      const [fullName,setFullName]=useState();

      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,errorCode);
    if(errorCode=='auth/invalid-credential'){
      console.log("invalid Credentials");
    }
  });

    }

  return (
    <View style={{
        padding:25,
        // marginTop:30,
        backgroundColor:"white",
        height:"100%",
        // paddingTop:30,
    }}>

      <Text style={{
        fontSize:30,
        fontWeight:"bold"
      }}>Lets Sign You In!</Text>

     <Text style={{
        fontSize:30,
        fontWeight:"bold"
      }}>Welcome back!</Text>

       {/* <Text style={{
        fontSize:30,
        fontWeight:"bold"
      }}>Lets Sign You In!</Text> */}

      {/* EMAIL */}

      <View>
        <Text style={{
            marginTop:15
        }}>Email:</Text>
        <TextInput 
        onChangeText={(value)=>setEmail(value)}
        type="email"
        required={true}
        style={styles.input}
        placeholder="Enter Email">
        </TextInput>
      </View>

      {/* PASSWORD */}

      <View>
        <Text style={{
            marginTop:20
        }}>Password:</Text>
        <TextInput 
        onChangeText={(value)=>setPassword(value)}
        secureTextEntry={ true }
        required={true}
        style={styles.input}
        placeholder="Enter Password">
        </TextInput>
      </View>

      {/* button */}

      <TouchableOpacity 
      // onPress={onSignIn}
      onPress={()=>router.push('tabs/MainPage')}
      
      style={{
        padding:15,
        backgroundColor:"black",
        borderRadius:15,
        marginTop:30

        }}>
        <Text style={{

            color:"white",
            textAlign:"center"
        }}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={()=>router.replace('auth/sign-up')}
      
      style={{
        padding:15,
        borderRadius:15,
        marginTop:30
        }}>

        <Text style={{
          
            color:"blue",
            textAlign:"center"
        }}>Create Account</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        marginTop:10,
        padding:15,
        borderWidth:1.5,
        borderRadius:20,
        borderColor:"black",

    }
})