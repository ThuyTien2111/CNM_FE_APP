import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, SectionList, ScrollView, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import { useState } from 'react';

import { setUser, setUserList, setBestFriend, addNewBestFriend, setRequestEarn, setRequestSend, addFriend, removeRequest } from "../Redux/Action";
import { useDispatch, useSelector } from 'react-redux';
export default function Request({ navigation }) {
    //redux
    var dispatch = useDispatch()
    var { user, userList, bestFriend, requestEarn, requestSend } = useSelector((state) => state.zalochat)
    var [content, setContent] = useState('earn')
    var [type, setType] = useState('all')
    var onlArray = user.friend.filter((f) => f.onl == true)

    // console.log(user.friend)
    // Thêm hàm helper để giới hạn độ dài của chuỗi và thêm dấu '...'
    const truncateString = (str, maxLength) => {
        if (str.length > maxLength) {
            return str.slice(0, maxLength) + '...';
        }
        return str;
    };
    //chuyển đổi mảng flat thành section
    function convertArrayFormat(friend2) {
        const friendMap = new Map();

        friend2.forEach((item) => {
            const firstLetter = item.name.charAt(0).toUpperCase();

            if (!friendMap.has(firstLetter)) {
                friendMap.set(firstLetter, []);
            }

            friendMap.get(firstLetter).push({
                name: item.name,
                avt: item.avt,
                onl: item.onl,
            });
        });

        const friend = Array.from(friendMap).map(([title, data]) => ({
            title,
            data,
        }));

        return friend;
    }
    var bestFrArray = user.friend.filter((f) => f.bestfr == true)
    var notBestFrArray = user.friend.filter((f) => f.bestfr == false)
    var friendArray = convertArrayFormat(notBestFrArray);

    const renderItem = ({ item }) => (
        <TouchableOpacity>
            <View style={styles.contactContainer}>
                <Image source={{ uri: item.avt }} style={styles.avatar} />
                <Text style={styles.callText}>{truncateString(item.name, 10)}</Text>
                <View style={styles.callContainer}>
                    <TouchableOpacity style={styles.callButton}>
                        <Feather name="phone-call" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.callButton}>
                        <AntDesign name="videocamera" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.callButton}
                        onPress={() => handleBestFr(item)}>
                        {item.bestfr == true ? <AntDesign name="star" size={24} color="gold" /> :
                            <AntDesign name="staro" size={24} color="black" />}
                    </TouchableOpacity>
                </View>

            </View>
        </TouchableOpacity>

    );
    function handleBestFr(fr) {
        dispatch(setBestFriend(fr))
        dispatch(addNewBestFriend())
    }
    function handleRemoveReq(req){
        dispatch(setRequestSend(req))
        dispatch(removeRequest())
    }
    function handleAddFr(req){
        dispatch(setRequestEarn(req))
        dispatch(addFriend())
    }
    // console.log(requestSend)
    const renderFlatItem = ({ item }) => (
        <TouchableOpacity>
            <View style={styles.contactContainer}>
                <Image source={{ uri: item.avt }} style={styles.avatar} />
                <Text style={styles.callText}>{truncateString(item.name, 10)}</Text>
                <View style={styles.callContainer}>
                    <TouchableOpacity onPress={()=>handleAddFr(item)}
                     style={styles.activeFilter}>
                        <Text style={styles.activeFilterText}>Chấp nhận</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </TouchableOpacity>

    );
    const renderFlatItem2 = ({ item }) => (
        <TouchableOpacity>
            <View style={styles.contactContainer}>
                <Image source={{ uri: item.avt }} style={styles.avatar} />
                <Text style={styles.callText}>{truncateString(item.name, 15)}</Text>
                <View style={styles.callContainer2}>
                    <TouchableOpacity onPress={()=>handleRemoveReq(item)} style={styles.filter}>
                        <Text style={styles.filterText}>Thu hồi</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>

    );
    

    const renderSectionHeader = ({ section: { title } }) => (
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{title}</Text>
        </View>
    );
    

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={content == 'earn' ? styles.activeButton : styles.button}
                    onPress={() => setContent('earn')}
                >
                    <Text style={content == 'earn' ? styles.activeText : styles.buttonText}>Đã nhận {user.reqEarn.length}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={content == 'send' ? styles.activeButton : styles.button}
                    onPress={() => setContent('send')}
                >
                    <Text style={content == 'send' ? styles.activeText : styles.buttonText}>Đã gửi {user.reqSend.length}</Text>
                </TouchableOpacity>
            </View>
            {content == "earn" &&
                <ScrollView>
                    {user.reqEarn.length == 0 &&
                        <View>
                            <Text style={{ alignSelf: 'center', paddingTop: 20 }}>Không có lời mời kết bạn nào</Text>
                        </View>
                    }
                    {user.reqEarn.length != 0 &&
                        <View>
                            <FlatList
                                data={user.reqEarn}
                                keyExtractor={(item) => item.name}
                                renderItem={renderFlatItem}
                            />
                        </View>
                    }
                </ScrollView>
            }
            {content == "send" &&
                <ScrollView>
                    {user.reqSend.length == 0 &&
                        <View>
                            <Text style={{ alignSelf: 'center', paddingTop: 20 }}>Không có lời mời kết bạn nào</Text>
                        </View>
                    }
                    {user.reqSend.length != 0 &&
                        <View>
                            <FlatList
                                data={user.reqSend}
                                keyExtractor={(item) => item.name}
                                renderItem={renderFlatItem2}
                            />
                        </View>
                    }
                </ScrollView>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 30
    },
    searchIcon: {
        alignSelf: 'center',
        marginLeft: 20,
    },
    logo: {
        height: 84,
        width: 80,
    },
    input: {
        width: 'auto',
        height: 70,
        flexDirection: 'row',
        backgroundColor: '#408BF8',
    },
    inputText: {
        color: '#ffffffa0',
        marginTop: 20,
        marginLeft: 30,
        fontSize: 24,
    },
    buttonContainer: {
        paddingHorizontal: 10,
        // marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 10,
    },
    button: {
        // padding:20,
        // width:130,
        paddingBottom: 10,
        paddingHorizontal: 25,
        backgroundColor: 'white',
    },
    activeButton: {
        paddingBottom: 10,
        paddingHorizontal: 25,
        backgroundColor: 'white',
        borderBottomWidth: 2,
        borderColor: '#408BF8',
    },
    buttonText: {
        fontSize: 24,
        // fontWeight: 'bold',
        color: 'gray',
    },
    activeText: {
        fontSize: 24,
        fontWeight: '500',
        // color: '#1e40a5',
        alignSelf: 'center'
    },
    friendButton: {
        flexDirection: 'row',
        paddingVertical: 20
    },
    friendContainer: {
        paddingHorizontal: 20
    },
    friendIcon: {
        paddingRight: 20
    },
    fiendText: {
        fontSize: 20,
        fontWeight: '500'
    },
    friendSubTitle: {
        color: 'gray'
    },
    distanceContainer: {
        backgroundColor: '#eeeeee',
        height: 15
    },
    filterButton: {
        flexDirection: 'row',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        paddingHorizontal: 20
    },
    activeFilter: {
        padding: 15,
        borderRadius: 15,
        backgroundColor: '#408BF8',
        marginRight: 20
    },
    filter: {
        padding: 15,
        borderRadius: 15,
        backgroundColor: 'lightgray',
        marginRight: 20,
    },
    group: {
        padding: 15,
        marginRight: 20,
    },
    activeFilterText: {
        fontWeight: '700',
        fontSize: 16,
        color:"white"
    },
    filterText: {
        fontSize: 16,
        fontWeight: '700',
    },
    contactContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    sectionHeader: {
        backgroundColor: '#f0f0f0',
        padding: 10,
    },
    sectionHeaderText: {
        fontWeight: 'bold',
    },
    bestFrText: {
        fontWeight: 'bold',
        fontSize: 16,
        paddingTop: 2
    },
    callContainer: {
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'flex-start',
        marginLeft: 200

    },
    callContainer2: {
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'flex-start',
        marginLeft: 250

    },
    callContainer3: {
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'flex-start',
        marginLeft: 220
    },
    callText: {
        fontSize: 20,
        fontWeight: '500'
    },
    callButton: {
        paddingRight: 20
    },
    bestFrIcon: {
        paddingLeft: 10,
        paddingRight: 15,
        paddingBottom: 10
    },


});
