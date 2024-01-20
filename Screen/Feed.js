import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

import { setUser, setUserList } from "../Redux/Action";
import { useDispatch, useSelector } from 'react-redux';
export default function Feed({ navigation }) {
    //redux
    var dispatch = useDispatch()
    var { user, userList } = useSelector((state) => state.zalochat)

    return (
        <View style={styles.container}>
            <Text>FEED</Text>
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
    
});
