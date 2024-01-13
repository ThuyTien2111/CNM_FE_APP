import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

import { setUser, setUserList } from "../Redux/Action";
import { useDispatch, useSelector } from 'react-redux';
export default function Home({ navigation }) {
    //redux
    var dispatch = useDispatch()
    var { user, userList } = useSelector((state) => state.zalochat)

    return (
        <View style={styles.container}>
            <View style={styles.input}>
                <AntDesign name="search1" size={24} color="white" style={styles.searchIcon} />
                <TouchableOpacity>
                    <Text style={styles.inputText}>Tìm kiếm.. </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={user.mess}
                keyExtractor={(item) => item.from}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <View style={styles.mess}>
                            <Image style={styles.logo} source={{ uri: item.avt }} />
                            <View style={styles.messContent}>
                                <Text style={styles.title}>{item.from}</Text>
                                <Text style={styles.messText}>{item.message}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                )}
            />


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchIcon: {
        alignSelf: 'center',
        marginLeft: 20,
    },
    logo: {
        height: 84,
        width: 80,
    },
    messContent: {
        marginLeft: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#B7B7B7',
        width: 320,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 10,
    },
    messText: {
        fontSize: 20,
        fontWeight: '400',
    },
    input: {
        width: 445,
        height: 70,
        flexDirection: 'row',
        backgroundColor: '#408BF8',
    },
    mess: {
        flexDirection: 'row',
        padding: 10
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
        color: '#ffffffa0',
        marginTop: 20,
        marginLeft: 30,
        fontSize: 24,
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
