import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

import { setUser, setUserList } from "../Redux/Action";
import { useDispatch, useSelector } from 'react-redux';
export default function Phone({ navigation }) {
    //redux
    var dispatch = useDispatch()
    var { user, userList } = useSelector((state) => state.zalochat)

    return (
        <View style={styles.container}>
            <Text>PHONE</Text>
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
        position: 'absolute',
        width: 300,
        flexDirection: 'row',
        marginTop: 580
    },
    icon: {
        marginRight: 20
    },
    inputText: {
        paddingRight: 50
    },
    button: {
        marginTop: 26,
        backgroundColor: '#0068FF'
    },
    buttonDisabled: {
        marginTop: 26,
        backgroundColor: 'gray'
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
        fontWeight: 500
    },
    bottomText2: {
        fontSize: 16,
        fontWeight: 700,
        color: '#0068FF'
    }
});
