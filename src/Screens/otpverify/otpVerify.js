import React, { useState } from "react";
import { View, Text, SafeAreaView, Dimensions, StyleSheet, Pressable } from "react-native";
import * as Svg from "../../assets/Svg/svgs"
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Button from "../../Components/Buttons";
import { constants } from "../../utils/constants";

const otpVerify = ({ navigation }) => {

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });


    return (
        <>

            <SafeAreaView style={styles.container}>

                <View style={{ padding: 10, paddingVertical: 20 }}>
                    {/* <Pressable
                        onPress={() => navigation.goBack('')}
                        style={styles.header}>
                        <Svg.BackArrow width={30} height={30} />
                        <Text style={styles.forgotTxt}>{"Forgot Password"}</Text>
                    </Pressable> */}

                    <View style={styles.divider} />
                    <Text style={styles.text}>{"Code has been send to +91 986*****99"}</Text>
                </View>



                <View
                    style={{
                        padding: 20,
                    }}>
                    <CodeField
                        ref={ref}
                        {...props}
                        value={value}
                        onChangeText={setValue}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({ index, symbol, isFocused }) => (
                            <Text
                                key={index}
                                style={[styles.cell, isFocused && styles.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        )}
                    />

                    <View style={styles.divider} />

                    <Text style={styles.txt_line}>{'Didn’t get OTP yet?  '}
                        <Text style={[styles.txt_line, { fontFamily: fonts.bold, color: colors.yellow_dark }]}>
                            {'Resend OTP'}
                        </Text></Text>

                </View>



            </SafeAreaView>

            <Button
                innerContainerStyle={{ width: '90%', alignSelf: "center", bottom: 30 }}
                onPress={() => navigation.navigate('SalonOwner')}
                label={constants?.verify} />


        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        color: colors.black,
        fontFamily: fonts.medium,
        fontSize: 18,
        textAlign: "center",
        marginTop: 50,
        marginBottom: 10,
        marginHorizontal: 20,
    },
    divider: {
        marginVertical: 10
    },
    codeFieldRoot: {
        marginTop: 20,
    },
    cell: {
        width: 58,
        height: 57,
        borderRadius: 8,
        textAlign: 'center',
        color: colors.black,
        fontSize: 24,
        padding: 10,
        backgroundColor: '#E4E4E4',
        alignItems: 'center',
    },
    focusCell: {
        borderWidth: 1,
        borderBottomWidth: 4,
        borderBottomColor: colors.yellow_dark,
        borderColor: colors.light_Yellow,
    },
    txt_line: {
        color: colors.black,
        fontSize: 16,
        fontFamily: fonts.medium,
        textAlign: 'center',
    },
})

export default otpVerify;