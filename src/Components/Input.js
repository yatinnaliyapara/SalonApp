import React from "react";
import { View, Text, StyleSheet, Pressable, TextInput, Image } from "react-native";
import colors from "../utils/colors";
import fonts from "../utils/fonts";
import images from "../utils/images";
import * as Svgs from "../assets/Svg/svgs"


const Input = ({
    inputContainerStyle,
    placeholder,
    defaultValue,
    value,
    leftIcon,
    keyboardType,
    rightIcon,
    label,
    maxLength,
    nol,
    multiline,
    labelStyle
}) => {


    const Svgleft = Svgs[leftIcon];
    return (
        <>

            <View style={{ flexDirection: "column", flex: 1, marginVertical: 10, width: '100%', height: 'auto' }}>

                <Text style={[styles.label,{...labelStyle}]}>{label}</Text>
                <View style={[styles.inputView, { ...inputContainerStyle }]}>
                    {leftIcon && <Svgleft width={20} height={20} />}
                    <TextInput
                        defaultValue={defaultValue}
                        value={value}
                        style={styles.textInput}
                        placeholder={placeholder}
                        keyboardType={keyboardType}
                        placeholderTextColor={colors.black}
                        maxLength={maxLength}
                        multiline={multiline}
                        numberOfLines={nol}

                    />
                </View>
            </View>
        </>
    )

}

const styles = StyleSheet.create({
    inputView: {
        flexDirection: 'row',
        width: '100%',
        height: 55,
        borderRadius: 8,
        backgroundColor: colors.white,
        borderWidth: 1,
        paddingHorizontal: 10,
        borderColor: colors.yellow_dark,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,

    },
    textInput: {
        flex: 1,
        fontFamily: fonts.regular,
        color: '#000',
        marginLeft: 5,

    },
    label: {
        fontSize: 15,
        fontFamily: fonts.regular,
        color: colors.black,
        paddingLeft: 5,
        marginBottom: 3
    },
})

export default Input;