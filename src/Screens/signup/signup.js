import React from "react";
import { View, SafeAreaView, Pressable, StyleSheet, Text, ScrollView, KeyboardAvoidingView, Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import colors from "../../utils/colors";
import * as Svg from "../../assets/Svg/svgs"
import { constants } from "../../utils/constants";
import fonts from "../../utils/fonts";
import Input from "../../Components/Input";
import Button from "../../Components/Buttons";


const Signup = ({ navigation }) => {
    return (

        <>

            <SafeAreaView style={styles.container}>

                {/* <View style={styles.container}> */}
                
                    {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
                    <ScrollView style={styles.mainContainer}>

                        <Pressable
                            style={styles.back_arrow}
                            onPress={() => navigation.goBack()}>
                            <Svg.BackArrow width={30} height={30} />
                        </Pressable>

                        <View style={styles.divider} />

                        <View style={styles.brandtxt}>
                            <Text style={styles.txt}>{constants?.Create_Account}</Text>
                        </View>



                        <View style={styles.divider} />



                        <Input
                            label={constants?.FirstName}
                            placeholder={constants?.FirstName}
                            leftIcon={"User"} />

                        <Input
                            label={constants?.LastName}
                            placeholder={constants?.LastName}
                            leftIcon={"User"} />


                        <Input
                            label={constants?.Phone}
                            placeholder={constants?.Phone}
                            leftIcon={'Phone'} />


                        <View style={styles.divider} />
                    </ScrollView>

                  

                <Button
                    innerContainerStyle={{ width: '90%', alignSelf: 'center' }}
                    onPress={() => navigation.navigate('otpVerify')}
                    label={constants?.SignUp} />

                <View style={styles.divider} />

                <Pressable onPress={() => navigation.goBack('')}>
                    <Text style={[{ color: colors.gray, textAlign: "center", marginBottom: 15 }]}>{"Already have an account? "}
                        <Text style={{ color: colors.yellow_dark, fontFamily: fonts.bold }}>{constants?.Login}</Text></Text>
                </Pressable>

                {/* </View> */}




            </SafeAreaView>

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
        paddingTop: 20
    },
    divider: {
        marginVertical: 10
    },
    brandtxt: {
        maxWidth: '60%',
        paddingVertical: 20
    },
    txt: {
        color: colors.black,
        fontFamily: fonts.medium,
        fontSize: 35
    },
    mainContainer: {
        paddingHorizontal: 20,
        backgroundColor: colors.white,
        flex: 1
    },
})


export default Signup;