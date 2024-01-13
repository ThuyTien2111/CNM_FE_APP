import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function SignIn({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('./img/logo.png')} />
            <Text style={styles.title}>Create account</Text>
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
        marginBottom:15,
    },
    title:{
        height: 50,
        fontSize:30,
        fontWeight:'700',
    }
});
