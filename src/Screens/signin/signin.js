import React from "react";
import { View, SafeAreaView, Pressable, StyleSheet, Text, ScrollView, Image } from "react-native";
import colors from "../../utils/colors";
import * as Svg from "../../assets/Svg/svgs"
import { constants } from "../../utils/constants";
import fonts from "../../utils/fonts";
import Input from "../../Components/Input";
import Button from "../../Components/Buttons";


const Signin = ({ navigation }) => {
    return (

        <>

            <SafeAreaView />

            <View style={styles.container}>
                <ScrollView >

                    <View style={{ width: '100%', paddingLeft: 30, paddingBottom: 30, justifyContent: 'flex-end', height: 300, backgroundColor: colors.yellow_dark }} >
                        <Image source={require('../../assets/Image/b4.png')} resizeMode="contain" style={{ width: 150, height: 150, top: 20, left: -20 }} />
                        <View style={styles.brandtxt}>
                            <Text style={styles.txt}>{constants?.Login_Account}</Text>
                        </View>
                    </View>

                    <View style={styles.mainContainer} >

                        <View style={styles.divider} />

                        <Input
                            label={constants?.Phone}
                            placeholder={constants?.Phone}
                            keyboardType={"number-pad"}
                            maxLength={10}
                            leftIcon={'Phone'} />


                        <View style={styles.divider} />

                        <Button
                            onPress={() => navigation.navigate('otpVerify')}
                            label={constants?.getOtp} />

                        <View style={styles.divider} />

                    </View>

                </ScrollView>

                <Pressable
                    onPress={() => navigation.navigate('Signup')}>
                    <Text style={[{ color: colors.gray, textAlign: "center", fontFamily: fonts.light, marginBottom: 10 }]}>{"Don't have an account? "}
                        <Text style={{ color: colors.yellow_dark, fontFamily: fonts.bold }}>{constants?.SignUp}</Text></Text>
                </Pressable>
            </View>

            <SafeAreaView />

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    back_arrow: {
        width: 70,
        height: 40,
    },
    divider: {
        marginVertical: 10
    },
    brandtxt: {
        maxWidth: '60%',
        // top: 40,

    },
    txt: {
        color: colors.white,
        fontFamily: fonts.medium,
        fontSize: 35
    },
    mainContainer: {
        paddingHorizontal: 15,
        backgroundColor: colors.white,
        marginVertical: 50,

    },
    forgot: {
        color: colors.yellow_dark,
        fontFamily: fonts.semiBold,
        fontSize: 16,
        textAlign: "center",
        paddingHorizontal: 10
    }
})


export default Signin;