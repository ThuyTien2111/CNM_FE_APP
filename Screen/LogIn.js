import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { TextInput } from 'react-native-paper';

import { setUser, setUserList } from "../Redux/Action";
import { useDispatch, useSelector } from 'react-redux';
export default function LogIn({ navigation }) {
    //redux
    var dispatch = useDispatch()
    var { user, userList } = useSelector((state) => state.zalochat)

    var [phone, setPhone] = useState('');
    var [pass, setPass] = useState('');
    function isFormValid() {
        return (
            phone.trim() !== '' &&
            pass.trim() !== ''
        );
    }
    function handleLogin() {
        var checkU=userList.find((u)=>u.phone==phone && u.pass==pass)
        if(checkU){
            dispatch(setUser(checkU))
            alert('Đăng nhập thành công')
            navigation.navigate('Home')
        }else{
            alert('Vui lòng kiểm tra lại thông tin đăng nhập')
        }
    }
    function handleSignin() {
        navigation.navigate('SignIn')
    }
    // console.log(user)
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('./img/logo.png')} />
            <Text style={styles.title}>Login</Text>
            <View style={styles.input}>
                <MaterialCommunityIcons name="phone-settings-outline" size={24} color="black" style={styles.icon} />                
                <TextInput
                    style={styles.inputText}
                    placeholder="Số điện thoại"
                    placeholderTextColor="black"
                    underlineColor="transparent"
                    theme={{colors:"#fff"}}
                    value={phone}
                    onChangeText={(text) => setPhone(text)} />
            </View>
            <View style={styles.input}>
                <MaterialIcons name="lock-outline" size={24} color="black" style={styles.icon} />
                <TextInput
                    style={styles.inputText}
                    placeholder="Mật khẩu"
                    placeholderTextColor="black"
                    underlineColor="transparent"
                    theme={{colors:"#fff"}}
                    value={pass}
                    onChangeText={(text) => setPass(text)} 
                    secureTextEntry/>
            </View>
            <TouchableOpacity style={isFormValid() ? styles.button : styles.buttonDisabled}
                disabled={!isFormValid()}
                onPress={()=>handleLogin()}>
                <Text style={styles.buttonText}>ĐĂNG NHẬP</Text>
            </TouchableOpacity>

            <View style={styles.bottomTitle}>
                <Text style={styles.bottomText}>Chưa có tài khoản? </Text>
                <TouchableOpacity onPress={()=>handleSignin()}>
                    <Text style={styles.bottomText2}>Đăng ký</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: 64,
        width: 180,
        marginBottom: 15,
    },
    title: {
        height: 50,
        fontSize: 30,
        fontWeight: '700',
        marginBottom: 50,
    },
    input: {
        width: 300,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#0068FF',
        paddingBottom: 10,
        marginBottom: 35,

    },
    bottomTitle: {
        // position: 'absolute',
        // width: 300,
        flexDirection: 'row',
        marginTop: 20
    },
    icon: {
        marginRight: 20
    },
    inputText: {
        height:30,
        width:240
        // paddingRight: 50
    },
    button: {
        // marginTop: 26,
        backgroundColor: '#0068FF',
        borderRadius:15

    },
    buttonDisabled: {
        // marginTop: 26,
        backgroundColor: 'gray',
        borderRadius:15

    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        paddingHorizontal: 50,
        paddingVertical: 10,
    },
    bottomText: {
        fontSize: 16,
        fontWeight: '500'
    },
    bottomText2: {
        fontSize: 16,
        fontWeight: '700',
        color: '#0068FF'
    }
});
