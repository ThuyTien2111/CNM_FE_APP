import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
// import { DatePicker } from 'react-native-date-picker'
import { useState } from 'react';
// import DateTimePicker from '@react-native-community/datetimepicker';
import { DatePickerInput } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";

import { setUser, setUserList } from "../Redux/Action";
import { useDispatch, useSelector } from 'react-redux';
import { TextInput } from 'react-native-paper';
export default function SignIn({ navigation }) {
    //redux
    var dispatch = useDispatch()
    var { user, userList } = useSelector((state) => state.zalochat)

    var [name, setName] = useState('');
    var [phone, setPhone] = useState('');
    var [pass, setPass] = useState('');
    var [passAgain, setPassAgain] = useState('');
    var [date, setDate] = useState(new Date(2006, 0, 1))
    // var [showPicker, setShowPicker] = useState(false)

    function isFormValid() {
        return (
            name.trim() !== '' &&
            phone.trim() !== '' &&
            passAgain.trim() !== '' &&
            pass.trim() !== ''
        );
    }
    function handleSignin() {
        if (userList.find((u) => u.phone == phone)) {
            alert('Số điện thoại đã đăng ký')
        } else {
            dispatch(setUser({
                id: 4,
                username: name,
                phone: phone,
                pass: pass,
                mess: [],
                friend:[],
                group:[],
                birthdate:date
            }))
            dispatch(setUserList())
            navigation.navigate('LogIn')
        }
    }
    function handleLogin() {
        navigation.navigate('LogIn')
    }

    function isPhoneValid() {
        return /^0\d{9,11}$/.test(phone);
    }

    function isPasswordValid() {
        // Kiểm tra mật khẩu phải từ 8 ký tự trở lên và phải chứa ít nhất một chữ số
        return pass.length >= 8 && /\d/.test(pass);
    }
    function isPasswordAgainValid() {
        // Kiểm tra nhập lại mật khẩu phải = mật khẩu
        return pass == passAgain;
    }
    // console.log(userList)
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('./img/logo.png')} />
            <Text style={styles.title}>Create account</Text>
            <View style={styles.input}>
                <FontAwesome name="user-o" size={24} color="black" style={styles.icon} />
                <TextInput
                    style={styles.inputText}
                    placeholder="Tên người dùng"
                    placeholderTextColor="black"
                    underlineColor="transparent"
                    theme={{ colors: "#fff" }}
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
            </View>
            <View style={styles.input}>
                <MaterialCommunityIcons name="phone-settings-outline" size={24} color="black" style={styles.icon} />
                <TextInput
                    style={styles.inputText}
                    placeholder="Số điện thoại"
                    placeholderTextColor="black"
                    underlineColor="transparent"
                    theme={{ colors: "#fff" }}
                    value={phone}
                    onChangeText={(text) => setPhone(text)} />
            </View>
            {!isPhoneValid() && <Text style={styles.errorText}>Số điện thoại phải là đầu số VN hợp lệ</Text>}
            <View style={styles.input}>
                <MaterialIcons name="lock-outline" size={24} color="black" style={styles.icon} />
                <TextInput
                    style={styles.inputText}
                    placeholder="Mật khẩu"
                    placeholderTextColor="black"
                    underlineColor="transparent"
                    theme={{ colors: "#fff" }}
                    value={pass}
                    onChangeText={(text) => setPass(text)}
                    secureTextEntry />
            </View>
            {!isPasswordValid() && <Text style={styles.errorText}>Mật khẩu phải từ 8 ký tự trở lên và chứa ít nhất 1 chữ số</Text>}
            <View style={styles.input}>
                <MaterialIcons name="lock-outline" size={24} color="black" style={styles.icon} />
                <TextInput
                    style={styles.inputText}
                    placeholder="Nhập lại Mật khẩu"
                    placeholderTextColor="black"
                    underlineColor="transparent"
                    theme={{ colors: "#fff" }}
                    value={passAgain}
                    onChangeText={(text) => setPassAgain(text)}
                    secureTextEntry />
            </View>
            {!isPasswordAgainValid() && <Text style={styles.errorText}>Nhập lại mật khẩu phải giống mật khẩu</Text>}
            <View style={styles.inputDate}>
                <SafeAreaProvider>
                    <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center'}}>
                        <DatePickerInput
                            locale="en"
                            label="Ngày sinh"
                            value={date}
                            onChange={(d) => setDate(d)}
                            inputMode="start"
                            mode='outlined'
                            endYear={new Date().getFullYear()-18} //giới hạn độ tuổi
                            activeOutlineColor='#0068FF'
                            outlineColor='#0068FF'
                         />
                    </View>
                </SafeAreaProvider>
            </View>

            <TouchableOpacity style={isFormValid() ? styles.button : styles.buttonDisabled}
                disabled={!isFormValid()} onPress={() => handleSignin()}>
                <Text style={styles.buttonText}>ĐĂNG KÝ TÀI KHOẢN</Text>
            </TouchableOpacity>

            <View style={styles.bottomTitle}>
                <Text style={styles.bottomText}>Đã có tài khoản? </Text>
                <TouchableOpacity onPress={() => handleLogin()}>
                    <Text style={styles.bottomText2}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingVertical: 40,
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
        marginBottom: 25,

    },
    inputDate: {
        width: 300,
        flexDirection: 'row',
        paddingBottom: 10,
        marginBottom: 35,
        paddingTop:15

    },
    bottomTitle: {
        // position: 'absolute',
        // width: 300,
        flexDirection: 'row',
        marginTop: 20
    },
    icon: {
        marginRight: 10
    },
    inputText: {
        height: 30,
        width: 240
        // paddingRight: 50
    },
    button: {
        // marginTop: 20,
        backgroundColor: '#0068FF',
        borderRadius: 15
    },
    buttonDisabled: {
        // marginTop: 20,
        backgroundColor: 'gray',
        borderRadius: 15

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
    },
    errorText: {
        width: 250,
        color: 'red',
        marginLeft: -40,
        marginBottom: 10,
        marginTop: -20,
    },
});
