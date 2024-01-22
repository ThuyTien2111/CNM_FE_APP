import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, SectionList, ScrollView, FlatList } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';


import { useState } from 'react';

import { setUser, setUserList, setBestFriend, addNewBestFriend, setSearchUser, addRequest, setRequestSend, removeRequest, setSearchItem, addSearchItem, setRequestEarn, addFriend } from "../Redux/Action";
import { useDispatch, useSelector } from 'react-redux';
import { TextInput } from 'react-native-paper';
export default function Search({ navigation }) {
    //redux
    var dispatch = useDispatch()
    var { user, userList, bestFriend, searchUser, searchItem } = useSelector((state) => state.zalochat)
    var [content, setContent] = useState('all')
    var [type, setType] = useState('all')
    let [search, setSearch] = useState('');
    let checkPhoneNumber = /^\d{10,13}$/.test(search)
    let newFriend = {}
    if (checkPhoneNumber) {
        // Nếu search là một dãy số từ 10 đến 12 số
        let phoneNumber = search;
        newFriend = userList.find((user) => user.phone === phoneNumber) || {};
    }
    let isFriend = user.friend.some((user) => user.phone === search);
    let isReqEarn = user.reqEarn.some((user) => user.phone === search);
    let isReqSend = user.reqSend.some((user) => user.phone === search);
    let isMe = user.phone == search ? true : false;


    // var onlArray = user.friend.filter((f) => f.onl == true)
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
    // var bestFrArray = user.friend.filter((f) => f.bestfr == true)
    // var notBestFrArray = user.friend.filter((f) => f.bestfr == false)
    // var friendArray = convertArrayFormat(notBestFrArray);

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
    function handleAddRequest(fr) {
        dispatch(setSearchUser(fr))
        dispatch(addRequest())
    }
    function handleRemoveReq(fr) {
        let req = {
            name: fr.username,
            avt: fr.avt,
            phone: fr.phone,
        }
        dispatch(setRequestSend(req))
        dispatch(removeRequest())
    }
    function handleAddFriend(fr) {
        let req = {
            name: fr.username,
            avt: fr.avt,
            phone: fr.phone,
        }
        dispatch(setRequestEarn(req))
        dispatch(addFriend())
    }
    function handleAddSearchHistory(text) {
        dispatch(setSearchItem(text))
        dispatch(addSearchItem())
    }
    console.log(search)
    console.log(user.friend)

    const renderFlatItem = ({ item }) => (
        <TouchableOpacity onPress={() => setSearch(item)}>
            <View style={styles.contactContainer}>
                <AntDesign name="search1" size={24} color="gray" style={styles.avatar} />
                <Text style={styles.callText}>{item}</Text>
            </View>
        </TouchableOpacity>

    );
    const renderOnlItem = ({ item }) => (
        <TouchableOpacity>
            <View style={styles.contactContainer}>
                <Image source={{ uri: item.avt }} style={styles.avatar} />
                <Text style={styles.callText}>{truncateString(item.name, 10)}</Text>
                <View style={styles.callContainer3}>
                    <TouchableOpacity style={styles.callButton}>
                        <Feather name="phone-call" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.callButton}>
                        <AntDesign name="videocamera" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.callButton}>
                        <Octicons name="dot-fill" size={24} color="green" />

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
            <View style={styles.input}>
                <TouchableOpacity style={styles.searchIcon} onPress={() => navigation.navigate("Home")}>
                    <AntDesign name="back" size={24} color="white" />
                </TouchableOpacity>
                <View style={styles.inputSearch}>
                    <AntDesign name="search1" size={24} color="gray" style={styles.searchIcon} />
                    <TextInput
                        style={styles.inputText}
                        placeholder="Tìm kiếm"
                        placeholderTextColor="gray"
                        underlineColor="transparent"
                        theme={{ colors: "#fff" }}
                        value={search}
                        onChangeText={(text) => setSearch(text)}
                    />
                </View>
            </View>
            {search == "" &&
                <View>
                    <View style={{ flexDirection: 'row', paddingVertical: 10, paddingLeft: 20 }}>
                        <Text style={styles.bestFrText}>Từ khóa đã tìm</Text>
                    </View>
                    <View>
                        {user.searched.length == 0 &&
                            <View>
                                <Text style={{ alignSelf: 'center', paddingTop: 20 }}></Text>
                            </View>
                        }
                        {user.searched.length != 0 &&
                            <View>
                                <FlatList
                                    data={user.searched.slice(-4)}
                                    keyExtractor={(item) => item}
                                    renderItem={renderFlatItem}
                                />
                            </View>
                        }
                    </View>
                </View>
            }
            {search != "" &&
                <View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={content == 'all' ? styles.activeButton : styles.button}
                            onPress={() => setContent('all')}
                        >
                            <Text style={content == 'all' ? styles.activeText : styles.buttonText}>Tất cả</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={content == 'contact' ? styles.activeButton : styles.button}
                            onPress={() => setContent('contact')}
                        >
                            <Text style={content == 'contact' ? styles.activeText : styles.buttonText}>Liên hệ</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={content == 'message' ? styles.activeButton : styles.button}
                            onPress={() => setContent('message')}
                        >
                            <Text style={content == 'message' ? styles.activeText : styles.buttonText}>Tin nhắn</Text>
                        </TouchableOpacity>
                    </View>
                    {content == "all" &&
                        <View>
                            {checkPhoneNumber == true &&
                                <View>
                                    <View style={{ paddingVertical: 10, paddingLeft: 20 }}>
                                        <Text style={styles.bestFrText}>Tìm kiếm bằng số điện thoại</Text>
                                        {Object.keys(newFriend).length != 0 &&
                                            <View>
                                                <TouchableOpacity onPress={() => handleAddSearchHistory(search)}>
                                                    <View style={styles.contactContainer}>
                                                        <Image source={{ uri: newFriend.avt }} style={styles.avatarImage} />
                                                        <View>
                                                            <Text style={styles.callText}>{truncateString(newFriend.username, 10)}</Text>
                                                            <Text style={styles.findText}>{truncateString(newFriend.phone)}</Text>
                                                        </View>
                                                        {isMe == true &&
                                                            <View style={styles.callContainer3}>
                                                            </View>
                                                        }
                                                        {isFriend == false && isMe == false && isReqEarn == false && isReqSend == false &&
                                                            <View style={styles.callContainer3}>
                                                                <TouchableOpacity onPress={() => handleAddRequest(newFriend)}
                                                                    style={styles.activeFilter}>
                                                                    <Text style={styles.activeFilterText}>Kết bạn</Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                        }
                                                        {isFriend == true &&
                                                            <View style={styles.callContainer3}>
                                                                <TouchableOpacity style={styles.callButton}>
                                                                    <Feather name="phone-call" size={24} color="black" />
                                                                </TouchableOpacity>
                                                                <TouchableOpacity style={styles.callButton}>
                                                                    <AntDesign name="videocamera" size={24} color="black" />
                                                                </TouchableOpacity>
                                                            </View>
                                                        }
                                                        {isReqSend == true &&
                                                            <View style={styles.callContainer3}>
                                                                <TouchableOpacity onPress={() => handleRemoveReq(newFriend)}
                                                                    style={styles.filter}>
                                                                    <Text style={styles.fiendText}>Thu hồi</Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                        }
                                                        {isReqEarn == true &&
                                                            <View style={styles.callContainer3}>
                                                                <TouchableOpacity onPress={() => handleAddFriend(newFriend)}
                                                                    style={styles.activeFilter}>
                                                                    <Text style={styles.activeFilterText}>Chấp nhận</Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                        }




                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        }
                                        {Object.keys(newFriend).length == 0 &&
                                            <View style={styles.alertContainer}>
                                                <Text style={{ paddingTop: 20, textAlign: 'center' }}>
                                                    Số điện thoại chưa đăng ký tài khoản hoặc đã chặn tìm kiếm bằng số điện thoại
                                                </Text>
                                            </View>
                                        }
                                    </View>
                                </View>
                            }
                        </View>
                    }
                </View>
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
    inputSearch: {
        width: 'auto',
        height: 50,
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: "white",
        alignSelf: 'center',
        marginLeft: 20
        // paddingBottom: 10,
        // marginBottom: 25,
    },
    inputText: {
        color: '#ffffffa0',
        fontSize: 24,
        height: 30,
        width: 200,
        alignSelf: 'center'
    },
    buttonContainer: {
        paddingHorizontal: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 10,
    },
    button: {
        // padding:20,
        // width:130,
        paddingVertical: 10,
        paddingHorizontal: 25,
        backgroundColor: 'white',
    },
    activeButton: {
        paddingVertical: 10,
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
        borderWidth: 1,
        borderColor: 'gray',
        marginRight: 20,
    },
    group: {
        padding: 15,
        marginRight: 20,
    },
    activeFilterText: {
        fontWeight: '700',
        fontSize: 16,
        color: "white"
    },
    filterText: {
        fontSize: 16
    },
    contactContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    avatar: {
        // width: 50,
        // height: 50,
        // borderRadius: 25,
        marginRight: 10,
    },
    avatarImage: {
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
        paddingTop: 2,
        paddingBottom: 10
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
    findText: {
        fontSize: 20,
        fontWeight: '500',
        color: "#408BF8"
    },
    callButton: {
        paddingRight: 20
    },
    bestFrIcon: {
        paddingLeft: 10,
        paddingRight: 15,
        paddingBottom: 10
    },
    alertContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        flexWrap: 'wrap',
        width: 280,
    }

});
