import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, SectionList, ScrollView, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { useState } from 'react';

import { setUser, setUserList, setBestFriend, addNewBestFriend } from "../Redux/Action";
import { useDispatch, useSelector } from 'react-redux';
export default function Phone({ navigation }) {
    //redux
    var dispatch = useDispatch()
    var { user, userList, bestFriend } = useSelector((state) => state.zalochat)
    var [content, setContent] = useState('friend')
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
    var bestFrArray=user.friend.filter((f)=>f.bestfr==true)
    var notBestFrArray=user.friend.filter((f)=>f.bestfr==false)
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
                    onPress={()=>handleBestFr(item)}>
                        {item.bestfr ==true? <AntDesign name="star" size={24} color="gold" />:
                        <AntDesign name="staro" size={24} color="black" />}
                    </TouchableOpacity>
                </View>

            </View>
        </TouchableOpacity>

    );
    function handleBestFr(fr){
        dispatch(setBestFriend(fr))
        dispatch(addNewBestFriend())
    }
    console.log(bestFriend)
    const renderFlatItem = ({ item }) => (
        <TouchableOpacity>
            <View style={styles.contactContainer}>
                <Image source={{ uri: item.avt }} style={styles.avatar} />
                <Text style={styles.callText}>{truncateString(item.name, 15)}</Text>
                <View style={styles.callContainer2}>
                    <TouchableOpacity style={styles.callButton}>
                        <Feather name="phone-call" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.callButton}>
                        <AntDesign name="videocamera" size={24} color="black" />
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
        <ScrollView style={styles.container}>
            <View style={styles.input}>
                <AntDesign name="search1" size={24} color="white" style={styles.searchIcon} />
                <TouchableOpacity>
                    <Text style={styles.inputText}>Tìm kiếm.. </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={content == 'friend' ? styles.activeButton : styles.button}
                    onPress={() => setContent('friend')}
                >
                    <Text style={content == 'friend' ? styles.activeText : styles.buttonText}>Bạn bè</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={content == 'group' ? styles.activeButton : styles.button}
                    onPress={() => setContent('group')}
                >
                    <Text style={content == 'group' ? styles.activeText : styles.buttonText}>Nhóm</Text>
                </TouchableOpacity>
            </View>
            {content == "friend" &&

                <View>
                    <View style={styles.friendContainer}>
                        <TouchableOpacity style={styles.friendButton}>
                            <FontAwesome5 name="user-friends" size={24} color="#408BF8" style={styles.friendIcon} />
                            <Text style={styles.fiendText}>Lời mời kết bạn</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.friendButton}>
                            <MaterialIcons name="contact-phone" size={24} color="#408BF8" style={styles.friendIcon} />
                            <View style={{ marginTop: -10 }}>
                                <Text style={styles.fiendText}>Danh bạ máy</Text>
                                <Text style={styles.friendSubTitle}>Các liên hệ có dùng zalo</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.friendButton}>
                            <FontAwesome5 name="birthday-cake" size={24} color="#408BF8" style={styles.friendIcon} />
                            <View style={{ marginTop: -10 }}>
                                <Text style={styles.fiendText}>Lịch sinh nhật</Text>
                                <Text style={styles.friendSubTitle}>Theo dõi sinh nhật của bạn bè</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.distanceContainer}>
                    </View>
                    <View style={styles.filterButton}>
                        <TouchableOpacity style={type == 'all' ? styles.activeFilter : styles.filter}
                            onPress={() => setType('all')}>
                            <Text style={type == 'all' ? styles.activeFilterText : styles.filterText}>Tất cả {user.friend.length}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={type == 'onl' ? styles.activeFilter : styles.filter}
                            onPress={() => setType('onl')}>
                            <Text style={type == 'onl' ? styles.activeFilterText : styles.filterText}>Mới truy cập {onlArray.length}</Text>
                        </TouchableOpacity>
                    </View>
                    {type == "all" &&
                        <View>
                            {user.friend.length == 0 &&
                                <View>
                                    <Text style={{ alignSelf: 'center', paddingTop: 20 }}>Bạn chưa có bạn bè nào</Text>
                                </View>
                            }
                            {user.friend.length != 0 &&
                                <View>
                                    <View style={{flexDirection:'row'}}>
                                    <AntDesign name="star" size={24} color="gold" style={styles.bestFrIcon} />
                                        <Text style={styles.bestFrText}>Bạn thân</Text>
                                    </View>
                                    <FlatList
                                        data={bestFrArray}
                                        keyExtractor={(item) => item.name}
                                        renderItem={renderItem}
                                    />
                                    <SectionList
                                        sections={friendArray}
                                        keyExtractor={(item, index) => item + index}
                                        renderItem={renderItem}
                                        renderSectionHeader={renderSectionHeader}
                                    />
                                </View>
                            }

                        </View>
                    }
                    {type == "onl" &&
                        <View>
                            {user.friend.length == 0 &&
                                <View>
                                    <Text style={{ alignSelf: 'center', paddingTop: 20 }}>Bạn chưa có bạn bè nào</Text>
                                </View>
                            }
                            {user.friend.length != 0 &&
                                <View>
                                    <FlatList
                                        data={onlArray}
                                        keyExtractor={(item) => item.name}
                                        renderItem={renderFlatItem}
                                    />
                                </View>
                            }
                        </View>
                    }
                </View>


            }
            {content == "group" &&
                <View>
                    <View style={styles.friendContainer}>
                        <TouchableOpacity style={styles.friendButton}>
                            <MaterialIcons name="group-add" size={35} color="#408BF8" style={styles.friendIcon} />
                            <Text style={styles.fiendText}>Tạo nhóm mới</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.distanceContainer}>
                    </View>
                    <View style={styles.filterButton}>
                        <Text style={styles.activeFilterText}>Nhóm đang tham gia ({user.group.length})</Text>
                    </View>
                    {user.group.length == 0 &&
                        <View>
                            <Text style={{ alignSelf: 'center', paddingTop: 20 }}>Bạn chưa tham gia nhóm nào</Text>
                        </View>
                    }
                    {user.group.length != 0 &&
                        <View>
                            <FlatList
                                data={user.group}
                                keyExtractor={(item) => item.name}
                                renderItem={renderFlatItem}
                            />
                        </View>
                    }
                </View>


            }
        </ScrollView>
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
        backgroundColor: '#eeeeee',
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
        fontWeight: '500',
        fontSize: 16
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
        fontSize:16,
        paddingTop:5
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
    callText: {
        fontSize: 20,
        fontWeight: '500'
    },
    callButton: {
        paddingRight: 20
    },
    bestFrIcon:{
        paddingLeft:10,
        paddingRight:15,
        paddingBottom:10
    },


});
