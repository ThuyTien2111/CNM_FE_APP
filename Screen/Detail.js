import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity,FlatList, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
export default function Detail({ navigation }) {
    //redux
    var dispatch = useDispatch()
    var { user, userList } = useSelector((state) => state.zalochat)
    function handleSetting() {
        navigation.navigate('Setting')
    }
    console.log(user)
    return (
        <View style={styles.container}>
             <ScrollView>
                    <View style={styles.input}>
                        <AntDesign name="search1" size={24} color="white" style={styles.searchIcon} />
                        <TouchableOpacity onPress={()=>navigation.navigate("Search")}>
                            <Text style={styles.inputText}>Tìm kiếm.. </Text>
                        </TouchableOpacity>
                    <TouchableOpacity onPress={()=>handleSetting()}>
                            <AntDesign name='setting' size={26} color="white" style={styles.searchIcon1} />
                    </TouchableOpacity>
                    </View>
                <View style={styles.detail}>
                        <FontAwesome name="user" size={35} color='#0096FF' style={styles.searchIcon}/> 
                        <Text style={styles.inputText}>{user.username}</Text>
                        <FontAwesome name="user-plus" size={35} color='#0096FF' style={styles.searchIcon2}/> 
                </View>
                <View style={styles.nhac}>
                    <FontAwesome name="music" size={35} color='#0096FF' style={styles.searchIcon}/> 
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.text}>Nhạc chờ Zalo</Text>
                        <Text style={styles.text1}>Đăng ký nhạc nhờ,thể hiện cá tính</Text>
                    </View>
                </View>
                <View style={styles.nhac}>
                    <FontAwesome5 name="wallet" size={35} color='#0096FF' style={styles.searchIcon}/> 
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.text}>Ví QR</Text>
                        <Text style={styles.text1}>Lưu trữ và xuất trình các mã QR qun trọng</Text>
                    </View>
                </View>
                <View style={styles.nhac}>
                    <FontAwesome5 name="cloud" size={35} color='#0096FF' style={styles.searchIcon}/> 
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.text}>Cloud của tôi</Text>
                        <Text style={styles.text1}>50.01 MB/1 GB</Text>
                    </View>
                </View>
                <View style={styles.nhac}>
                    <FontAwesome5 name="chart-pie" size={35} color='#0096FF' style={styles.searchIcon}/> 
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.text}>Dung lượng và dữ liệu</Text>
                        <Text style={styles.text1}>Quản lí dữ liệu Zalo của bạn</Text>
                    </View>
                </View>
                <View style={styles.nhac}>
                    <FontAwesome name="shield" size={35} color='#0096FF' style={styles.searchIcon}/> 
                    <Text style={styles.text2}>Tài khoản và bảo mật</Text>
                </View>
                <View style={styles.nhac}>
                    <FontAwesome5 name="lock" size={35} color='#0096FF' style={styles.searchIcon}/> 
                    <Text style={styles.text2}>Quyền riêng tư</Text>
                </View>
           
             </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical:30

    },
    input: {
        width: 'auto',
        height: 70,
        flexDirection: 'row',
        backgroundColor: '#408BF8',
    },
    inputText: {
        color: 'black',
        marginTop: 20,
        marginLeft: 30,
        fontSize: 24,
    },
    searchIcon: {
        alignSelf: 'center',
        marginLeft: 20,
    },
    searchIcon1: {
        alignSelf: 'center',
        marginLeft: 150,
        marginTop:20
    },
    logo: {
        height: 84,
        width: 80,
    },
   detail:{
       width:440,
       height:100,
        backgroundColor:'#ffffffa0',
       flexDirection:'row',
   },
   searchIcon2: {
    alignSelf: 'center',
    marginLeft: 200,
    marginRight:10
   },
   nhac:{
    width:440,
    height:80,
     backgroundColor:'#ffffffa0',
    flexDirection:'row',
   },
   text:{
       fontSize:20,
       marginTop:20,
       marginLeft:30,
   },
   text1:{
    fontSize:15,
    marginLeft:30,
},
 text2:{
    fontSize:23,
    marginLeft:30,
    marginTop:25}
});