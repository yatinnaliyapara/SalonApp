import React, { useEffect, useState } from "react";
import { View, SafeAreaView, Pressable, StyleSheet, Text, ScrollView, KeyboardAvoidingView, Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import * as Svg from "../../assets/Svg/svgs"
import { constants } from "../../utils/constants";
import fonts from "../../utils/fonts";
import Input from "../../Components/Input";
import Button from "../../Components/Buttons";
import { register } from "../../redux/commonSlice";
import { useDispatch, useSelector } from "react-redux";
import colors from "../../utils/colors";
import Loader from "../../Components/Loader";


const Signup = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const { userdata, isLoading } = useSelector(state => state.auth);
    const [errors, setErrors] = useState(true);

    const [value, setValue] = useState({
        first_name: '',
        last_name: '',
        mobile_number: '',
        role: 'owner',
    });

    const onRegister = () => {
        let isValid = true;
        if (!value.first_name) {
            console.log("A");
            handleError('please enter firstName', 'first_name'),
                isValid = false;
        }
        if (!value.last_name) {
            console.log("B");
            handleError('please enter lastName', 'last_name'),
                isValid = false;
        }
        if (!value.mobile_number) {
            console.log("C");
            handleError('please enter mobileNumber', 'mobile_number'),
                isValid = false;
        }
        console.log(isValid, value);
        if (isValid) {
            const formData = {
                first_name: value?.first_name,
                last_name: value?.last_name,
                mobile_number: value?.mobile_number,
                role: 'owner'
            }
            console.log("Is Data ::", isValid, formData);
            dispatch(register(formData))
        }
    }
    const handleError = (error, input) => {
        setErrors(prevState => ({ ...prevState, [input]: error }));
    };

    const handleOnChange = (text, input) => {
        setValue({ ...value, [input]: text });
    };

    return (

        <>
            <SafeAreaView style={styles.container}>
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
                        leftIcon={"User"}
                        onFocus={() => handleError(null, 'first_name ')}
                        onChangeText={(text) => handleOnChange(text, 'first_name')}
                        error={errors.first_name}
                    />

                    <Input
                        label={constants?.LastName}
                        placeholder={constants?.LastName}
                        leftIcon={"User"}
                        onFocus={() => handleError(null, 'last_name ')}
                        onChangeText={(text) => handleOnChange(text, 'last_name')}
                        error={errors.last_name}
                    />


                    <Input
                        label={constants?.Phone}
                        placeholder={constants?.Phone}
                        keyboardType={'number-pad'}
                        leftIcon={'Phone'}
                        onFocus={() => handleError(null, 'mobile_number ')}
                        onChangeText={(text) => handleOnChange(text, 'mobile_number')}
                        error={errors.mobile_number}
                    />
                    <View style={styles.divider} />
                </ScrollView>



                <Button
                    innerContainerStyle={{ width: '90%', alignSelf: 'center' }}
                    onPress={onRegister}
                    label={constants?.SignUp} />

                <View style={styles.divider} />

                <Pressable onPress={() => navigation.goBack('')}>
                    <Text style={[{ color: colors.gray, textAlign: "center", marginBottom: 15 }]}>{"Already have an account? "}
                        <Text style={{ color: colors.yellow_dark, fontFamily: fonts.bold }}>{constants?.Login}</Text></Text>
                </Pressable>





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